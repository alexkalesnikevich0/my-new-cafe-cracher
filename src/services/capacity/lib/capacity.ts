/**
 * ФАЙЛ: services/capacity/lib/capacity.ts
 *
 * ЛОГИКА CAPACITY (PR 6).
 * Заменяет слот-систему на систему вместимости.
 *
 * Правила:
 * - Ресторан имеет TOTAL_CAPACITY мест (сумма всех столов).
 * - Каждая бронь отнимает `guests` мест.
 * - Бронь длится `duration` минут (по умолчанию 120 = 2 часа).
 * - Брони пересекаются по времени (overlap).
 * - Если сумма занятых + новые > TOTAL → отказ.
 */

import prisma from './../../../app/booking/lib/prisma'

import type { Booking } from '@prisma/client'

// ============================================================
// КОНСТАНТЫ
// ============================================================

/** Вместимость одного стандартного стола (fallback) */
const DEFAULT_TABLE_CAPACITY = 40

/** Длительность брони по умолчанию (в минутах) */
export const DEFAULT_DURATION = 120

// ============================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================

/**
 * ПРЕОБРАЗУЕТ ВРЕМЯ "HH:MM" В МИНУТЫ ОТ НАЧАЛА ДНЯ
 *
 * @example
 * toMinutes("19:00") // 1140 (19 * 60)
 * toMinutes("10:30") // 630 (10 * 60 + 30)
 *
 * @param time — строка времени в формате "HH:MM"
 * @returns количество минут от 00:00
 */
export function toMinutes(time: string): number {
	const [hours, minutes] = time.split(':').map(Number)
	return hours * 60 + minutes
}

/**
 * ПРОВЕРЯЕТ ПЕРЕСЕЧЕНИЕ ДВУХ ИНТЕРВАЛОВ ВРЕМЕНИ
 *
 * Логика:
 * - Интервал A: [start1, start1 + duration1]
 * - Интервал B: [start2, start2 + duration2]
 * - Пересекаются, если: start1 < end2 И start2 < end1
 *
 * @example
 * isOverlapping(1140, 120, 1200, 120) // true (19:00-21:00 и 20:00-22:00)
 * isOverlapping(1140, 120, 1260, 120) // false (19:00-21:00 и 21:00-23:00)
 * isOverlapping(1140, 120, 1080, 120) // true (19:00-21:00 и 18:00-20:00)
 *
 * @param start1 — начало интервала 1 (в минутах)
 * @param duration1 — длительность интервала 1 (в минутах)
 * @param start2 — начало интервала 2 (в минутах)
 * @param duration2 — длительность интервала 2 (в минутах)
 * @returns true если интервалы пересекаются
 */
export function isOverlapping(
	start1: number,
	duration1: number,
	start2: number,
	duration2: number,
): boolean {
	const end1 = start1 + duration1
	const end2 = start2 + duration2

	// Пересечение: [start1, end1] и [start2, end2]
	return start1 < end2 && start2 < end1
}

// ============================================================
// ОСНОВНЫЕ ФУНКЦИИ
// ============================================================

/**
 * ВОЗВРАЩАЕТ ОБЩУЮ ВМЕСТИМОСТЬ РЕСТОРАНА
 *
 * Сумма capacity всех столов из БД.
 * Если столы не созданы — возвращает DEFAULT_TABLE_CAPACITY (40).
 *
 * @returns общая вместимость (мест)
 */
export async function getTotalCapacity(): Promise<number> {
	const result = await prisma.table.aggregate({
		_sum: { capacity: true },
	})

	return result._sum.capacity ?? DEFAULT_TABLE_CAPACITY
}

/**
 * СЧИТАЕТ СКОЛЬКО МЕСТ ЗАНЯТО НА УКАЗАННОЕ ВРЕМЯ
 *
 * Алгоритм:
 * 1. Берём все брони на указанную дату (кроме cancelled).
 * 2. Фильтруем по overlap с запрашиваемым интервалом.
 * 3. Суммируем guests.
 *
 * @param date — дата в формате "YYYY-MM-DD"
 * @param time — время начала в формате "HH:MM"
 * @param duration — длительность в минутах
 * @returns количество занятых мест
 */

export async function getUsedSeats(
	date: string,
	time: string,
	duration: number = DEFAULT_DURATION,
): Promise<number> {
	// Получаем все брони на дату (кроме отменённых)
	const dayBookings = await prisma.booking.findMany({
		where: {
			date,
			status: { not: 'cancelled' },
		},
		select: {
			guests: true,
			time: true,
			duration: true,
		},
	})

	// Запрашиваемый интервал
	const requestedStart = toMinutes(time)
	const requestedDuration = duration

	// Фильтруем по overlap + суммируем guests
	const usedSeats = dayBookings
		.filter((b: Pick<Booking, 'guests' | 'time' | 'duration'>) => {
			const bookingStart = toMinutes(b.time)
			const bookingDuration = b.duration || DEFAULT_DURATION

			return isOverlapping(
				requestedStart,
				requestedDuration,
				bookingStart,
				bookingDuration,
			)
		})
		.reduce(
			(sum: number, b: Pick<Booking, 'guests' | 'time' | 'duration'>) =>
				sum + b.guests,
			0,
		)

	return usedSeats
}

/**
 * ПРОВЕРЯЕТ, ЕСТЬ ЛИ МЕСТА НА УКАЗАННОЕ ВРЕМЯ
 *
 * @param date — дата "YYYY-MM-DD"
 * @param time — время "HH:MM"
 * @param guests — количество гостей (мест)
 * @param duration — длительность брони в минутах
 * @returns true если можно забронировать
 */

export async function hasCapacity(
	date: string,
	time: string,
	guests: number,
	duration: number = DEFAULT_DURATION,
): Promise<boolean> {
	// Общая вместимость
	const total = await getTotalCapacity()

	// Занято мест
	const used = await getUsedSeats(date, time, duration)

	// Проверка: занято + новые <= всего
	return used + guests <= total
}

/**
 * ВОЗВРАЩАЕТ КОЛИЧЕСТВО СВОБОДНЫХ МЕСТ НА ВРЕМЯ
 *
 * @param date — "YYYY-MM-DD"
 * @param time — "HH:MM"
 * @param duration — длительность в минутах
 * @returns количество свободных мест
 */
export async function getAvailableSeats(
	date: string,
	time: string,
	duration: number = DEFAULT_DURATION,
): Promise<number> {
	const total = await getTotalCapacity()
	const used = await getUsedSeats(date, time, duration)

	return Math.max(0, total - used)
}

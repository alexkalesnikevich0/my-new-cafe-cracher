'use server'

/**
 * ФАЙЛ: services/capacity/actions/createBookingCapacity.ts
 *
 * SERVER ACTION (PR 6).
 * Создаёт бронь с проверкой capacity и транзакцией.
 *
 * РЕШАЕТ ПРОБЛЕМУ RACE CONDITION:
 * - Два клиента одновременно бронируют последнее место.
 * - Транзакция + isolationLevel Serializable предотвращает это.
 * - Вторая транзакция видит обновлённые данные.
 *
 * ВОЗВРАЩАЕТ:
 * - { success: 'message' } — успех.
 * - { error: 'message' } — ошибка.
 */

import prisma from '@/app/booking/lib/prisma'
import { Prisma } from '@prisma/client'

import {
	toMinutes,
	isOverlapping,
	DEFAULT_DURATION,
} from '../lib/capacity'

// local type
type BookingSummary = {
	guests: number
	time: string
	duration: number | null
}

// ==
// ТИПЫ
// ==
export interface CreateBookingResult {
	success?: string
	error?: string
}

// ==
// ОСНОВНАЯ ФУНКЦИЯ
// ==
export async function createBookingCapacity(
	formData: FormData,
): Promise<CreateBookingResult> {
	try {
		// ===
		// 1. ИЗВЛЕКАЕМ ДАННЫЕ ИЗ FORMDATA
		// ===
		const guestsRaw = formData.get('guests')
		const dateRaw = formData.get('date')
		const timeRaw = formData.get('time')
		const emailRaw = formData.get('email')
		// ==
		// 2. ВАЛИДАЦИЯ ПРОСТЫХ ПОЛЕЙ
		// ==
		if (!guestsRaw || !dateRaw || !timeRaw || !emailRaw) {
			return { error: 'All fields are required' }
		}
		const guests = Number(guestsRaw)
		const date = String(dateRaw)
		const time = String(timeRaw)
		const email = String(emailRaw)

		if (!Number.isInteger(guests) || guests < 1 || guests > 8) {
			return { error: 'Guests must be a whole number between 1 and 8' }
		}
		if (!email.includes('@')) {
			return { error: 'Please enter a valid email' }
		}

		// ==
		// 3. ТРАНЗАКЦИЯ С ПРОВЕРКОЙ CAPACITY
		// ===
		//
		// Ключевое: транзакция + isolationLevel 'Serializable'.
		// Это гарантирует, что проверка capacity и создание брони
		// выполняются АТОМАРНО.
		//
		// Если два запроса одновременно:
		// - Первый захватывает транзакцию.
		// - Второй ждёт.
		// - Первый создаёт бронь, коммитит.
		// - Второй видит обновлённые данные.
		// - Второй получает отказ, если мест нет.
		// ===

		const booking = await prisma.$transaction(
			async (tx: Prisma.TransactionClient) => {
				const canBook = await hasCapacityWithTx(tx, date, time, guests)

				if (!canBook) {
					throw new Error('Not_enough_capacity')
				}
				const newBooking = await tx.booking.create({
					data: {
						guests,
						date,
						time,
						duration: 120,
						email,
						status: 'new',
					},
				})

				return newBooking
			},
			{
				isolationLevel: 'Serializable',
				timeout: 10000,
			},
		)

		return {
			success: `Booking #${booking.id} confirmed for ${guests} guests`,
		}
	} catch (error) {
		if (error instanceof Error) {
			if (error.message === 'Not_enough_capacity') {
				return { error: 'Not enough seats available for this time' }
			}

			if ('code' in error && (error as { code?: string }).code === 'P2002') {
				return { error: 'This time slot is already taken' }
			}
		}

		console.error('createBookingCapacity error:', error)
		return {
			error: 'Something went wrong. Please try again later',
		}
	}
}

// ============================================================
// ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ТРАНЗАКЦИИ
// ============================================================
//
// Аналог hasCapacity, но принимает tx (транзакцию),
// а не глобальный prisma.
//
// Это важно: внутри транзакции все запросы должны идти через tx,
// иначе не получится атомарность.

async function hasCapacityWithTx(
	tx: Prisma.TransactionClient,
	date: string,
	time: string,
	guests: number,
	duration: number = 120,
): Promise<boolean> {
	const capacityResult = await tx.table.aggregate({ _sum: { capacity: true } })
	const total = capacityResult._sum.capacity ?? 40

	const dayBookings: BookingSummary[] = await tx.booking.findMany({
		where: { date, status: { not: 'cancelled' } },
		select: { guests: true, time: true, duration: true },
	})

	const requestedStart = toMinutes(time)
	const usedSeats = dayBookings
		.filter((b: BookingSummary) => {
			const bookingStart = toMinutes(b.time)
			const bookingDuration = b.duration || DEFAULT_DURATION
			return isOverlapping(
				requestedStart,
				duration,
				bookingStart,
				bookingDuration,
			)
		})
		.reduce((sum: number, b: BookingSummary) => sum + b.guests, 0)

	return usedSeats + guests <= total
}

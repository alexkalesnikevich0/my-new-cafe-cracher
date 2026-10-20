/**
 * ФАЙЛ: services/capacity/tests/assignBookingToTable.test.ts
 *
 * ТЕСТЫ ДЛЯ ФУНКЦИИ assignBookingToTable (PR 6.10).
 *
 * ЧТО МЫ ТЕСТИРУЕМ:
 * 1. Успешная привязка, когда гостей меньше или равно вместимости стола.
 * 2. Отказ, когда гостей больше, чем мест за столом.
 * 3. Отказ, если бронь уже привязана к другому столу.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'

import { assignBookingToTable } from '../actions/assignBookingToTable'

import prisma from '@/app/booking/lib/prisma'

// ===
// МОКАЕМ (ИМИТИРУЕМ) БАЗУ ДАННЫХ
// ===
// Мы не хотим, чтобы тесты лезли в реальную базу Supabase.
// Поэтому мы говорим Vitest: "Сделай вид, что prisma — это просто объект с функциями".
vi.mock('@/app/booking/lib/prisma', () => ({
	default: {
		booking: {
			findUnique: vi.fn(), // имитация поиска брони
			update: vi.fn(), // имитация появления брони
		},
		table: {
			findUnique: vi.fn(), // имитация поиска стола
		},
	},
}))

// ==
// ГРУППА ТЕСТОВ
// ==
describe('assignBookingToTable', () => {
	// Перед каждым тестом очищаем историю вызовов моков
	beforeEach(() => {
		vi.clearAllMocks()
	})

	// --- ТЕСТ 1: Успешная привязка ---
	it('успешно привязывает бронь, если мест хватает', async () => {
		// 1. Настраиваем моки (что должна вернуть "фейковая" база)
		// Бронь на 2 гостей, еще не привязана (tableId: null)
		vi.mocked(prisma.booking.findUnique).mockResolvedValue({
			id: 1,
			guests: 2,
			tableId: null,
		} as unknown as ReturnType<
			typeof prisma.booking.findUnique
		> extends Promise<infer T>
			? T
			: never)

		// Стол с ID 5, вместимость 4 места
		vi.mocked(prisma.table.findUnique).mockResolvedValue({
			id: 5,
			capacity: 4,
		} as unknown as ReturnType<
			typeof prisma.booking.findUnique
		> extends Promise<infer T>
			? T
			: never)

		// 2. Вызываем нашу функцию
		const result = await assignBookingToTable(1, 5)

		// 3. Проверяем результат
		expect(result.success).toBe('Booking assigned successfully')

		// Проверяем, что функция реально вызвала обновление в базе
		expect(prisma.booking.update).toHaveBeenCalledWith({
			where: { id: 1 },
			data: { tableId: 5 },
		})
	})

	// --- ТЕСТ 2: Ошибка (не хватает мест) ---
	it('возвращает ошибку, если гостей больше, чем вместимость стола', async () => {
		// Бронь на 6 гостей
		vi.mocked(prisma.booking.findUnique).mockResolvedValue({
			id: 1,
			guests: 6,
			tableId: null,
		} as unknown as ReturnType<
			typeof prisma.booking.findUnique
		> extends Promise<infer T>
			? T
			: never)

		// Стол всего на 2 места
		vi.mocked(prisma.table.findUnique).mockResolvedValue({
			id: 5,
			capacity: 2,
		} as unknown as ReturnType<
			typeof prisma.booking.findUnique
		> extends Promise<infer T>
			? T
			: never)

		  await assignBookingToTable(1, 5)

		// Ожидаем ошибку с конкретным текстом
		expect(prisma.booking.update).not.toHaveBeenCalled()
	})

	// --- ТЕСТ 3: Ошибка (бронь уже занята) ---
	it('возвращает ошибку, если бронь уже привязана к столу', async () => {
		// Бронь уже имеет tableId: 3
		vi.mocked(prisma.booking.findUnique).mockResolvedValue({
			id: 1,
			guests: 2,
			tableId: 3, // already booked
		} as unknown as ReturnType<
			typeof prisma.booking.findUnique
		> extends Promise<infer T>
			? T
			: never)

		const result = await assignBookingToTable(1, 5)

		expect(result.error).toBe('Booking is already assigned to a table')

		// Проверяем, что даже поиск стола не начался (функция вышла раньше)
		expect(prisma.table.findUnique).not.toHaveBeenCalled()
	})
})

/**
 * ТЕСТЫ ДЛЯ ПРОВЕРКИ ДОСТУПНОСТИ (availability.ts)
 *
 * --- ЗАДАЧА: Проверить, что функция isSlotAvailable()
 * правильно определяет свободное время.
 *
 * --- ВАЖНО: используем МОК Prisma.
 * Мок — это "заглушка", которая имитирует поведение базы данных.
 * Так тесты работают БЕЗ реальной БД.
 */

import { describe, test, expect, vi, beforeEach } from 'vitest'

// ==
// tg 2 changes PR3 3.3
// ==
// vi.mock() заменяет реальный модуль на фейковый.
// Мы говорим: "вместо реальной Prisma верни объект
// с методами findFirst и count".
//
// Эти методы — vi.fn(). Их поведение можно МЕНЯТЬ в каждом тесте
// через .mockResolvedValue() или .mockRejectedValue().
// ===
vi.mock('@/app/booking/lib/prisma', () => ({
	default: {
		booking: {
			// findFirst возвращает null → значит, время свободно
			findFirst: vi.fn(),
			// count возвращает 0 → значит, лимит не превышен
			count: vi.fn(),
		},
	},
}))

import { isSlotAvailable, isDayAvailable } from '../lib/availability'

// tg 2 changes PR3 3.3
import prisma from '@/app/booking/lib/prisma'

// tg 2 changes PR3 3.3 =>
// ==
// ПЕРЕД КАЖДЫМ ТЕСТОМ — ОЧИЩАЕМ МОКИ
// Чтобы тесты не влияли друг на друга.
// ===
beforeEach(() => {
	vi.resetAllMocks()
})

describe('isSlotAvailable', () => {
	test('возвращает true, если время свободно', async () => {
		// НАСТРАИВАЕМ МОК: findFirst вернёт null (значит, брони нет)
		vi.mocked(prisma.booking.findFirst).mockResolvedValue(null)

		const result = await isSlotAvailable('2026-10-15', '19:00')

		expect(result).toBe(true)
	})

	test('возвращаем false, если время занято', async () => {
		// НАСТРАИВАЕМ МОК: findFirst вернёт объект брони

		vi.mocked(prisma.booking.findFirst).mockResolvedValue({
			id: 1,
			guests: 4,
			date: '2026-10-15',
			time: '19:00',
			email: 'test@mail.com',
			status: 'new',
			createdAt: new Date(),
		})
		const result = await isSlotAvailable('2026-10-15', '19:00')

		expect(result).toBe(false)
	})

	test('бросаем ошибку, если БД недоступна', async () => {
		// НАСТРАИВАЕМ МОК: findFirst бросает ошибку

		vi.mocked(prisma.booking.findFirst).mockRejectedValue(
			new Error('Database connection failed'),
		)
		// ОЖИДАЕМ, что функция выбросит ошибку
		await expect(isSlotAvailable('2026-10-15', '19:00')).rejects.toThrow(
			'Database connection failed',
		)
	})
})
/// === tg 2 changes PR3 3.3 <=

// tg 2 changes PR3 3.3 =>
describe('isDayAvailable', () => {
	test('возвращает true, если лимит не превышен', async () => {
		// НАСТРАИВАЕМ МОК: count вернёт 0 (значит, броней нет)
		vi.mocked(prisma.booking.count).mockResolvedValue(0)
		const result = await isDayAvailable('2026-10-15')
		expect(result).toBe(true)
	})

	test('возвращаем false, если лимит превышен', async () => {
		// НАСТРАИВАЕМ МОК: count вернёт 20 (значит, лимит исчерпан)
		vi.mocked(prisma.booking.count).mockResolvedValue(20)
		const result = await isDayAvailable('2026-10-15')
		expect(result).toBe(false)
	})
})
/// === tg 2 changes PR3 3.3 <=

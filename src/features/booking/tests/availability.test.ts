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

import { describe, test, expect, vi } from 'vitest'

// ==
// МОК PRISMA
// ==
// vi.mock() заменяет реальный модуль на фейковый.
// Здесь мы говорим: "вместо реальной Prisma верни объект
// с методами findFirst и count, которые возвращают
// предсказуемые значения".
// ===
vi.mock('@/app/booking/lib/prisma', () => ({
	default: {
		booking: {
			// findFirst возвращает null → значит, время свободно
			findFirst: vi.fn().mockResolvedValue(null),
			// count возвращает 0 → значит, лимит не превышен
			count: vi.fn().mockResolvedValue(0),
		},
	},
}))

import { isSlotAvailable, isDayAvailable } from '../lib/availability'

describe('isSlotAvailable', () => {
	test('возвращает true, если время свободно', async () => {
		const result = await isSlotAvailable('2099-12-31', '22:00')
		expect(result).toBe(true)
	})
})

describe('isDayAvailable', () => {
	test('возвращает true, если лимит не превышен', async () => {
		const result = await isDayAvailable('2099-12-31')
		expect(result).toBe(true)
	})
})

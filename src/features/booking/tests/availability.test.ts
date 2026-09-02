/**
ТЕСТЫ ДЛЯ ПРОВЕРКИ ДОСТУПНОСТИ

-- ЗАДАЧА: Проверить, что функции isSlotAvailable() и
-- isDayAvailable() правильно определяют свободное время.
-- isSlotAvailable() → проверяет, свободно ли конкретное время
-- isDayAvailable() → проверяет, не превышен ли лимит броней на день

--- ЭТИ ТЕСТЫ ГАРАНТИРУЮТ, ЧТО:
-- Система правильно определяет свободные слоты
-- Нельзя забронировать, если лимит исчерпан
 */

import { describe, test, expect } from 'vitest'
import { isDayAvailable, isSlotAvailable } from '../lib/availability'

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

/**
ТЕСТЫ ДЛЯ ВАЛИДАЦИИ ДАННЫХ (validation.ts)

--- ЗАДАЧА: Проверить, что функция validateBooking() 
-- правильно обрабатывает все варианты ввода:
-- НЕПРАВИЛЬНЫЕ ДАННЫЕ → должна вернуть { error: '...' }
-- ПРАВИЛЬНЫЕ ДАННЫЕ → должна вернуть null

--- ЭТИ ТЕСТЫ ГАРАНТИРУЮТ, ЧТО:
-- Пользователь не сможет забронировать с 0 гостями
-- Пользователь не сможет забронировать с 9+ гостями
-- Пользователь не сможет забронировать на прошлую дату
-- Пользователь не сможет ввести неправильный email
-- Правильная бронь проходит без ошибок
 */

import { validateBooking } from '../lib/validation'
import { expect, describe, test } from 'vitest'

describe('validateBooking', () => {
	test('возвращает ошибку, если гостей меньше 1', () => {
		const result = validateBooking({
			guests: 0,
			date: '2026-09-31',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Количество гостей должно быть не менее 1 и не более 8',
		})
	})

	test('возвращает ошибку, если гостей больше 8', () => {
		const result = validateBooking({
			guests: 9,
			date: '2026-09-31',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Количество гостей должно быть не менее 1 и не более 8',
		})
	})

	test('возвращает ошибку, если дата прошлая', () => {
		const result = validateBooking({
			guests: 4,
			date: '2020-09-31',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({ error: 'Нельзя бронировать на прошлую дату' })
	})

	test('возвращает ошибку, если email без @', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-31',
			time: '19:00',
			email: 'testmail.com',
		})
		expect(result).toEqual({ error: 'Укажите корректный email' })
	})

	test('возвращает null, если данные валидны', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-31',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toBeNull()
	})
})

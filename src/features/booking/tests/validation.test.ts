/**
 * ТЕСТЫ ДЛЯ ВАЛИДАЦИИ ДАННЫХ (validation.ts)
 *
 * --- ЗАДАЧА: Проверить, что функция validateBooking()
 * правильно обрабатывает все варианты ввода.
 *
 * --- ВАЖНО: даты должны быть ВАЛИДНЫМИ.
 * Например, '2026-09-31' — НЕВАЛИДНАЯ (в сентябре 30 дней).
 * Используем '2026-09-30'.
 */

import { validateBooking } from '../lib/validation'
import { expect, describe, test } from 'vitest'

describe('validateBooking', () => {
	test('возвращает ошибку, если гостей меньше 1', () => {
		const result = validateBooking({
			guests: 0,
			date: '2026-09-30',
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
			date: '2026-09-30',
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
			date: '2020-09-30',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({ error: 'Нельзя бронировать на прошлую дату' })
	})

	// ============================================================
	// НОВЫЙ ТЕСТ: Проверка невалидной даты (2.4)
	// ============================================================
	test('возвращает ошибку, если дата не существует (31 сентября)', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-31', // в сентябре 30 дней
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({ error: 'Укажите существующую дату' })
	})

	test('возвращает ошибку, если email без @', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-30',
			time: '19:00',
			email: 'testmail.com',
		})
		expect(result).toEqual({ error: 'Укажите корректный email' })
	})

	test('возвращает null, если данные валидны', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-30',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toBeNull()
	})
})

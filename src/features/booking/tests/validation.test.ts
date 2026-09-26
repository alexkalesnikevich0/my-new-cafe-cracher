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
import { expect, describe, test, vi, beforeEach, afterEach } from 'vitest' // PR3 3.4 new => vi, beforeEach, afterEach

// ==  =>
// НОВОЕ ИЗМЕНЕНИЕ: Заморозка времени (3.4)
// tg 2 changes PR3 3.4
//
// ПРОБЛЕМА:
// Тесты используют даты типа '2026-09-30'.
// Сегодня — сентябрь 2026 → дата будущая → тест проходит.
// Через месяц → дата становится прошлой → тест падает.
//
// РЕШЕНИЕ:
// Замораживаем время на 25 сентября 2026.
// Тогда '2026-09-30' ВСЕГДА = будущее (5 дней вперёд).
// ===

// ПЕРЕД КАЖДЫМ ТЕСТОМ — замораживаем время
beforeEach(() => {
	vi.useFakeTimers()
	vi.setSystemTime(new Date('2026-09-25T12:00:00Z'))
})

// ПОСЛЕ КАЖДОГО ТЕСТА — возвращаем реальное время
afterEach(() => {
	vi.useRealTimers()
})
// === tg 2 changes PR3 3.4 <=

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

	// ==   ==>
	// НОВЫЕ ТЕСТЫ (3.5): Крайние случаи
	// PR3 3.5 tg 2 changes
	// + 11 тестов (крайние случаи)
	// ===

	// --- 1. ГОСТИ: ЧИСЛА И NaN ---
	test('возвращает ошибку, если guests = NaN', () => {
		const result = validateBooking({
			guests: NaN,
			date: '2026-09-30',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Количество гостей должно быть целым числом',
		})
	})

	test('возвращает ошибку, если guests = 4.5 (дробное число)', () => {
		const result = validateBooking({
			guests: 4.5,
			date: '2026-09-30',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Количество гостей должно быть целым числом',
		})
	})

	// --- 2. ДАТЫ: НЕВАЛИДНЫЕ ---
	test('возвращает ошибку если дата пустая', () => {
		const result = validateBooking({
			guests: 4,
			date: '',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Укажите корректную дату',
		})
	})
	test('возвращает ошибку если месяц = 13', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-13-01',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Укажите существующую дату',
		})
	})
	test('возвращает ошибку если 30 февраля', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-02-30',
			time: '19:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Укажите существующую дату',
		})
	})

	// ---  3. ВРЕМЯ: НЕВАЛИДНОЕ ---
	test('возвращает ошибку если время пустое', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-30',
			time: '',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Пожалуйста, выберите время',
		})
	})
	test('возвращает ошибку если время вне рабочих часов (03:00)', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-30',
			time: '03:00',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Ресторан работает с 10:00 до 22:00',
		})
	})
	test('возвращает ошибку если минуты не 00 а 30 (19:30)', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-30',
			time: '19:30',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Ресторан работает с 10:00 до 22:00',
		})
	})

	// --- 4. EMAIL: НЕВАЛИДНЫЙ ---
	test('возвращает ошибку если email = "test@" (нет домена)', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-30',
			time: '19:00',
			email: 'test@m',
		})
		expect(result).toEqual({
			error: 'Укажите корректный email',
		})
	})
	test('возвращает ошибку если email = "@mail.com" (нет имени)', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-30',
			time: '19:00',
			email: '@mail.com',
		})
		expect(result).toEqual({
			error: 'Укажите корректный email',
		})
	})
	test('возвращает ошибку если email = с пробелом ("test @mail.com")', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-30',
			time: '19:00',
			email: 'test @mail.com',
		})
		expect(result).toEqual({
			error: 'Укажите корректный email',
		})
	})
	test('возвращает ошибку если время = "abc" (неверный формат)', () => {
		const result = validateBooking({
			guests: 4,
			date: '2026-09-30',
			time: 'abc',
			email: 'test@mail.com',
		})
		expect(result).toEqual({
			error: 'Укажите корректное время (HH:MM)',
		})
	})
})

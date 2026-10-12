import { describe, test, expect } from 'vitest'
import { toMinutes, isOverlapping } from '../lib/capacity' // для тестов БД — замокаем Prisma

// ============================================================
// Тесты чистых функций (без БД)
// ============================================================

describe('toMinutes', () => {
	test('преобразует "19:00" в 1140', () => {
		expect(toMinutes('19:00')).toBe(1140)
	})

	test('преобразует "00:00" в 0', () => {
		expect(toMinutes('00:00')).toBe(0)
	})

	test('преобразует "10:30" в 630', () => {
		expect(toMinutes('10:30')).toBe(630)
	})

	test('преобразует "23:59" в 1439', () => {
		expect(toMinutes('23:59')).toBe(1439)
	})
})

describe('isOverlapping', () => {
	test('19:00-21:00 и 20:00-22:00 → true', () => {
		expect(isOverlapping(1140, 120, 1200, 120)).toBe(true)
	})

	test('19:00-21:00 и 21:00-23:00 → false (встык)', () => {
		expect(isOverlapping(1140, 120, 1260, 120)).toBe(false)
	})

	test('19:00-21:00 и 18:00-20:00 → true', () => {
		expect(isOverlapping(1140, 120, 1080, 120)).toBe(true)
	})

	test('19:00-21:00 и 22:00-00:00 → false', () => {
		expect(isOverlapping(1140, 120, 1320, 120)).toBe(false)
	})

	test('одинаковые интервалы → true', () => {
		expect(isOverlapping(1140, 120, 1140, 120)).toBe(true)
	})

	test('19:00-21:00 и 18:00-23:00 → true (полное перекрытие', () => {
		expect(isOverlapping(1140, 120, 1080, 300)).toBe(true)
	})
})

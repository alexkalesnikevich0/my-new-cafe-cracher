import { describe, test, expect, vi, beforeEach } from 'vitest'
/* eslint-disable @typescript-eslint/no-explicit-any */

// ==
// МОК PRISMA
// ==

vi.mock('@/app/booking/lib/prisma', () => ({
	default: {
		$transaction: vi.fn(),
	},
}))

import prisma from '@/app/booking/lib/prisma'
import { createBookingCapacity } from '../actions/createBookingCapacity'

// ===
// ХЕЛПЕР
// ===
function makeFormData(data: {
	guests?: string
	date?: string
	time?: string
	email?: string
}): FormData {
	const fd = new FormData()
	if (data.guests !== undefined) fd.append('guests', data.guests)
	if (data.date !== undefined) fd.append('date', data.date)
	if (data.time !== undefined) fd.append('time', data.time)
	if (data.email !== undefined) fd.append('email', data.email)
	return fd
}

// ==
// ТЕСТЫ
// ==
describe('createBookingCapacity', () => {
	beforeEach(() => {
		vi.resetAllMocks()
	})

	// ===
	// ВАЛИДАЦИЯ
	// ===
	test('error: не все поля заполнены', async () => {
		const fd = makeFormData({ guests: '4' }) // нет date, time, email

		const result = await createBookingCapacity(fd)

		expect(result.error).toBe('All fields are required')
	})

	test('error: guests не число', async () => {
		const fd = makeFormData({
			guests: 'abc',
			date: '2026-10-15',
			time: '19:00',
			email: 'test@mail.com',
		})

		const result = await createBookingCapacity(fd)

		expect(result.error).toBe('Guests must be a whole number between 1 and 8')
	})

	test('error: guests > 8', async () => {
		const fd = makeFormData({
			guests: '10',
			date: '2026-10-15',
			time: '19:00',
			email: 'test@mail.com',
		})
		const result = await createBookingCapacity(fd)

		expect(result.error).toBe('Guests must be a whole number between 1 and 8')
	})

	test('error: guests = 0', async () => {
		const fd = makeFormData({
			guests: '0',
			date: '2026-10-15',
			time: '19:00',
			email: 'test@mail.com',
		})

		const result = await createBookingCapacity(fd)

		expect(result.error).toBe('Guests must be a whole number between 1 and 8')
	})

	test('error: email без @', async () => {
		const fd = makeFormData({
			guests: '4',
			date: '2026-10-15',
			time: '19:00',
			email: 'testmail.com',
		})

		const result = await createBookingCapacity(fd)

		expect(result.error).toBe('Please enter a valid email')
	})

	// ==
	// УСПЕХ
	// ==
	test('success: успешное создание брони', async () => {
		vi.mocked(prisma.$transaction).mockImplementation(
			async (callback: (tx: any) => Promise<any>) => {
				const tx = {
					table: {
						aggregate: vi.fn().mockResolvedValue({
							_sum: { capacity: 40 },
						}),
					},
					booking: {
						findMany: vi.fn().mockResolvedValue([]),
						create: vi.fn().mockResolvedValue({ id: 42 }),
					},
				}
				return await callback(tx as never)
			},
		)

		const fd = makeFormData({
			guests: '4',
			date: '2026-10-15',
			time: '19:00',
			email: 'test@mail.com',
		})

		const result = await createBookingCapacity(fd)

		expect(result.success).toBe('Booking #42 confirmed for 4 guests')
	})

	// ===
	// НЕТ МЕСТ
	// ===
	test('error: нет мест', async () => {
		vi.mocked(prisma.$transaction).mockImplementation(
			async (callback: (tx: any) => Promise<any>) => {
				const tx = {
					table: {
						aggregate: vi.fn().mockResolvedValue({
							_sum: { capacity: 2 },
						}),
					},
					booking: {
						findMany: vi.fn().mockResolvedValue([]),
					},
				}
				return await callback(tx as never)
			},
		)
		const fd = makeFormData({
			guests: '4', // 4 > 2
			date: '2026-10-15',
			time: '19:00',
			email: 'test@mail.com',
		})
		const result = await createBookingCapacity(fd)

		expect(result.error).toBe('Not enough seats available for this time')
	})

	// ===
	// P2002 дубликат
	//
	test('error: P2002 дубликат', async () => {
		const p2002Error = new Error('Unique constraint failed')
		;(p2002Error as any).code = 'P2002'
		vi.mocked(prisma.$transaction).mockRejectedValue(p2002Error)
		const fd = makeFormData({
			guests: '4',
			date: '2026-10-15',
			time: '19:00',
			email: 'test@mail.com',
		})
		const result = await createBookingCapacity(fd)

		expect(result.error).toBe('This time slot is already taken')
	})

	// ===
	// ОБЩАЯ ОШИБКА
	// ===

	test('error: общая ошибка', async () => {
		vi.mocked(prisma.$transaction).mockRejectedValue(
			new Error('Database connection is failed'),
		)
		const fd = makeFormData({
			guests: '4',
			date: '2026-10-15',
			time: '19:00',
			email: 'test@mail.com',
		})
		const result = await createBookingCapacity(fd)
		expect(result.error).toBe('Something went wrong. Please try again later')
	})
})

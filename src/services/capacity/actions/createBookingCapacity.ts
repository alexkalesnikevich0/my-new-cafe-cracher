'use server'

import prisma from '@/app/booking/lib/prisma'
import { Prisma } from '@prisma/client'

import { toMinutes, isOverlapping, DEFAULT_DURATION } from '../lib/capacity'

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
		const tableIdRaw = formData.get('tableId') // PR6 6.8 получаем tableId

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
		const tableId = tableIdRaw ? Number(tableIdRaw) : null // PR6 6.8

		if (!Number.isInteger(guests) || guests < 1 || guests > 8) {
			return { error: 'Guests must be a whole number between 1 and 8' }
		}
		if (!email.includes('@')) {
			return { error: 'Please enter a valid email' }
		}

		// ==
		// 3. ТРАНЗАКЦИЯ С ПРОВЕРКОЙ CAPACITY
		// ===

		const booking = await prisma.$transaction(
			async (tx: Prisma.TransactionClient) => {
				// 2. выбираем логику проверки: для стола или для всего зала PR6 6.8
				let canBook = false

				if (tableId) {
					// ВАЖНО: используем hasCapacityForTable, а не WithTx!
					canBook = await hasCapacityForTable(tx, tableId, date, time, guests)
				} else {
					canBook = await hasCapacityWithTx(tx, date, time, guests)
				}

				if (!canBook) {
					throw new Error('Not_enough_capacity')
				}

				// 3. создаем бронь с tableId PR6 6.8
				return await tx.booking.create({
					data: {
						guests,
						date,
						time,
						duration: 120,
						email,
						status: 'new',
						tableId,
					},
				})

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

// Новая функция: проверка для конкретного стола PR6 6.8
async function hasCapacityForTable(
	tx: Prisma.TransactionClient,
	tableId: number,
	date: string,
	time: string,
	guests: number,
) {
	const table = await tx.table.findUnique({ where: { id: tableId } })
	if (!table) return false

	const bookings = await tx.booking.findMany({
		where: { date, tableId, status: { not: 'cancelled' } },
		select: { guests: true, time: true, duration: true },
	})

	const requestedStart = toMinutes(time)
	const usedSeats = bookings
		.filter(b =>
			isOverlapping(
				requestedStart,
				120,
				toMinutes(b.time),
				b.duration || DEFAULT_DURATION,
			),
		)
		.reduce((sum, b) => sum + b.guests, 0)

	return usedSeats + guests <= table.capacity
}

// ============================================================
// Старая функция (для общего зала)
// ============================================================

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

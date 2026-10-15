/**
 * ФАЙЛ: app/api/tables/route.ts
 *
 * API-РОУТ ДЛЯ ПОЛУЧЕНИЯ СПИСКА СТОЛОВ (PR 6.5).
 *
 * GET /api/tables
 * GET /api/tables?time=19:00
 *
 * Возвращает массив столов с текущим статусом:
 * [
 *   { id, number, capacity, occupied, status },
 *   ...
 * ]
 */

import { NextResponse, NextRequest } from 'next/server'

import prisma from '@/app/booking/lib/prisma'

import {
	toMinutes,
	isOverlapping,
	DEFAULT_DURATION,
} from '@/services/capacity/lib/capacity'

export async function GET(request: NextRequest) {
	try {
		// 1. Читаем параметры
		const { searchParams } = new URL(request.url)

		const timeParam = searchParams.get('time')

		// 2. Текущее время или переданное
		const now = new Date()
		const currentTime = timeParam
			? timeParam
			: `${String(now.getHours()).padStart(2, '0')}:00`

		// 3. Сегодняшняя дата
		const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

		// 4. Все столы
		const tables: { id: number; number: number; capacity: number }[] =
			await prisma.table.findMany({ orderBy: { number: 'asc' } })

		// 5. Все брони на сегодня (кроме cancelled)
		const dayBookings: {
			guests: number
			time: string
			duration: number | null
			tableId: number | null
		}[] = await prisma.booking.findMany({
			where: {
				date: today,
				status: { not: 'cancelled' },
			},
			select: {
				guests: true,
				time: true,
				duration: true,
				tableId: true,
			},
		})

		// 6. Для каждого стола — считаем занятость
		const requestedStart = toMinutes(currentTime)
		const result = tables.map(table => {
			const occupied = dayBookings
				.filter(b => {
					// Только брони, назначенные на этот стол
					if (b.tableId !== table.id) return false
					const bookingStart = toMinutes(b.time)
					const bookingDuration = b.duration || DEFAULT_DURATION

					return isOverlapping(
						requestedStart,
						DEFAULT_DURATION,
						bookingStart,
						bookingDuration,
					)
				})
				.reduce((sum, b) => sum + b.guests, 0)

			const status = occupied >= table.capacity ? 'busy' : 'free'

			return {
				id: table.id,
				number: table.number,
				capacity: table.capacity,
				occupied,
				status,
			}
		})

		// 7. Возвращаем
		return NextResponse.json(result)
	} catch (error) {
		console.error('API /api/tables/ error:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch tables' },
			{ status: 500 },
		)
	}
}

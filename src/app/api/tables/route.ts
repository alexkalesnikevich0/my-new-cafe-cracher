/**
 * ФАЙЛ: app/api/tables/route.ts
 *
 * API-РОУТ ДЛЯ ПОЛУЧЕНИЯ СПИСКА СТОЛОВ.
 * GET /api/tables?date=2026-10-28&time=19:00
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
		const dateParam = searchParams.get('date') //  Читаем дату из URL

		// 2. Текущее время или переданное
		const now = new Date()
		const currentTime = timeParam
			? timeParam
			: `${String(now.getHours()).padStart(2, '0')}:00`

		// 3. Дата: выбранная или сегодняшняя
		const targetDate = dateParam
			? dateParam
			: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

		// 4. Все столы
		const tables: {
			id: number
			number: number
			capacity: number
			posX: number
			posY: number
			shape: string
			rotation: number
			isBlocked: boolean
		}[] = await prisma.table.findMany({ orderBy: { number: 'asc' } })

		// 5. Все брони на ВЫБРАННУЮ ДАТУ (кроме cancelled)
		const dayBookings: {
			guests: number
			time: string
			duration: number | null
			tableId: number | null
		}[] = await prisma.booking.findMany({
			where: {
				date: targetDate, //  Используем выбранную дату
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

			const status = table.isBlocked
				? 'blocked'
				: occupied >= table.capacity
					? 'busy'
					: 'free'

			return {
				id: table.id,
				number: table.number,
				capacity: table.capacity,
				occupied,
				status,
				posX: table.posX,
				posY: table.posY,
				shape: table.shape,
				rotation: table.rotation,
				isBlocked: table.isBlocked,
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

/**
 * PATCH /api/tables
 *
 * Массовое обновление позиций столов на схеме зала (PR 6.6.7).
 */
export async function PATCH(request: NextRequest) {
	try {
		const body = await request.json()

		if (!body || !Array.isArray(body.positions)) {
			return NextResponse.json(
				{ error: 'positions must be an array' },
				{ status: 400 },
			)
		}

		const positions: { id: number; posX: number; posY: number }[] =
			body.positions

		if (positions.length === 0) {
			return NextResponse.json({ error: 'positions is empty' }, { status: 400 })
		}

		for (const p of positions) {
			if (
				typeof p.id !== 'number' ||
				typeof p.posX !== 'number' ||
				typeof p.posY !== 'number'
			) {
				return NextResponse.json(
					{ error: 'each position must have id, posX, posY (numbers)' },
					{ status: 400 },
				)
			}

			if (p.posX < 0 || p.posX > 100 || p.posY < 0 || p.posY > 100) {
				return NextResponse.json(
					{ error: 'posX and posY must be between 0 and 100' },
					{ status: 400 },
				)
			}
		}

		await prisma.$transaction(
			positions.map(p =>
				prisma.table.update({
					where: { id: p.id },
					data: { posX: p.posX, posY: p.posY },
				}),
			),
		)

		return NextResponse.json({ ok: true, updated: positions.length })
	} catch (error) {
		console.error('PATCH /api/tables error:', error)
		return NextResponse.json(
			{ error: 'Failed to update table positions' },
			{ status: 500 },
		)
	}
}

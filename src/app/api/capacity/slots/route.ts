/**
 * ФАЙЛ: app/api/capacity/slots/route.ts
 *
 * API-РОУТ ДЛЯ ПОЛУЧЕНИЯ ЗАНЯТЫХ СЛОТОВ (PR 6.4).
 *
 * GET /api/capacity/slots?date=2026-10-15&duration=120
 *
 * Возвращает массив занятых слотов.
 */

import { NextResponse, NextRequest } from 'next/server'

import {
	getTotalCapacity,
	getUsedSeats,
	DEFAULT_DURATION,
} from '@/services/capacity/lib/capacity'

const ALL_SLOTS = [
	'10:00',
	'11:00',
	'12:00',
	'13:00',
	'14:00',
	'15:00',
	'16:00',
	'17:00',
	'18:00',
	'19:00',
	'20:00',
	'21:00',
	'22:00',
]

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url)
		const date = searchParams.get('date')
		const durationParam = searchParams.get('duration')

		if (!date) {
			return NextResponse.json({ error: 'date is required' }, { status: 400 })
		}

		const duration = durationParam ? Number(durationParam) : DEFAULT_DURATION

		const total = await getTotalCapacity()

		const occupied: string[] = []
		for (const slot of ALL_SLOTS) {
			const used = await getUsedSeats(date, slot, duration)
			if (used >= total) {
				occupied.push(slot)
			}
		}

		return NextResponse.json(occupied)
	} catch (error) {
		console.error('API /api/capacity/slots error:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch slots' },
			{ status: 500 },
		)
	}
}

/**
 * ФАЙЛ: services/capacity/api/capacity/route.ts
 *
 * API-РОУТ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ О ВМЕСТИМОСТИ (PR 6.4).
 * Вызывается с клиента для отображения свободных мест.
 *
 * GET /api/capacity?date=2026-10-15&time=19:00&duration=120
 *
 * Возвращает:
 * - total: общая вместимость
 * - used: занято мест
 * - available: свободно мест
 */
import { NextRequest, NextResponse } from 'next/server'
import {
	getTotalCapacity,
	getUsedSeats,
	getAvailableSeats,
	DEFAULT_DURATION,
} from '@/services/capacity/lib/capacity'

export async function GET(request: NextRequest) {
	try {
		// 1.  Читаем параметры из URL
		const { searchParams } = new URL(request.url)
		const date = searchParams.get('date')
		const time = searchParams.get('time')
		const durationParams = searchParams.get('duration')

		// 2. Валидация
		if (!date || !time) {
			return NextResponse.json(
				{ error: 'date and time are required' },
				{ status: 400 },
			)
		}

		const duration = durationParams ? Number(durationParams) : DEFAULT_DURATION

		if (!Number.isInteger(duration) || duration <= 0) {
			return NextResponse.json(
				{ error: 'duration must be a positive integer' },
				{ status: 400 },
			)
		}

		// 3. Получаем данные
		const total = await getTotalCapacity()
		const used = await getUsedSeats(date, time, duration)
		const available = await getAvailableSeats(date, time, duration)

		// 4. Возвращаем
		return NextResponse.json({
			total,
			used,
			available,
		})
	} catch (error) {
		console.error('API /api/capacity error:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch capacity' },
			{ status: 500 },
		)
	}
}

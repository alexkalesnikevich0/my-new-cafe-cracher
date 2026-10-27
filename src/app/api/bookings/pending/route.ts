import { NextResponse, NextRequest } from 'next/server' // Добавили NextRequest
import prisma from '@/app/booking/lib/prisma'

//  Добавили request в аргументы
export async function GET(request: NextRequest) {
	try {
		// 1. Получаем дату из URL
		const { searchParams } = new URL(request.url)
		let dateParam = searchParams.get('date')

		// Если дата не передана, берем сегодняшнюю
		if (!dateParam) {
			const now = new Date()
			dateParam = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
		}

		// 2. Ищем висячие брони на эту дату
		const pendingBookings = await prisma.booking.findMany({
			where: {
				date: dateParam, //  Используем дату из URL
				tableId: null,
				status: { not: 'cancelled' },
			},
			orderBy: { time: 'asc' },
		})

		return NextResponse.json(pendingBookings)
	} catch (error) {
		console.error('API /api/bookings/pending error:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch pending bookings' },
			{ status: 500 },
		)
	}
}

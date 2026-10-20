import { NextResponse } from 'next/server'

import prisma from '@/app/booking/lib/prisma'

export async function GET() {
	try {
		const today = new Date().toISOString().split('T')[0]

		const pendingBookings = await prisma.booking.findMany({
			where: {
				date: today,
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

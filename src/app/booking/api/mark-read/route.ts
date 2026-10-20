import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/app/booking/lib/prisma'

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const { ids } = body

		if (!ids || !Array.isArray(ids) || ids.length === 0) {
			return NextResponse.json({ ok: true, updated: 0 })
		}

		// Обновляем только те брони, которые еще не прочитаны
		await prisma.booking.updateMany({
			where: {
				id: { in: ids },
				isRead: false,
			},
			data: {
				isRead: true,
			},
		})

		return NextResponse.json({ ok: true })
	} catch (error) {
		console.error('API mark-read error:', error)
		return NextResponse.json(
			{ error: 'Failed to mark as read' },
			{ status: 500 },
		)
	}
}

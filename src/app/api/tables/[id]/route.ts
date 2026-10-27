/**
 * ФАЙЛ: app/api/tables/[id]/route.ts
 *
 * API-РОУТ ДЛЯ ОДНОГО СТОЛА (PR 6.7).
 */

import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/app/booking/lib/prisma'

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const resolvedParams = await params
		const id = Number(resolvedParams.id)

		if (isNaN(id)) {
			return NextResponse.json({ error: 'Invalid table ID' }, { status: 400 })
		}

		// получаем дату из URL (если не передали, берем сегодня)
		const { searchParams } = new URL(request.url)
		let dateParam = searchParams.get('date')

		if (!dateParam) {
			const now = new Date()
			dateParam = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
		}

		// ВОТ ОНИ: findUnique и include ищем стол и ТОЛЬКО его брони на эту дату
		const table = await prisma.table.findUnique({
			where: { id: id },
			include: {
				bookings: {
					orderBy: [{ time: 'asc' }],
					where: {
						date: dateParam, // filter by date
						status: { not: 'cancelled' },
					},
				},
			},
		})

		if (!table) {
			return NextResponse.json({ error: 'Table not found' }, { status: 404 })
		}

		return NextResponse.json(table)
	} catch (error) {
		console.error('API /api/tables/[id] error:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch table details' },
			{ status: 500 },
		)
	}
}

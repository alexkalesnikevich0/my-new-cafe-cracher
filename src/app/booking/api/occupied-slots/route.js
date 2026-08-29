/**
 * API-МАРШРУТ ДЛЯ ПОЛУЧЕНИЯ СПИСКА ЗАНЯТЫХ СЛОТОВ (ДАТА + ВРЕМЯ).
 * ИСПОЛЬЗУЕТСЯ ФОРМОЙ БРОНИРОВАНИЯ, ЧТОБЫ СКРЫТЬ УЖЕ ЗАНЯТОЕ ВРЕМЯ.
 * ОТМЕНЁННЫЕ БРОНИ (cancelled) НЕ СЧИТАЮТСЯ ЗАНЯТЫМИ.
 */

import prisma from '@/app/booking/lib/prisma'

export async function GET() {
	const bookings = await prisma.booking.findMany({
		where: { status: { not: 'cancelled' } }, // ИСКЛЮЧАЕМ ОТМЕНЁННЫЕ
		select: { date: true, time: true }, // БЕРЁМ ТОЛЬКО ДАТУ И ВРЕМЯ
	})
	return Response.json(bookings)
}

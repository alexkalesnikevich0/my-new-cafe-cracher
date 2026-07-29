import prisma from '@/app/booking/lib/prisma'

export async function GET() {
	const bookings = await prisma.booking.findMany({
		where: { status: { not: 'cancelled' } },
		select: { date: true, time: true },
	})
	return Response.json(bookings)
}

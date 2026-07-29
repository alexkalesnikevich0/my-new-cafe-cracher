import prisma from '@/app/booking/lib/prisma'

export async function GET() {
	const bookings = await prisma.booking.findMany({
		orderBy: { createdAt: 'desc' },
	})
	return Response.json(bookings)
}

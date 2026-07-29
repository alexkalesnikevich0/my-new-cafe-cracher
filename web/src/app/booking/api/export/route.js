import prisma from '@/app/booking/lib/prisma'

export async function GET() {
	const bookings = await prisma.booking.findMany({
		orderBy: { createdAt: 'desc' },
	})

	const headers = 'ID,Guests,Date,Time,Email,Status,Created/n'

	const rows = bookings
		.map(
			b =>
				`${b.id},${b.guests},${b.date},${b.time},${b.email || ''},${b.status},${new Date(b.createdAt).toLocaleString('en-US')}`,
		)
		.join('/n')

	const csv = headers + rows

	return new Response(csv, {
		headers: {
			'Content-Type': 'text/csv',
			'Content-Disposition': 'attachment; filename=booking.csv',
		},
	})
}

'use server'

/**
 * ФАЙЛ: services/capacity/actions/assignBookingToTable.ts
 *
 * 6.9: Привязывает "висячую" бронь (без стола) к конкретному столу.
 */

import prisma from '@/app/booking/lib/prisma'

export async function assignBookingToTable(bookingId: number, tableId: number) {
	try {
		// 1. Проверяем, существует ли бронь
		const booking = await prisma.booking.findUnique({
			where: { id: bookingId },
		})

		if (!booking) {
			return { error: 'Booking not found' }
		}
		if (booking.tableId !== null) {
			return { error: 'Booking is already assigned to a table' }
		}

		// 2. Получаем данные стола, чтобы проверить вместимость
		const table = await prisma.table.findUnique({
			where: { id: tableId },
		})

		if (!table) {
			return { error: 'Table not found' }
		}

		// 3. ГЛАВНАЯ ПРОВЕРКА: помещаются ли гости за этот стол?
		if (booking.guests > table.capacity) {
			return {
				error: `Cannot assign: this table only fits ${table.capacity} guests, but the booking is for ${booking.guests}.`,
			}
		}

		// 4. Привязываем бронь к столу
		await prisma.booking.update({
			where: { id: bookingId },
			data: { tableId: tableId },
		})

		return { success: 'Booking assigned successfully' }
	} catch (error) {
		console.error('assignBookingToTable error:', error)
		return { error: 'Failed to assign booking' }
	}
}

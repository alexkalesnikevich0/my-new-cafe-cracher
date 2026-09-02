import prisma from '../../../app/booking/lib/prisma'

/**
 * ПРОВЕРЯЕТ СВОБОДНО ЛИ УКАЗАННОЕ ВРЕМЯ ДЛЯ БРОНИРОВАНИЯ
 * @param date - ДАТА В ФОРМАТЕ YYYY-MM-DD
 * @param time - ВРЕМЯ В ФОРМАТЕ HH:MM
 * @param excludeBookingId - ID БРОНИ, КОТОРУЮ НУЖНО ИСКЛЮЧИТЬ ИЗ ПРОВЕРКИ ДЛЯ ОБНОВЛЕНИЯ
 * @returns true - ЕСЛИ ВРЕМЯ СВОБОДНО, false - ЕСЛИ ЗАНЯТО
 */
export async function isSlotAvailable(
	date: string,
	time: string,
	excludeBookingId?: number,
): Promise<boolean> {
	// ИЩЕМ БРОНЬ НА ТУ ДАТУ И ВРЕМЯ, КОТОРАЯ НЕ ОТМЕНЕНА
	const existing = await prisma.booking.findFirst({
		where: {
			date: date,
			time: time,
			status: { not: 'cancelled' },
			// ЕСЛИ ПЕРЕДАН excludeBookingID - ТО ИСКЛЮЧАЕМ ЭТУ БРОНЬ ИЗ ПРОВЕРКИ
			// (НУЖНО ДЛЯ ОБНОВЛЕНИЯ ЧТОБЫ БРОНЬ НЕ СЧИТАЛА САМУ СЕБЯ ЗАНЯТОЙ
			...(excludeBookingId ? { id: { not: excludeBookingId } } : {}),
		},
	})

	// ЕСЛИ БРОНЬ НАЙДЕНА - ВРЕМЯ ЗАНЯТО - ВОЗВРАЩАЕМ false
	// ЕСЛИ НЕ НАЙДЕНА - ВРЕМЯ СВОБОДНО - ВОЗВРАЩАЕМ true
	return existing === null
}

/**
 * ПРОВЕРЯЕТ НЕ ПРЕВЫШЕНО ЛИ МАКСИМАЛЬНОЕ КОЛИЧЕСТВО БРОНЕЙ НА ОДИН ДЕНЬ
 * НАПРИМЕР ЛИМИТ 20 БРОНЕЙ В ДЕНЬ
 * @param date - дата в формате YYYY-MM-DD
 * @returns true - ЕСЛИ МОЖНО БРОНИРОВАТЬ, false - ЕСЛИ ЛИМИТ ИСЧЕРПАН
 */
export async function isDayAvailable(date: string): Promise<boolean> {
	const MAX_BOOKING_PER_DAY = 20

	const count = await prisma.booking.count({
		where: {
			date: date,
			status: { not: 'cancelled' },
		},
	})

	return count < MAX_BOOKING_PER_DAY
}

import prisma from '@/app/booking/lib/prisma'
import { isAuthorized } from '@/app/booking/lib/auth'

/**
 * API-МАРШРУТ ДЛЯ ПОЛУЧЕНИЯ ВСЕХ БРОНЕЙ.
 * ИСПОЛЬЗУЕТСЯ ТАБЛИЦЕЙ В АДМИНКЕ ДЛЯ ОТОБРАЖЕНИЯ ДАННЫХ.
 * ВЫЗЫВАЕТСЯ ЧЕРЕЗ fetch('/booking/api') КАЖДЫЕ 60 СЕКУНД.
 * 
 * ЗАЩИТА СПИСКА БРОНЕЙ. 
 * РАНЬШЕ ЭТОТ API БЫЛ ДОСТУПЕН ВСЕ БЕЗ ПАРОЛЯ
 * ТЕПЕРЬ ЛЮБОЙ КТО ОТКРОЕТ /booking/api БЕЗ АВТОРИЗАЦИИ ПОЛУЧИТ error и статус 401
 */
export async function GET() {
	// ЗАЩИТА ЕСЛИ НЕТ КУКИ admin_token - ВОЗВРАЩАЕТ ОШИБКУ 401
	if (!(await isAuthorized())) {
		return Response.json({ error: 'Unauthorized' }, { status: 401 })
	}

	const bookings = await prisma.booking.findMany({
		orderBy: { createdAt: 'desc' }, // СОРТИРУЕМ ПО ДАТЕ СОЗДАНИЯ (НОВЫЕ СВЕРХУ)
	})
	return Response.json(bookings)
}

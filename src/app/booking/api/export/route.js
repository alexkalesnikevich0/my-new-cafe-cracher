import prisma from '@/app/booking/lib/prisma'
import { isAuthorized } from '@/app/booking/lib/auth'

/**
 * API-МАРШРУТ ДЛЯ СКАЧИВАНИЯ ВСЕХ БРОНЕЙ В ФОРМАТЕ CSV.
 * ВЫЗЫВАЕТСЯ ПРИ НАЖАТИИ КНОПКИ "EXPORT CSV" В АДМИНКЕ.
 * ФАЙЛ ОТКРЫВАЕТСЯ В EXCEL / GOOGLE ТАБЛИЦАХ.
 *
 * ЗАЩИТА csv-ЭКСПОРТА РАНЬШЕ ЛЮБОЙ МОГ ЗАЙТИ И СКАЧАТЬ ВСЕ ДАННЫЕ КЛИЕНТОВ
 * ТЕПЕРЬ ЭКСПОРТ ДОСТУПЕН ТОЛЬКО ПОСЛЕ ВВОДА ПАРОЛЯ НА /admin
 */
export async function GET() {
	// ЗАЩИТА CSV-ЭКСПОРТА
	if (!(await isAuthorized())) {
		return Response.json({ error: 'Unauthorized ' }, { status: 401 })
	}
	// ПОЛУЧАЕМ ВСЕ БРОНИ ИЗ БАЗЫ, СОРТИРУЕМ ПО ДАТЕ СОЗДАНИЯ (НОВЫЕ СВЕРХУ)
	const bookings = await prisma.booking.findMany({
		orderBy: { createdAt: 'desc' },
	})

	// ЗАГОЛОВКИ CSV-ФАЙЛА (КОЛОНКИ)
	const headers = 'ID,Guests,Date,Time,Email,Status,Created/n'

	// ПРЕВРАЩАЕМ КАЖДУЮ БРОНЬ В СТРОКУ CSV (ЗНАЧЕНИЯ ЧЕРЕЗ ЗАПЯТУЮ)
	const rows = bookings
		.map(
			b =>
				`${b.id},${b.guests},${b.date},${b.time},${b.email || ''},${b.status},${new Date(b.createdAt).toLocaleString('en-US')}`,
		)
		.join('/n') // РАЗДЕЛИТЕЛЬ СТРОК

	// СКЛЕИВАЕМ ЗАГОЛОВКИ И ДАННЫЕ
	const csv = headers + rows

	// ВОЗВРАЩАЕМ CSV-ФАЙЛ. БРАУЗЕР СКАЧАЕТ ЕГО С ИМЕНЕМ booking.csv
	return new Response(csv, {
		headers: {
			'Content-Type': 'text/csv', // ГОВОРИМ БРАУЗЕРУ, ЧТО ЭТО CSV
			'Content-Disposition': 'attachment; filename=booking.csv', // ЗАСТАВЛЯЕМ СКАЧАТЬ
		},
	})
}

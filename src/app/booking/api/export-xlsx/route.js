import prisma from '@/app/booking/lib/prisma'
import { isAuthorized } from '@/app/booking/lib/auth'
import * as XLSX from 'xlsx'

/**
 * ============================================================
 * НОВЫЙ API-МАРШРУТ: ЭКСПОРТ В EXCEL (.xlsx)
 * ДАТА: Сентябрь 2026
 *
 * ЧТО ДЕЛАЕТ:
 * - Получает все брони из базы данных.
 * - Формирует Excel-файл с 7 колонками (ID, Guests, Date, Time, Email, Status, Created).
 * - Отдаёт файл браузеру для скачивания.
 *
 * ЗАЧЕМ:
 * - CSV не всегда правильно открывается в Excel (локаль, кодировка).
 * - Excel (.xlsx) — надёжный формат, работает во всех версиях.
 * ============================================================
 */
export async function GET() {
	// ЗАЩИТА ЭКСПОРТА
	if (!(await isAuthorized())) {
		return Response.json({ error: 'Unauthorized' }, { status: 401 })
	}

	// ПОЛУЧАЕМ ВСЕ БРОНИ ИЗ БАЗЫ, НОВЫЕ СВЕРХУ
	const bookings = await prisma.booking.findMany({
		orderBy: { createdAt: 'desc' },
	})

	// ============================================================
	// ПРЕОБРАЗУЕМ ДАННЫЕ В МАССИВ МАССИВОВ (для Excel)
	// Каждая строка — массив значений.
	// ============================================================
	const rows = bookings.map(b => [
		b.id,
		b.guests,
		b.date,
		b.time,
		b.email || '',
		b.status,
		new Date(b.createdAt).toLocaleString('ru-RU'),
	])

	// ЗАГОЛОВКИ КОЛОНОК
	const headers = ['ID', 'Guests', 'Date', 'Time', 'Email', 'Status', 'Created']

	// ============================================================
	// СОЗДАЁМ EXCEL-ФАЙЛ
	// 1. Создаём лист из массива (сначала заголовки, потом строки).
	// 2. Автоматически определяем ширину колонок.
	// ============================================================
	const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows])
	// ============================================================
	// НОВОЕ ИЗМЕНЕНИЕ: Перенос текста и ширина колонок
	// ДАТА: Сентябрь 2026
	// ЧТО ДЕЛАЕТ:
	// - Для колонки Email задаём wrapText: true (перенос текста).
	// - Задаём ширину колонок, чтобы всё влезало красиво.
	// ЗАЧЕМ: Длинные email не обрезаются, а переносятся внутри ячейки.
	// ============================================================

	// ШИРИНА КОЛОНОК (wch = ширина в символах)
	worksheet['!cols'] = [
		{ wch: 6 }, // ID
		{ wch: 10 }, // Guests
		{ wch: 14 }, // Date
		{ wch: 8 }, // Time
		{ wch: 35 }, // Email (шире, чтобы влезало)
		{ wch: 12 }, // Status
		{ wch: 22 }, // Created
	]

	// ПЕРЕНОС ТЕКСТА ДЛЯ ВСЕХ ЯЧЕЕК
	// Проходимся по всем ячейкам и добавляем стиль alignment с wrapText: true
	const range = XLSX.utils.decode_range(worksheet['!ref'])
	for (let R = range.s.r; R <= range.e.r; R++) {
		for (let C = range.s.c; C <= range.e.c; C++) {
			const cellRef = XLSX.utils.encode_cell({ r: R, c: C })
			if (!worksheet[cellRef]) continue

			worksheet[cellRef].s = {
				alignment: {
					wrapText: true, // Перенос текста внутри ячейки
					vertical: 'top', // Текст прижат к верху ячейки
				},
			}
		}
	}
	const workbook = XLSX.utils.book_new()
	XLSX.utils.book_append_sheet(workbook, worksheet, 'Bookings')

	// ============================================================
	// ГЕНЕРИРУЕМ БИНАРНЫЙ ФАЙЛ .xlsx
	// type: 'buffer' → получаем буфер (двоичные данные).
	// bookType: 'xlsx' → тип файла.
	// ============================================================
	const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })

	// ВОЗВРАЩАЕМ ФАЙЛ БРАУЗЕРУ
	return new Response(buffer, {
		headers: {
			'Content-Type':
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			'Content-Disposition': 'attachment; filename=bookings.xlsx',
		},
	})
}

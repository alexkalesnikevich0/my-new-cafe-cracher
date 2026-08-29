/**
 * ФАЙЛ: src/middleware.js
 * ЗАЩИЩАЕТ ВСЕ СТРАНИЦЫ ВНУТРИ /admin ОТ НЕАВТОРИЗОВАННОГО ДОСТУПА.
 * ПРОВЕРЯЕТ КУКУ admin_token.
 * ЕСЛИ КУКИ НЕТ — ПЕРЕНОСИТ НА СТРАНИЦУ ЛОГИНА.
 * ИСКЛЮЧЕНИЯ (ДОСТУПНЫ БЕЗ КУКИ):
 * - /admin/login (СТРАНИЦА ЛОГИНА)
 * - /admin/admin-login (API ПРОВЕРКИ ПАРОЛЯ)
 */
import { NextResponse } from 'next/server'

export function middleware(request) {
	// ИЩЕМ КУКУ admin_token В ЗАПРОСЕ
	const token = request.cookies.get('admin_token')
	// ДОСТАЁМ ТЕКУЩИЙ ПУТЬ
	const { pathname } = request.nextUrl

	// ЕСЛИ ПУТЬ НАЧИНАЕТСЯ С /admin И ЭТО НЕ СТРАНИЦА ЛОГИНА И НЕ API ПРОВЕРКИ ПАРОЛЯ
	if (
		pathname.startsWith('/admin') &&
		pathname !== '/admin/login' &&
		pathname !== '/admin/admin-login'
	) {
		// ЕСЛИ КУКИ НЕТ ИЛИ ОНА НЕВАЛИДНА — ПЕРЕНОСИМ НА ЛОГИН
		if (!token || token.value !== 'true') {
			return NextResponse.redirect(new URL('/admin/login', request.url))
		}
	}

	// ВСЕ ОСТАЛЬНЫЕ ЗАПРОСЫ ПРОПУСКАЕМ
	return NextResponse.next()
}

import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
/**
 * ФАЙЛ: src/proxy.js
 *
 * ЗАЩИЩАЕТ ВСЕ СТРАНИЦЫ ВНУТРИ /admin ОТ НЕАВТОРИЗОВАННОГО ДОСТУПА.
 *
 * ЧТО ПРОВЕРЯЕТ:
 * - Куку admin_token.
 * - Подпись JWT (через jose).
 * - Роль в токене (должна быть 'admin').
 *
 * ЕСЛИ ЧТО-ТО НЕ ТАК — РЕДИРЕКТ НА /admin/login.
 *
 * ИСКЛЮЧЕНИЯ (ДОСТУПНЫ БЕЗ КУКИ):
 * - /admin/login (СТРАНИЦА ЛОГИНА)
 * - /admin/admin-login (API ПРОВЕРКИ ПАРОЛЯ)
 *
 * ВАЖНО:
 * В Next.js 16 имя функции должно совпадать с именем файла.
 * Файл proxy.js → функция должна называться "proxy".
 * Если назвать "middleware" — Next.js её ПРОИГНОРИРУЕТ.
 */

// ============================================================
// НОВОЕ ИЗМЕНЕНИЕ: Proxy проверяет JWT через jose
// ДАТА: Сентябрь 2026
//
// ПРОБЛЕМА:
// Раньше кука admin_token=true — легко подделать.
// Проверка token.value !== 'true' больше не работает,
// потому что теперь в куке JWT (длинная строка).
//
// РЕШЕНИЕ:
// Используем jwtVerify из jose — проверяет подпись и срок.
// ============================================================

// SECRET — секретный ключ из .env.local (тот же, что в session.ts)
const SECRET = process.env.SESSION_SECRET

// secretKey — тот же формат, что в session.ts (Uint8Array)
const secretKey = new TextEncoder().encode(SECRET)

// ============================================================
// ФУНКЦИЯ PROXY
// Срабатывает на КАЖДЫЙ запрос к /admin/*
//
// ЧТО ДЕЛАЕТ:
// 1. Пропускает публичные страницы (/admin/login, /admin/admin-login).
// 2. Для остальных /admin/* проверяет JWT.
// 3. Если JWT невалиден → редирект на /admin/login.
// ============================================================
export async function proxy(request) {
	const { pathname } = request.nextUrl

	// пропускаем публичные страницы
	if (pathname == '/admin/login' || pathname === '/admin/admin-login') {
		return NextResponse.next()
	}

	// проверяем куку только для /admin/* проверка авторизации
	if (pathname.startsWith('/admin')) {
		const token = request.cookies.get('admin_token')?.value

		// если куки нет => редирект на логин
		if (!token) {
			return NextResponse.redirect(new URL('/admin/login', request.url))
		}

		// Проверяем JWT
		// - jwtVerify:
		// - проверяет подпись токена
		// - проверяет срок действия
		// - если все хорошо то - возвращает payload
		try {
			const { payload } = await jwtVerify(token, secretKey)
			if (payload.role !== 'admin') {
				return NextResponse.redirect(new URL('/admin/login', request.url))
			}
		} catch {
			return NextResponse.redirect(new URL('/admin/login', request.url))
		}
	}
	return NextResponse.next()
}

export const config = {
	matcher: ['/admin/:path*'],
}

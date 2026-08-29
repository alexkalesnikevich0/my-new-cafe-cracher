/**
 * ФАЙЛ: app/admin/admin-login/route.js
 *
 * API-МАРШРУТ ДЛЯ ПРОВЕРКИ ПАРОЛЯ ПРИ ВХОДЕ В АДМИНКУ.
 * СРАВНИВАЕТ ПРИСЛАННЫЙ ПАРОЛЬ С ADMIN_PASSWORD ИЗ .env.local.
 * ЕСЛИ ПАРОЛЬ ВЕРНЫЙ — СОЗДАЁТ КУКУ admin_token.
 *
 * ВЫЗЫВАЕТСЯ ИЗ: app/admin/login/page.jsx (СТРАНИЦА ЛОГИНА)
 */
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request) {
	// ДОСТАЁМ ПАРОЛЬ ИЗ ТЕЛА ЗАПРОСА
	const { password } = await request.json()

	// СРАВНИВАЕМ С ПРАВИЛЬНЫМ ПАРОЛЕМ ИЗ .env.local
	if (password === process.env.ADMIN_PASSWORD) {
		const cookiesStore = await cookies()
		// СОЗДАЁМ КУКУ, КОТОРАЯ ДАЁТ ДОСТУП К /admin
		cookiesStore.set('admin_token', 'true', {
			httpOnly: true, // КУКА НЕДОСТУПНА ЧЕРЕЗ JAVASCRIPT (ЗАЩИТА ОТ КРАЖИ)
			secure: false, // РАБОТАЕТ НА HTTP (ДЛЯ РАЗРАБОТКИ; НА ПРОДАКШЕНЕ true)
			path: '/', // ДЕЙСТВУЕТ НА ВСЁМ САЙТЕ
		})
		return NextResponse.json({ ok: true })
	}
	// ЕСЛИ ПАРОЛЬ НЕВЕРНЫЙ — ВОЗВРАЩАЕМ ОШИБКУ 401
	return NextResponse.json({ error: 'Wrong password!' }, { status: 401 })
}

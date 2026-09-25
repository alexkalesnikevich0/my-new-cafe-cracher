/**
 * ФАЙЛ: app/admin/admin-login/route.js
 *
 * API-МАРШРУТ ДЛЯ ПРОВЕРКИ ПАРОЛЯ ПРИ ВХОДЕ В АДМИНКУ.
 * СРАВНИВАЕТ ПРИСЛАННЫЙ ПАРОЛЬ С ADMIN_PASSWORD ИЗ .env.local.
 * ЕСЛИ ПАРОЛЬ ВЕРНЫЙ — СОЗДАЁТ КУКУ admin_token.
 *
 * ВЫЗЫВАЕТСЯ ИЗ: app/admin/login/page.jsx (СТРАНИЦА ЛОГИНА)
 */

/**
 *
 */
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createSession } from '@/app/lib/auth/session'

import {
	isRateLimited,
	recordAttempt,
	clearAttempts,
} from '@/app/lib/auth/rate-limits'

export async function POST(request) {
	// =
	// НОВОЕ ИЗМЕНЕНИЕ: Rate limiting
	// ДАТА: Сентябрь 2026
	// tg 2 changes 1.4
	//
	// 1.4 rate-limiting
	// ЧТО ДЕЛАЕТ:
	// 1. Получаем IP клиента.
	// 2. Проверяем, не превышен ли лимит попыток.
	// 3. Если превышен → возвращаем ошибку 429.
	//
	// КОД 429 = "Too Many Requests" (слишком много запросов).
	// =

	const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
	if (isRateLimited(ip)) {
		return NextResponse.json(
			{ error: 'Too many attempts. Try again in 15 minutes' },
			{ status: 429 },
		)
	}

	// ДОСТАЁМ ПАРОЛЬ ИЗ ТЕЛА ЗАПРОСА
	// ============================================================
	// НОВОЕ ИЗМЕНЕНИЕ: Fail-closed 1.1
	// tg 2 changes
	//
	// ПРОБЛЕМА
	// Если ADMIN_PASSWORD не задан в .env.local
	// а password в запросе тоже пустой, оба значения undefined
	// Условие "undefined === undefined" даёт true -> вход разрешён
	// Это ОПАСНАЯ дыра в безопасности
	//
	// РЕШЕНИЕ
	// Если ADMIN_PASSWORD не задан => сразу возвращаем ошибку 500
	// Сервер не должен работать без пароля
	// ============================================================
	if (!process.env.ADMIN_PASSWORD) {
		console.error('Admin Password не задан в .env.local')
		return NextResponse.json(
			{
				error: 'Server configuration error',
			},
			{ status: 500 },
		)
	}

	// ДОСТАЁМ ПАРОЛЬ ИЗ ТЕЛА ЗАПРОСА
	const { password } = await request.json()

	// ============================================================
	// НОВОЕ ИЗМЕНЕНИЕ: Проверка типа password
	// ДАТА: Сентябрь 2026
	//
	// ЗАЧЕМ:
	// Если password не строка (например, объект или число),
	// это может вызвать ошибки или обойти проверку.
	// ============================================================
	if (typeof password !== 'string') {
		return NextResponse.json(
			{
				error: 'Invalid Input',
			},
			{ status: 400 },
		)
	}

	// СРАВНИВАЕМ С ПРАВИЛЬНЫМ ПАРОЛЕМ ИЗ .env.local
	if (password === process.env.ADMIN_PASSWORD) {
		const cookiesStore = await cookies()
		const sessionToken = await createSession() // 2 changes th !

		// СОЗДАЁМ КУКУ, КОТОРАЯ ДАЁТ ДОСТУП К /admin
		cookiesStore.set('admin_token', sessionToken, {
			httpOnly: true, // JS не видит куку 2 changes th !
			secure: process.env.NODE_ENV === 'production', // HTTPS на Vercel, HTTP локально
			sameSite: 'lax', // защита от CSRF
			maxAge: 8 * 60 * 60, // 8 часов (8 * 60 минут * 60 секунд)
			path: '/', // ДЕЙСТВУЕТ НА ВСЁМ САЙТЕ
		})
		clearAttempts(ip) // 1.4 rate-limiting
		return NextResponse.json({ ok: true })
	}

	recordAttempt(ip) // 1.4 rate-limiting
	// ЕСЛИ ПАРОЛЬ НЕВЕРНЫЙ — ВОЗВРАЩАЕМ ОШИБКУ 401
	return NextResponse.json({ error: 'Wrong password!' }, { status: 401 })
}

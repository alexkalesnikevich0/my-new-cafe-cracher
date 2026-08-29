/**
 * ФАЙЛ: app/admin/logout/route.js
 *
 * API-МАРШРУТ ДЛЯ ВЫХОДА ИЗ АДМИНКИ.
 * УДАЛЯЕТ КУКУ admin_token, ПОСЛЕ ЧЕГО MIDDLEWARE ПЕРЕСТАЁТ ПУСКАТЬ В /admin.
 *
 * ВЫЗЫВАЕТСЯ ИЗ: LogoutButton.jsx
 */
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
	const cookiesStore = await cookies()
	// УДАЛЯЕМ КУКУ — ПОЛЬЗОВАТЕЛЬ БОЛЬШЕ НЕ АВТОРИЗОВАН
	cookiesStore.delete('admin_token')
	return NextResponse.json({ ok: true })
}

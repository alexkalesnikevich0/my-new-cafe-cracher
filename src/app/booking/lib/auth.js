import { cookies } from 'next/headers'
import { verifySession } from '@/app/lib/auth/session'

/**
 * ПРОВЕРЯЕТ АВТОРИЗОВАН ЛИ ПОЛЬЗОВАТЕЛЬ
 * ЧИТАЕТ КУКУ admin_token И ПРОВЕРЯЕТ РАВНА ЛИ ОНА 'true'
 *
 * ИСПОЛЬЗУЕТСЯ В api/route.js и api/export/route.js
 * В api/route.js это (ЗАЩИТА СПИСКА БРОНЕЙ)
 * В api/export/route.js ЭТО (ЗАЩИТА CSV-ЭКСПОРТА)
 *
 * СВЯЗЬ: КУКУ СОЗДАЕТ admin-login/route.js ПРИ ВВОДЕ ПРАВИЛЬНОГО ПАРОЛЯ.
 * КУКУ ПРОВЕРЯЕТ middleware,js ПРИ ЗАХОДЕ В /admin
 */

// ============================================================
// НОВОЕ ИЗМЕНЕНИЕ: Проверка авторизации через JWT
// ДАТА: Сентябрь 2026
//
// ПРОБЛЕМА:
// Раньше проверялось cookie === 'true'.
// Теперь в куке хранится JWT (длинная строка).
// Проверка на 'true' больше не работает.
//
// РЕШЕНИЕ:
// Читаем куку, проверяем подпись через verifySession().
// ============================================================

export async function isAuthorized() {
	const cookiesStore = await cookies()
	const token = cookiesStore.get('admin_token')?.value

	// если куки нет => не авторизован
	if (!token) return false

	// проверяем подпись и срок действия JWT
	return await verifySession(token)
}

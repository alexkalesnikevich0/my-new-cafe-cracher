import { cookies } from 'next/headers'

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

export async function isAuthorized() {
	const cookiesStore = await cookies()
	const token = cookiesStore.get('admin_token')
	return token?.value === 'true'
}

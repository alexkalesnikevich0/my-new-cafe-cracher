import { SignJWT, jwtVerify } from 'jose'

// ============================================================
// НОВОЕ ИЗМЕНЕНИЕ: Подписанные сессии (JWT)
// 2 changes tg
//
// ПРОБЛЕМА
// Раньше кука admin_token=true — легко подделать
// Любой мог вручную поставить её в браузере и войти
//
// РЕШЕНИЕ
// Используем JWT — токен с цифровой подписью
// Без SESSION_SECRET подделать его невозможно
//
// КАК РАБОТАЕТ
// 1. При логине сервер создаёт JWT с подписью
// 2. JWT кладётся в куку
// 3. При каждом запросе сервер проверяет подпись JWT
// 4. Если подпись не совпадает — доступ запрещён
// ============================================================

// SECRET — секретный ключ из .env.local.
// Если его нет — сервер не работает (fail-closed)

const SECRET = process.env.SESSION_SECRET

if (!SECRET) {
	throw new Error('SESSION_SECRET не задан в .env.local')
}

// Преобразуем SECRET в байты (jose требует Uint8Array)
const secretKey = new TextEncoder().encode(SECRET)

// ВРЕМЯ ЖИЗНИ СЕССИИ: 8 часов
// После этого токен становится невалидным, и админ должен войти заново
const SESSION_DURATION = '8h'

/**
 * СОЗДАЁТ ПОДПИСАННЫЙ JWT-ТОКЕН
 *
 * @returns {Promise<string>} — строка токена
 *
 * ЧТО ДЕЛАЕТ:
 * - Создаёт JWT с полезной нагрузкой { role: 'admin' }.
 * - Подписывает его секретным ключом (HS256).
 * - Устанавливает срок действия 8 часов.
 */
export async function createSession(): Promise<string> {
	const token = await new SignJWT({ role: 'admin' })
		.setProtectedHeader({
			alg: 'HS256',
		}) // алгоритм подписи
		.setIssuedAt() // время создания
		.setExpirationTime(SESSION_DURATION) // срок действия
		.sign(secretKey) // подпись секретным ключом

	return token
}

/**
 * ПРОВЕРЯЕТ JWT-ТОКЕН
 *
 * @param {string} token — строка токена из куки
 * @returns {Promise<boolean>} — true, если токен валиден
 *
 * ЧТО ДЕЛАЕТ:
 * - Проверяет подпись токена.
 * - Проверяет срок действия.
 * - Проверяет, что роль = 'admin'.
 * - Возвращает true/false.
 */
export async function verifySession(token: string): Promise<boolean> {
	try {
		const { payload } = await jwtVerify(token, secretKey)

		// ПРОВЕРКА: роль должна быть admin
		if (payload.role !== 'admin') {
			return false
		}
		return true
	} catch {
		// Токен невалидный (истёк, подпись не совпала и так далее)
		return false
	}
}

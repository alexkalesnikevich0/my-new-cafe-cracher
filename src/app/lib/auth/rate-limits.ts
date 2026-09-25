// =
// НОВОЕ ИЗМЕНЕНИЕ: Rate limiting (ограничение попыток)
// ДАТА: Сентябрь 2026
//
// ПРОБЛЕМА:
// Сейчас можно бесконечно подбирать пароль от админки.
// Программа может отправить тысячи попыток за секунду
// и угадать пароль.
//
// РЕШЕНИЕ:
// Считаем попытки по IP-адресу. Если больше 5 за 15 минут —
// блокируем на 15 минут.
//
// КАК ХРАНИМ:
// В объекте Map (в памяти сервера).
// Ключ — IP, значение — массив времени попыток.
//
// ВАЖНО:
// Это работает только для одного процесса Node.js.
// На Vercel может быть несколько инстансов — тогда
// нужен Redis. Для обучения этого достаточно.
// =



// НАСТРОЙКИ
const MAX_ATTEMPTS = 5 // максимум попыток

const WINDOW_MS = 15 * 60 * 1000 // окно 15 минут

// =
// ХРАНИЛИЩЕ ПОПЫТОК
// Map — встроенный класс JavaScript.
// Ключ: строка (IP-адрес).
// Значение: массив timestamp'ов (когда были попытки).
// =
const attempts = new Map<string, number[]>()

// =
// ФУНКЦИЯ: Проверяет, не превышен ли лимит
//
// @param ip — IP-адрес клиента
// @returns true, если лимит превышен (нужно заблокировать)
// =
export function isRateLimited(ip: string): boolean {
	const now = Date.now()

	// Достаём попытки этого IP (или пустой массив)
	const userAttempts = attempts.get(ip) || []

	// Оставляем только попытки за последние 15 минут
	// filter — метод массива, оставляет элементы по условию
	const recentAttempts = userAttempts.filter(
		timestamp => now - timestamp < WINDOW_MS,
	)

	// Сохраняем обновлённый список обратно
	attempts.set(ip, recentAttempts)

	// Если попыток больше MAX_ATTEMPTS → блокируем
	return recentAttempts.length >= MAX_ATTEMPTS
}

// =
// ФУНКЦИЯ: Записывает новую попытку
//
// @param ip — IP-адрес клиента
// =
export function recordAttempt(ip: string): void {
	const now = Date.now()

	// Достаём существующие попытки или пустой массив
	const userAttempts = attempts.get(ip) || []

	// Добавляем текущее время
	userAttempts.push(now)

	// Сохраняем
	attempts.set(ip, userAttempts)
}

// =
// ФУНКЦИЯ: Очищает попытки (при успешном входе)
//
// @param ip — IP-адрес клиента
// =
export function clearAttempts(ip: string): void {
	attempts.delete(ip)
}

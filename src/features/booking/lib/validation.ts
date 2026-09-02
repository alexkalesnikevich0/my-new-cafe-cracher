import type { CreateBookingInput } from '../types'

/**
 * ПРОВЕРЯЕТ ЯВЛЯЕТСЯ ЛИ СТРОКА ВАЛИДНЫМ email-АДРЕСОМ
 */
function isValidEmail(email: string): boolean {
	// ПРОСТАЯ НО РАБОЧАЯ ПРОВЕРКА: ДОЛЖЕН БЫТЬ @ и точка после @
	return email.includes('@') && email.includes('.')
}

/**
 * ПРОВЕРЯЕТ ЯВЛЯЕТСЯ ЛИ ДАТА СЕГОДНЯШНЕЙ ИЛИ БУДУЩЕЙ
 */
function isTodayOrFuture(dateStr: string): boolean {
	const today = new Date()
	today.setHours(0, 0, 0, 0) // ОБНУЛЯЕМ ВРЕМЯ ДЛЯ КОРРЕКТНОГО СРАВНЕНИЯ

	const inputDate = new Date(dateStr)
	inputDate.setHours(0, 0, 0, 0)

	return inputDate >= today
}

/**
 * ПРОВЕРЯЕТ, ЧТО ВРЕМЯ В ФОРМАТЕ HH:MM: И СУЩЕСТВУЕТ
 */

function isValidTime(timeStr: string): boolean {
	const parts = timeStr.split(':')
	if (parts.length !== 2) return false

	const hours = parseInt(parts[0], 10)
	const minutes = parseInt(parts[1], 10)

	return (
		!isNaN(hours) &&
		!isNaN(minutes) &&
		hours >= 0 &&
		hours <= 23 &&
		minutes >= 0 &&
		minutes <= 59
	)
}

/**
 * ОСНОВНАЯ ФУНКЦИЯ ВАЛИДАЦИИ БРОНИРОВАНИЯ
 * ПРОВЕРЯЕТ ВСЕ ПОЛЯ - ГОСТИ, ДАТА, ВРЕМЯ, EMAIL
 * ВОЗВРАЩАЕТ ОБЪЕКТ С ОШИБКОЙ ИЛИ null, ЕСЛИ ВСЕ ОК
 */

export function validateBooking(
	input: CreateBookingInput,
): { error: string } | null {
	const { guests, date, time, email } = input
	// 1. ПРОВЕРКА КОЛИЧЕСТВА ГОСТЕЙ
	if (guests < 1 || guests > 8) {
		return { error: 'Количество гостей должно быть не менее 1 и не более 8' }
	}

	// 2. ПРОВЕРКА ФОРМАТА ДАТЫ
	if (!date || typeof date !== 'string') {
		return { error: 'Укажите корректную дату' }
	}

	// 3. ПРОВЕРКА, ЧТО ДАТА НЕ ПРОШЛАЯ
	if (!isTodayOrFuture(date)) {
		return { error: 'Нельзя бронировать на прошлую дату' }
	}

	// 4. ПРОВЕРКА ФОРМАТА ВРЕМЕНИ
	if (!time || typeof time !== 'string' || time.trim() === '') {
		return { error: 'Пожалуйста выберите время' }
		if (isValidTime(time)) {
			return { error: 'Укажите корректное время (HH:MM)' }
		}
	}

	// 5. ПРОВЕРКА email
	if (!email || !isValidEmail(email)) {
		return { error: 'Укажите корректный email' }
	}

	// ЕСЛИ ВСЕ ПРОВЕРКИ ПРОЙДЕНЫ - ВОЗВРАЩАЕМ null (НЕТ ОШИБОК)
	return null
}

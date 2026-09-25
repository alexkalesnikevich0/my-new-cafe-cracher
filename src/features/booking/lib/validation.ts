import type { CreateBookingInput } from '../types'

// ==
// НОВОЕ ИЗМЕНЕНИЕ: Ограничение по датам (2.8)
// 2 changes tg PR2 2.8
//
// ПРОБЛЕМА:
// Гость мог забронировать на любой год вперёд.
// Ресторан не знает расписания на год вперёд.
//
// РЕШЕНИЕ:
// Разрешаем бронировать только на текущий и следующий месяц.
//
// ПРИМЕР:
// Сейчас сентябрь 2026 → можно: сентябрь 2026 и октябрь 2026.
//                       нельзя: ноябрь 2026 и дальше.
// ===

/**
 * ПРОВЕРЯЕТ, ЧТО ДАТА В ДОПУСТИМОМ ДИАПАЗОНЕ
 * (текущий месяц или следующий)
 *
 * @param dateStr — дата в формате YYYY-MM-DD
 * @returns true, если дата в допустимом диапазоне
 */
function isWithinAllowedRange(dateStr: string): boolean {
	const [year, month] = dateStr.split('-').map(Number)

	const now = new Date()
	const currentYear = now.getFullYear()
	const currentMonth = now.getMonth() + 1 // 1-12

	// ВЫЧИСЛЯЕМ ГРАНИЦЫ ДИАПАЗОНА:
	// - начало: текущий месяц
	// - конец: следующий месяц
	const minYear = currentYear
	const minMonth = currentMonth

	let maxYear = currentYear
	let maxMonth = currentMonth + 1

	// ЕСЛИ СЛЕДУЮЩИЙ МЕСЯЦ = 13, ПЕРЕХОДИМ НА ЯНВАРЬ СЛЕДУЮЩЕГО ГОДА
	if (maxMonth > 12) {
		maxMonth = 1
		maxYear += 1
	}

	if (year < minYear || year > maxYear) return false
	if (year === minYear && month < minMonth) return false
	if (year === maxYear && month > maxMonth) return false

	return true
}

// ==
// НОВОЕ ИЗМЕНЕНИЕ: Строгая проверка email (2.6)
//
//
// ПРОБЛЕМА:
// Раньше проверялось только наличие '@' и '.' где-то в строке.
// Пропускало: 'test@.com', 'test@mail.', '@.', 'test @mail.com'.
//
// РЕШЕНИЕ:
// Используем регулярное выражение (regex) для проверки формата.
//
// РАЗБОР REGEX:
//   /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   ^              — начало строки
//   [^\s@]+        — одна или более букв, НЕ пробел и НЕ @ (имя)
//   @              — символ @
//   [^\s@]+        — одна или более букв, НЕ пробел и НЕ @ (домен)
//   \.             — точка
//   [^\s@]+        — одна или более букв (зона: com, ru, de)
//   $              — конец строки
// ===

// РЕГУЛЯРНОЕ ВЫРАЖЕНИЕ ДЛЯ ПРОВЕРКИ EMAIL
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isValidEmail(email: string): boolean {
	// Проверяем через regex
	return EMAIL_REGEX.test(email)
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

// ==
// НОВОЕ ИЗМЕНЕНИЕ: Проверка прошедшего времени (2.5)
// 2 changes tg PR2 2.5
//
// ПРОБЛЕМА:
// Если бронь на СЕГОДНЯ, можно выбрать прошедшее время.
// Например, сейчас 15:00, а гость выбирает 10:00.
// Сервер это пропускает.
//
// РЕШЕНИЕ:
// Если дата = сегодня, время должно быть минимум через 1 час.
//
// ПРИМЕР:
// Сейчас 15:00 → минимальное время = 16:00.
// Всё, что меньше — отклоняется.
// ===

// МИНИМАЛЬНЫЙ ЗАЗОР ДО БРОНИ (в минутах)
const MIN_LEAD_TIME_MINUTES = 60

/**
 * ПРОВЕРЯЕТ, ЧТО ВРЕМЯ НА СЕГОДНЯ — В БУДУЩЕМ
 *
 * @param dateStr — дата в формате YYYY-MM-DD
 * @param timeStr — время в формате HH:MM
 * @returns true, если дата не сегодня ИЛИ время в будущем
 */

function isFutureTimeToday(dateStr: string, timeStr: string): boolean {
	const now = new Date()

	// СЕГОДНЯШНЯЯ ДАТА В ФОРМАТЕ YYYY-MM-DD
	const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

	// ЕСЛИ ДАТА НЕ СЕГОДНЯ => ПРОВЕРКА НЕ НУЖНА
	if (dateStr !== today) return true

	// РАЗБИВАЕМ "19:00" → ["19", "00"]
	const [hours, minutes] = timeStr.split(':').map(Number)

	// ВРЕМЯ БРОНИ В МИНУТАХ ОТ НАЧАЛА ДНЯ
	const bookingMinutes = hours * 60 + minutes

	// ТЕКУЩЕЕ ВРЕМЯ В МИНУТАХ ОТ НАЧАЛА ДНЯ
	const nowMinutes = now.getHours() * 60 + now.getMinutes()

	// ПРОВЕРКА: разница минимум MIN_LEAD_TIME_MINUTES
	return bookingMinutes - nowMinutes >= MIN_LEAD_TIME_MINUTES
}

// ==
// НОВОЕ ИЗМЕНЕНИЕ: Проверка существования даты (2.4)
// 2 changes tg PR2 2.4
//
// ПРОБЛЕМА:
// JavaScript "нормализует" невалидные даты:
// new Date('2026-09-31') → 2026-10-01 (сентябрь не имеет 31 дня).
// Поэтому такие даты проходят проверку.
//
// РЕШЕНИЕ:
// 1. Парсим дату.
// 2. Проверяем, что год/месяц/день совпадают с оригиналом.
// 3. Если не совпадают — дата не существует.
// ===

/**
 * ПРОВЕРЯЕТ, ЧТО ДАТА РЕАЛЬНО СУЩЕСТВУЕТ
 *
 * @param dateStr — строка в формате YYYY-MM-DD
 * @returns true, если дата существует
 */

function isValidDate(dateStr: string): boolean {
	// РАЗБИВАЕМ "2026-09-30" → ["2026", "09", "30"]
	const parts = dateStr.split('-')
	if (parts.length !== 3) return false

	const year = parseInt(parts[0], 10)
	const month = parseInt(parts[1], 10)
	const day = parseInt(parts[2], 10)

	// ПРОВЕРКА: числа валидные
	if (isNaN(year) || isNaN(month) || isNaN(day)) return false

	// СОЗДАЁМ ДАТУ
	const date = new Date(year, month - 1, day)
	// ВАЖНО: месяц в JavaScript 0–11, поэтому month - 1

	// ПРОВЕРКА: совпадают ли значения с оригиналом
	// Если JS сдвинул дату (например, 31 → 01), они не совпадут
	return (
		date.getFullYear() === year &&
		date.getMonth() === month - 1 &&
		date.getDate() === day
	)
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
// ==
// НОВОЕ ИЗМЕНЕНИЕ: Проверка рабочих часов (2.2)
// tg 2 changes PR2 2.2
//
// ПРОБЛЕМА:
// Раньше сервер принимал любое время (например, "03:00").
// Можно было отправить запрос напрямую и забронировать
// нерабочее время.
//
// РЕШЕНИЕ:
// Проверяем, что время входит в рабочие часы ресторана:
// с 10:00 до 22:00 (включительно), каждый час.
//
// СЛОТЫ:
// 10:00, 11:00, 12:00, ..., 21:00, 22:00 — итого 13 слотов.
// ===

// РАБОЧИЕ ЧАСЫ: от 10:00 до 22:00
const OPENING_HOURS = 10
const CLOSING_HOURS = 22

/**
 * ПРОВЕРЯЕТ, ЧТО ВРЕМЯ ВХОДИТ В РАБОЧИЕ ЧАСЫ
 *
 * @param timeStr — строка времени в формате HH:MM
 * @returns true, если время входит в рабочие часы
 */
function isValidTimeSlot(timeStr: string): boolean {
	// РАЗБИВАЕМ "19:00" → ["19", "00"]
	const parts = timeStr.split(':')
	if (parts.length !== 2) return false

	const hours = parseInt(parts[0], 10)
	const minutes = parseInt(parts[1], 10)

	// ПРОВЕРКА: часы в диапазоне 10–22, минуты = 00
	// (у нас слоты каждый час, поэтому минуты всегда 00)
	if (isNaN(hours) || isNaN(minutes)) return false
	if (minutes !== 0) return false
	if (hours < OPENING_HOURS || hours > CLOSING_HOURS) return false

	return true
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
	// ==
	// НОВОЕ ИЗМЕНЕНИЕ: Проверка гостей через Number.isInteger (2.3)
	// tg 2 changes 2.3 PR2
	//
	// ПРОБЛЕМА:
	// Раньше guests мог быть NaN, дробным или мусором.
	// "NaN < 1" всегда false, "NaN > 8" всегда false.
	// Значит, NaN проходил валидацию!
	//
	// РЕШЕНИЕ:
	// 1. Number.isInteger(guests) — проверяет, что это целое число.
	// 2. Проверяем диапазон 1–8.
	// ===

	// 1.1. ПРОВЕРКА, ЧТО ГОСТИ — ЦЕЛОЕ ЧИСЛО
	if (!Number.isInteger(guests)) {
		return {
			error: 'Количество гостей должно быть целым числом',
		}
	}

	// 1.2. ПРОВЕРКА ДИАПАЗОНА (1–8)
	if (guests < 1 || guests > 8) {
		return { error: 'Количество гостей должно быть не менее 1 и не более 8' }
	}

	// 2. ПРОВЕРКА ФОРМАТА ДАТЫ
	if (!date || typeof date !== 'string') {
		return { error: 'Укажите корректную дату' }
	}

	// ==
	// НОВОЕ ИЗМЕНЕНИЕ: Проверка существования даты (2.4)
	// 2 changes tg PR2 2.4
	//
	// ПРОБЛЕМА:
	// JS нормализует невалидные даты.
	// 2026-09-31 → 2026-10-01.
	// Такие даты проходят проверку.
	//
	// РЕШЕНИЕ:
	// isValidDate проверяет, что дата реально существует.
	// ===
	if (!isValidDate(date)) {
		return {
			error: 'Укажите существующую дату',
		}
	}

	// 3. ПРОВЕРКА, ЧТО ДАТА НЕ ПРОШЛАЯ
	if (!isTodayOrFuture(date)) {
		return { error: 'Нельзя бронировать на прошлую дату' }
	}

	// ==
	// НОВОЕ ИЗМЕНЕНИЕ: Ограничение по датам (2.8)
	// tg 2 changes PR2 2.8
	//
	// Разрешаем бронировать только на текущий и следующий месяц.
	// ===
	if (!isWithinAllowedRange(date)) {
		return {
			error: 'Бронирование доступно только на текущий и следующий месяц',
		}
	}

	// ==
	// НОВОЕ ИЗМЕНЕНИЕ: Проверка формата времени (2.1)
	// 2.1 PR2 tg 2 changes
	//
	// ПРОБЛЕМА:
	// Раньше проверка isValidTime стояла ПОСЛЕ return —
	// поэтому она никогда не выполнялась.
	// Любое непустое время (даже "abc") проходило валидацию.
	//
	// РЕШЕНИЕ:
	// 1. Сначала проверяем, что время вообще есть.
	// 2. Потом отдельной проверкой — что формат правильный.
	// 3. Используем !isValidTime (если НЕ валидное).
	// ===

	// 4.1 ПРОВЕРКА, ЧТО ВРЕМЯ ВООБЩЕ ЕСТЬ
	if (!time || typeof time !== 'string' || time.trim() === '') {
		return { error: 'Пожалуйста выберите время' }
	}

	// 4.2 ПРОВЕРКА ФОРМАТА ВРЕМЕНИ (HH:MM)
	if (!isValidTime(time)) {
		return { error: 'Укажите корректное время (HH:MM)' }
	}

	// ==
	// НОВОЕ ИЗМЕНЕНИЕ: Проверка рабочих часов (2.2)
	// tg 2 changes 2.2 PR2
	//
	// ПРОВЕРЯЕМ, ЧТО ВРЕМЯ В РАБОЧИХ ЧАСАХ.
	// Например, "03:00" — НЕ валидное (ресторан закрыт).
	// ===
	if (!isValidTimeSlot(time)) {
		return {
			error: 'Restaurant is working from 10.00 to 22.00',
		}
	}

	// ==
	// НОВОЕ ИЗМЕНЕНИЕ: Проверка прошедшего времени (2.5)
	// ДАТА: Сентябрь 2026
	//
	// Если дата = сегодня, время должно быть минимум через 1 час.
	// Например, сейчас 15:00 → минимальное время = 16:00.
	// ===
	if (!isFutureTimeToday(date, time)) {
		return {
			error: 'Если бронируете на сегодня, время должно быть минимум через час',
		}
	}

	// 5. ПРОВЕРКА email
	if (!email || !isValidEmail(email)) {
		return { error: 'Укажите корректный email' }
	}

	// ЕСЛИ ВСЕ ПРОВЕРКИ ПРОЙДЕНЫ - ВОЗВРАЩАЕМ null (НЕТ ОШИБОК)
	return null
}

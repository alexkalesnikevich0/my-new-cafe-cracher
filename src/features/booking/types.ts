/**
 * СТАТУС БРОНИРОВАНИЯ
 * -  new ТОЛЬКО ЧТО СОЗДАНА ОЖИДАЕТ ПОДТВЕРЖДЕНИЯ
 * - confirmed ПОДТВЕРЖДЕНА АДМИНОМ
 * - cancelled ОТМЕНЕНА АДМИНОМ
 */

export type BookingStatus = 'new' | 'confirmed' | 'cancelled'

/**
 * ДАННЫЕ ДЛЯ СОЗДАНИЯ БРОНИ (ИЗ ФОРМЫ)
 */

export interface CreateBookingInput {
	guests: number
	date: string
	time: string
	email: string
}

/**
 *  ПОЛНАЯ МОДЕЛЬ ВЫПОЛНЕНИЯ ДЕЙСТВИЙ (УСПЕХ ИЛИ ОШИБКА)
 */
export interface ActionResult {
	success?: string
	error?: string
}

/**
 * ДОПУСТИМЫЕ СТАТУСЫ ДЛЯ ОБНОВЛЕНИЯ (ИЗ АДМИНКИ)
 */
export type AllowedStatusUpdate = 'confirmed' | 'cancelled'

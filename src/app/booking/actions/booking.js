'use server'

import prisma from '@/app/booking/lib/prisma'

// НОВЫЕ ИМПОРТЫ ДЛЯ PR3 (типизация, валидация, доступность)

import { validateBooking } from '@/features/booking/lib/validation'
import { isSlotAvailable } from '@/features/booking/lib/availability'

// ===== КОНФИГУРАЦИЯ КЛЮЧИ И АДРЕСА =====

// ПОЧТА, КУДА ПРИХОДЯТ УВЕДОМЛЕНИЯ О НОВОЙ БРОНИ
const MY_EMAIL = process.env.MY_EMAIL

// API-КЛЮЧ RESEND ДЛЯ ОТПРАВКИ ПИСЕМ.
// СНАЧАЛА ПРОВЕРЯЕТ process.env (ДЛЯ ДЕПЛОЯ НА VERCEL), ЕСЛИ НЕТ — ИСПОЛЬЗУЕТ ЗАПАСНОЙ
const RESEND_KEY = process.env.RESEND_KEY

// ТОКЕН И CHAT_ID ДЛЯ ОТПРАВКИ УВЕДОМЛЕНИЙ В TELEGRAM
const TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

/**
 * СЕРВЕРНЫЙ ЭКШЕН — ВЫЗЫВАЕТСЯ ПРИ ОТПРАВКЕ ФОРМЫ БРОНИРОВАНИЯ.
 * 1. ПРОВЕРЯЕТ ДАННЫЕ
 * 2. ОТПРАВЛЯЕТ УВЕДОМЛЕНИЯ В TELEGRAM И НА ПОЧТУ (ТЕБЕ И ГОСТЮ)
 * 3. ПРОВЕРЯЕТ, НЕ ЗАНЯТО ЛИ ВРЕМЯ
 * 4. СОХРАНЯЕТ БРОНЬ В БАЗУ ДАННЫХ
 */
export async function createBooking(formData) {
	// ДОСТАЁМ ДАННЫЕ ИЗ ФОРМЫ ПО АТРИБУТУ name

	// получаем кол во гостей как строку
	const guestsRaw = formData.get('guests')
	// преобразуем в число для валидации parseInt
	const guests = parseInt(guestsRaw, 10)
	// parseInt - превращает строку '4' в число 4
	// 10 это система счисления десятичная

	const date = formData.get('date')
	const time = formData.get('time')
	const email = formData.get('email')

	// ШАГ - 1 ВАЛИДАЦИЯ ДАННЫХ (проверяем гостей, дату, время, email)

	// validationBooking - функция из validation.ts
	// она проверяет:
	// - гости от 1 до 8
	// - дата не прошлая
	// - время в формате HH:MM
	// - email содержит @ и .
	// ЕСЛИ ЕСТЬ ОШИБКА ВОЗВРАЩАЕТ { error: 'текст ошибки' }
	// ЕСЛИ ВСЕ ХОРОШО - ВОЗВРАЩАЕТ null

	const validationError = validateBooking({ guests, date, time, email })
	if (validationError) {
		// ВОЗВРАЩАЕМ ОШИБКУ ПОЛЬЗОВАТЕЛЮ (ОНА ПОКАЖЕТСЯ В ФОРМЕ)
		return { error: validationError.error }
	}

	// ФОРМИРУЕМ ТЕКСТ УВЕДОМЛЕНИЯ
	const message = `New reservation!
  Guests: ${guests}
  Date: ${date}
  Time: ${time}
  Email: ${email}
  We are waiting you!`

	// ШАГ - 2 ПРОВЕРКА ДОСТУПНОСТИ (СВОБОДНО ЛИ ВРЕМЯ)

	// isSlotAvailable - функция из availability.ts
	// ПРОВЕРЯЕТ ЕСТЬ ЛИ В БД БРОНЬ НА ЭТУ ДАТУ И ВРЕМЯ
	// (ИСКЛЮЧАЕТ ОТМЕНЕННЫЕ БРОНИ)
	// ВОЗВРАЩАЕТ true - ЕСЛИ СВОБОДНО, false - ЕСЛИ ЗАНЯТО

	const isFree = await isSlotAvailable(date, time)
	if (!isFree) {
		// ЕСЛИ ВРЕМЯ ЗАНЯТО - ВОЗВРАЩАЕМ ОШИБКУ
		return {
			error: 'Это время уже забронировано. Пожалуйста выберите другое время',
		}
	}

	try {
		// ШАГ 3 СОХРАНЕНИЕ В БАЗУ ДАННЫХ

		await prisma.booking.create({
			data: {
				guests: guests, // уже число привели через parseInt
				date: date, // дата в формате YYYY-MM-DD
				time: time, // время в формате HH:MM
				email: email, // email гостя
				status: 'new', // явно указываем статус 'new' (новая бронь)
			},
		})
		// status 'new' - означает что бронь только создана и ждет подтверждения
	} catch (error) {
		console.error('Ошибка сохранения в базу данных', error) // возвращаем пользователю это сообщение

		return { error: 'Не удалось сохранить бронь. Попробуйте позже!' }
	}

	// ===== 1. ОТПРАВКА УВЕДОМЛЕНИЯ В TELEGRAM =====
	try {
		await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text: message,
			}),
		})
	} catch (error) {
		console.error('Not successfully. Try later!', error)
	}

	// ===== 2. ОТПРАВКА ПИСЬМА ТЕБЕ (НА MY_EMAIL) =====
	try {
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${RESEND_KEY}`,
			},
			body: JSON.stringify({
				from: 'cafe@kolsell.store',
				to: MY_EMAIL,
				replyTo: email, // добавил
				subject: `New reservation!`,
				text: message,
			}),
		})
		const data = await response.json()
		console.log('Resend response:', data)
		if (!response.ok) {
			console.error('Resend error:', data)
		}
	} catch (error) {
		console.error('Error', error)
	}

	// ===== 3. ОТПРАВКА HTML ПИСЬМА ГОСТЮ =====

	if (email) {
		try {
			const response = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${RESEND_KEY}`,
				},
				body: JSON.stringify({
					from: 'cafe@kolsell.store',
					to: email,
					replyTo: MY_EMAIL, // добавил
					subject: 'Thank you for your reservation!',
					// HTML ПИСЬМО С ТАБЛИЦЕЙ И СТИЛЯМИ
					html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; background: white; padding: 20px;">
  <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 15px; padding: 30px; box-shadow: 0 2px 10px 
  rgba(0,0,0,0.1); border: 4px solid black;">
    <h1 style="color: black; font-size: 22px;">
      🍽️  Thank you for your reservation!
    </h1>
    <p style="color: #555; font-size: 15px;">
     Dear guest,
    </p>
    <p style="color: #555; font-size: 15px;">
      Your reservation has been received:
    </p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Guests:</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${guests}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date:</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${date}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Time:</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${time}</td>
      </tr>
    </table>
    <p style="color: #555; font-size: 15px;">
      We will contact you shortly to confirm
    </p>
    <div style="text-align: center; margin-top: 25px;">
      <span style="background: black; color: white; padding: 10px 25px; border-radius: 5px; font-size: 14px;">
        CAFE CRACHER
      </span>
    </div>
  </div>
</body>
</html>
`,
				}),
			})
			const data = await response.json()
			console.log('Resend response:', data)
			if (!response.ok) {
				console.error('Resend error:', data)
			}
		} catch (error) {
			console.error('Ошибка сохранения в базу данных', error) // возвращаем пользователю это сообщение

			return { error: 'Не удалось сохранить бронь. Попробуйте позже!' }
		}
	}

	// ШАГ 4 = ВОЗВРАЩАЕМ УСПЕХ — КЛИЕНТ УВИДИТ ЗЕЛЁНОЕ СООБЩЕНИЕ
	return { success: 'Your table has been reserved!' }
}

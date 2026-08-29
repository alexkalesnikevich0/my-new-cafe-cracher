/**
 * ФАЙЛ: app/booking/lib/prisma.js
 *
 * ЕДИНАЯ ТОЧКА ВХОДА В БАЗУ ДАННЫХ.
 * СОЗДАЁТ ОДИН ЭКЗЕМПЛЯР PrismaClient И ДЕЛИТСЯ ИМ СО ВСЕМИ ФАЙЛАМИ.
 *
 * ПОЧЕМУ ОДИН, А НЕ В КАЖДОМ ФАЙЛЕ НОВЫЙ:
 * - ЕСЛИ СОЗДАВАТЬ new PrismaClient() В КАЖДОМ ФАЙЛЕ,
 *   ПРИ КАЖДОМ ОБНОВЛЕНИИ КОДА БУДУТ СОЗДАВАТЬСЯ НОВЫЕ ПОДКЛЮЧЕНИЯ.
 * - В КАКОЙ-ТО МОМЕНТ ИХ СТАНЕТ СЛИШКОМ МНОГО, И БАЗА ПЕРЕСТАНЕТ ОТВЕЧАТЬ.
 *
 * ИСПОЛЬЗУЕТСЯ В:
 * - booking/actions/booking.js (СОХРАНЕНИЕ БРОНИ)
 * - booking/actions/updateStatus.js (ОБНОВЛЕНИЕ СТАТУСА)
 * - booking/api/route.js (ПОЛУЧЕНИЕ ВСЕХ БРОНЕЙ)
 * - booking/api/export/route.js (ЭКСПОРТ CSV)
 * - booking/api/occupied-slots/route.js (ЗАНЯТЫЕ СЛОТЫ)
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma

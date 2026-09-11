# website-project-aleks# my-new-cafe-cracher
# my-new-cafe-cracher

# Cafe Cracher - Система бронирования столиков

Это веб-приложение для бронирования столиков в ресторане. Клиенты могут выбрать дату, время и количество гостей, а администратор управляет бронями через админ-панель.

---

## Основные возможности

- Бронирование столиков с выбором даты, времени и количества гостей
- Автоматическая проверка доступности (занятые слоты скрываются)
- Отправка уведомлений на почту (Resend) и в Telegram
- Админ-панель с таблицей броней, фильтрами и пагинацией
- Экспорт всех броней в CSV
- Звуковое уведомление о новой брони в админке

---

## Технологии

### Фронтенд
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (анимации)

### Бэкенд и база данных
- Prisma ORM
- Supabase (PostgreSQL)
- Next.js Server Actions

### Уведомления
- Resend (письма)
- Telegram Bot API

### Деплой и тесты
- Vercel (хостинг)
- Vitest (тесты)
- ESLint (линтинг)

---

## Как запустить проект локально

1. Склонируй репозиторий:
   ```bash
   git clone https://github.com/alexkalesnikevich0/my-new-cafe-cracher.git
   cd my-new-cafe-cracher/web
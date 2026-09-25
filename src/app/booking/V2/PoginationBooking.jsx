/**
 * ФАЙЛ: app/booking/V2/PaginationBooking.jsx
 *
 * ГЛАВНЫЙ КОМПОНЕНТ АДМИНКИ.
 * ЗАГРУЖАЕТ ВСЕ БРОНИ, УПРАВЛЯЕТ ПАГИНАЦИЕЙ, СЧЁТЧИКАМИ,
 * АВТООБНОВЛЕНИЕМ, ФИЛЬТРАЦИЕЙ И ЗВУКОВЫМ УВЕДОМЛЕНИЕМ.
 * ПЕРЕДАЁТ ДАННЫЕ В ДОЧЕРНИЕ КОМПОНЕНТЫ.
 */
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import BookingCounterV2 from './BookingCounterV2'
import BookingTableV2 from './BookingTableV2'
import TodayCounter from './TodayCounter'
import PendingCounter from './PendingCounter'
import LogoutButton from '@/app/admin/logout/logoutButton'

export default function PaginationBooking() {
	// ВСЕ БРОНИ (ПОЛНЫЙ СПИСОК)
	const [allbookings, setAllBookings] = useState([])

	// ПОКАЗЫВАТЬ ВСЕ БРОНИ ИЛИ ТОЛЬКО 8?
	const [showAll, setShowAll] = useState(false)

	// ХРАНИТ ПРЕДЫДУЩЕЕ КОЛИЧЕСТВО БРОНЕЙ ДЛЯ ЗВУКОВОГО УВЕДОМЛЕНИЯ
	const prevCountRef = useRef(0)

	// ЗАГРУЗКА БРОНЕЙ ИЗ API
	// ============================================================
	// НОВОЕ ИЗМЕНЕНИЕ: Защита от пустого ответа (bug fix)
	// ошибка в админке
	//
	// ПРОБЛЕМА:
	// Если сервер вернёт ошибку 500 без тела — res.json() падает.
	//
	// РЕШЕНИЕ:
	// 1. Проверяем res.ok.
	// 2. Если ошибка — показываем сообщение и выходим.
	// 3. Если 401 — редирект на /admin/login.
	// ============================================================
	const loadBookings = useCallback(async () => {
		try {
			const res = await fetch('/booking/api')

			// ЕСЛИ НЕ 200 — ОБРАБАТЫВАЕМ ОШИБКУ
			if (!res.ok) {
				// ЕСЛИ 401 — НЕ АВТОРИЗОВАН → РЕДИРЕКТ НА ЛОГИН
				if (res.status === 401) {
					window.location.href = '/admin/login'
					return
				}

				console.error(`Ошибка загрузки броней: ${res.status}`)
				setLoading(false)
				return
			}

			const data = await res.json()

			setLoading(true)
			if (data.length > prevCountRef.current) {
				const audio = new Audio('/notification.mp3')
				audio.play().catch(() => {})
			}
			prevCountRef.current = data.length
			setAllBookings(data)
			setLoading(false)
		} catch (error) {
			console.error('Ошибка загрузки:', error)
			setLoading(false)
		}
	}, [])
	// АВТООБНОВЛЕНИЕ КАЖДЫЕ 60 СЕКУНД
	useEffect(() => {
		loadBookings()
		const interval = setInterval(loadBookings, 60000)
		return () => clearInterval(interval) // ОЧИСТКА ПРИ УХОДЕ СО СТРАНИЦЫ
	}, [loadBookings])

	// СТАТИСТИКА НА СЕГОДНЯ (ГОСТИ + КОЛИЧЕСТВО БРОНЕЙ)
	const getTodayStats = () => {
		const now = new Date()
		// ЛОКАЛЬНАЯ ДАТА (МИНСК), А НЕ UTC
		const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

		const todayBookings = allbookings.filter(
			b => b.date === today && b.status !== 'cancelled', // ИСКЛЮЧАЕМ ОТМЕНЁННЫЕ
		)
		return {
			guests: todayBookings.reduce((sum, b) => sum + b.guests, 0), // СУММА ГОСТЕЙ
			count: todayBookings.length, // КОЛИЧЕСТВО БРОНЕЙ
		}
	}
	const todayStats = getTodayStats()

	// КОЛИЧЕСТВО БРОНЕЙ СО СТАТУСОМ 'new' (ОЖИДАЮТ ПОДТВЕРЖДЕНИЯ)
	const pendingCount = allbookings.filter(b => b.status === 'new').length

	// ФИЛЬТР ПО ДАТЕ
	const [filterDate, setFilterDate] = useState('')

	// ФИЛЬТР ПО СТАТУСУ --- НОВОЕ PR4 ---
	const [filterStatus, setFilterStatus] = useState('all') // 'all', 'new', 'confirmed', 'cancelled' 1. новое состояние

	// НОВОЕ
	// after change telegram

	// СОСТОЯНИЕ ДЛЯ ПОИСКА (ЧТО ВВЕЛ ПОЛЬЗОВАТЕЛЬ)
	const [searchQuery, setSearchQuery] = useState('')

	// СОСТОЯНИЕ ДЛЯ ТЕКУЩЕГО ПОИСКА
	// (ПРИМЕНЯЕТСЯ ТОЛЬКО ПОСЛЕ ENTER)
	const [appliedQuery, setAppliedQuery] = useState('')

	// ФИЛЬТР ПО ДАТЕ И СТАТУСУ --- НОВОЕ PR4 --- 2. логика фильтрации
	const filteredBookings = allbookings
		.filter(b => {
			// ФИЛЬТР ПО ДАТЕ
			if (filterDate && b.date !== filterDate) return false
			// ФИЛЬТР ПО СТАТУСУ
			if (filterStatus !== 'all' && b.status !== filterStatus) return false
			// ФИЛЬТР ПО ТЕКСТУ НОВОЕ after change - кнопка поиск брони - <>
			/**
 

// ============================================================
// НОВОЕ ИЗМЕНЕНИЕ: Поиск (фильтрация) по тексту
// ДАТА: Сентябрь 2026
//
// ЕСЛИ appliedQuery НЕ ПУСТОЙ:
//   if (appliedQuery) — проверяем, есть ли введённый текст.
//   Если пусто — фильтр пропускается, показываются все брони.
//
// ЧТО ДЕЛАЕТ `const q = appliedQuery.toLowerCase()`:
//   Приводит введённый текст к нижнему регистру.
//   Зачем: чтобы поиск был нечувствителен к регистру.
//   Пример: если ввести "TEST@MAIL.COM", оно найдёт "test@mail.com".
//
// ЧТО ТАКОЕ `match`:
//   Это переменная, которая хранит true/false — совпало ли что-то.
//   Если хотя бы одно условие верно → match = true.
//   Если ничего не совпало → match = false, и бронь скрывается.
//
// ПОЧЕМУ `b.id.toString().includes(q)`:
//   b.id — это число (например, 12), а q — это строка ("12").
//   Числа в JavaScript не имеют метода .includes().
//   Поэтому мы вызываем .toString(), чтобы превратить число в строку.
//   И уже у строки вызываем .includes(q) — проверяем, есть ли в ней q.
//
// ЧТО ТАКОЕ `.includes(q)`:
//   Это метод строки, который проверяет, содержится ли q внутри строки.
//   Пример: "test@mail.com".includes("mail") → true
//           "test@mail.com".includes("xyz") → false
//
// ПОЛЯ, ПО КОТОРЫМ ИЩЕТ ПОИСК:
//   - b.id → ID брони
//   - b.email → почта гостя
//   - b.date → дата брони
//   - b.time → время брони
//   - b.guests → количество гостей
// ============================================================
*/

			if (appliedQuery) {
				const q = appliedQuery.toLowerCase()
				const match =
					b.id.toString().includes(q) ||
					b.email.toLowerCase().includes(q) ||
					b.date.includes(q) ||
					b.time.includes(q) ||
					b.guests.toString().includes(q)
				if (!match) return false
			}
			// ФИЛЬТР ПО ТЕКСТУ НОВОЕ after change - кнопка поиск брони - <>
			return true
		})

		// ИЗМЕНЕНИЕ СОРТИРОВКА ПО ID
		// - БЕРЕМ ДВА ОБЪЕКТА (a и b)
		// - СРАВНИВАЕМ ИХ ID
		// - ЕСЛИ b.id = a.id > 0, то b идет раньше (то есть новые сверху)
		// - ЧТОБЫ НОВЫЕ БРОНИ БЫЛИ В САМОМ ВЕРХУ ТАБЛИЦЫ
		.sort((a, b) => {
			return b.id - <a href='' className='id'></a>
		})

	// ПАГИНАЦИЯ: ПОКАЗЫВАЕМ ВСЕ ИЛИ ТОЛЬКО ПЕРВЫЕ 8
	const displayedBookings = showAll
		? filteredBookings
		: filteredBookings.slice(0, 8)

	// СОСТОЯНИЕ ЗАГРУЗКИ ДЛЯ СКЕЛЕТОН-АНИМАЦИИ
	const [loading, setLoading] = useState(true)

	return (
		<div className='py-10 px-30'>
			<div className='min-w-6xl mx-auto'>
				{/* ВЕРХНЯЯ ПАНЕЛЬ: ЗАГОЛОВОК + СЧЁТЧИКИ + КНОПКИ */}
				<div className='mt-0 flex justify-between items-center bg-white/70 p-6 rounded-md border-gray-700/80 border-3 shadow-xl'>
					{/* СЧЁТЧИКИ СЛЕВА */}
					<div className='flex flex-col gap-4'>
						<h1 className='text-3xl font-extrabold text-gray-900'>
							Reservations
						</h1>
						<BookingCounterV2 total={allbookings.length} />
						<PendingCounter total={pendingCount} label='new' />
						<TodayCounter total={todayStats.guests} label='guests' />
						<TodayCounter total={todayStats.count} label='reservations' />
					</div>

					{/* ФИЛЬТР ПО ДАТЕ И СТАТУСУ (ПО ЦЕНТРУ) */}
					<div className='flex flex-col items-center gap-2 mb-4 mt-5'>
						<div className='flex items-center gap-4'>
							<label className='text-base font-medium text-gray-700'>
								Filter by date:
								<input
									type='date'
									value={filterDate}
									onChange={e => setFilterDate(e.target.value)}
									className='ml-2 border-2 border-gray-900 rounded-sm px-2 py-1 text-base'
								/>
							</label>
							{/* КНОПКА СБРОСА ФИЛЬТРА (ПОЯВЛЯЕТСЯ ТОЛЬКО КОГДА ФИЛЬТР АКТИВЕН) */}
							{filterDate && (
								<button
									onClick={() => setFilterDate('')}
									className='text-sm text-blue-600 border-2 bg-blue-600/90 text-white/80 border-gray-700/80 px-2.5 py-1.5 rounded-2xl cursor-pointer
              hover:text-white hover:bg-blue-700 hover:border-gray-800'
								>
									Clear filter
								</button>
							)}
						</div>
						{/* ФИЛЬТР ПО СТАТУСУ  ! НОВОЕ PR4 !  3. Кнопки фильтров в интерфейсе */}
						<div className='flex items-center gap-2 mt-2 p-2'>
							<span className='text-sm font-medium text-gray-700 mr-1'>
								Status:
							</span>
							{['all', 'new', 'confirmed', 'cancelled'].map(status => (
								<button
									key={status}
									onClick={() => setFilterStatus(status)}
									className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-800 
									${filterStatus === status ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700 cursor-pointer border-2 hover:bg-blue-200 hover:border-blue-600'}`}
								>
									{status === 'all'
										? 'All'
										: status.charAt(0).toUpperCase() + status.slice(1)}
								</button>
							))}
						</div>
					</div>
					{/* КНОПКИ УПРАВЛЕНИЯ СПРАВА */}
					<div className='flex flex-col gap-10'>
						<button
							onClick={loadBookings}
							className='bg-blue-600 text-white/60 px-4 py-2 rounded-md cursor-pointer text-sm font-medium transition-colors duration-400 border-2 border-gray-600/90
          hover:text-white hover:bg-blue-700 hover:border-gray-800'
						>
							Refresh
						</button>
						<LogoutButton />
						<a
							href='/booking/api/export-xlsx'
							className='bg-green-700 text-white/60 text-center px-4 py-2 rounded-md cursor-pointer text-sm font-medium
               transition-colors duration-400 border-2 border-gray-600/90
          hover:text-white hover:bg-green-800 hover:border-gray-800'
						>
							Export bookings
						</a>
					</div>
				</div>
				<div className='flex justify-center mt-6 mb-4'>
					{/** НОВОЕ after change - кнопка поиск брони -
					 * // ============================================================
// ЧТО ТАКОЕ `searchQuery`:
//   Это состояние (state), которое хранит то, что пользователь
//   печатает в поле прямо сейчас (побуквенно).
//
// ЧТО ТАКОЕ `appliedQuery`:
//   Это состояние, которое хранит уже применённый поиск.
//   Оно обновляется ТОЛЬКО когда пользователь нажмёт Enter.
//   Зачем так сделано: чтобы фильтрация не запускалась на каждую букву,
//   а срабатывала только когда пользователь закончил вводить.
//
// ЧТО ДЕЛАЕТ `value={searchQuery}`:
//   Привязывает значение инпута к состоянию searchQuery.
//   То есть: что в searchQuery → то и в поле.
//   Это называется "контролируемый инпут".
//
// ЧТО ДЕЛАЕТ `onChange={e => setSearchQuery(e.target.value)}`:
//   Срабатывает при каждом изменении текста в поле.
//   `e` — это объект события (event), который содержит всю информацию
//   о том, что произошло (какая клавиша, где курсор и т.д.).
//   `e.target` — это сам элемент input.
//   `e.target.value` — текущий текст в поле.
//   `setSearchQuery(...)` — обновляет состояние новым текстом.
//
// ЧТО ДЕЛАЕТ `onKeyDown`:
//   Срабатывает при нажатии ЛЮБОЙ клавиши в поле.
//   Мы проверяем: если нажата клавиша Enter (e.key === 'Enter'),
//   то копируем текущий searchQuery в appliedQuery.
//   Это и есть момент, когда поиск "применяется".
//
// ЧТО ДЕЛАЕТ `e.key === 'Enter'`:
//   `e.key` — это название нажатой клавиши.
//   Если это 'Enter' → применяем поиск.
//
// ЧТО ДЕЛАЕТ `setAppliedQuery(searchQuery.trim())`:
//   `.trim()` убирает лишние пробелы в начале и конце текста.
//   Пример: "  test  " → "test"
//   Зачем: чтобы случайный пробел не сломал поиск.
// ============================================================
					 */}
					<div className='relative w-full max-w-80'>
						<input
							type='text'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							onKeyDown={e => {
								if (e.key === 'Enter') setAppliedQuery(searchQuery.trim())
							}}
							placeholder='Поиск по ID, email, дате...'
							className='w-80 mx-auto flex pr-5 justify-center border-2 border-gray-600 bg-gray-300 rounded-full px-5 py-2 text-sm
							focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-500'
						/>
						{/** НОВОЕ after change - кнопка поиск брони -
						 * крестик в правой части строки чтобы убрать внесенное
						 * // ============================================================
							 // ЧТО ДЕЛАЕТ:
							 //   При клике сбрасывает оба состояния:
							 //   - searchQuery = '' (очищает поле ввода)
							 //   - appliedQuery = '' (сбрасывает фильтр)
							 //   После этого таблица снова показывает все брони.
							 //
							 // ПОЧЕМУ `{searchQuery && (...)}`:
							 //   Кнопка показывается ТОЛЬКО если в поле что-то введено.
							 //   Если поле пустое — крестик не отображается.
							 // ============================================================
						 */}
						{searchQuery && (
							<button
								onClick={() => {
									setSearchQuery('')
									setAppliedQuery('')
								}}
								className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors
								hover:text-red-600 cursor-pointer'
								title='Очистить'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 16 16'
									fill='currentColor'
									className='size-6'
								>
									<path d='M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z' />
								</svg>
							</button>
						)}
					</div>
				</div>

				{/* СКЕЛЕТОН-ЗАГРУЗКА (ПОКА ДАННЫЕ ГРУЗЯТСЯ) ИЛИ ТАБЛИЦА */}
				{loading ? (
					<div className='space-y-3 animate-pulse mt-4'>
						<div className='h-10 bg-gray-200 rounded w-full'></div>
						<div className='h-10 bg-gray-200 rounded w-full'></div>
						<div className='h-10 bg-gray-200 rounded w-full'></div>
						<div className='h-10 bg-gray-200 rounded w-full'></div>
					</div>
				) : (
					<BookingTableV2
						bookings={displayedBookings}
						onStatusChange={loadBookings}
					/>
				)}
			</div>

			{/* КНОПКА "SHOW ALL / SHOW LESS" (ТОЛЬКО ЕСЛИ БОЛЬШЕ 8 БРОНЕЙ И НЕТ ФИЛЬТРА) ! 4. добавил filteredBookings. PR4 ! */}
			{!filterDate && filteredBookings.length > 8 && (
				<div className='mt-4 text-center '>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-white/70 hover:text-white border-2 border-white/0 hover:border-gray-800 duration-500 hover:underline text-sm font-extrabold px-6 py-2 bg-blue-600 rounded-md uppercase cursor-pointer'
					>
						{showAll ? 'show less' : `show all - ${filteredBookings.length}`}
					</button>
				</div>
			)}
		</div>
	)
}

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
	const loadBookings = useCallback(async () => {
		const res = await fetch('/booking/api')
		const data = await res.json()

		setLoading(true)
		// ЗВУКОВОЕ УВЕДОМЛЕНИЕ, ЕСЛИ ПОЯВИЛАСЬ НОВАЯ БРОНЬ
		if (data.length > prevCountRef.current) {
			const audio = new Audio('/notification.mp3')
			audio.play().catch(() => {}) // ИГНОРИРУЕМ ОШИБКУ, ЕСЛИ БРАУЗЕР БЛОКИРУЕТ ЗВУК
		}
		prevCountRef.current = data.length
		setAllBookings(data)
		setLoading(false)
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

	// ФИЛЬТР ПО ДАТЕ И СТАТУСУ --- НОВОЕ PR4 --- 2. логика фильтрации
	const filteredBookings = allbookings
		.filter(b => {
			// ФИЛЬТР ПО ДАТЕ
			if (filterDate && b.date !== filterDate) return false
			// ФИЛЬТР ПО СТАТУСУ
			if (filterStatus !== 'all' && b.status !== filterStatus) return false
			return true
		})
		.sort((a, b) => {
			// СОРТИРОВКА ПО ДАТЕ (ПО ВОЗРАСТАНИЮ)
			if (a.date !== b.date) return
			a.date.localeCompare(b.date)
			// ЕСЛИ ДАТЫ ОДИНАКОВЫЕ ТО СОРТИРОВКА ПО ВРЕМЕНИ
			return a.time.localeCompare(b.time)
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
							href='/booking/api/export'
							className='bg-green-700 text-white/60 text-center px-4 py-2 rounded-md cursor-pointer text-sm font-medium
               transition-colors duration-400 border-2 border-gray-600/90
          hover:text-white hover:bg-green-800 hover:border-gray-800'
						>
							Export CSV
						</a>
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

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

import PaginationControls from './PaginationControls'
import BookingCard from './BookingCard'

export default function PaginationBooking() {
	// ВСЕ БРОНИ (ПОЛНЫЙ СПИСОК)
	const [allbookings, setAllBookings] = useState([])

	// ОШИБКА ЗАГРУЗКИ (PR4 tg 4.1)
	const [error, setError] = useState(null)

	// ХРАНИТ, БЫЛА ЛИ ПЕРВАЯ ЗАГРУЗКА (PR4 tg 4.5)
	const isFirstLoadRef = useRef(true)

	// ЗАГРУЗКА БРОНЕЙ ИЗ API
	const loadBookings = useCallback(async () => {
		if (isFirstLoadRef.current) setLoading(true)
		setError(null)
		try {
			const res = await fetch('/booking/api')

			if (!res.ok) {
				if (res.status === 401) {
					window.location.href = '/admin/login'
					return
				}
				console.error(`Ошибка загрузки броней: ${res.status}`)
				setError('Failed to load bookings')
				return
			}

			const data = await res.json()

			// ============================================================
			// ЛОГИКА ЗВУКА: Проверяем непрочитанные брони (isRead === false)
			// ============================================================
			const unreadBookings = data.filter(b => b.isRead === false)

			if (unreadBookings.length > 0) {
				// Играем звук
				const audio = new Audio('/notification.mp3')
				audio.play().catch(() => {})

				// Отправляем запрос на сервер, чтобы отметить их как прочитанные
				const unreadIds = unreadBookings.map(b => b.id)
				fetch('/booking/api/mark-read', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ ids: unreadIds }),
				}).catch(err => console.error('Failed to mark read', err))
			}
			// ============================================================

			setAllBookings(data)
		} catch (error) {
			console.error('Ошибка загрузки:', error)
			setError('Failed to load bookings')
		} finally {
			setLoading(false)
			isFirstLoadRef.current = false
		}
	}, [])

	// АВТООБНОВЛЕНИЕ КАЖДЫЕ 60 СЕКУНД
	useEffect(() => {
		loadBookings()
		const interval = setInterval(loadBookings, 60000)
		return () => clearInterval(interval)
	}, [loadBookings])

	// СТАТИСТИКА НА СЕГОДНЯ
	const getTodayStats = () => {
		const now = new Date()
		const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

		const todayBookings = allbookings.filter(
			b => b.date === today && b.status !== 'cancelled',
		)
		return {
			guests: todayBookings.reduce((sum, b) => sum + b.guests, 0),
			count: todayBookings.length,
		}
	}
	const todayStats = getTodayStats()

	// КОЛИЧЕСТВО БРОНЕЙ СО СТАТУСОМ 'new'
	const pendingCount = allbookings.filter(b => b.status === 'new').length

	// ФИЛЬТР ПО ДАТЕ
	const [filterDate, setFilterDate] = useState('')

	// ФИЛЬТР ПО СТАТУСУ
	const [filterStatus, setFilterStatus] = useState('all')

	// СОСТОЯНИЕ ДЛЯ ПОИСКА
	const [searchQuery, setSearchQuery] = useState('')
	const [appliedQuery, setAppliedQuery] = useState('')

	const hasFilter =
		filterDate !== '' || filterStatus !== 'all' || appliedQuery !== ''

	const handleClearFilters = () => {
		setFilterDate('')
		setFilterStatus('all')
		setSearchQuery('')
		setAppliedQuery('')
		setCurrentPage(1)
	}

	// СОРТИРОВКА
	const [sortColumn, setSortColumn] = useState('id')
	const [sortDirection, setSortDirection] = useState('desc')

	// ПАГИНАЦИЯ
	const [currentPage, setCurrentPage] = useState(1)
	const [perPage, setPerPage] = useState(8)

	// ФИЛЬТРАЦИЯ И СОРТИРОВКА
	const filteredBookings = allbookings
		.filter(b => {
			if (filterDate && b.date !== filterDate) return false
			if (filterStatus !== 'all' && b.status !== filterStatus) return false

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
			return true
		})
		.sort((a, b) => {
			const aVal = a[sortColumn]
			const bVal = b[sortColumn]
			if (aVal === bVal) return 0

			let result
			if (typeof aVal === 'number' && typeof bVal === 'number') {
				result = aVal - bVal
			} else if (sortColumn === 'createdAt') {
				result = new Date(aVal).getTime() - new Date(bVal).getTime()
			} else {
				result = String(aVal).localeCompare(String(bVal))
			}
			return sortDirection === 'asc' ? result : -result
		})

	const handleSort = column => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
		} else {
			setSortColumn(column)
			setSortDirection('asc')
		}
		setCurrentPage(1)
	}

	// ПАГИНАЦИЯ
	const StartIndex = (currentPage - 1) * perPage
	const EndIndex = StartIndex + perPage
	const totalPages = Math.ceil(filteredBookings.length / perPage)
	const displayedBookings = filteredBookings.slice(StartIndex, EndIndex)

	// СОСТОЯНИЕ ЗАГРУЗКИ
	const [loading, setLoading] = useState(true)

	return (
		<div className='py-10'>
			<div className='max-w-7xl mx-auto'>
				{/* ВЕРХНЯЯ ПАНЕЛЬ */}
				<div className='w-95 mx-auto md:w-full md:px-20'>
					<div className='mt-0 flex flex-col md:flex-row justify-between items-center bg-white/70 p-6 rounded-md border-gray-700/80 border-3 shadow-xl'>
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

						{/* ФИЛЬТР ПО ДАТЕ И СТАТУСУ */}
						<div className='flex flex-col items-center gap-2 mb-4 mt-5'>
							<div className='flex flex-col md:flex-row items-center gap-4'>
								<label className='text-base font-medium text-gray-700'>
									Filter by date:
									<input
										aria-label='Filter bookings ba date'
										type='date'
										value={filterDate}
										onChange={e => {
											setFilterDate(e.target.value)
											setCurrentPage(1)
										}}
										className='ml-2 border-2 border-gray-900 rounded-sm px-2 py-1 text-base'
									/>
								</label>
								{filterDate && (
									<button
										onClick={() => {
											setFilterDate('')
											setCurrentPage(1)
										}}
										className='text-sm text-blue-600 border-2 bg-blue-600/90 text-white/80 border-gray-700/80 px-2.5 py-1.5 rounded-2xl cursor-pointer
                     hover:text-white hover:bg-blue-700 hover:border-gray-800'
									>
										Clear filter
									</button>
								)}
							</div>
							<div
								className='flex items-center gap-2 mt-2 p-2'
								role='group'
								aria-label='Filter by status'
							>
								<span className='text-sm font-medium text-gray-700 mr-1'>
									Status:
								</span>
								{['all', 'new', 'confirmed', 'cancelled'].map(status => (
									<button
										key={status}
										onClick={() => {
											setFilterStatus(status)
											setCurrentPage(1)
										}}
										aria-pressed={filterStatus === status}
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
				</div>

				{/* ПОИСК */}
				<div className='flex justify-center mt-6 mb-4'>
					<div className='relative w-full max-w-80'>
						<label htmlFor='search-bookings' className='sr-only'>
							Search bookings
						</label>
						<input
							id='search-bookings'
							aria-label='Search bookings by: ID, email, or date'
							type='text'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							onKeyDown={e => {
								if (e.key === 'Enter') setAppliedQuery(searchQuery.trim())
								setCurrentPage(1)
							}}
							placeholder='Поиск по ID, email, дате...'
							className='w-full mx-auto flex pr-5 justify-center border-2 border-gray-600 bg-gray-300 rounded-full px-5 py-2 text-sm
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-500'
						/>
						{searchQuery && (
							<button
								onClick={() => {
									setSearchQuery('')
									setAppliedQuery('')
								}}
								aria-label='Clear search'
								className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors
                hover:text-red-600 cursor-pointer'
								title='Clear search'
							>
								<svg
									aria-hidden='true'
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

				{/* ОШИБКА */}
				{error && (
					<div className='bg-red-100 border-2 border-red-400 text-red-700 px-6 py-4 rounded-md mt-4 flex items-center mx-auto w-90 justify-between'>
						<span className='font-medium'>{error}</span>
						<button
							onClick={loadBookings}
							className='bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors duration-500
            hover:bg-red-700'
						>
							Retry
						</button>
					</div>
				)}

				{/* ТАБЛИЦА / СКЕЛЕТОН */}
				{loading ? (
					<div className='space-y-3 animate-pulse mt-4'>
						<div className='h-10 bg-gray-200 rounded w-full'></div>
						<div className='h-10 bg-gray-200 rounded w-full'></div>
						<div className='h-10 bg-gray-200 rounded w-full'></div>
						<div className='h-10 bg-gray-200 rounded w-full'></div>
					</div>
				) : (
					<>
						<div className='hidden lg:block px-10'>
							<BookingTableV2
								bookings={displayedBookings}
								onStatusChange={loadBookings}
								hasFilter={hasFilter}
								onClearFilters={handleClearFilters}
								sortColumn={sortColumn}
								sortDirection={sortDirection}
								onSort={handleSort}
							/>
						</div>

						<div className='block lg:hidden space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 p-10'>
							{displayedBookings.length === 0 ? (
								<div className='bg-white/90 shadow-lg rounded-xl p-8 text-center col-span-full'>
									{hasFilter ? (
										<div className='flex flex-col items-center gap-3'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 16 16'
												fill='currentColor'
												className='size-15 text-red-600/90'
											>
												<path
													fillRule='evenodd'
													d='M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
													clipRule='evenodd'
												/>
											</svg>
											<p className='text-xl font-medium text-gray-500'>
												No result for your filters
											</p>
											<p className='text-sm text-gray-400'>
												Try changing or clearing your filters
											</p>
											<button
												onClick={handleClearFilters}
												className='mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer hover:bg-blue-700'
											>
												Clear filters
											</button>
										</div>
									) : (
										<div className='flex flex-col items-center gap-3'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 16 16'
												fill='currentColor'
												className='size-15 text-red-600/90'
											>
												<path
													fillRule='evenodd'
													d='M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
													clipRule='evenodd'
												/>
											</svg>
											<p className='text-xl font-medium text-gray-500'>
												No reservations yet
											</p>
											<p className='text-sm text-gray-400'>
												There are no bookings at the moment.
											</p>
										</div>
									)}
								</div>
							) : (
								displayedBookings.map(b => (
									<BookingCard
										key={b.id}
										booking={b}
										onStatusChange={loadBookings}
										isSelected={false}
										onToggleSelect={() => {}}
									/>
								))
							)}
						</div>
					</>
				)}

				{/* ПАГИНАЦИЯ */}
				{filteredBookings.length > 0 && (
					<PaginationControls
						currentPage={currentPage}
						totalPages={totalPages}
						totalItems={filteredBookings.length}
						perPage={perPage}
						onPageChange={setCurrentPage}
					/>
				)}
			</div>
		</div>
	)
}

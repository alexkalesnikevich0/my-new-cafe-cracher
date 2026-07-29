'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import BookingCounterV2 from './BookingCounterV2'
import BookingTableV2 from './BookingTableV2'
import TodayCounter from './TodayCounter'
import PendingCounter from './PendingCounter'
import LogoutButton from '@/app/admin/logout/logoutButton'

export default function PaginationBooking() {
	const [allbookings, setAllBookings] = useState([])

	const [showAll, setShowAll] = useState(false)

	const prevCountRef = useRef(0)

	const loadBookings = useCallback(async () => {
		const res = await fetch('/booking/api')
		const data = await res.json()

		if (data.length > prevCountRef.current) {
			const audio = new Audio('/notification.mp3')
			audio.play().catch(() => {})
		}
		prevCountRef.current = data.length
		setAllBookings(data)
	}, [])

	useEffect(() => {
		loadBookings()
		const interval = setInterval(loadBookings, 60000)
		return () => clearInterval(interval)
	}, [loadBookings])

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

	const pendingCount = allbookings.filter(b => b.status === 'new').length

	const [filterDate, setFilterDate] = useState('')

	const filteredBookings = filterDate
		? allbookings
				.filter(b => b.date === filterDate)
				.sort((a, b) => {
					if (a.date !== b.date) return a.date.localeCompare(b.date)
					return a.time.localeCompare(b.time)
				})
		: allbookings

	const displayedBookings = showAll
		? filteredBookings
		: filteredBookings.slice(0, 8)

	return (
		<div className='py-10 px-30'>
			<div className='min-w-6xl mx-auto'>
				<div className='mt-0 flex justify-between items-center bg-white/70 p-6 rounded-md border-gray-700/80 border-3 shadow-xl'>
					<div className='flex flex-col gap-4'>
						<h1 className='text-3xl font-extrabold text-gray-900'>
							Reservations
						</h1>
						<BookingCounterV2 total={allbookings.length} />
						<PendingCounter total={pendingCount} label='new' />
						<TodayCounter total={todayStats.guests} label='guests' />
						<TodayCounter total={todayStats.count} label='reservations' />
					</div>
					<div className='flex items-center gap-4 mb-4 mt-5'>
						<label className='text-base font-medium text-gray-700'>
							Filter by date:
							<input
								type='date'
								value={filterDate}
								onChange={e => setFilterDate(e.target.value)}
								className='ml-2 border-2 border-gray-900 rounded-sm px-2 py-1 text-base'
							/>
						</label>

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
				<BookingTableV2
					bookings={displayedBookings}
					onStatusChange={loadBookings}
				/>
			</div>
			{!filterDate && allbookings.length > 8 && (
				<div className='mt-4 text-center '>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-white/70 hover:text-white border-2 border-white/0 hover:border-gray-800 duration-500 hover:underline text-sm font-extrabold px-6 py-2 bg-blue-600 rounded-md uppercase cursor-pointer'
					>
						{showAll ? 'show less' : `show all - ${allbookings.length}`}
					</button>
				</div>
			)}
		</div>
	)
}

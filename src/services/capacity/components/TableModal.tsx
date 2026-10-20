/**
 * ФАЙЛ: services/capacity/components/TableModal.tsx
 *
 * МОДАЛКА СТОЛА (PR 6.5.4 / 6.7 / 6.8 / 6.9).
 * Три колонки: Инфо+Форма | Брони стола | Ожидающие брони.
 */

'use client'

import { useEffect, useState } from 'react'
import { createBookingCapacity } from '../actions/createBookingCapacity'
import { assignBookingToTable } from '../actions/assignBookingToTable'
import toast from 'react-hot-toast'

interface TableData {
	id: number
	number: number
	capacity: number
	occupied: number
	status: 'free' | 'busy'
}

interface BookingData {
	id: number
	guests: number
	time: string
	email: string
}

interface TableModalProps {
	table: TableData | null
	onClose: () => void
	onSaved: () => void
}

export default function TableModal({
	table,
	onClose,
	onSaved,
}: TableModalProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [time, setTime] = useState('19:00')
	const [pendingBookings, setPendingBookings] = useState<BookingData[]>([])
	const [bookings, setBookings] = useState<BookingData[]>([])
	const [isLoadingBookings, setIsLoadingBookings] = useState(true)

	const today = new Date().toISOString().split('T')[0]

	useEffect(() => {
		function handleEsc(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [onClose])

	useEffect(() => {
		if (!table) return

		setIsLoadingBookings(true)
		fetch(`/api/tables/${table.id}`)
			.then(res => res.json())
			.then(data => setBookings(data.bookings || []))
			.catch(() => toast.error('Failed to load bookings'))
			.finally(() => setIsLoadingBookings(false))

		fetch('/api/bookings/pending')
			.then(res => res.json())
			.then(data => setPendingBookings(data || []))
	}, [table])

	if (!table) return null

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		const formData = new FormData(e.currentTarget)
		const result = await createBookingCapacity(formData)

		if (result.error) {
			toast.error(result.error)
		} else {
			toast.success(result.success || 'Booking created!')
			if (onSaved) onSaved()
			onClose()
		}

		setIsSubmitting(false)
	}

	const handleAssign = async (bookingId: number) => {
		if (!table) return

		const result = await assignBookingToTable(bookingId, table.id)

		if (result.error) {
			toast.error(result.error)
		} else {
			toast.success('Booking assigned to table!')
			fetch(`/api/tables/${table.id}`)
				.then(res => res.json())
				.then(data => setBookings(data.bookings || []))
			fetch('/api/bookings/pending')
				.then(res => res.json())
				.then(data => setPendingBookings(data || []))
			if (onSaved) onSaved()
		}
	}

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'
			onClick={onClose}
		>
			{/* 
        Модалка: max-w-6xl (очень широкая), чтобы влезли 3 колонки.
        max-h-[90vh] и overflow-hidden, чтобы ограничить высоту экрана.
      */}
			<div
				className='bg-white rounded-xl shadow-2xl border-1 border-black/70 w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden'
				onClick={e => e.stopPropagation()}
			>
				{/* ЗАГОЛОВОК МОДАЛКИ */}
				<div className='flex justify-between items-center p-6 border-b border-gray-200 bg-gray-50 shrink-0'>
					<h2 className='text-2xl font-bold text-gray-900'>
						Table #{table.number}
					</h2>
					<button
						type='button'
						onClick={onClose}
						className='text-gray-400 hover:text-gray-700 text-2xl leading-none cursor-pointer'
					>
						x
					</button>
				</div>

				{/* 
          ОСНОВНОЙ КОНТЕНТ (3 колонки)
          На мобильных: 1 колонка (flex-col).
          На больших экранах (lg): 3 колонки (lg:flex-row).
          overflow-y-auto для всего контейнера.
        */}
				<div className='flex flex-col lg:flex-row flex-1 overflow-y-auto'>
					{/* === КОЛОНКА 1: Информация и Форма === */}
					<div className='w-full lg:w-1/3 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col'>
						<div className='space-y-2 mb-6'>
							<p className='text-gray-700'>
								<span className='font-semibold'>Capacity:</span>{' '}
								{table.capacity} seats
							</p>
							<p className='text-gray-700'>
								<span className='font-semibold'>Busy now:</span>{' '}
								{table.occupied} seats
							</p>
							<p className='text-gray-700'>
								<span className='font-semibold'>Status:</span>{' '}
								<span
									className={
										table.status === 'free'
											? 'text-green-600 font-bold'
											: 'text-red-600 font-bold'
									}
								>
									{table.status === 'free' ? 'Free' : 'Busy'}
								</span>
							</p>
						</div>

						{table.status === 'free' ? (
							<form
								onSubmit={handleSubmit}
								className='space-y-4 bg-gray-50 p-4 rounded-lg mt-auto'
							>
								<h3 className='font-semibold text-gray-900 text-lg mb-2'>
									Create booking
								</h3>
								<input type='hidden' name='date' value={today} />
								<input type='hidden' name='tableId' value={table.id} />

								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Guest email
									</label>
									<input
										type='email'
										name='email'
										required
										placeholder='guest@example.com'
										className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900'
									/>
								</div>

								<div className='flex gap-3'>
									<div className='flex-1'>
										<label className='block text-sm font-medium text-gray-700'>
											Time
										</label>
										<input
											type='time'
											name='time'
											required
											value={time}
											onChange={e => setTime(e.target.value)}
											className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900'
										/>
									</div>
									<div className='w-24'>
										<label className='block text-sm font-medium text-gray-700'>
											Guests
										</label>
										<input
											type='number'
											name='guests'
											min='1'
											max={table.capacity}
											defaultValue={1}
											required
											className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900'
										/>
									</div>
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors disabled:opacity-50'
								>
									{isSubmitting ? 'Creating...' : 'Create booking'}
								</button>
							</form>
						) : (
							<div className='bg-red-50 text-red-700 p-4 rounded-lg text-sm mt-auto'>
								Table already booked. You can not book this table for this time.
							</div>
						)}
					</div>

					{/* === КОЛОНКА 2: Today's Bookings === */}
					<div className='w-full lg:w-1/3 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col bg-white'>
						<h3 className='font-semibold text-gray-900 mb-4 text-lg shrink-0'>
							Today&apos;s bookings
						</h3>

						{isLoadingBookings ? (
							<p className='text-sm text-gray-500 animate-pulse'>Loading...</p>
						) : bookings.length === 0 ? (
							<p className='text-sm text-gray-500'>
								No bookings for this table
							</p>
						) : (
							// Список со скроллом
							<ul className='space-y-2 overflow-y-auto flex-1 pr-1'>
								{bookings.map(b => (
									<li
										key={b.id}
										className='bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm text-gray-800'
									>
										<div className='flex justify-between font-bold mb-1'>
											<span>{b.time}</span>
											<span>{b.guests} guests</span>
										</div>
										<div className='text-xs text-gray-600 truncate'>
											{b.email}
										</div>
									</li>
								))}
							</ul>
						)}
					</div>

					{/* === КОЛОНКА 3: Pending Bookings === */}
					<div className='w-full lg:w-1/3 p-6 flex flex-col bg-gray-50'>
						<h3 className='font-semibold text-yellow-900 mb-1 text-lg shrink-0'>
							Pending bookings
						</h3>
						<p className='text-xs text-yellow-700 mb-4 shrink-0'>
							Click Assign to seat them
						</p>

						{pendingBookings.length === 0 ? (
							<p className='text-sm text-gray-500'>No pending bookings</p>
						) : (
							// Список со скроллом
							<ul className='space-y-2 overflow-y-auto flex-1 pr-1'>
								{pendingBookings.map(b => (
									<li
										key={b.id}
										className='bg-white border border-yellow-300 p-3 rounded-lg text-sm shadow-sm flex flex-col gap-2'
									>
										<div className='flex justify-between font-bold text-gray-800'>
											<span>{b.time}</span>
											<span>{b.guests} guests</span>
										</div>
										<div className='text-xs text-gray-500 truncate'>
											{b.email}
										</div>
										<button
											onClick={() => handleAssign(b.id)}
											className='w-full bg-blue-600 text-white cursor-pointer px-2 py-1.5 rounded text-xs hover:bg-blue-700 transition-colors font-medium mt-1'
										>
											Assign to Table #{table.number}
										</button>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

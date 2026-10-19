/**
 * ФАЙЛ: services/capacity/components/TableModal.tsx
 *
 * МОДАЛКА СТОЛА (PR 6.5.4 / 6.7 / 6.8).
 * Показывает информацию о столе, список броней и форму создания.
 */

'use client'

import { useEffect, useState } from 'react'
import { createBookingCapacity } from '../actions/createBookingCapacity'
import toast from 'react-hot-toast'

// ==
// ТИПЫ
// ==

interface TableData {
	id: number
	number: number
	capacity: number
	occupied: number
	status: 'free' | 'busy'
}

// 6.7: тип для брони, которую мы получаем из API
interface BookingData {
	id: number
	guests: number
	time: string
	email: string
}

interface TableModalProps {
	table: TableData | null
	onClose: () => void
	onSaved: () => void // 6.8 callback для обновления схемы после брони
}

// ==
// КОМПОНЕНТ
// ==
export default function TableModal({
	table,
	onClose,
	onSaved,
}: TableModalProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [time, setTime] = useState('19:00')

	// 6.7: состояния для списка броней
	const [bookings, setBookings] = useState<BookingData[]>([])
	const [isLoadingBookings, setIsLoadingBookings] = useState(true)

	const today = new Date().toISOString().split('T')[0]

	// Esc закрывает модалку
	useEffect(() => {
		function handleEsc(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [onClose])

	// 6.7: Загружаем брони при открытии модалки
	useEffect(() => {
		if (!table) return

		setIsLoadingBookings(true)
		fetch(`/api/tables/${table.id}`)
			.then(res => res.json())
			.then(data => {
				setBookings(data.bookings || [])
			})
			.catch(() => toast.error('Failed to load bookings'))
			.finally(() => setIsLoadingBookings(false))
	}, [table])

	// Если table null — не рендерим
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
			if (onSaved) onSaved() // сообщаем родителю (TablesGrid), чтобы он обновил схему
			onClose() // закрываем модалку
		}

		setIsSubmitting(false)
	}

	return (
		// ЗАТЕМНЁННЫЙ ФОН
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'
			onClick={onClose}
		>
			<div
				className='bg-white rounded-xl shadow-2xl p-6 w-full max-w-md'
				onClick={e => e.stopPropagation()}
			>
				{/* ЗАГОЛОВОК */}
				<div className='flex justify-between items-center mb-4'>
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

				{/* ИНФОРМАЦИЯ О СТОЛЕ */}
				<div className='space-y-2 mb-6'>
					<p className='text-gray-700'>
						<span className='font-semibold'>Capacity:</span> {table.capacity}{' '}
						seats
					</p>
					<p className='text-gray-700'>
						<span className='font-semibold'>Busy now:</span> {table.occupied}{' '}
						seats
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

				{/* 6.7: СПИСОК БРОНЕЙ НА СЕГОДНЯ */}
				<div className='mb-6 border-t border-gray-200 pt-4'>
					<h3 className='font-semibold text-gray-900 mb-2'>
						Today&apos;s bookings
					</h3>
					{isLoadingBookings ? (
						<p className='text-sm text-gray-500 animate-pulse'>Loading...</p>
					) : bookings.length === 0 ? (
						<p className='text-sm text-gray-500'>No bookings for this table</p>
					) : (
						<ul className='space-y-2'>
							{bookings.map(b => (
								<li
									key={b.id}
									className='bg-blue-50 border border-blue-200 p-2 rounded text-sm text-gray-800'
								>
									<span className='font-bold'>{b.time}</span> — {b.guests}{' '}
									guests ({b.email})
								</li>
							))}
						</ul>
					)}
				</div>

				{/* ФОРМА БРОНИРОВАНИЯ (только если стол свободен */}
				{table.status === 'free' ? (
					<form
						onSubmit={handleSubmit}
						className='mb-6 space-y-3 bg-gray-50 p-4 rounded-lg'
					>
						{/* Скрытые поля: дата и ID стола */}
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
								className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900'
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
									className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900'
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
									className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900'
								/>
							</div>
						</div>

						<button
							type='submit'
							disabled={isSubmitting}
							className='w-full bg-green-600 text-white px-4 py-2 cursor-pointer rounded-md font-medium hover:bg-green-700 transition-colors disabled:opacity-50 mt-2'
						>
							{isSubmitting ? 'Creating...' : 'Create booking'}
						</button>
					</form>
				) : (
					<div className='mb-6 bg-red-50 text-red-700 p-4 rounded-lg text-sm'>
						Table already booked. You can not booking this table on this time.
					</div>
				)}
			</div>
		</div>
	)
}

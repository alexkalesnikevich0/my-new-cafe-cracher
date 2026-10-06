/**
 * ФАЙЛ: app/booking/V2/BookingCard.jsx
 *
 * КАРТОЧКА БРОНИ ДЛЯ МОБИЛКИ И ПЛАНШЕТА (PR4 tg 4.6)
 * Используется вместо таблицы на экранах < 1024px
 *
 * @param {object} booking - ОБЪЕКТ БРОНИ
 * @param {function} onStatusChange - ФУНКЦИЯ ОБНОВЛЕНИЯ
 * @param {boolean} isSelected - ВЫБРАНА ЛИ БРОНЬ (чекбокс)
 * @param {function} onToggleSelect - ПЕРЕКЛЮЧИТЬ ВЫБОР
 */
'use client'

import { useState } from 'react'
import ConfirmModal from './confirmModal'
import toast from 'react-hot-toast'
import { updateBookingStatus } from '@/app/booking/actions/updateStatus'

export default function BookingCard({
	booking,
	onStatusChange,
	isSelected,
	onToggleSelect,
}) {
	const [modal, setModal] = useState(null)

	// ПОДТВЕРЖДЕНИЕ БРОНИ PR4 4.6 tg 2 changes
	async function handleConfirm(id) {
		try {
			await updateBookingStatus(id, 'confirmed')
			onStatusChange()
		} catch (error) {
			console.error('Ошибка подтверждения:', error)
			toast.error('Failed to confirm booking')
		}
	}

	// ОТМЕНА БРОНИ (PR4 tg 4.6)
	async function handleCancel(id) {
		try {
			await updateBookingStatus(id, 'cancelled')
			onStatusChange()
		} catch (error) {
			console.error('Ошибка отмены брони:', error)
			toast.error('Failed to cancel booking')
		}
	}

	// КОПИРОВАНИЕ БРОНИ (PR4 tg 4.6)
	const copyBooking = () => {
		const text = `ID: #${booking.id} | Guests: ${booking.guests} | Date: ${booking.date} | Time: ${booking.time} | Email: ${booking.email} | Status: ${booking.status}`

		// PR4 tg 4.6 — fallback для http (незащищённый контекст)
		if (navigator.clipboard && window.isSecureContext) {
			// Современный метод (работает на https и localhost)
			navigator.clipboard
				.writeText(text)
				.then(() => toast.success('Reservation copied!'))
				.catch(() => {
					// Если не сработало — fallback
					fallbackCopy(text)
				})
		} else {
			// Fallback для http (локальная сеть)
			fallbackCopy(text)
		}
	}

	// Вспомогательная функция — старый способ копирования
	const fallbackCopy = text => {
		const textarea = document.createElement('textarea')
		textarea.value = text
		textarea.style.position = 'fixed'
		textarea.style.opacity = '0'
		document.body.appendChild(textarea)
		textarea.select()
		try {
			document.execCommand('copy')
			toast.success('Reservation copied!')
		} catch (err) {
			console.error('Не удалось скопировать:', err)
			toast.error('Failed to copy')
		}
		document.body.removeChild(textarea)
	}

	// ИНДИКАТОР ВРЕМЕНИ (PR4 tg 4.6) — копия из BookingTableV2
	const getTimeColor = (bookingDate, bookingTime) => {
		const now = new Date()
		const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

		if (bookingDate !== today) return 'bg-gray-300'

		const [hours, minutes] = bookingTime.split(':').map(Number)
		const bookingTotalMinutes = hours * 60 + minutes
		const currentTotalMinutes = now.getHours() * 60 + now.getMinutes()
		const diff = bookingTotalMinutes - currentTotalMinutes

		if (diff < 60) return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'
		if (diff < 180) return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]'
		return 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]'
	}

	// ЦВЕТ СТАТУСА (PR4 tg 4.6)
	const statusColor =
		booking.status === 'confirmed'
			? 'bg-green-500/70 text-green-800'
			: booking.status === 'cancelled'
				? 'bg-red-300/80 text-red-800'
				: 'bg-yellow-400/70 text-yellow-900'

	const statusLabel =
		booking.status === 'confirmed'
			? 'Confirmed'
			: booking.status === 'cancelled'
				? 'Cancelled'
				: 'new'

	return (
		<div className='px-5'>
			<div className='bg-white/90 shadow-lg rounded-xl border border-gray-200 p-4 flex flex-col gap-3'>
				{/* ВЕРХНЯЯ СТРОКА: чекбокс, ID, статус */}
				<div className='flex items-center justify-between gap-2'>
					<div className='flex items-center gap-3'>
						{booking.status === 'new' && (
							<input
								type='checkbox'
								checked={isSelected}
								onChange={() => onToggleSelect(booking.id)}
								className='cursor-pointer w-5 h-5'
							/>
						)}
						<div className='flex items-center gap-2'>
							<span
								className={`w-3 h-3 rounded-full ${getTimeColor(booking.date, booking.time)}`}
							></span>
							<span className='font-mono font-bold text-gray-700'>
								#{booking.id}
							</span>
						</div>
					</div>
					<span
						className={`px-2.5 py-1 uppercase rounded-full text-xs font-medium ${statusColor}`}
					>
						{statusLabel}
					</span>
				</div>

				{/* ДАННЫЕ БРОНИ */}
				<div className='flex flex-col gap-2 text-sm'>
					{/* GUESTS */}
					<div className='flex items-center gap-2 text-gray-700'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='w-4 h-4 text-blue-700 shrink-0'
						>
							<path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
						</svg>
						<span className='font-medium text-gray-500'>Guests:</span>
						<span className='text-gray-900 font-semibold'>
							{booking.guests}
						</span>
					</div>
					{/* DATE */}
					<div className='flex items-center gap-2 text-gray-700'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='w-4 h-4 text-blue-700 shrink-0'
						>
							<path d='M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0ZM2.5 6.5v7.75c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V6.5h-11Z' />
						</svg>
						<span className='font-medium text-gray-500'>Date:</span>
						<span className='text-gray-900'>{booking.date}</span>
					</div>
					{/* TIME */}
					<div className='flex items-center gap-2 text-gray-700'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='w-4 h-4 text-blue-700 shrink-0'
						>
							<path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.75.75 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z' />
						</svg>
						<span className='font-medium text-gray-500'>Time:</span>
						<span className='text-gray-900'>{booking.time}</span>
					</div>
					{/* EMAIL */}
					<div className='flex items-center gap-2 text-gray-700'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='w-4 h-4 text-blue-700 shrink-0'
						>
							<path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
							<path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
						</svg>
						<span className='font-medium text-gray-500'>Email:</span>
						<span className='text-gray-900 truncate'>{booking.email}</span>
					</div>
					{/* CREATED */}
					<div className='flex items-center gap-2 text-gray-500 text-xs mt-1'>
						<span>Created:</span>
						<span>
							{new Date(booking.createdAt).toLocaleString('ru-RU', {
								day: '2-digit',
								month: '2-digit',
								year: 'numeric',
								hour: '2-digit',
								minute: '2-digit',
							})}
						</span>
					</div>
				</div>

				{/* КНОПКИ ДЕЙСТВИЙ — В СТОЛБИК */}
				<div className='flex flex-col gap-2 mt-2'>
					{booking.status === 'new' ? (
						<div className='flex flex-col gap-2'>
							<button
								onClick={() => setModal({ type: 'confirm', id: booking.id })}
								className='w-full bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer
                transition-colors duration-300 hover:bg-green-700'
							>
								Confirm
							</button>
							<button
								onClick={() => setModal({ type: 'cancel', id: booking.id })}
								className='w-full bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer
                transition-colors duration-300 hover:bg-red-700'
							>
								Cancel
							</button>
						</div>
					) : (
						<div className='text-center text-sm font-bold py-1'>
							{booking.status === 'confirmed' ? (
								<span className='text-green-900'>Confirmed</span>
							) : (
								<span className='text-red-900'>Cancelled</span>
							)}
						</div>
					)}
					<button
						onClick={copyBooking}
						className='w-full bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer
            transition-colors duration-300 hover:bg-blue-700'
						title='Copy booking'
						aria-label='Copy booking'
					>
						Copy
					</button>
				</div>
				{/* МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ */}
				{modal && (
					<ConfirmModal
						message={`Are you sure you want to ${modal.type} this reservation?`}
						onConfirm={() => {
							if (modal.type === 'confirm') handleConfirm(modal.id)
							else handleCancel(modal.id)
							setModal(null)
						}}
						onCancel={() => setModal(null)}
					/>
				)}
			</div>
		</div>
	)
}

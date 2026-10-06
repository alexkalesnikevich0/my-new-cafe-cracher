/**
 * ФАЙЛ: app/booking/V2/BookingTableV2.jsx
 *
 * «ГЛУПЫЙ» КОМПОНЕНТ — ТОЛЬКО ОТОБРАЖАЕТ ТАБЛИЦУ С БРОНЬЮ.
 * НЕ ДЕЛАЕТ fetch, НЕ ХРАНИТ СОСТОЯНИЕ (КРОМЕ МОДАЛЬНОГО ОКНА).
 * ПОЛУЧАЕТ ДАННЫЕ ЧЕРЕЗ ПРОПСЫ ОТ РОДИТЕЛЯ (PaginationBooking).
 *
 * @param {Array} bookings - МАССИВ БРОНЕЙ
 * @param {function} onStatusChange - ФУНКЦИЯ ОБНОВЛЕНИЯ ТАБЛИЦЫ ПОСЛЕ CONFIRM/CANCEL
 */
'use client'
import {
	updateBookingStatus,
	updateManyBookingStatus,
} from '@/app/booking/actions/updateStatus'

import { useState } from 'react'
import ConfirmModal from './confirmModal'

import toast from 'react-hot-toast'

export default function BookingTableV2({
	bookings,
	onStatusChange,
	hasFilter,
	onClearFilters,
	sortColumn,
	sortDirection,
	onSort,
}) {
	// ПОДТВЕРЖДЕНИЕ БРОНИ
	async function handleConfirm(id) {
		try {
			await updateBookingStatus(id, 'confirmed')
			onStatusChange()
		} catch (error) {
			console.error('Ошибка подтверждения:', error)
			toast.error('Failed to confirm booking')
		}
	}

	// ОТМЕНА БРОНИ
	async function handleCancel(id) {
		try {
			await updateBookingStatus(id, 'cancelled')
			onStatusChange()
		} catch (error) {
			console.error('Ошибка отмены:', error)
			toast.error('Failed to cancel booking')
		}
	}

	// СОСТОЯНИЕ ДЛЯ МОДАЛЬНОГО ОКНА ПОДТВЕРЖДЕНИЯ
	const [modal, setModal] = useState(null)

	// ЦВЕТ ИНДИКАТОРА ВРЕМЕНИ
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

	// КОПИРОВАНИЕ БРОНИ
	const copyBooking = b => {
		const text = `ID: #${b.id} | Guests: ${b.guests} | Date: ${b.date} | Time: ${b.time} | Email: ${b.email} | Status: ${b.status}`
		navigator.clipboard.writeText(text)
		toast.success('Reservation copied!')
	}

	// СОСТОЯНИЕ ДЛЯ ВЫБРАННЫХ БРОНЕЙ
	const [selectedIds, setSelectedIds] = useState([])

	const toggleSelect = id => {
		setSelectedIds(prev =>
			prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id],
		)
	}

	const toggleSelectAll = () => {
		const newBookings = bookings.filter(b => b.status === 'new').map(b => b.id)

		if (selectedIds.length === newBookings.length) {
			setSelectedIds([])
		} else {
			setSelectedIds(newBookings)
		}
	}

	async function handleMassConfirm() {
		if (selectedIds.length === 0) return

		const result = await updateManyBookingStatus(selectedIds, 'confirmed')

		if (result.success) {
			toast.success(result.success)
			setSelectedIds([])
			onStatusChange()
		} else {
			toast.error(result.error || 'Что-то пошло не так')
		}
	}

	async function handleMassCancel() {
		if (selectedIds.length === 0) return

		const result = await updateManyBookingStatus(selectedIds, 'cancelled')

		if (result.success) {
			toast.success(result.success)
			setSelectedIds([])
			onStatusChange()
		} else {
			toast.error(result.error || 'Что-то пошло не так')
		}
	}

	// ИНДИКАТОР СОРТИРОВКИ (PR4 4.4)
	function SortIndicator({ column }) {
		if (sortColumn !== column) return null

		return (
			<span className='ml-1 inline-flex items-center'>
				{sortDirection === 'asc' ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='currentColor'
						className='w-3 h-3 text-blue-700'
					>
						<path
							fillRule='evenodd'
							d='M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z'
							clipRule='evenodd'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='currentColor'
						className='w-3 h-3 text-blue-700'
					>
						<path
							fillRule='evenodd'
							d='M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2Z'
							clipRule='evenodd'
						/>
					</svg>
				)}
			</span>
		)
	}

	return (
		<div>
			{/* ПАНЕЛЬ МАССОВЫХ ДЕЙСТВИЙ */}
			<div
				className={`mb-4 overflow-hidden transition-all duration-2200 ease-in-out
            ${selectedIds.length > 0 ? 'max-h-40 opacity-100 ' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex items-center justify-center mx-auto gap-5 bg-white/70 border-gray-700/80 w-[50%] border-2 rounded-lg p-3'>
					<span className='text-sm font-medium text-black/70'>
						Selected:{' '}
						<span className='text-black text-lg'>{selectedIds.length}</span>
					</span>
					<button
						onClick={handleMassConfirm}
						className='bg-green-700 text-white/70 px-4 py-2 rounded-md text-xs font-semibold border-2 border-black/70 cursor-pointer transition-all duration-800
            hover:bg-green-600 hover:scale-105 hover:text-white hover:border-black'
					>
						Confirm bookings
					</button>
					<button
						onClick={handleMassCancel}
						className='bg-red-700 text-white/70 px-4 py-2 rounded-md text-xs font-semibold border-2 border-black/70 cursor-pointer transition-all duration-800
          hover:bg-red-600 hover:text-white hover:scale-105 hover:border-black'
					>
						Cancel bookings
					</button>
					<button
						onClick={() => setSelectedIds([])}
						className='bg-gray-500/90 text-white/70 px-4 py-2 rounded-md text-xs font-semibold border-2 border-black/70 cursor-pointer transition-all duration-800
          hover:bg-gray-400 hover:scale-105 hover:text-white hover:border-black'
					>
						Remove selections
					</button>
				</div>
			</div>

			{/* ТАБЛИЦА */}
			<div className='bg-white/90 shadow-xl overflow-x-auto rounded-xl border border-gray-100'>
				<table className='w-full text-sm table-fixed'>
					<thead>
						<tr className='bg-gray-200 text-gray-700 uppercase text-xs tracking-wider'>
							{/* ЧЕКБОКС */}
							<th className='w-10 px-2 py-2 text-left font-semibold whitespace-nowrap'>
								<input
									type='checkbox'
									checked={
										selectedIds.length > 0 &&
										selectedIds.length ===
											bookings.filter(b => b.status === 'new').length
									}
									onChange={toggleSelectAll}
									className='cursor-pointer'
								/>
							</th>

							{/* ID */}
							<th
								onClick={() => onSort('id')}
								className='w-16 px-2 py-4 text-center font-semibold cursor-pointer select-none transition-colors hover:bg-gray-300'
							>
								ID <SortIndicator column='id' />
							</th>

							{/* GUESTS */}
							<th
								onClick={() => onSort('guests')}
								className='w-18 px-2 py-4 text-center font-semibold cursor-pointer select-none transition-colors hover:bg-gray-300'
							>
								Guests <SortIndicator column='guests' />
							</th>

							{/* DATE */}
							<th
								onClick={() => onSort('date')}
								className='w-28 px-2 py-4 text-center font-semibold cursor-pointer select-none transition-colors hover:bg-gray-300'
							>
								Date <SortIndicator column='date' />
							</th>

							{/* TIME */}
							<th
								onClick={() => onSort('time')}
								className='w-20 px-2 py-4 text-center font-semibold cursor-pointer select-none transition-colors hover:bg-gray-300'
							>
								Time <SortIndicator column='time' />
							</th>

							{/* STATUS */}
							<th
								onClick={() => onSort('status')}
								className='w-28 px-2 py-4 text-center font-semibold cursor-pointer select-none transition-colors hover:bg-gray-300'
							>
								Status <SortIndicator column='status' />
							</th>

							{/* CREATED */}
							<th
								onClick={() => onSort('createdAt')}
								className='w-32 px-2 py-4 text-center font-semibold cursor-pointer select-none transition-colors hover:bg-gray-300'
							>
								Created <SortIndicator column='createdAt' />
							</th>

							{/* EMAIL — без w-XX, займёт остаток */}
							<th className='w-46 py-4 text-center font-semibold'>Email</th>

							{/* ACTIONS */}
							<th className='w-40 px-2 py-4 text-center font-semibold'>
								Actions
							</th>

							{/* COPY */}
							<th className='w-16 px-2 py-4 text-center font-semibold'>Copy</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-100'>
						{bookings.length === 0 ? (
							<tr>
								<td colSpan={10} className='px-6 py-12 text-center'>
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
												onClick={onClearFilters}
												className='mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer
                        transition-colors duration-500 hover:bg-blue-700'
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
								</td>
							</tr>
						) : (
							bookings.map(b => (
								<tr
									key={b.id}
									className='hover:bg-blue-100/40 transition-colors'
								>
									{/* ЧЕКБОКС */}
									<td className='px-2 py-2'>
										{b.status === 'new' && (
											<input
												type='checkbox'
												checked={selectedIds.includes(b.id)}
												onChange={() => toggleSelect(b.id)}
												className='cursor-pointer'
											/>
										)}
									</td>

									{/* ID + ИНДИКАТОР */}
									<td className='px-2 py-4 font-mono text-gray-500 truncate'>
										<div className='flex gap-2 items-center'>
											<span
												className={`w-3 h-3 rounded-full shrink-0 ${getTimeColor(b.date, b.time)}`}
											></span>
											#{b.id}
										</div>
									</td>

									<td className='px-8 py-4 font-medium text-gray-900'>
										{b.guests}
									</td>
									<td className='px-6 py-4 text-gray-600'>{b.date}</td>
									<td className='px-7.5 py-4 text-gray-600'>{b.time}</td>

									{/* СТАТУС */}
									<td className='px-6 py-4 text-center'>
										<span
											className={`inline-flex items-center justify-center px-2.5 py-1 uppercase rounded-full text-xs font-medium ${
												b.status === 'confirmed'
													? 'bg-green-500/70 text-green-800'
													: b.status === 'cancelled'
														? 'bg-red-300/80 text-red-800'
														: 'bg-yellow-400/70 text-yellow-900'
											}`}
										>
											{b.status === 'confirmed'
												? 'Confirmed'
												: b.status === 'cancelled'
													? 'Cancelled'
													: 'New'}
										</span>
									</td>
									{/* CREATED */}
									<td className='px-2 py-4 text-gray-500 text-xs truncate'>
										{new Date(b.createdAt).toLocaleString('ru-RU', {
											day: '2-digit',
											month: '2-digit',
											year: 'numeric',
											hour: '2-digit',
											minute: '2-digit',
										})}
									</td>

									{/* EMAIL */}
									<td className='px-2 py-4 text-gray-500 text-sm truncate'>
										{b.email}
									</td>

									{/* ACTIONS */}
									<td className='px-2 py-4 text-center'>
										{b.status === 'new' ? (
											<div className='flex gap-1 justify-center'>
												<button
													onClick={() =>
														setModal({ type: 'confirm', id: b.id })
													}
													className='bg-green-600/80 text-white/70 border-2 border-white/0 px-2 py-1 cursor-pointer rounded-md
                        text-xs font-medium transition-colors duration-400 hover:bg-green-700 hover:text-white hover:border-gray-800'
												>
													Confirm
												</button>
												<button
													onClick={() => setModal({ type: 'cancel', id: b.id })}
													className='bg-red-600/80 text-white/70 border-2 border-white/0 px-2 py-1 cursor-pointer rounded-md
                        text-xs font-medium transition-colors duration-400 hover:bg-red-700 hover:text-white hover:border-gray-800'
												>
													Cancel
												</button>
											</div>
										) : b.status === 'confirmed' ? (
											<span className='text-green-900 text-xs font-bold'>
												Confirmed
											</span>
										) : (
											<span className='text-red-900 text-xs font-bold'>
												Cancelled
											</span>
										)}
									</td>

									{/* COPY */}
									<td className='px-2 py-4 text-center'>
										<button
											onClick={() => copyBooking(b)}
											className='text-center p-1 cursor-pointer text-blue-700 hover:text-blue-600 transition-colors'
											title='Copy booking'
											aria-label='Copy booking'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 16 16'
												fill='currentColor'
												className='size-4 mx-auto'
											>
												<path
													fillRule='evenodd'
													d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v4.69L6.03 8.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8.75 9.44V4.75Z'
													clipRule='evenodd'
												/>
											</svg>
										</button>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>

			{/* МОДАЛЬНОЕ ОКНО */}
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
	)
}

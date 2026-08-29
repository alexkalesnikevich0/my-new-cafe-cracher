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
import { updateBookingStatus } from '@/app/booking/actions/updateStatus'

import { useState } from 'react'
import ConfirmModal from './confirmModal'

export default function BookingTableV2({ bookings, onStatusChange }) {
	// ПОДТВЕРЖДЕНИЕ БРОНИ
	async function handleConfirm(id) {
		await updateBookingStatus(id, 'confirmed')
		onStatusChange() // ОБНОВЛЯЕМ ТАБЛИЦУ ЧЕРЕЗ РОДИТЕЛЯ
	}

	// ОТМЕНА БРОНИ
	async function handleCancel(id) {
		await updateBookingStatus(id, 'cancelled')
		onStatusChange()
	}

	// СОСТОЯНИЕ ДЛЯ МОДАЛЬНОГО ОКНА ПОДТВЕРЖДЕНИЯ
	const [modal, setModal] = useState(null)

	/**
	 * ОПРЕДЕЛЯЕТ ЦВЕТ ИНДИКАТОРА ВРЕМЕНИ ДЛЯ КАЖДОЙ БРОНИ.
	 * КРАСНЫЙ — МЕНЬШЕ 1 ЧАСА ДО БРОНИ
	 * ЖЁЛТЫЙ — ОТ 1 ДО 3 ЧАСОВ
	 * ЗЕЛЁНЫЙ — БОЛЬШЕ 3 ЧАСОВ
	 * СЕРЫЙ — БРОНЬ НЕ НА СЕГОДНЯ
	 */
	const getTimeColor = (bookingDate, bookingTime) => {
		const now = new Date()
		const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

		// ЕСЛИ БРОНЬ НЕ НА СЕГОДНЯ — СЕРЫЙ ИНДИКАТОР
		if (bookingDate !== today) return 'bg-gray-300'

		// ПЕРЕВОДИМ ВРЕМЯ В МИНУТЫ ДЛЯ СРАВНЕНИЯ
		const [hours, minutes] = bookingTime.split(':').map(Number)
		const bookingTotalMinutes = hours * 60 + minutes

		const currentTotalMinutes = now.getHours() * 60 + now.getMinutes()
		const diff = bookingTotalMinutes - currentTotalMinutes // РАЗНИЦА В МИНУТАХ

		if (diff < 60) return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' // СКОРО!
		if (diff < 180) return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]' // ГОТОВИМСЯ
		return 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]' // НЕ СКОРО
	}

	return (
		<div className='py-10 px-4'>
			<div className='max-w-6xl mx-auto'>
				<div className='mb-0 flex justify-between items-center'></div>
				<div className='bg-white/90 shadow-xl overflow-hidden rounded-xl border border-gray-100'>
					<table className='w-full text-sm'>
						{/* ЗАГОЛОВОК ТАБЛИЦЫ */}
						<thead>
							<tr className='bg-gray-200 text-gray-700 uppercase text-xs tracking-wider'>
								<th className='px-6 py-4 text-left font-semibold'>ID</th>
								<th className='px-6 py-4 text-left font-semibold'>Guests</th>
								<th className='px-6 py-4 text-left font-semibold'>Date</th>
								<th className='px-6 py-4 text-left font-semibold'>Time</th>
								<th className='px-6 py-4 text-left font-semibold'>Status</th>
								<th className='px-6 py-4 text-left font-semibold'>Created</th>
								<th className='px-6 py-4 text-left font-semibold'>Actions</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-100'>
							{/* ЕСЛИ БРОНЕЙ НЕТ — ПОКАЗЫВАЕМ ЗАГЛУШКУ */}
							{bookings.length === 0 ? (
								<tr>
									<td
										colSpan={7}
										className='px-6 py-12 text-center text-gray-400'
									>
										No reservations yet!
									</td>
								</tr>
							) : (
								bookings.map(b => (
									<tr
										key={b.id}
										className='hover:bg-blue-100/40 transition-colors'
									>
										{/* ID + ЦВЕТНОЙ ИНДИКАТОР ВРЕМЕНИ */}
										<td className='px-6 py-4 font-mono text-gray-500 flex gap-3 items-center'>
											<span
												className={`w-3 h-3 rounded-full ${getTimeColor(b.date, b.time)}`}
											></span>
											#{b.id}
										</td>
										<td className='px-6 py-4 font-medium text-gray-900'>
											{b.guests}
										</td>
										<td className='px-6 py-4 text-gray-600'>{b.date}</td>
										<td className='px-6 py-4 text-gray-600'>{b.time}</td>
										{/* СТАТУС С ЦВЕТНЫМ БЕЙДЖЕМ */}
										<td className='px-6 py-4'>
											<span
												className={`inline-flex items-center px-2.5 py-1 uppercase rounded-full text-xs font-medium ${
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
										{/* ДАТА СОЗДАНИЯ В ЛОКАЛЬНОМ ФОРМАТЕ */}
										<td className='px-6 py-4 text-gray-500 text-sm'>
											{new Date(b.createdAt).toLocaleString('ru-RU', {
												day: '2-digit',
												month: '2-digit',
												year: 'numeric',
												hour: '2-digit',
												minute: '2-digit',
											})}
										</td>
										{/* КНОПКИ ДЕЙСТВИЙ (ТОЛЬКО ДЛЯ НОВЫХ БРОНЕЙ) */}
										<td className='px-6 py-4'>
											{b.status === 'new' ? (
												<div className='flex gap-2'>
													<button
														onClick={() =>
															setModal({ type: 'confirm', id: b.id })
														}
														className='bg-green-600/80 text-white/70 border-2 border-white/0 px-3 py-1 cursor-pointer rounded-md
                          text-xs font-medium transition-colors duration-400 hover:bg-green-700 hover:text-white hover:border-gray-800'
													>
														Confirm
													</button>
													<button
														onClick={() =>
															setModal({ type: 'cancel', id: b.id })
														}
														className='bg-red-600/80 text-white/70 border-2 border-white/0 px-3 py-1 cursor-pointer rounded-md
                          text-xs font-medium transition-colors duration-400 hover:bg-red-700 hover:text-white hover:border-gray-800'
													>
														Cancel
													</button>
												</div>
											) : b.status === 'confirmed' ? (
												<span className='text-green-900 text-sm font-bold'>
													Confirmed
												</span>
											) : (
												<span className='text-red-900 text-sm font-bold'>
													Cancelled
												</span>
											)}
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
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
	)
}

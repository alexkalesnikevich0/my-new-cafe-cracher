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

	// НОВОЕ ИЗМЕНЕНИЕ КОПИРОВАНИЕ БРОНИ В БУФЕР ОБМЕНА const copyBooking = b =>
	// after change telegram folder - копирование -
	// ФУНКЦИЯ copyBooking(b) принимает объект брони (b)
	// И ФОРМИРУЕТ ИЗ ЕГО ПОЛЕЙ ШАБЛОННУЮ СТРОКУ (template literal)
	// В ЭТОЙ СТРОКЕ ИСПОЛЬЗУЕТСЯ b.id - УНИКАЛЬНЫЙ НОМЕР БРОНИ (ID)
	// navigator.clipboard.writeText(text) - КОПИРУЕТ ПОЛУЧИВШУЮСЯ СТРОКУ - как ctrl + c
	// alert ('Бронь скопирована!') - ПОКАЗЫВАЕТ ПОЛЬЗОВАТЕЛЮ ЧТО СКОПИРОВАЛОСЬ
	const copyBooking = b => {
		const text = `ID: #${b.id} | Guests: ${b.guests} | Date: ${b.date} | Time: ${b.time} | Email: ${b.email} | Status: ${b.status}`
		navigator.clipboard.writeText(text)
		toast.success('Reservation copied!')
	}

	// НОВОЕ ИЗМЕНЕНИЕ - СОСТОЯНИЕ ДЛЯ ВЫБРАННЫХ БРОНЕЙ
	// after change telegram folder
	// ХРАНИТ МАССИВ ID ВЫБРАННЫХ БРОНЕЙ (ДЛЯ МАССОВЫХ ДЕЙСТВИЙ)
	const [selectedIds, setSelectedIds] = useState([])

	// НОВОЕ ИЗМЕНЕНИЕ - ФУНКЦИЯ toggleSelect
	// after change telegram folder
	// ДОБАВЛЯЕТ ИЛИ УБИРАЕТ ID ИЗ МАССИВА selectedIds
	const toggleSelect = id => {
		setSelectedIds(prev =>
			prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id],
		)
	}

	// НОВОЕ ИЗМЕНЕНИЕ - ФУНКЦИЯ toggleSelectAll
	// after change telegram folder
	// ВЫБИРАЕТ/СНИМАЕТ ВСЕ БРОНИ СО СТАТУСОМ new
	const toggleSelectAll = () => {
		const newBookings = bookings.filter(b => b.status === 'new').map(b => b.id)

		if (selectedIds.length === newBookings.length) {
			setSelectedIds([])
		} else {
			setSelectedIds(newBookings)
		}
	}

	// НОВОЕ ИЗМЕНЕНИЕ - МАССОВОЕ ПОДТВЕРЖДЕНИЕ
	// after change telegram folder
	// ОТПРАВЛЯЕТ ВСЕ ВЫБРАННЫЕ ID НА СЕРВЕР СО СТАТУСОМ confirmed

	async function handleMassConfirm() {
		if (selectedIds.length === 0) return

		const result = await updateManyBookingStatus(selectedIds, 'confirmed')

		if (result.success) {
			toast.success(result.success)
			setSelectedIds([]) // ОЧИЩАЕМ ВЫБОР
			onStatusChange() // ОБНОВЛЯЕМ ТАБЛИЦУ
		} else {
			toast.error(result.error || 'Что-то пошло не так')
		}
	}

	// НОВОЕ ИЗМЕНЕНИЕ - МАССОВАЯ ОТМЕНА
	// after change telegram folder
	// ОТПРАВЛЯЕТ ВСЕ ВЫБРАННЫЕ ID НА СЕРВЕР СО СТАТУСОМ cancelled
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

	return (
		<div className='py-10 px-4'>
			<div className='max-w-8xl mx-auto'>
				{/**
				 * НОВОЕ ИЗМЕНЕНИЕ ПАНЕЛЬ МАССОВЫХ ДЕЙСТВИЙ
				 * after change telegram folder
				 * ПОКАЗЫВАЕТСЯ ТОЛЬКО ЕСЛИ ВЫБРАНА ХОТЯ БЫ ОДНА БРОНЬ
				 * СОДЕРЖИТ КНОПКИ Confirm bookings и Cancel bookings и cancel selected
				 */}

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

				<div className='bg-white/90 shadow-xl overflow-hidden rounded-xl border border-gray-100'>
					<table className='w-320 text-sm'>
						{/* ЗАГОЛОВОК ТАБЛИЦЫ */}
						<thead>
							<tr className='bg-gray-200 text-gray-700 uppercase text-xs tracking-wider'>
								{/** НОВОЕ ГАЛОЧКИ 1 */}
								<th className='px-2 py-2 text-left font-semibold whitespace-nowrap'>
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
								{/** НОВОЕ ГАЛОЧКИ 1 */}
								<th className='px-10 py-4 text-left font-semibold'>ID</th>
								<th className='px-2 py-4 text-left font-semibold'>Guests</th>
								<th className='px-11 py-4 text-left font-semibold'>Date</th>
								<th className='px-6.5 py-4 text-left font-semibold'>Time</th>
								<th className='px-11 py-4 text-left font-semibold'>Status</th>
								<th className='px-12 py-4 text-left font-semibold'>Created</th>
								<th className='px-22 py-4 text-left font-semibold'>Email</th>
								<th className='px-18 py-4 text-left font-semibold'>Actions</th>
								<th className='px-5 py-4 text-left font-semibold'>Copy</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-100'>
							{/* ЕСЛИ БРОНЕЙ НЕТ — ПОКАЗЫВАЕМ ЗАГЛУШКУ */}
							{bookings.length === 0 ? (
								<tr>
									<td colSpan={10} className='px-6 py-12 text-center'>
										<div className='flex flex-col items-center gap-3'>
											{/* Иконка */}

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
									</td>
								</tr>
							) : (
								bookings.map(b => (
									<tr
										key={b.id}
										className='hover:bg-blue-100/40 transition-colors'
									>
										{/** НОВОЕ ГАЛОЧКИ 1 */}
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
										{/** НОВОЕ ГАЛОЧКИ 1 */}

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
										<td className='px-6 py-4 text-gray-500 text-sm'>
											{b.email}
										</td>
										{/* КНОПКИ ДЕЙСТВИЙ (ТОЛЬКО ДЛЯ НОВЫХ БРОНЕЙ) */}
										<td className='px-6 py-4 text-center'>
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
										{/** НОВОЕ ИЗМЕНЕНИЕ
										 * after change telegram - копирование -
										 * КНОПКА КОПИРОВАНИЯ БРОНИ
										 * ЧТО ДЕЛАЕТ:
										 * onClick={() => copyBooking(b)} - при клике вызывает функцию
										 * copyBooking с текущей бронью (b)
										 * title ='Копировать бронь' - всплывающая подсказка при наведении
										 */}
										<td className='px-6 py-4 text-center'>
											<button
												onClick={() => copyBooking(b)}
												className='text-center p-1 cursor-pointer text-blue-700 hover:text-blue-600 transition-colors'
												title='Копировать бронь'
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 16 16'
													fill='currentColor'
													className='size-4'
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

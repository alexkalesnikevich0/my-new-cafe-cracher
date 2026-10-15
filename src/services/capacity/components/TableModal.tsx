/**
 * ФАЙЛ: services/capacity/components/TableModal.tsx
 *
 * МОДАЛКА СТОЛА (PR 6.5.4).
 * Показывает информацию о столе и бронях на сегодня.
 */

'use client'

import { useEffect } from 'react'

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

interface TableModalProps {
	table: TableData | null
	onClose: () => void
}

// ==
// КОМПОНЕНТ
// ==
export default function TableModal({ table, onClose }: TableModalProps) {
	// Esc закрывает модалку
	useEffect(() => {
		function handleEsc(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [onClose])

	// Если table null — не рендерим
	if (!table) return null

	return (
		// ЗАТЕМНЁННЫЙ ФОН
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'
			onClick={onClose}
			role='dialog'
			aria-modal='true'
			aria-labelledby='table-modal-title'
		>
			{/* БЕЛОЕ ОКНО */}
			<div
				className='bg-white rounded-xl shadow-2xl p-6 w-full max-w-md'
				onClick={e => e.stopPropagation()}
			>
				{/* ЗАГОЛОВОК */}
				<div className='flex justify-between items-center items-center mb-4'>
					<h2
						id='table-modal-title'
						className='text-2xl font-bold text-gray-900'
					>
						Table #{table.number}
					</h2>
					<button
						type='button'
						onClick={onClose}
						className='text-gray-400 hover:text-gray-700 text-2xl leading-none cursor-pointer'
						aria-label='Close'
					>
						x
					</button>
				</div>
				{/* ИНФОРМАЦИЯ */}
				<div className='space-y-2 mb-6'>
					<p className='text-gray-700'>
						<span className='font-semibold'>Вместимость:</span> {table.capacity}{' '}
						мест
					</p>
					<p className='text-gray-700'>
						<span className='font-semibold'>Занято:</span> {table.occupied} мест
					</p>
					<p className='text-gray-700'>
						<span className='font-semibold'>Статус:</span>{' '}
						<span
							className={
								table.status === 'free'
									? 'text-green-600 font-bold'
									: 'text-red-600 font-bold'
							}
						>
							{table.status === 'free' ? 'Свободен' : 'Занят'}
						</span>
					</p>
				</div>
				{/* СПИСОК БРОНЕЙ */}
				<div className='mb-6'>
					<h3 className='font-semibold text-gray-900 mb-2'>Today bookings</h3>
					<p className='text-sm text-gray-500'>
						Have not any bookings for this table
					</p>
				</div>
				{/* ССЫЛКА */}
				<a
					href={`/admin/tables/${table.id}`}
					className='block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors'
				>
					Open booking tables
				</a>
			</div>
		</div>
	)
}

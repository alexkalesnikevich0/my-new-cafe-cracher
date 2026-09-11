'use client'

import { useEffect, useState } from 'react'

/**
 * МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЕ БРОНИ ДЛЯ ГОСТЯ
 * after change telegram
 *
 * - ПОКАЗЫВАЕТ ГОСТЮ ВСЕ ЕГО ВВЕДЕННЫЕ ДАННЫЕ БРОНИ ПЕРЕД ОТПРАВКОЙ
 * - ПЛАВНО ПОЯВЛЯЕТСЯ ОКНО ПО ЦЕНТРУ ЭКРАНА
 * - ПОЗВОЛЯЕТ ПОДТВЕРДИТЬ ИЛИ ОТМЕНИТЬ
 *
 * ПРОПСЫ:
 * @param {object} data - данные брони (guests, date, time, email)
 *
 * @param {function} onConfirm - что делать при нажатии 'Confirm'
 *
 * @param {function} onCancel - что делать при нажатии 'Cancel'
 */

export default function ModalConfirm({ data, onConfirm, onCancel }) {
	const [visible, setVisible] = useState(false)

	// ПЛАВНОЕ ПОЯВЛЕНИЕ
	useEffect(() => {
		requestAnimationFrame(() => setVisible(true))
	}, [])

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
			onClick={onCancel}
		>
			<div
				onClick={e => e.stopPropagation()}
				className={`bg-white rounded-2xl shadow-2xl p-6 w-90 max-w-[90%] transition-all duration-500 ${visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
			>
				<h2 className='text-xl font-bold text-gray-800 mb-2 text-center'>
					Confirm booking
				</h2>
				<p className='text-sm text-gray-500 text-center mb-5'>
					Check all information
				</p>

				{/** ДАННЫЕ БРОНИ */}
				<div className='bg-gray-50 border rounded-md border-gray-200 rounded-2l p-4 mb-6 text-sm'>
					<div className='flex justify-between mb-2'>
						<span className='text-gray-500'>Guests:</span>
						<span className='font-semibold text-gray-800'>{data.guests}</span>
					</div>
					<div className='flex justify-between mb-2'>
						<span className='text-gray-500'>Date:</span>
						<span className='font-semibold text-gray-800'>{data.date}</span>
					</div>
					<div className='flex justify-between mb-2'>
						<span className='text-gray-500'>Time:</span>
						<span className='font-semibold text-gray-800'>{data.time}</span>
					</div>
					<div className='flex justify-between mb-2'>
						<span className='text-gray-500'>Email:</span>
						<span className='font-semibold text-gray-800'>{data.email}</span>
					</div>
				</div>

				{/** КНОПКИ */}
				<div className='flex justify-between gap-3'>
					<button
						onClick={onCancel}
						className='bg-gray-300 text-gray-800 px-5 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-500
                     hover:bg-gray-400 hover:scale-105 active:scale-95'
					>
						Change
					</button>
					<button
						onClick={onConfirm}
						className='bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-500
                       hover:bg-blue-800 hover:scale-105 active:scale-95'
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	)
}

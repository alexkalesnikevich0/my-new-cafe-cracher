/**
 * ФАЙЛ: app/booking/V2/ConfirmModal.jsx
 *
 * МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ ДЕЙСТВИЯ.
 * ПОЯВЛЯЕТСЯ ПО ЦЕНТРУ ЭКРАНА С ЗАТЕМНЁННЫМ ФОНОМ.
 * ИСПОЛЬЗУЕТСЯ ПРИ НАЖАТИИ CONFIRM ИЛИ CANCEL В ТАБЛИЦЕ БРОНЕЙ.
 *
 * @param {string} message - ТЕКСТ СООБЩЕНИЯ (НАПРИМЕР, "Are you sure?")
 * @param {function} onConfirm - ФУНКЦИЯ ПРИ НАЖАТИИ "YES"
 * @param {function} onCancel - ФУНКЦИЯ ПРИ НАЖАТИИ "NO"
 */
'use client'

import { useEffect, useState } from 'react'

export default function ConfirmModal({ message, onConfirm, onCancel }) {
	// visible — УПРАВЛЯЕТ АНИМАЦИЕЙ ПОЯВЛЕНИЯ (ПЛАВНОЕ ПРОЯВЛЕНИЕ)
	const [visible, setVisible] = useState(false)

	// ЗАПУСКАЕМ АНИМАЦИЮ СРАЗУ ПОСЛЕ МОНТИРОВАНИЯ
	useEffect(() => {
		requestAnimationFrame(() => setVisible(true))
	}, [])

	return (
		// ЗАТЕМНЁННЫЙ ФОН (fixed — НА ВЕСЬ ЭКРАН, z-50 — ПОВЕРХ ВСЕГО)
		<div
			className={`fixed inset-0 z-50 flex items-center items-center justify-center bg-black/50 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
		>
			{/* БЕЛОЕ ОКНО ПО ЦЕНТРУ */}
			<div
				className={`bg-white rounded-xl shadow-lg p-5 w-80 text-center transition-all duration-500 ${visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
			>
				<p className='text-gray-700 font-medium mb-6'>{message}</p>
				<div className='flex justify-center gap-3'>
					{/* КНОПКА "YES" — ЗЕЛЁНАЯ */}
					<button
						onClick={onConfirm}
						className='bg-green-500 text-white/70 px-5 py-2 rounded-md text-sm font-medium border-2 border-gray-600/60 cursor-pointer
        hover:bg-green-600 hover:text-white hover:border-gray-700 transition-colors duration-300'
					>
						Yes
					</button>
					{/* КНОПКА "NO" — КРАСНАЯ */}
					<button
						onClick={onCancel}
						className='bg-red-500 text-white/70 px-5 py-2 rounded-md text-sm font-medium border-2 border-gray-600/60 cursor-pointer
        hover:bg-red-600 hover:text-white hover:border-gray-700 transition-colors duration-300'
					>
						No
					</button>
				</div>
			</div>
		</div>
	)
}

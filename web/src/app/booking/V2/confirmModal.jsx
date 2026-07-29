'use client'

import { useEffect, useState } from 'react'

export default function ConfirmModal({ message, onConfirm, onCancel }) {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		requestAnimationFrame(() => setVisible(true))
	}, [])
	return (
		<div
			className={`fixed inset-0 z-50 flex items-center items-center justify-center bg-black/50  transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}'`}
		>
			<div
				className={`bg-white rounded-xl shadow-lg p-5 w-80 text-center  transition-all duration-500 ${visible ? 'scale-100 opacity-100' : 'scale-090 opacity-0'}`}
			>
				<p className='text-gray-700 font-medium mb-6'>{message}</p>
				<div className='flex justify-center gap-3'>
					<button
						onClick={onConfirm}
						className='bg-green-500 text-white/70 px-5 py-2 rounded-md text-sm font-medium border-2 border-gray-600/60 cursor-pointer
        hover:bg-green-600 hover:text-white hover:border-gray-700 transition-colors duration-300'
					>
						Yes
					</button>
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

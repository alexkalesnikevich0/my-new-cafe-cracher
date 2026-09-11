/**
 * ФАЙЛ: app/admin/login/page.jsx
 *
 * СТРАНИЦА ВХОДА В АДМИНКУ.
 * ПОЛЬЗОВАТЕЛЬ ВВОДИТ ПАРОЛЬ, ФОРМА ОТПРАВЛЯЕТ ЕГО В /admin/admin-login.
 * ПРИ УСПЕХЕ — ПЕРЕНОСИТ НА /admin, ПРИ ОШИБКЕ — ПОКАЗЫВАЕТ СООБЩЕНИЕ.
 */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false) // новое 8 сентября!

	// ОТПРАВКА ПАРОЛЯ НА СЕРВЕР
	async function handleLogin(e) {
		e.preventDefault()
		setError('') // новое 8 сентября!
		setIsLoading(true) // новое 8 сентября!

		const res = await fetch('/admin/admin-login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ password }),
		})

		setIsLoading(false) // новое 8 сентября!

		if (res.ok) {
			router.push('/admin') // УСПЕХ — ПЕРЕХОДИМ В АДМИНКУ
		} else {
			setError('Wrong password') // ОШИБКА — ПОКАЗЫВАЕМ СООБЩЕНИЕ
		}
	}

	// новое 8 сентября! //
	// 1 ---
	function handleClear() {
		setPassword('')
		setError('')
	}
	// 1 ---

	const isPasswordEmpty = password.trim() === '' // новое 8 сентября!

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100/80'>
			<form
				onSubmit={handleLogin}
				className='bg-white p-8 rounded-xl shadow-xl w-80'
			>
				<h1 className='text-2xl font-bold mb-6'>Admin Login</h1>
				{error && <p className='text-red-500 text-sm mb-1'>{error}</p>}
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Password'
					className='w-full border-2 border-gray-300 rounded-md px-3 py-2 mb-4
					focus:outline-none focus:border-blue-500'
				/>
				{/* СООБЩЕНИЕ ОБ ОШИБКЕ (ПОКАЗЫВАЕТСЯ ТОЛЬКО ЕСЛИ error НЕ ПУСТОЕ) */}

				<div className='flex gap-5'>
					<button
						type='submit'
						disabled={isLoading || isPasswordEmpty}
						className={`flex-1 py-2 rounded-md text-white font-medium transition-all duration-500 
							${isLoading || isPasswordEmpty ? 'bg-blue-800/70 cursor-not-allowed' : 'bg-blue-600 cursor-pointer hover:bg-blue-700 hover:scale-107 active:scale-95'}`}
					>
						{isLoading ? 'Loading...' : 'Log in'}
					</button>
					<button
						type='button'
						onClick={handleClear}
						disabled={isPasswordEmpty}
						className={`flex-1 py-2 rounded-md bg-gray-200 text-gray-700 font-medium transition-all duration-500 border border-gray-300
					${isPasswordEmpty ? 'bg-gray-100 cursor-not-allowed opacity-50' : 'bg-gray-200 cursor-pointer hover:bg-gray-300 hover:scale-107 active:scale-95'}`}
					>
						Clear
					</button>
				</div>
			</form>
		</div>
	)
}

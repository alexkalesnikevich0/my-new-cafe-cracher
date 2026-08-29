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

	// ОТПРАВКА ПАРОЛЯ НА СЕРВЕР
	async function handleLogin(e) {
		e.preventDefault()
		const res = await fetch('/admin/admin-login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ password }),
		})

		if (res.ok) {
			router.push('/admin') // УСПЕХ — ПЕРЕХОДИМ В АДМИНКУ
		} else {
			setError('Wrong password') // ОШИБКА — ПОКАЗЫВАЕМ СООБЩЕНИЕ
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100/80'>
			<form
				onSubmit={handleLogin}
				className='bg-white p-8 rounded-xl shadow-xl w-80'
			>
				<h1 className='text-xl font-bold mb-4'>Admin Login</h1>
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Password'
					className='w-full border-2 border-gray-300 rounded-md px-3 py-2 mb-4'
				/>
				{/* СООБЩЕНИЕ ОБ ОШИБКЕ (ПОКАЗЫВАЕТСЯ ТОЛЬКО ЕСЛИ error НЕ ПУСТОЕ) */}
				{error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
			</form>
		</div>
	)
}

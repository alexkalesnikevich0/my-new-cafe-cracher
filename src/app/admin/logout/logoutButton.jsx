'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
	const router = useRouter()
	async function handleLogout() {
		await fetch('/admin/logout', { method: 'POST' })
		router.push('/admin/login')
	}

	return (
		<div className='flex justify-end'>
			<button
				onClick={handleLogout}
				className='bg-red-500 text-white/70 px-7 py-2 rounded-lg transition-colors duration-400
        text-sm font-medium cursor-pointer border-2 border-gray-700/50
        hover:bg-red-600 hover:text-white hover:border-gray-700'
			>
				Logout
			</button>
		</div>
	)
}

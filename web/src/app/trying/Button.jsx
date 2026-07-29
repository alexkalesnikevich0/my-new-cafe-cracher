'use client'

import { useState } from 'react'

export default function Button() {
	const [loading, setLoading] = useState(false)

	async function Refresh() {
		setLoading(true)

		await new Promise(resolve => setTimeout(resolve, 300))

		window.location.reload()
	}
	return (
		<button
			onClick={Refresh}
			disabled={loading}
			className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer text-center min-w-[105px] border-2 border-transparent transition-colors duration-400
    hover:bg-blue-700 hover:border-2 hover:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
		>
			{loading ? 'Refreshing' : 'Refresh'}
		</button>
	)
}

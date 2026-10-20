/**
 * ФАЙЛ app/admin/tables/page.tsx
 *
 * УПРАВЛЕНИЕ СТОЛАМИ (PR6 - Capacity)
 * Работает параллельно со старой adminкой /admin
 * показывает сетку столов, календарь загрузки, управления бронями
 */
'use client'

import TablesGrid from '@/services/capacity/components/TablesGrid'

import Link from 'next/link'

export default function TablesPage() {
	return (
		<div className='py-10 px-4 sm:px-6 lg:px-8 text-center bg-orange-300/80'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-3xl font-extrabold text-gray-900 mb-4 pt-20'>
					Table management
				</h1>
				<div className='py-5'>
					<Link
						href='/admin'
						className='inline-flex items-center py-2 px-4 rounded-lg text-sm text-white/70 bg-blue-700 hover:text-white cursor-pointer'
					>
						Back to Admin page
					</Link>
				</div>
				<TablesGrid />
			</div>
		</div>
	)
}

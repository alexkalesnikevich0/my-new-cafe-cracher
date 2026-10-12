/**
 * ФАЙЛ app/admin/tables/page.tsx
 *
 * УПРАВЛЕНИЕ СТОЛАМИ (PR6 - Capacity)
 * Работает параллельно со старой админкой /admin
 * показывает сетку столов, календарь загрузки, управления бронями
 */

export default function TablesPage() {
	return (
		<div className='py-10 px-4 sm:px-6 lg:px-8 text-center'>
			<div className='msx-w-7xl mx-auto'>
				<h1 className='text-3xl font-extrabold text-gray-900 mb-4 pt-20'>
					Table management
				</h1>
				<p className='text-gray-600 pb-20 text-xl'>
					New page for managing tables and reservations, taking capacity into
					account
				</p>
			</div>
		</div>
	)
}

/**
 * ФАЙЛ: app/booking/V2/PaginationControls.jsx
 *
 * КОМПОНЕНТ ПАГИНАЦИИ (PR4 tg 4.5)
 * Показывает:
 * - Информацию: 'Показано 1-20 из 156' + 'Страница 1 из 8'
 * - Кнопки: ← Prev, номера страниц, Next →
 *
 * @param {number} currentPage - Текущая страница (1, 2, 3...)
 * @param {number} totalPages - Всего страниц
 * @param {number} totalItems - Всего записей
 * @param {number} perPage - Записей на страницу (20)
 * @param {function} onPageChange - Функция смены страницы
 */
'use client'

export default function PaginationControls({
	currentPage,
	totalPages,
	totalItems,
	perPage,
	onPageChange,
}) {
	// НАЧАЛЬНЫЙ И КОНЕЧНЫЙ ИНДЕКС (для счётчика)
	const startItem = (currentPage - 1) * perPage + 1
	const endItem = Math.min(currentPage * perPage, totalItems)

	// ФОРМИРУЕМ МАССИВ НОМЕРОВ СТРАНИЦ
	// Если <= 10 страниц — показываем все
	// Если > 10 — показываем с сокращением
	const getPageNumbers = () => {
		const pages = []

		if (totalPages <= 10) {
			// Мало страниц — все
			for (let i = 1; i <= totalPages; i++) pages.push(i)
		} else {
			// Много — с сокращением
			if (currentPage <= 4) {
				// в начале
				for (let i = 1; i <= 5; i++) pages.push(i)
				pages.push('...')
				pages.push(totalPages)
			} else if (currentPage >= totalPages - 3) {
				// в конце
				pages.push(1)
				pages.push('...')
				for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i)
			} else {
				// в середине
				pages.push(1)
				pages.push('...')
				for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
				pages.push('...')
				pages.push(totalPages)
			}
		}
		return pages
	}

	const pageNumbers = getPageNumbers()

	return (
		<div className='mt-6 flex items-center justify-center flex-col'>
			{/* ИНФОРМАЦИЯ СЛЕВА */}
			<div className='text-sm text-gray-700'>
				<span className='font-semibold bg-blue-800 rounded-lg text-white/90 p-3'>
					Showing -{' '}
					<span className='font-bold text-white'>
						{startItem}-{endItem} of {totalItems}{' '}
					</span>
				</span>
				<span className='ml-3 bg-blue-800 rounded-lg text-white/90 p-3 font-semibold'>
					Page -{' '}
					<span className='font-bold text-white'>
						{currentPage} of {totalPages}
					</span>
				</span>
			</div>
			{/* КНОПКИ СПРАВА */}
			<div className='flex items-center gap-3 mt-10'>
				{/* PREV */}
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className={`flex px-3 py-1 rounded-md text-sm font-bold border-2 transition-colors ${currentPage === 1 ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-300 cursor-pointer hover:bg-gray-100'}`}
				>
					{' '}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='currentColor'
						className='size-5 flex'
					>
						<path
							fillRule='evenodd'
							d='M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z'
							clipRule='evenodd'
						/>
					</svg>
					Prev
				</button>
				{/* НОМЕРА СТРАНИЦ */}
				{pageNumbers.map((page, idx) => (
					<button
						key={idx}
						onClick={() => typeof page === 'number' && onPageChange(page)}
						disabled={page === '...'}
						className={`px-3 py-1 rounded-md text-sm font-medium border-2 transition-colors ${page === currentPage ? 'bg-blue-600 text-white border-blue-700' : page === '...' ? 'bg-transparent text-gray-500 border-transparent cursor-default' : 'bg-white text-gray-700 border-gray-300 cursor-pointer hover:bg-gray-100'}`}
					>
						{page}
					</button>
				))}
				{/* NEXT */}
				<div className=''>
					<button
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className={`flex px-3 py-1 rounded-md text-sm font-bold border-2 transition-colors ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-300 cursor-pointer hover:bg-gray-100'}`}
					>
						Next{' '}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='size-5 flex'
						>
							<path
								fillRule='evenodd'
								d='M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

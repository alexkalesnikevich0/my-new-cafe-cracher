/**
 * ФАЙЛ: app/booking/V2/PendingCounter.jsx
 *
 * «ГЛУПЫЙ» КОМПОНЕНТ — ПОКАЗЫВАЕТ КОЛИЧЕСТВО БРОНЕЙ СО СТАТУСОМ "NEW".
 * НЕ ДЕЛАЕТ fetch, НЕ ХРАНИТ СОСТОЯНИЕ.
 * ПОЛУЧАЕТ ДАННЫЕ ЧЕРЕЗ ПРОПС total ОТ РОДИТЕЛЯ (PaginationBooking).
 *
 * @param {number} total - КОЛИЧЕСТВО НОВЫХ БРОНЕЙ (СТАТУС 'new')
 */
export default function PendingCounter({ total }) {
	return (
		<p className='font-bold'>
			<span className='text-gray-700'>Pending:</span>{' '}
			<span className='text-grey-600 font-extrabold'>{total}</span>{' '}
			<span className=''>
				has status {/* БЕЙДЖ СТАТУСА "NEW" — ЖЁЛТЫЙ */}
				<span className='ml-2 border-1 border-gray-800 font-bold px-2.5 py-1 rounded-full bg-yellow-500 text-yellow-950'>
					NEW
				</span>
			</span>
		</p>
	)
}

/**
 * ФАЙЛ: app/booking/V2/BookingCounterV2.jsx
 *
 * «ГЛУПЫЙ» КОМПОНЕНТ — ТОЛЬКО ПОКАЗЫВАЕТ ОБЩЕЕ КОЛИЧЕСТВО БРОНЕЙ.
 * НЕ ДЕЛАЕТ fetch, НЕ ХРАНИТ СОСТОЯНИЕ.
 * ПОЛУЧАЕТ ДАННЫЕ ЧЕРЕЗ ПРОПС total ОТ РОДИТЕЛЯ (PaginationBooking).
 *
 * @param {number} total - ОБЩЕЕ КОЛИЧЕСТВО БРОНЕЙ (ПЕРЕДАЁТСЯ ИЗ PaginationBooking)
 */
export default function BookingCounterV2({ total }) {
	return (
		<p className='font-bold mb-5'>
			<span className='text-gray-700 text-xl'>Total:</span>{' '}
			<span className='text-black font-black text-xl'>
				{total} reservations
			</span>
		</p>
	)
}

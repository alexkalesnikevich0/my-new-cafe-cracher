/**
 * ФАЙЛ: app/booking/V2/TodayCounter.jsx
 *
 * «ГЛУПЫЙ» КОМПОНЕНТ — ПОКАЗЫВАЕТ СТАТИСТИКУ ЗА СЕГОДНЯ.
 * МОЖЕТ ПОКАЗЫВАТЬ КОЛИЧЕСТВО ГОСТЕЙ ИЛИ КОЛИЧЕСТВО БРОНЕЙ.
 * НЕ ДЕЛАЕТ fetch, НЕ ХРАНИТ СОСТОЯНИЕ.
 * ПОЛУЧАЕТ ДАННЫЕ ЧЕРЕЗ ПРОПСЫ ОТ РОДИТЕЛЯ (PaginationBooking).
 *
 * @param {number} total - ЧИСЛО (СКОЛЬКО ГОСТЕЙ ИЛИ СКОЛЬКО БРОНЕЙ)
 * @param {string} label - ПОДПИСЬ ('guests' ИЛИ 'reservations')
 */
export default function TodayCounter({ total, label }) {
	return (
		<p className='font-bold'>
			<span className='text-gray-700 text-base'>Today:</span>{' '}
			<span className='text-black font-black text-base'>
				{total} {label}
			</span>
		</p>
	)
}

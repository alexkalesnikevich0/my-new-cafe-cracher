/**
 * ФАЙЛ: app/booking/new/page.tsx
 *
 * НОВАЯ СТРАНИЦА БРОНИРОВАНИЯ (PR 6.5).
 * URL: /booking/new
 * Использует BookingFormV2 с capacity.
 */

import BookingFormV2 from '@/services/capacity/components/BookingFormV2'

export const metadata = {
	title: 'Reservierung',
	description: 'Tischreservierung im Cafe Cracher',
}

export default function BookingNewPage() {
	return (
		<main id='main-content' className=''>
			<BookingFormV2 />
		</main>
	)
}

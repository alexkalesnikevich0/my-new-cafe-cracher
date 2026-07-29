'use client'

import { useState, useEffect, useCallback } from 'react'
import Button from '@/app/trying/Button'
import BookingCounterV2 from '@/app/booking/V2/BookingCounterV2'
export default function Trying() {
	const [bookings, setBookings] = useState([])

	const loadBookings = useCallback(async () => {
		const res = await fetch('/booking/api')
		const data = await res.json()
		setBookings(data)
	}, [])

	useEffect(() => {
		loadBookings()
	}, [loadBookings])

	return (
		<div className='px-5 py-5 max-w-5xl mx-auto'>
			<div className='mb-10 mt-30 h-10 flex justify-between items-center'>
				<div className='font-bold text-gray-700/80'>
					<BookingCounterV2 total={bookings.length} />
				</div>
				<div className=' flex justify-center items-center'>
					<Button />
				</div>
			</div>
			<div className='rounded-xl border border-gray-100 bg-white/90 shadow-xl overflow-hidden'>
				<table className='w-full'>
					<thead className=''>
						<tr className='w-full bg-gray-300/90 text-gray-700 text-left'>
							<th className='px-6 py-4'>a</th>
							<th className='px-6 py-4'>b</th>
							<th className='px-6 py-4'>c</th>
							<th className='px-6 py-4'>d</th>
							<th className='px-6 py-4'>e</th>
							<th className='px-6 py-4'>f</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200/80'>
						<tr className='hover:bg-blue-200/30 transition-colors'>
							<td className='px-6 py-4'>a</td>
							<td className='px-6 py-4'>b</td>
							<td className='px-6 py-4'>c</td>
							<td className='px-6 py-4'>d</td>
							<td className='px-6 py-4'>e</td>
							<td className='px-6 py-4'>f</td>
						</tr>
						<tr className='hover:bg-blue-200/30 transition-colors'>
							<td className='px-6 py-4'>a</td>
							<td className='px-6 py-4'>b</td>
							<td className='px-6 py-4'>c</td>
							<td className='px-6 py-4'>d</td>
							<td className='px-6 py-4'>e</td>
							<td className='px-6 py-4'>f</td>
						</tr>
						<tr className='hover:bg-blue-200/30 transition-colors'>
							<td className='px-6 py-4'>a</td>
							<td className='px-6 py-4'>b</td>
							<td className='px-6 py-4'>c</td>
							<td className='px-6 py-4'>d</td>
							<td className='px-6 py-4'>e</td>
							<td className='px-6 py-4'>f</td>
						</tr>
						<tr className='hover:bg-blue-200/30 transition-colors'>
							<td className='px-6 py-4'>a</td>
							<td className='px-6 py-4'>b</td>
							<td className='px-6 py-4'>c</td>
							<td className='px-6 py-4'>d</td>
							<td className='px-6 py-4'>e</td>
							<td className='px-6 py-4'>f</td>
						</tr>
						<tr className='hover:bg-blue-200/30 transition-colors'>
							<td className='px-6 py-4'>a</td>
							<td className='px-6 py-4'>b</td>
							<td className='px-6 py-4'>c</td>
							<td className='px-6 py-4'>d</td>
							<td className='px-6 py-4'>e</td>
							<td className='px-6 py-4'>f</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

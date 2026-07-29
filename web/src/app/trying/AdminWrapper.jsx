'use client'
import BookingCounter from '@/app/trying/BookingCounter'
import { useState, useEffect } from 'react'

export default function AdminWrapper() {
	const [bookings, setBookings] = useState([])

	async function loadBookings() {
		const res = await fetch('/booking/api')
		const data = await res.json()
		setBookings(data)
	}

	useEffect(() => {
		loadBookings()
	}, [])

	return (
		<div className='py-10 px-4'>
			<div className='max-w-6xl mx-auto'>
				<div className='mb-8 flex justify-between items-center'>
					<h1 className='text-3xl font-extrabold text-gray-900'>
						Reservations
					</h1>
					<div className=''>
						<button
							onClick={loadBookings}
							className='bg-blue-600 text-white/70 px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-blue-700 hover:text-white'
						>
							Refresh
						</button>
					</div>
				</div>
				<div className='text-gray-600 mb-4 font-bold'>
					<BookingCounter />
				</div>
				<div className='bg-white/90 shadow-xl overflow-hidden rounded-xl border border-gray-100'>
					<table className='w-full text-sm'>
						<thead>
							<tr className='bg-gray-200 text-gray-700 uppercase text-xs tracking-wider'>
								<th className='px-6 py-4 text-left font-semibold'>ID</th>
								<th className='px-6 py-4 text-left font-semibold'>Guests</th>
								<th className='px-6 py-4 text-left font-semibold'>Date</th>
								<th className='px-6 py-4 text-left font-semibold'>Time</th>
								<th className='px-6 py-4 text-left font-semibold'>Status</th>
								<th className='px-6 py-4 text-left font-semibold'>Created</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-100'>
							{bookings.length === 0 ? (
								<tr>
									<td
										colSpan={6}
										className='px-6 py-12 text-center text-gray-400'
									>
										No reservations yet!
									</td>
								</tr>
							) : (
								bookings.map(b => (
									<tr
										key={b.id}
										className='hover:bg-blue-100/40 transition-colors'
									>
										<td className='px-6 py-4 font-mono text-gray-500'>
											#{b.id}
										</td>
										<td className='px-6 py-4 font-medium text-gray-900'>
											{b.guests}
										</td>
										<td className='px-6 py-4 text-gray-600'>{b.date}</td>
										<td className='px-6 py-4 text-gray-600'>{b.time}</td>
										<td className='px-6 py-4'>
											<span
												className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
													b.status === 'confirmed'
														? 'bg-green-100 text-green-800'
														: b.status === 'cancelled'
															? 'bg-red-100 text-red-800'
															: 'bg-yellow-100 text-yellow-900'
												}`}
											>
												{b.status === 'New'
													? 'New'
													: b.status === 'confirmed'
														? 'Confirmed'
														: 'Canceled'}
											</span>
										</td>
										<td className='px-6 py-4 text-gray-500 text-xs'>
											{new Date(b.createdAt).toLocaleString('ru-RU', {
												day: '2-digit',
												month: '2-digit',
												year: 'numeric',
												hour: '2-digit',
												minute: '2-digit',
											})}
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

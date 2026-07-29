'use client'

import { useEffect, useState } from 'react'

export default function BookingCounter() {
	const [bookings, setBookings] = useState([])

	async function loadBookings() {
		const res = await fetch('/booking/api')
		const data = await res.json()
		setBookings(data)
	}

	useEffect(() => {
		loadBookings()
	}, [])

	return <div className=''>Total: {bookings.length}</div>
}

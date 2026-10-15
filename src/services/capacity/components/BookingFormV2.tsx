/**
 * ФАЙЛ: services/capacity/components/BookingFormV2.tsx
 *
 * ФОРМА БРОНИРОВАНИЯ С CAPACITY (PR 6.5).
 */

'use client'

import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import CapacityIndicator from './CapacityIndicator'
import { createBookingCapacity } from '../actions/createBookingCapacity'
import { DEFAULT_DURATION } from '../lib/capacity'

const ALL_SLOTS: string[] = []
for (let h = 10; h <= 22; h++) {
	ALL_SLOTS.push(`${String(h).padStart(2, '0')}:00`)
}

function getToday(): string {
	const now = new Date()
	return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

export default function BookingFormV2() {
	const [guests, setGuests] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [email, setEmail] = useState('')

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [message, setMessage] = useState<{
		success?: string
		error?: string
	} | null>(null)

	const [occupiedSlots, setOccupiedSlots] = useState<string[]>([])

	useEffect(() => {
		if (!date) {
			setOccupiedSlots([])
			return
		}

		fetch(`/api/capacity/slots?date=${date}&duration=${DEFAULT_DURATION}`)
			.then(res => (res.ok ? res.json() : []))
			.then((data: string[]) => setOccupiedSlots(data))
			.catch(() => setOccupiedSlots([]))
	}, [date])

	const isValid = guests !== '' && date !== '' && time !== '' && email !== ''

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (isSubmitting) return
		setIsSubmitting(true)
		setMessage(null)

		const formData = new FormData()
		formData.append('guests', guests)
		formData.append('date', date)
		formData.append('time', time)
		formData.append('email', email)

		try {
			const result = await createBookingCapacity(formData)

			if (result.success) {
				setMessage({ success: result.success })
				toast.success(result.success)
				setGuests('')
				setDate('')
				setTime('')
				setEmail('')
			} else {
				setMessage({ error: result.error || 'Unknown fail' })
				toast.error(result.error || 'Unknown fail')
			}
		} catch (error) {
			console.error(error)
			setMessage({ error: 'Something went wrong' })
			toast.error('Something went wrong')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className='flex justify-center items-center min-h-screen bg-orange-300/70 py-10 px-4'>
			<div className='duration-600 border-2 rounded-xl bg-orange-100/80 border-slate-700 p-6 max-w-2xl w-full'>
				<h1 className='text-2xl md:text-3xl font-black text-slate-900 text-center mb-6'>
					TABLE RESERVIERUNG
				</h1>
				<p className='text-center text-sm md:text-base font-extrabold border-gray-900 border-2 rounded-xl p-3 mb-6'>
					Liebe Gastle, hier konnen Sie Ihre Tischreservierung vornehmen
				</p>
				<form onSubmit={handleSubmit} className='space-y-5'>
					<div className='flex flex-col gap-1'>
						<label htmlFor='booking-guests' className='font-extrabold text-lg'>
							Person:
						</label>
						<input
							id='booking-guests'
							type='number'
							min='1'
							max='8'
							value={guests}
							onChange={e => setGuests(e.target.value)}
							required
							className='bg-gray-800/10 border-blue-950 border-2 h-12 rounded px-2 text-left'
							placeholder='1-8'
						/>
					</div>

					<div className='flex flex-col gap-1'>
						<label htmlFor='booking-date' className='font-extrabold text-lg'>
							Date:
						</label>
						<input
							id='booking-date'
							type='date'
							min={getToday()}
							value={date}
							onChange={e => setDate(e.target.value)}
							required
							className='bg-gray-800/10 border-blue-950 border-2 h-12 rounded px-2 text-left'
						/>
						<div className='flex flex-col gap-1'>
							<label htmlFor='booking-time' className='font-extrabold text-lg'>
								Time:
							</label>
							<select
								id='booking-time'
								value={time}
								onChange={e => setTime(e.target.value)}
								required
								className='bg-gray-800/10 border-blue-950 border-2 h-12 rounded px-2 text-left'
							>
								<option value=''>Select time</option>
								{ALL_SLOTS.map(slot => {
									const isOccupied = occupiedSlots.includes(slot)
									return (
										<option key={slot} value={slot} disabled={isOccupied}>
											{slot} {isOccupied ? 'already booked' : ''}
										</option>
									)
								})}
							</select>
						</div>
						<div className='flex flex-col gap-1'>
							<label htmlFor='booking-email' className='font-extrabold text-lg'>
								Email:
							</label>
							<input
								id='booking-email'
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
								className='bg-gray-800/10 border-blue-950 border-2 h-12 rounded px-2 text-left'
								placeholder='your@email.com'
							/>
						</div>
						{date && time && (
							<CapacityIndicator
								date={date}
								time={time}
								duration={DEFAULT_DURATION}
							/>
						)}

						<button
							type='submit'
							disabled={!isValid || isSubmitting}
							className={`w-full h-12 rounded border-2 uppercase font-extrabold duration-500 
                ${
									isValid && !isSubmitting
										? 'bg-blue-800 text-white cursor-pointer hover:bg-blue-700 hover:scale-105'
										: 'bg-blue-900/50 text-white/60 cursor-not-allowed'
								}`}
						>
							{isSubmitting ? 'Booking...' : 'submit reservation'}
						</button>
						{message?.success && (
							<p className='text-center text-green-700 font-bold'>
								{message.success}
							</p>
						)}
						{message?.error && (
							<p className='text-center text-red-700 font-bold' role='alert'>
								{message.error}
							</p>
						)}
					</div>
				</form>
			</div>
		</div>
	)
}

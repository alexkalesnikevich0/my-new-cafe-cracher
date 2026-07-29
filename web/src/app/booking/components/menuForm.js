'use client'
import { useState, useEffect } from 'react'
import { createBooking } from '@/app/booking/actions/booking'
import Link from 'next/link'

import FadeInFromBottom from '../animations/FadeInFromBottom'
import FadeInFromTop from '../animations/FadeInfromTop'

const home = [
	{
		route: '/',
	},
]

export default function Menu() {
	const [message, setMessage] = useState(null)

	async function handleSubmit(formData) {
		const date = formData.get('date')
		const time = formData.get('time')

		const guests = formData.get('guests')
		if (parseInt(guests) > 8) {
			setMessage({ error: 'Maximum 8 guests for table!' })
			return
		}

		const result = await createBooking(formData)
		setMessage(result)
		if (result?.success) {
			setTimeout(() => window.location.reload(), 200)
		}
	}

	const [selectedDate, setSelectedDate] = useState('')

	const [occupiedSlots, setOccupiedSlots] = useState([])
	useEffect(() => {
		fetch('/booking/api/occupied-slots')
			.then(res => res.json())
			.then(setOccupiedSlots)
	}, [])

	const timeOptions = (() => {
		const options = []
		const now = new Date()
		const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
		const currentTotalMinutes = now.getHours() * 60 + now.getMinutes()

		for (let h = 10; h <= 22; h++) {
			const time = `${String(h).padStart(2, '0')}:00`
			const slotTotalMinutes = h * 60

			if (selectedDate === today && slotTotalMinutes - currentTotalMinutes < 60)
				continue

			const isOccupied = occupiedSlots.some(
				slot => slot.date === selectedDate && slot.time === time,
			)
			if (isOccupied) continue

			options.push({ value: time, label: time })
		}
		return options
	})()

	return (
		<div className='flex justify-center items-center'>
			<FadeInFromBottom delay={100} threshold={0.2}>
				<div className='group'>
					<div
						className='duration-600 w-80 mt-20 mb-20 border-2 rounded-xl bg-orange-100/80 border-slate-700 
					md:group-hover:border-3 md:w-165 md:h-220 md:group-hover:h-225 
					lg:group-hover:h-230 lg:h-220 lg:w-220'
					>
						<div>
							<div
								className='flex justify-center sm:ml-17 text-xl mt-5 font-black text-slate-900 
							md:flex md:text-center md:mt-14 md:text-2xl md:ml-0 md:justify-center 
							lg:text-3xl lg:mt-25'
							>
								TABLE RESERVIERUNG
							</div>
							<div className='flex gap-1 md:h-20'>
								<div
									className='ml-1 mr-4 text-xl rounded-full bg-blue-900 h-9 w-8 mt-5 md:mt-2 lg:mt-6 justify-center items-center flex text-white/90 font-black font-mono 
								md:mr-15 md:ml-18 md:text-2xl 
								lg:mr-15 lg:ml-29'
								>
									1
								</div>
								<div className='w-50 h-2 bg-blue-950 mt-9 rounded-full md:mt-5 md:w-80 lg:mt-9 lg:w-115'></div>
								<div
									className='ml-4 text-xl rounded-full bg-blue-900 h-9 w-8 mt-5 justify-center flex items-center text-white/90 font-black font-mono 
								md:mt-2 md:text-2xl md:ml-16 
								lg:mt-6'
								>
									2
								</div>
							</div>
							<div className='flex justify-center items-center'>
								<div
									className='w-70 text-center mt-12 font-extrabold border-gray-900 border-3 duration-700 rounded-xl p-3 
								md:mt-7 md:w-110 md:ml-0 
								lg:mt-12 lg:w-140 
								2xl:font-bold'
								>
									Liebe Gäste, hier können Sie Ihre Tischreservierung bis 10
									Personen vornehmen. Bitte beachten Sie die derzeit geltenden
									Vorschriften. Wir haben durchgängig für Sie geöffnet.
								</div>
							</div>
							<form action={handleSubmit}>
								<div
									className='mt-14 flex-col flex justify-center items-center
						md:gap-4 md:ml-0 md:flex md:flex-row
						lg:gap-11 
						[&_input]:bg-gray-800/10 [&_input]:border-blue-950 [&_input]:pl-2 [&_input]:pr-2 [&_input]:border-2 [&_input]:h-12 [&_input]:w-40 [&_input]:rounded md:[&_input]:ml-0 md:[&_input]:w-35 lg:[&_input]:w-40
						[&_section]:flex-col [&_section]:flex [&_section]:font-extrabold [&_section]: [&_section]:text-xl md:[&_section]:ml-0 2xl:[&_section]:font-bold'
								>
									<section className=''>
										Person:
										<input
											name='guests'
											placeholder='fill the gap'
											type='number'
											required
											min='1'
											max='8'
											className='md:ml-2 text-center '
										></input>
									</section>
									<section className='mt-7 md:mt-0'>
										Date:
										<input
											name='date'
											type='date'
											required
											min={new Date().toISOString().split('T')[0]}
											className='md:ml-10'
											onChange={e => setSelectedDate(e.target.value)}
										></input>
									</section>
									<section className='mt-7 md:mt-0'>
										Time:
										<select
											name='time'
											required
											className='bg-gray-800/10 border-blue-950 pl-2 pr-2 border-2 h-12 w-40 rounded md:ml-0 md:w-35 lg:w-40'
										>
											<option value=''>Select time</option>
											{timeOptions.map(t => (
												<option key={t.value} value={t.value}>
													{t.value}
												</option>
											))}
										</select>
									</section>
									<section className='mt-7 md:mt-0'>
										Email:
										<input
											name='email'
											placeholder='your@gmail'
											type='email'
											required
											className='md:ml-2 text-center'
										></input>
									</section>
								</div>
								<div className=''>
									<div className='items-center justify-center flex flex-col pt-10 h-35 gap-5 md:flex-row md:gap-50 lg:gap-90'>
										<div className='group/main'>
											<button
												onClick={() => {
													setMessage(null)
													setSelectedDate('')
												}}
												className='flex items-center justify-center cursor-pointer bg-gray-400/20 border-red-600/90 border-2 w-30 h-12 rounded-sm duration-600 
											group-hover/main:bg-red-700 group-hover/main:border-black/70 group-hover/main:rounded-md group-hover/main:border-2 
											  md:h-12 md:w-35 group-hover/main:scale-110 items-center uppercase text-red-600/90 font-extrabold duration-700 
												group-hover/main:text-white group-hover/main:font-extrabold group-hover/main:text-lg
												2xl:group-hover:font-semibold'
												type='reset'
											>
												reset
											</button>
										</div>
										<div className='group/main'>
											<button
												type='submit'
												className='flex items-center justify-center cursor-pointer bg-gray-400/20 border-blue-600/90 border-2 w-55 h-12 rounded-sm duration-600 
											
											group-hover/main:bg-blue-700 group-hover/main:border-black/70 group-hover/main:rounded-md group-hover/main:border-2 
											  md:h-12 md:w-57 group-hover/main:scale-110 items-center uppercase text-blue-600/90 font-extrabold duration-700 
												group-hover/main:text-white group-hover/main:font-extrabold group-hover/main:text-lg
												2xl:group-hover:font-semibold'
											>
												submit reservation
											</button>
										</div>
									</div>
								</div>
							</form>
							<div className='flex justify-center items-center pl-0 pt-5 font-bold duration-700'>
								{message?.error && (
									<p style={{ color: 'red' }}>{message.error}</p>
								)}
								{message?.success && (
									<p style={{ color: 'green' }}>{message.success}</p>
								)}
							</div>
							<div className='md:text-center'>
								<div className='flex justify-center'>
									<div
										className='text-xl w-80 mt-10 text-center text-slate-900 font-serif font-black 
									md:text-2xl md:w-100 md:mt-15 
									lg:text-3xl lg:w-220'
									>
										RESERVIERUNGS-ANFRAGE AB 8 PERSONEN
									</div>
								</div>
								<div className='flex justify-center'>
									<div
										className='text-md text-bold mt-2 text-slate-900/90 font-serif mb-10
									md:text-xl md:mt-5 md:font-medium 
									lg:text-2xl'
									>
										Wir freuen uns auf Ihre Anfrage
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</FadeInFromBottom>
		</div>
	)
}

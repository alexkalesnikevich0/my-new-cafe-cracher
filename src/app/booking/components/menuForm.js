'use client'
import { useState, useEffect } from 'react'
import { createBooking } from '@/app/booking/actions/booking'

import FadeInFromBottom from '../animations/FadeInFromBottom'

export default function Menu() {
	// --- 	СОСТОЯНИЕ ДЛЯ СООБЩЕНИЙ ПОЛЬЗОВАТЕЛЮ ---
	const [message, setMessage] = useState(null) // { success: '...' } or { error: '...' }

	// --- НОВОЕ PR4 ! --- //
	// 1. Новое состояние

	// 2. Функция handleSubmit теперь:
	// - Останавливает перезагрузку страницы (e.preventDefault())
	// - Проверяет isSubmitting перед отправкой
	// - Блокирует кнопку через setIsSubmitting(true)
	// - Разблокирует в finally (даже при ошибке)

	// 3. Кнопка SUBMIT:
	// - disabled={!isValid || isSubmitting}
	// - Условный рендеринг: спиннер "Booking..." + "submit reservation"

	// -- СОСТОЯНИЕ ДЛЯ ОТПРАВКИ (ЗАЩИТА ОТ ДВОЙНОГО КЛИКА)
	const [isSubmitting, setIsSubmitting] = useState(false)

	// --- ОТПРАВКА ФОРМЫ НА СЕРВЕР --- //
	async function handleSubmit(e) {
		e.preventDefault() // ОСТАНАВЛИВАЕТ ПЕРЕЗАГРУЗКУ СТРАНИЦЫ -- НОВОЕ PR4 --
		const formData = new FormData(e.target) // ПОЛУЧАЕМ ДАННЫЕ ИЗ ФОРМЫ -- НОВОЕ PR4 --
		// 1 	ЗАЩИТА ОТ ДВОЙНОГО КЛИКА
		if (isSubmitting) return
		setIsSubmitting(true) // -- НОВОЕ PR4 --

		// 2 ВЕСЬ ОСТАЛЬНОЙ КОД ЗАВЕРНУЛ В try/catch/finally
		try {
			const guests = formData.get('guests')

			// --- ПРОВЕРКА НА МАКСИМАЛЬНОЕ КОЛИЧЕСТВО ГОСТЕЙ (ДУБЛИРУЕТСЯ С max='8'. в input ) --- //
			if (parseInt(guests) > 8) {
				setMessage({ error: 'Maximum 8 guests for table!' })
				setIsSubmitting(false) // РАЗБЛОКИРОВКА ПРИ ОШИБКЕ -- НОВОЕ PR4 --
				return
			}
			// --- ВЫЗЫВАЕМ СЕРВЕРНЫЙ ЭКШЕН - ОН СОХРАНЯЕТ БРОНЬ В БАЗУ ДАННЫХ И ОТПРАВЛЯЕТ ПИСЬМА --- //
			const result = await createBooking(formData)
			setMessage(result) // ПОКАЗЫВАЕМ РЕЗУЛЬТАТ ПОЛЬЗОВАТЕЛЮ
		} catch (error) {
			// 3 ОБРАБОТКА НЕПРЕДВИДЕННЫХ ОШИБОК -- НОВОЕ PR4 --
			console.error('Ошибка при отправке:', error)
			setMessage({ error: 'Что то пошло не так, попробуйте позже' })
		} finally {
			// 4 	РАЗБЛОКИРОВКА В ЛЮБОМ СЛУЧАЕ (null) -- НОВОЕ PR4 --
			setIsSubmitting(false)
		}
	}
	// --- НОВОЕ PR4 ! --- //

	// --- СОСТОЯНИЕ ДЛЯ ДИНАМИЧЕСКОГО СПИСКА ВРЕМЕНИ --- //
	const [selectedDate, setSelectedDate] = useState('')

	// ЗАГРУЖАЕМ УЖЕ ЗАНЯТЫЕ СЛОТЫ С СЕРВЕРА
	const [occupiedSlots, setOccupiedSlots] = useState([])
	useEffect(() => {
		fetch('/booking/api/occupied-slots')
			.then(res => res.json())
			.then(setOccupiedSlots)
	}, [])

	// --- ГЕНЕРИРУЕМ СПИСОК ДОСТУПНОГО ВРЕМЕНИ С 10:00 - 22:00 ТОЛЬКО СВОБОДНЫЕ СЛОТЫ --- //
	const timeOptions = (() => {
		const options = []
		const now = new Date()
		const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
		const currentTotalMinutes = now.getHours() * 60 + now.getMinutes()

		for (let h = 10; h <= 22; h++) {
			const time = `${String(h).padStart(2, '0')}:00`
			const slotTotalMinutes = h * 60

			// ПРОПУСКАЕМ СЛОТЫ ДО КОТОРЫХ МЕНЬШЕ ЧАСА (ДЛЯ СЕГОДНЯШНЕЙ ДАТЫ)
			if (selectedDate === today && slotTotalMinutes - currentTotalMinutes < 60)
				continue

			// ПРОПУСКАЕМ УЖЕ ЗАНЯТЫЕ СЛОТЫ
			const isOccupied = occupiedSlots.some(
				slot => slot.date === selectedDate && slot.time === time,
			)
			if (isOccupied) continue

			options.push({ value: time, label: time })
		}
		return options
	})()

	// --- ЛОГИКА БЛОКИРОВКИ КНОПОК --- //

	const [isEmpty, setIsEmpty] = useState(true) // ПРОВЕРЯЕМ ПУСТАЯ ЛИ ФОРМА (ДЛЯ КНОПКИ RESET)

	// ПРОВЕРЯЕМ ВАЛИДНА ЛИ ФОРМА (ДЛЯ КНОПКИ SUBMIT) - ВСЕ ПОЛЯ ДОЛЖНЫ БЫТЬ ЗАПОЛНЕНЫ
	const checkForm = () => {
		const guests = document.querySelector('input[name="guests"]')?.value

		const date = document.querySelector('input[name="date"]')?.value

		const time = document.querySelector('select[name="time"]')?.value

		const email = document.querySelector('input[name="email"]')?.value

		setIsEmpty(!(guests || date || time || email)) // TRUE ЕСЛИ ВСЕ ПОЛЯ ПУСТЫЕ
		setIsValid(!!(guests && date && time && email)) // TRUE ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ
	}

	const [isValid, setIsValid] = useState(false)

	return (
		<div className='flex justify-center items-center'>
			<FadeInFromBottom delay={100} threshold={0.2}>
				<div className='group'>
					<div
						className='duration-600 mt-20 mb-20 border-2 rounded-xl bg-orange-100/80 border-slate-700 
					md:group-hover:border-3 
					'
					>
						{/* === ЗАГОЛОВОК ФОРМЫ === */}
						<div>
							<div
								className='flex justify-center text-xl mt-5 font-black text-slate-900 
							md:flex md:text-center md:mt-14 md:text-2xl md:justify-center 
							lg:text-3xl lg:mt-25'
							>
								TABLE RESERVIERUNG
							</div>
							{/* ИНДИКАТОР ШАГОВ (1 - ЗАПОЛНЕНИЕ 2 - ПОДТВЕРЖДЕНИЕ) */}
							<div className='flex gap-1 md:h-20'>
								<div
									className='ml-2 mr-4 text-xl rounded-full bg-blue-900 h-9 w-8 mt-5 md:mt-2 lg:mt-6 justify-center items-center flex text-white/90 font-black font-mono 
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
							{/* ОПИСАНИЕ */}
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
							{/* == САМА ФОРМА БРОНИРОВАНИЯ == */}
							{/* // -- НОВОЕ PR4 -- было action={} */}
							<form onSubmit={handleSubmit}>
								<div
									className='mt-14 flex-col flex justify-center items-center
						md:gap-4 md:ml-0 md:flex md:flex-row
						lg:gap-11 
						[&_input]:bg-gray-800/10 [&_input]:border-blue-950 [&_input]:pl-2 [&_input]:pr-2 [&_input]:border-2 [&_input]:h-12 [&_input]:w-40 [&_input]:rounded md:[&_input]:ml-0 md:[&_input]:w-35 lg:[&_input]:w-40
						[&_section]:flex-col [&_section]:flex [&_section]:font-extrabold [&_section]: [&_section]:text-xl md:[&_section]:ml-0 2xl:[&_section]:font-bold'
								>
									{/* ПОЛЕ КОЛИЧЕСТВО ГОСТЕЙ */}
									<section className=''>
										Person:
										<input
											onChange={checkForm}
											name='guests'
											placeholder='fill the gap'
											type='number'
											required
											min='1'
											max='8'
											className='md:ml-2 text-center '
										></input>
									</section>
									{/* ПОЛЕ ДАТА (ПРИ ИЗМЕНЕНИИ ОБНОВЛЯЕТ selectedDate И СПИСОК ВРЕМЕНИ)*/}
									<section className='mt-7 md:mt-0'>
										Date:
										<input
											name='date'
											type='date'
											required
											min={new Date().toISOString().split('T')[0]}
											className='md:ml-10'
											onChange={e => {
												setSelectedDate(e.target.value)
												checkForm()
											}}
										></input>
									</section>
									{/* ПОЛЕ ВРЕМЯ (ДИНАМИЧЕСКИЙ СПИСОК ЗАВИСИТ ОТ ВЫБРАННОЙ ДАТЫ) */}
									<section className='mt-7 md:mt-0'>
										Time:
										<select
											onChange={checkForm}
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
									{/* ПОЛЕ ЕМАЙЛ (ДЛЯ ОТПРАВКИ СООБЩЕНИЯ НА ПОЧТУ ГОСТЮ) */}
									<section className='mt-7 md:mt-0'>
										Email:
										<input
											onChange={checkForm}
											name='email'
											placeholder='your@gmail'
											type='email'
											required
											className='md:ml-2 text-center'
										></input>
									</section>
								</div>
								{/* КНОПКИ RESET И SUBMIT */}

								<div className='items-center justify-center flex flex-col pt-10 h-35 gap-5 md:flex-row md:gap-50 lg:gap-90'>
									{/* КНОПКА RESET - АКТИВНА ТОЛЬКО ЕСЛИ ФОРМА НЕ ПУСТАЯ */}
									<button
										type='button'
										disabled={isEmpty}
										onClick={() => {
											setMessage(null)
											setSelectedDate('')

											document.querySelector('form')?.reset()
											setIsEmpty(true)

											setIsValid(false)
										}}
										className={`select-none flex items-center justify-center bg-red-800 border-black/70 border-2 w-30 h-12 rounded-sm
											  md:h-12 md:w-35 items-center uppercase font-extrabold duration-700 
												${
													isEmpty
														? 'opacity-70 cursor-not-allowed text-white/70'
														: 'cursor-pointer border-black scale-110 border-2 font-extrabold text-lg text-white/80 hover:bg-red-700 hover:text-white active:text-white active:bg-red-700'
												}`}
									>
										reset
									</button>
									{/* КНОПКА SUBMIT - АКТИВНА ТОЛЬКО ВСЕ ПОЛЯ ЗАПОЛНЕНЫ */}
									<button
										type='submit'
										disabled={!isValid || isSubmitting} // добавил isSubmitting PR4
										className={`select-none flex items-center justify-center w-55 h-12 rounded-sm border-2 border-black/40
												md:h-12 md:w-57 items-center uppercase font-extrabold duration-700 
												${
													isValid && !isSubmitting // изменил условие PR4
														? 'cursor-pointer bg-blue-800 scale-110 text-white/60 hover:text-white hover:bg-blue-700 hover:border-black active:text-white active:bg-blue-700 active:border-black '
														: 'border-black/50 opacity-70 text-white/60 cursor-not-allowed bg-blue-900 scale-100'
												}`}
									>
										{isSubmitting ? ( // -- НОВОЕ PR4 --
											<span className='flex items-center gap-2'>
												<svg
													className='animate-spin h-5 w-5 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
												>
													{' '}
													<circle
														className='opacity-25'
														cx='12'
														cy='12'
														r='10'
														stroke='currentColor'
														strokeWidth='4'
													></circle>{' '}
													<path
														className='opacity-75'
														fill='currentColor'
														d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
													></path>{' '}
												</svg>
												Booking...
											</span>
										) : (
											'submit reservation'
										)}
									</button>
								</div>
							</form>
							{/* СООБЩЕНИЯ ОБ УСПЕХЕ ЛИБО ОШИБКЕ БРОНИРОВАНИЯ */}
							<div className='flex justify-center items-center pl-0 pt-5 font-bold duration-700'>
								{message?.error && (
									<p style={{ color: 'red' }}>{message.error}</p>
								)}
								{message?.success && (
									<p style={{ color: 'green' }}>{message.success}</p>
								)}
							</div>
							{/* НИЖНИЙ ТЕКСТ */}
							<div className='md:text-center'>
								<div className='flex justify-center'>
									<h2
										className='text-xl w-80 mt-10 text-center text-slate-900 font-serif font-black 
									md:text-2xl md:w-100 md:mt-15 
									lg:text-3xl lg:w-220'
									>
										RESERVIERUNGS-ANFRAGE AB 8 PERSONEN
									</h2>
								</div>
								<div className='flex justify-center'>
									<h2
										className='text-md text-bold mt-2 text-slate-900/90 font-serif mb-5
									md:text-xl md:mt-5 md:font-medium 
									lg:text-2xl'
									>
										Wir freuen uns auf Ihre Anfrage
									</h2>
								</div>
								<div className='font-serif flex flex-col justify-center items-center'>
									<h2 className='text-xl'>ordering by phone</h2>
									<h3 className='text-lg text-black/60 hover:text-black p-1 cursor-pointer mb-10'>
										+375-33-918-4970
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</FadeInFromBottom>
		</div>
	)
}

'use client'
import { useState, useEffect } from 'react'
import { createBooking } from '@/app/booking/actions/booking'

import FadeInFromBottom from '../animations/FadeInFromBottom'

import ModalConfirm from './ModalConfirm'

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

	const [showConfirm, setShowConfirm] = useState(false) // new ModalConfirm (after change telegram)
	const [pendingData, setPendingData] = useState(null) // new ModalConfirm (after change telegram)

	// --- ОТПРАВКА ФОРМЫ НА СЕРВЕР --- //
	// НОВОЕ ИЗМЕНЕНИЕ handleSubmit теперь только показывает модалку
	// 1. ОСТАНАВЛИВАЕТ ПЕРЕЗАГРУЗКУ СТРАНИЦЫ (e.preventDefault)
	// 2. СОБИРАЕТ ДАННЫЕ ИЗ ФОРМЫ
	// 3. СОХРАНЯЕТ ИХ В pendingData
	// 4. ПОКАЗЫВАЕТ МОДАЛКУ (showConfirm = true)
	// ОТПРАВКА НА СЕРВЕР ПРОИСХОДИТ ТОЛЬКО ПОСЛЕ ПОДТВЕРЖДЕНИЯ

	function handleSubmit(e) {
		e.preventDefault()
		const formData = new FormData(e.target)

		const data = {
			guests: formData.get('guests'),
			date: formData.get('date'),
			time: formData.get('time'),
			email: formData.get('email'),
		}

		setPendingData(data) // СОХРАНЯЕМ ДАННЫЕ ПО ВРЕМЕННОЕ ХРАНИЛИЩЕ
		setShowConfirm(true) // ПОКАЗЫВАЕМ МОДАЛКУ
	}

	// НОВОЕ ИЗМЕНЕНИЕ ПОСЛЕ PR4
	// handleConfirmBooking
	// ДЕЛАЕТ:
	// 1. ЗАКРЫВАЕТ МОДАЛКУ
	// 2. БЛОКИРУЕТ КНОПКУ (isSubmitting = true)
	// 3. ОТПРАВЛЯЕТ ДАННЫЕ НА СЕРВЕР (createBooking)
	// 4. ПОКАЗЫВАЕТ РЕЗУЛЬТАТ (УСПЕХ ИЛИ ОШИБКА)
	// 5. РАЗБЛОКИРУЕТ КНОПКУ В finally
	// ВЫЗЫВАЕТСЯ ИЗ МОДАЛКИ ПРИ НАЖАТИИ 'ПОДТВЕРДИТЬ'
	// --- НОВОЕ PR4 ! --- //
	async function handleConfirmBooking() {
		if (!pendingData) return
		setShowConfirm(false)
		if (isSubmitting) return
		setIsSubmitting(true)

		try {
			// СОБИРАЕМ formData ИЗ pendingData
			const formData = new FormData()
			formData.append('guests', pendingData.guests)
			formData.append('date', pendingData.date)
			formData.append('time', pendingData.time)
			formData.append('email', pendingData.email)

			// ПРОВЕРКА ГОСТЕЙ
			if (parseInt(pendingData.guests) > 8) {
				setMessage({ error: 'Maximum 8 guests for table!' })
				setIsSubmitting(false)
				return
			}

			// ОТПРАВКА НА СЕРВЕР
			const result = await createBooking(formData)
			setMessage(result)
		} catch (error) {
			console.error('Ошибка при отправке:', error)
			setMessage({ error: 'Что-то пошло не так, попробуйте позже' })
		} finally {
			setIsSubmitting(false)
			setPendingData(null)
		}
	}

	// --- СОСТОЯНИЕ ДЛЯ ДИНАМИЧЕСКОГО СПИСКА ВРЕМЕНИ --- //
	const [selectedDate, setSelectedDate] = useState('')

	// ЗАГРУЖАЕМ УЖЕ ЗАНЯТЫЕ СЛОТЫ С СЕРВЕРА
	const [occupiedSlots, setOccupiedSlots] = useState([])
	useEffect(() => {
		fetch('/booking/api/occupied-slots')
			.then(res => res.json())
			.then(setOccupiedSlots)
	}, [])

	// ============================================================
	// НОВОЕ ИЗМЕНЕНИЕ: Сегодняшняя дата в локальном формате (2.8.1)
	// 2 changes th PR2 2.8
	//
	// ЗАЧЕМ: используется для:
	// - min в <input type="date">
	// - проверки в onChange (iOS Safari)
	// ============================================================
	const today = (() => {
		const now = new Date()
		return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
	})()

	// --- ГЕНЕРИРУЕМ СПИСОК ДОСТУПНОГО ВРЕМЕНИ С 10:00 - 22:00 ТОЛЬКО СВОБОДНЫЕ СЛОТЫ --- //
	const timeOptions = (() => {
		const options = []
		const now = new Date()
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
										{/* ==
      								НОВОЕ ИЗМЕНЕНИЕ: Проверка гостей для iOS (2.8.2)
      								ДАТА: Сентябрь 2026
      								ПРОБЛЕМА: iOS Safari игнорирует min/max для type="number".
                			Можно ввести "abc", "232", "0".
      								РЕШЕНИЕ: JS-проверка в onChange.
                			Если значение невалидное → сбрасываем на 1 + alert.
     								=== */}
										<input
											name='guests'
											placeholder='fill the gap'
											type='number'
											required
											min='1'
											max='8'
											className='md:ml-2 text-center'
											onChange={e => {
												const raw = e.target.value

												// Если пусто — пропускаем (пользователь стирает)
												if (raw === '') {
													checkForm()
													return
												}

												// Преобразуем в число
												const num = Number(raw)

												// Если не целое число ИЛИ меньше 1, ИЛИ больше 8 — сбрасываем
												if (!Number.isInteger(num) || num < 1 || num > 8) {
													e.target.value = '1'
													alert('Количество гостей от 1 до 8')
												}

												// Обновляем состояние формы
												checkForm()
											}}
										/>
									</section>
									{/* ПОЛЕ ДАТА (ПРИ ИЗМЕНЕНИИ ОБНОВЛЯЕТ selectedDate И СПИСОК ВРЕМЕНИ)*/}

									<section className='mt-7 md:mt-0'>
										Date:
										{/* ==
    								НОВОЕ ИЗМЕНЕНИЕ: Проверка даты для iOS (2.8.1)
  								  2 changes tg PR2 + 2.8 IOS 
   									ПРОБЛЕМА: iOS Safari игнорирует min/max для input type="date".
    								РЕШЕНИЕ: JS-проверка при изменении даты.
   									=== */}
										<input
											required
											className='md:ml-10'
											name='date'
											type='date'
											min={today}
											onChange={e => {
												const value = e.target.value
												if (value && value < today) {
													e.target.value = today
													alert('Нельзя выбрать прошедшую дату')
												}
												setSelectedDate(value)
												checkForm()
											}}
										/>
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
							{/**
							 * НОВОЕ ИЗМЕНЕНИЕ: МОДАЛКА ПОДТВЕРЖДЕНИЯ БРОНИ
							 * after change telegram folder
							 * ПОКАЗЫВАЕТ ПОСЛЕ КНОПКИ Submit
							 * ПЕРЕДАЕТ ДАННЫЕ БРОНИ (pendingData) и вызывает handleConfirmBooking ПРИ ПОДТВЕРЖДЕНИИ
							 */}
							{showConfirm && pendingData && (
								<ModalConfirm
									data={pendingData}
									onConfirm={handleConfirmBooking}
									onCancel={() => {
										setShowConfirm(false)
										setPendingData(null)
									}}
								/>
							)}
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

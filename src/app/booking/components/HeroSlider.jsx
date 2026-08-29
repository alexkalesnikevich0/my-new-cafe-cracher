'use client'

import { useState } from 'react'

import FirstSlide from '../slides/firstSlide'
import SecondSlide from '../slides/secondSlide'
import ThirdSlide from '../slides/thirdSlide'
import ForthSlide from '../slides/forthSlide'
import FifthSlide from '../slides/fifthSlide'
import SixSlide from '../slides/sixSlide'

// Массив компонентов слайдов в порядке отображения
const slides = [
	FirstSlide,
	SecondSlide,
	ThirdSlide,
	ForthSlide,
	FifthSlide,
	SixSlide,
]
// чтобы добавить новый слайд, просто импортировать его и добавить в массив slides

export default function HeroSlider() {
	// --- состояние для переключения слайдов ---
	const [current, setCurrent] = useState(0) // индекс текущего слайда

	const goTo = index => setCurrent(index) // перейти к конкретному слайду используя точки внизу

	const next = () => setCurrent(current === slides.length - 1 ? 0 : current + 1) // переключение на следующий слайд
	const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1) // переключение на предыдущий слайд

	// --- состояние для перетаскивания мышкой drag
	const [dragging, setDragging] = useState(false) // зажата ли мышь
	const [dragStart, setDragStart] = useState(null) // координата начала перетаскивания мыши
	const [dragOffset, setDragOffset] = useState(0) // смещение от начала перетаскивания
	// ---

	// запоминаем где зажали мышь
	const handleMouseDown = e => {
		setDragging(true)
		setDragStart(e.clientX)
	}

	const handleMouseMove = e => {
		if (!dragging) return // если мышь не зажата - ничего не делаем
		setDragOffset(e.clientX - dragStart) // считаем смещение
	}

	const handleMouseUp = () => {
		if (!dragging) return
		setDragging(false)
		if (dragOffset < -50)
			next() // если смещение больше 50px - переключаем слайд
		else if (dragOffset > 50) prev()
		else goTo(current) // иначе возвращаем на текущий
		//сбрасываем состояние перетаскивания
		setDragOffset(0)
		setDragStart(null)
	}

	// --- состояние для сенсорного перетаскивания телефона ---
	const [touchStart, setTouchStart] = useState(null)
	const [touchEnd, setTouchEnd] = useState(null)

	const handleTouchStart = e => setTouchStart(e.targetTouches[0].clientX)
	const handleTouchMove = e => setTouchEnd(e.targetTouches[0].clientX)
	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return
		const distance = touchStart - touchEnd
		if (distance > 50) next()
		if (distance < -50) prev()
		setTouchStart(null)
		setTouchEnd(null)
	}

	return (
		<div
			className='relative w-full h-screen overflow-hidden active:cursor-grabbing'
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
		>
			{/* контейнер который двигает все слайды */}
			<div
				className={`flex h-full ${dragging ? '' : 'transition-transform duration-1300 ease-in-out'}`}
				style={{
					transform: `translateX(calc(-${current * 100}% + ${dragging ? dragOffset : 0}px))`,
				}}
			>
				{/* рендерим все слайды в ряд */}
				{slides.map((Slide, index) => (
					<div key={index} className='w-full h-full flex-shrink-0'>
						<Slide />
					</div>
				))}
			</div>
			{/* стрелка назад */}
			<button
				onClick={prev}
				className='absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-30'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='size-8 hover:size-10 duration-800 cursor-pointer'
				>
					<path
						fillRule='evenodd'
						d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
			{/* стрелка вперед */}
			<button
				onClick={next}
				className='absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-30'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='size-8 hover:size-10 duration-800 cursor-pointer'
				>
					<path
						fillRule='evenodd'
						d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
			{/* точки индикаторы какой слайд активен*/}
			<div className='absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-30 '>
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goTo(index)}
						className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === current ? 'bg-white scale-145' : 'bg-white/50 hover:bg-white/80 hover:scale-145'}`}
					/>
				))}
			</div>
		</div>
	)
}

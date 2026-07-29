'use client'

import { useState } from 'react'

import FirstSlide from '../slides/firstSlide'
import SecondSlide from '../slides/secondSlide'
import ThirdSlide from '../slides/thirdSlide'
import ForthSlide from '../slides/forthSlide'
import FifthSlide from '../slides/fifthSlide'
import SixSlide from '../slides/sixSlide'

const slides = [
	FirstSlide,
	SecondSlide,
	ThirdSlide,
	ForthSlide,
	FifthSlide,
	SixSlide,
]

export default function HeroSlider() {
	const [current, setCurrent] = useState(0)

	const goTo = index => setCurrent(index)

	const next = () => setCurrent(current === slides.length - 1 ? 0 : current + 1)
	const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1)

	const [dragging, setDragging] = useState(false)
	const [dragStart, setDragStart] = useState(null)
	const [dragOffset, setDragOffset] = useState(0)

	const handleMouseDown = e => {
		setDragging(true)
		setDragStart(e.clientX)
	}

	const handleMouseMove = e => {
		if (!dragging) return
		setDragOffset(e.clientX - dragStart)
	}

	const handleMouseUp = () => {
		if (!dragging) return
		setDragging(false)
		if (dragOffset < -50) next()
		else if (dragOffset > 50) prev()
		else goTo(current)
		setDragOffset(0)
		setDragStart(null)
	}

	return (
		<div
			className='relative w-full h-screen overflow-hidden active:cursor-grabbing select-none'
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
		>
			<div
				className={`flex h-full ${dragging ? '' : 'transition-transform duration-1300 ease-in-out'}`}
				style={{
					transform: `translateX(calc(-${current * 100}% + ${dragging ? dragOffset : 0}px))`,
				}}
			>
				{slides.map((Slide, index) => (
					<div key={index} className='w-full h-full flex-shrink-0'>
						<Slide />
					</div>
				))}
			</div>

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

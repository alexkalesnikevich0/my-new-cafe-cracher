'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			setVisible(window.scrollY > 700)
		}
		window.addEventListener('scroll', toggleVisibility)
	}, [])

	const scrollToTop = () => {
		const duration = 3500
		const start = window.scrollY
		const startTime = performance.now()

		const animateScroll = currentTime => {
			const elapsed = currentTime - startTime
			const progress = Math.min(elapsed / duration, 1)

			const easeInOutCubic =
				progress < 0.5
					? 4 * progress * progress * progress
					: 1 - Math.pow(-2 * progress + 2, 3) / 2
			window.scrollTo(0, start * (1 - easeInOutCubic))

			if (progress < 1) {
				requestAnimationFrame(animateScroll)
			}
		}
		requestAnimationFrame(animateScroll)
	}

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-6 right-6 z-50 bg-yellow-900/80 text-white/70 w-13 h-13 rounded-full border-1 border-gray-700/50
				shadow-lg flex items-center justify-center text-xl cursor-pointer transition-all duration-400
				${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
				hover:bg-yellow-900 hover:text-white hover:border-gray-700/80 hover:border-2`}
			area-label='Scroll to top'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				className='size-5'
			>
				<path
					fillRule='evenodd'
					d='M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z'
					clipRule='evenodd'
				/>
			</svg>
		</button>
	)
}

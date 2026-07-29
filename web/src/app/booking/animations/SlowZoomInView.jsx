'use client'

import { useState, useEffect, useRef } from 'react'

export default function SlowZoomInView({ children, threshold = 0.1 }) {
	const [visible, setVisible] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					setVisible(entry.isIntersecting)
				})
			},
			{ threshold: threshold },
		)

		if (ref.current) observer.observe(ref.current)
		return () => observer.disconnect()
	}, [threshold])

	return (
		<div className='overflow-hidden w-full' ref={ref}>
			<div className={visible ? 'animate-slow-zoom-in-view' : ''}>
				{children}
			</div>
		</div>
	)
}

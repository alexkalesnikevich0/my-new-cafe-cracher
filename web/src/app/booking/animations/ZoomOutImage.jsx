'use client'

import { useState, useRef, useEffect } from 'react'

export default function ZoomOutImage({ children, delay = 300, threshold = 0 }) {
	const [visible, setVisible] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setTimeout(() => setVisible(true), delay)

						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: threshold },
		)
		if (ref.current) observer.observe(ref.current)
		return () => observer.disconnect()
	}, [delay, threshold])

	return (
		<div ref={ref} className={visible ? 'animate-zoom-out' : 'opacity-0'}>
			{children}
		</div>
	)
}

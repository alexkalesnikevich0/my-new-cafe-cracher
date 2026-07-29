'use client'

import { useState, useRef, useEffect } from 'react'

export default function FadeInFromBottom({
	children,
	delay = 0,
	threshold = 0.1,
}) {
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
	}, [delay])

	return (
		<div className={visible ? 'animate-fade-in-up' : 'opacity-0'} ref={ref}>
			{children}
		</div>
	)
}

'use client'

import { useEffect, useState, useRef } from 'react'

export default function FadeInFromTop({
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
		<div ref={ref} className={visible ? 'animate-fade-in-down' : 'opacity-0'}>
			{children}
		</div>
	)
}

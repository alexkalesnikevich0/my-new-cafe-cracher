'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Speiskarte() {
	const searchParams = useSearchParams()

	useEffect(() => {
		const scrollTo = searchParams.get('scroll')
		if (scrollTo) {
			setTimeout(() => {
				const element = document.getElementById(scrollTo)
				if (!element) return

				const target = element.getBoundingClientRect().top + window.scrollY - 80
				const duration = 4000
				const start = window.scrollY
				const startTime = performance.now()

				const animateScroll = currentTime => {
					const elapsed = currentTime - startTime
					const progress = Math.min(elapsed / duration, 1)
					const easeInOutCubic =
						progress < 0.5
							? 4 * progress * progress * progress
							: 1 - Math.pow(-2 * progress + 2, 3) / 2

					window.scrollTo(0, start + (target - start) * easeInOutCubic)
					if (progress < 1) {
						requestAnimationFrame(animateScroll)
					}
				}
				requestAnimationFrame(animateScroll)
			}, 200)
		}
	}, [searchParams])

	return null
}

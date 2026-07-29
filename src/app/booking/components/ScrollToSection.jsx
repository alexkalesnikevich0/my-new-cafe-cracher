'use client'

export default function ScrollToSection({ targetId, children, className }) {
	const handleClick = e => {
		e.preventDefault()
		const element = document.getElementById(targetId)
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
			if (progress < 1) requestAnimationFrame(animateScroll)
		}

		requestAnimationFrame(animateScroll)
	}

	return (
		<button type='button' onClick={handleClick} className={className}>
			{children}
		</button>
	)
}

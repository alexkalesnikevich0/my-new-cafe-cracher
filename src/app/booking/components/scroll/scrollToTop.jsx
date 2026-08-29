'use client'

import { useState, useEffect } from 'react'

/*
 * КНОПКА 'НАВЕРХ' ПОЯВЛЯЕТСЯ В ПРАВОМ НИЖНЕМ УГЛУ КОГДА ПОЛЬЗОВАТЕЛЬ ПРОКРУТИЛ СТРАНИЦУ БОЛЬШЕ ЧЕМ НА 700РХ
 * ПРИ КЛИКЕ ПЛАВНО ПРОКРУЧИВАЕТ СТРАНИЦУ НАВЕРХ С АНИМАЦИЕЙ ease-in-out
 */

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false)

	// ПРОВЕРЯЕТ ПОЗИЦИЮ ПРОКРУТКИ ПРИ КАЖДОМ СКРОЛЛЕ
	useEffect(() => {
		const toggleVisibility = () => {
			setVisible(window.scrollY > 700) // ПОКАЗЫВАЕТ КНОПКУ ТОЛЬКО ПОСЛЕ 700РХ ПРОКРУТКИ
		}
		// ВЕШАЕМ СЛУШАТЕЛЬ НА СОБЫТИЕ ПРОКРУТКИ
		window.addEventListener('scroll', toggleVisibility)
	}, []) // ОЧИСТКА НЕОБЯЗАТЕЛЬНА НО В ПРОДАКШН ЛУЧШЕ ДОБАВЛЯТЬ

	/**
	 * ПЛАВНАЯ ПРОКРУТКА НАВЕРХ С ease-in-out АНИМАЦИЕЙ
	 * РАЗГОНЯЕТСЯ В НАЧАЛЕ И ЗАМЕДЛЯЕТСЯ В КОНЦЕ
	 * ДЛИТЕЛЬНОСТЬ 3.5 секунд
	 */
	const scrollToTop = () => {
		const duration = 3500 // 3.5 СЕКУНДЫ - МЕДЛЕННАЯ ПЛАВНАЯ
		const start = window.scrollY // ТЕКУЩАЯ ПОЗИЦИЯ
		const startTime = performance.now() // ТОЧНОЕ ВРЕМЯ СТАРТА

		const animateScroll = currentTime => {
			const elapsed = currentTime - startTime
			const progress = Math.min(elapsed / duration, 1) // ПРОГРЕСС ОТ 0 ДО 1

			// easeInOutCubic - ПЛАВНЫЙ РАЗГОН + ПЛАВНОЕ ТОРМОЖЕНИЕ
			const easeInOutCubic =
				progress < 0.5
					? 4 * progress * progress * progress // ПЕРВАЯ ПОЛОВИНА --- УСКОРЕНИЕ
					: 1 - Math.pow(-2 * progress + 2, 3) / 2 // ВТОРАЯ ПОЛОВИНА --- ЗАМЕДЛЕНИЕ
			window.scrollTo(0, start * (1 - easeInOutCubic))

			if (progress < 1) {
				requestAnimationFrame(animateScroll) // ПРОДОЛЖАЕМ АНИМАЦИЮ
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

'use client'

import { useState, useEffect, useRef } from 'react'

/** code --- 3 globals.css
 * КОМПОНЕНТ-ОБЁРТКА. КАРТИНКА ВНУТРИ НЕГО МЕДЛЕННО ПРИБЛИЖАЕТСЯ,
 * НО ТОЛЬКО КОГДА ПОЛЬЗОВАТЕЛЬ СМОТРИТ НА НЕЁ (ЭЛЕМЕНТ В ОБЛАСТИ ВИДИМОСТИ).
 * КАК ТОЛЬКО ПРОКРУТИЛ МИМО — ВОЗВРАЩАЕТСЯ В ИСХОДНОЕ ПОЛОЖЕНИЕ.
 *
 * ОТЛИЧИЕ ОТ SlowZoomBackground:
 * - SlowZoomBackground — АНИМАЦИЯ РАБОТАЕТ ВСЕГДА (БЕСКОНЕЧНО)
 * - SlowZoomInView — АНИМАЦИЯ РАБОТАЕТ ТОЛЬКО КОГДА ЭЛЕМЕНТ ВИДЕН НА ЭКРАНЕ
 *
 * @param {ReactNode} children - КОНТЕНТ (ОБЫЧНО КАРТИНКА)
 * @param {number} threshold - ПОРОГ ВИДИМОСТИ (0.1 = 10% ЭЛЕМЕНТА ВИДНО)
 */
export default function SlowZoomInView({ children, threshold = 0.1 }) {
	// VISIBLE — ЗАПУЩЕН ЛИ ЗУМ (true КОГДА ЭЛЕМЕНТ НА ЭКРАНЕ)
	const [visible, setVisible] = useState(false)
	// REF — ССЫЛКА НА DOM-ЭЛЕМЕНТ ДЛЯ ОТСЛЕЖИВАНИЯ
	const ref = useRef(null)

	useEffect(() => {
		// IntersectionObserver СЛЕДИТ, НАХОДИТСЯ ЛИ ЭЛЕМЕНТ В ОБЛАСТИ ВИДИМОСТИ
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					// ЕСЛИ ЭЛЕМЕНТ ВИДЕН — ЗАПУСКАЕМ ЗУМ, ЕСЛИ НЕТ — ВОЗВРАЩАЕМ ОБРАТНО
					setVisible(entry.isIntersecting)
				})
			},
			{ threshold: threshold }, // ПОРОГ ВИДИМОСТИ
		)

		// НАЧИНАЕМ СЛЕДИТЬ ЗА ЭЛЕМЕНТОМ
		if (ref.current) observer.observe(ref.current)
		// ОЧИСТКА ПРИ РАЗМОНТИРОВАНИИ
		return () => observer.disconnect()
	}, [threshold])

	return (
		// overflow-hidden ОБРЕЗАЕТ КАРТИНКУ, ЧТОБЫ ЗУМ НЕ ВЫХОДИЛ ЗА ГРАНИЦЫ
		<div className='overflow-hidden w-full' ref={ref}>
			<div className={visible ? 'animate-slow-zoom-in-view' : ''}>
				{children}
			</div>
		</div>
	)
}

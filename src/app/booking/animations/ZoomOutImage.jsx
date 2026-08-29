'use client'

import { useState, useRef, useEffect } from 'react'

/** code --- 4 globals.css
 * КОМПОНЕНТ-ОБЁРТКА. КАРТИНКА ВНУТРИ НЕГО ПЛАВНО ОТДАЛЯЕТСЯ (ЭФФЕКТ ZOOM-OUT)
 * И РАССВЕТЛЯЕТСЯ ПРИ СКРОЛЛЕ ДО ЭЛЕМЕНТА.
 *
 * КАК РАБОТАЕТ:
 * 1. КАРТИНКА НАЧИНАЕТ С МАСШТАБА 115% (ЧУТЬ ПРИБЛИЖЕНА)
 * 2. ПРИ ПОЯВЛЕНИИ НА ЭКРАНЕ ПЛАВНО СЖИМАЕТСЯ ДО 100%
 * 3. ОДНОВРЕМЕННО СТАНОВИТСЯ ЯРЧЕ (brightness 0.6 → 1)
 *
 * @param {ReactNode} children - КОНТЕНТ (ОБЫЧНО КАРТИНКА)
 * @param {number} delay - ЗАДЕРЖКА ПЕРЕД АНИМАЦИЕЙ В МС (ПО УМОЛЧАНИЮ 300)
 * @param {number} threshold - ПОРОГ ВИДИМОСТИ (0 = СРАЗУ КАК ПОЯВИЛСЯ КРАЕШЕК)
 */
export default function ZoomOutImage({ children, delay = 300, threshold = 0 }) {
	// VISIBLE — ЗАПУЩЕНА ЛИ АНИМАЦИЯ
	const [visible, setVisible] = useState(false)
	// REF — ССЫЛКА НА DOM-ЭЛЕМЕНТ ДЛЯ ОТСЛЕЖИВАНИЯ
	const ref = useRef(null)

	useEffect(() => {
		// IntersectionObserver СЛЕДИТ, КОГДА ЭЛЕМЕНТ ПОЯВЛЯЕТСЯ НА ЭКРАНЕ
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// ЖДЁМ УКАЗАННУЮ ЗАДЕРЖКУ, ЗАТЕМ ЗАПУСКАЕМ АНИМАЦИЮ
						setTimeout(() => setVisible(true), delay)
						// ПЕРЕСТАЁМ СЛЕДИТЬ — АНИМАЦИЯ СРАБАТЫВАЕТ ОДИН РАЗ
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: threshold },
		)

		// НАЧИНАЕМ СЛЕДИТЬ ЗА ЭЛЕМЕНТОМ
		if (ref.current) observer.observe(ref.current)
		// ОЧИСТКА ПРИ РАЗМОНТИРОВАНИИ
		return () => observer.disconnect()
	}, [delay, threshold])

	return (
		<div
			ref={ref}
			className={`select-none ${visible ? 'animate-zoom-out' : 'opacity-0'}`}
		>
			{children}
		</div>
	)
}

'use client'

import { useState, useRef, useEffect } from 'react'

/** code --- 5 globals.css
 * КОМПОНЕНТ-ОБЁРТКА. ВСЁ, ЧТО НАХОДИТСЯ ВНУТРИ НЕГО, ПОЯВЛЯЕТСЯ С АНИМАЦИЕЙ
 * ВЫЕЗДА СНИЗУ ВВЕРХ ПРИ СКРОЛЛЕ ДО ЭЛЕМЕНТА.
 *
 * КАК РАБОТАЕТ:
 * 1. ЭЛЕМЕНТ НАХОДИТСЯ НА 40px НИЖЕ СВОЕГО МЕСТА И ПОЛНОСТЬЮ ПРОЗРАЧЕН
 * 2. ПРИ ПОЯВЛЕНИИ НА ЭКРАНЕ ПЛАВНО ПОДНИМАЕТСЯ ВВЕРХ И СТАНОВИТСЯ ВИДИМЫМ
 *
 * @param {ReactNode} children - КОНТЕНТ, КОТОРЫЙ БУДЕТ АНИМИРОВАН
 * @param {number} delay - ЗАДЕРЖКА ПЕРЕД АНИМАЦИЕЙ В МС (ПО УМОЛЧАНИЮ 0)
 * @param {number} threshold - КАКАЯ ЧАСТЬ ЭЛЕМЕНТА ДОЛЖНА БЫТЬ ВИДНА (0.1 = 10%)
 */
export default function FadeInFromBottom({
	children,
	delay = 0,
	threshold = 0.1,
}) {
	// VISIBLE — ЗАПУЩЕНА ЛИ АНИМАЦИЯ
	const [visible, setVisible] = useState(false)
	// REF — ССЫЛКА НА DOM-ЭЛЕМЕНТ ДЛЯ ОТСЛЕЖИВАНИЯ
	const ref = useRef(null)

	useEffect(() => {
		// IntersectionObserver СЛЕДИТ, КОГДА ЭЛЕМЕНТ ПОЯВЛЯЕТСЯ В ОБЛАСТИ ВИДИМОСТИ
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
			{ threshold: threshold }, // ПОРОГ ВИДИМОСТИ
		)

		// НАЧИНАЕМ СЛЕДИТЬ ЗА ЭЛЕМЕНТОМ
		if (ref.current) observer.observe(ref.current)
		// ОЧИСТКА ПРИ РАЗМОНТИРОВАНИИ
		return () => observer.disconnect()
	}, [delay])

	return (
		<div className={visible ? 'animate-fade-in-up' : 'opacity-0'} ref={ref}>
			{children}
		</div>
	)
}

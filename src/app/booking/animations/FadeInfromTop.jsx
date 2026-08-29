'use client'

import { useEffect, useState, useRef } from 'react'

// ===== globals.css code - 1  ====== //
/* - КОМПОНЕНТ-ОБЕРТКА ВСЕ ЧТО НАХОДИТСЯ ВНУТРИ НЕГО ПОЯВЛЯЕТСЯ С АНИМАЦИЙ 
   - ВЫЕЗД СВЕРХУ ВНИЗ ПРИ СКРОЛЛЕ ДО ЭЛЕМЕНТА 
	 -
	 * ПРОПСЫ
	 * @param {ReactNode} children - КОНТЕНТ КОТОРЫЙ БУДЕТ АНИМИРОВАН
	 * @param {number} delay - ЗАДЕРЖКА ПЕРЕД АНИМАЦИЕЙ В МИЛЛИСЕКУНДАХ 
	 * @param {number} threshold - КАКАЯ ЧАСТЬ ЭЛЕМЕНТА ДОЛЖНА БЫТЬ ВИДНА ДЛЯ ЗАПУСКА АНИМАЦИИ (0.1 = 10%) 
*/

export default function FadeInFromTop({
	children,
	delay = 0,
	threshold = 0.1,
}) {
	const [visible, setVisible] = useState(false) // visible - ЗАПУЩЕНА ЛИ АНИМАЦИЯ
	const ref = useRef(null) // ref - ССЫЛКА НА DOM-ЭЛЕМЕНТ ДЛЯ ОТСЛЕЖИВАНИЯ

	// IntersectionObserver СЛЕДИТ ЗА ЭЛЕМЕНТОМ КОГДА ОН ПОЯВЛЯЕТСЯ В ОБЛАСТИ ВИДИМОСТИ
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					// ЖДЕМ УКАЗАННУЮ ЗАДЕРЖКУ ЗАТЕМ ЗАПУСКАЕМ АНИМАЦИЮ
					if (entry.isIntersecting) {
						setTimeout(() => setVisible(true), delay)
						// ПЕРЕСТАЕМ СЛЕДИТЬ ЗА ЭЛЕМЕНТОМ (АНИМАЦИЯ СРАБАТЫВАЕТ ОДИН РАЗ)

						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: threshold }, // ПОРОГ ВИДИМОСТИ (0.1 = 10% элемент видно)
		)

		// НАЧИНАЕМ СЛЕДИТЬ ЗА ЭЛЕМЕНТОМ
		if (ref.current) observer.observe(ref.current)
			// ОЧИСТКА ПРИ РАЗМОНТИРОВАНИИ - ПЕРЕСТАЕМ СЛЕДИТЬ
		return () => observer.disconnect()
	}, [delay])

	return (
		<div ref={ref} className={visible ? 'animate-fade-in-down' : 'opacity-0'}>
			{children}
		</div>
	)
}

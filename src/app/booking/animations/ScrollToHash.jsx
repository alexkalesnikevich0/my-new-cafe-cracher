'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

 /* !!!
 - ЭТОТ КОМПОНЕНТ НЕ РЕНДЕРИТ ВИДИМЫЙ КОНТЕНТ (return null).
 - ЕГО ЗАДАЧА - ПРОЧИТАТЬ ПАРАМЕТР ? scroll=... из URL 
 - И ПЛАВНО ПРОКРУТИТЬ СТРАНИЦУ К ЭЛЕМЕНТУ С УКАЗАННЫМ id 
 
 - ПРИМЕР ИСПОЛЬЗОВАНИЯ <Link href='/speisekarte?scroll=flammkuchen'>Flammkuchen</Link>
 - НА СТРАНИЦЕ ДОЛЖЕН БЫТЬ ЭЛЕМЕНТ <div id='flammkuchen'>...</div
 !!! */

export default function Speiskarte() {
	const searchParams = useSearchParams()

	// 	ДОСТАЕМ ЗНАЧЕНИЕ ПАРАМЕТРА ?scroll=... из URL
	useEffect(() => {
		const scrollTo = searchParams.get('scroll')
		if (scrollTo) {  // ЗАДЕРЖКА 200МС - ДАЕМ СТРАНИЦЕ ПОЛНОСТЬЮ ЗАГРУЗИТЬСЯ

			setTimeout(() => {  // ИЩЕМ ЭЛЕМЕНТ С НУЖНЫМ id НА СТРАНИЦЕ
				const element = document.getElementById(scrollTo)
				if (!element) return

				// ВЫЧИСЛЯЕМ ПОЗИЦИЮ ЭЛЕМЕНТА С УЧЕТОМ ОТСТУПА ПОД НАВБАР (80РХ)
				const target = element.getBoundingClientRect().top + window.scrollY - 80

				const duration = 4000 // ДЛИТЕЛЬНАЯ АНИМАЦИЯ - 4 СЕКУНДЫ (МЕДЛЕННАЯ ПЛАВНАЯ)

				const start = window.scrollY // ТЕКУЩАЯ ПОЗИЦИЯ ПРОКРУТКИ

				const startTime = performance.now() // ТОЧНОЕ ВРЕМЯ СТАРТА

				// === ФУНКЦИЯ АНИМАЦИИ - ВЫЗЫВАЕТ САМА СЕБЯ ЧЕРЕЗ requestAnimationFrame === //
				
				const animateScroll = currentTime => { // СКОЛЬКО ПРОШЛО ВРЕМЕНИ
					const elapsed = currentTime - startTime

					const progress = Math.min(elapsed / duration, 1) // ПРОГРЕСС ОТ 0 ДО 1

					// === easeInCubic - ФОРМУЛА ПЛАВНОГО РАЗГОНА И ПЛАВНОГО ТОРМОЖЕНИЯ === //
					const easeInOutCubic =
						progress < 0.5
							? 4 * progress * progress * progress // ПЕРВАЯ ПОЛОВИНА - УСКОРЕНИЕ
							: 1 - Math.pow(-2 * progress + 2, 3) / 2 // ВТОРАЯ ПОЛОВИНА - ЗАМЕДЛЕНИЕ

					// УСТАНАВЛИВАЕМ ПОЗИЦИЮ ПРОКРУТКИ
					window.scrollTo(0, start + (target - start) * easeInOutCubic)
				
					// ПРОДОЛЖАЕМ АНИМАЦИЮ ПОКА НЕ ДОСТИГЛИ КОНЦА
					if (progress < 1) {
						requestAnimationFrame(animateScroll)
					}
				}

				// === ЗАПУСКАЕМ АНИМАЦИЮ === //
				requestAnimationFrame(animateScroll)
			}, 200)
		}
	}, [searchParams])
	// !!! КОМПОНЕНТ НИЧЕГО НЕ РЕНДЕРИТ - ОН ТОЛЬКО УПРАВЛЯЕТ ПРОКРУТКОЙ !!! //
	return null
}

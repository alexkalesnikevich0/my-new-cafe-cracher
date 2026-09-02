'use client'

/**
 * УНИВЕРСАЛЬНАЯ КНОПКА ДЛЯ ПЛАВНОЙ ПРОКРУТКИ К ЭЛЕМЕНТУ ПО ЕГО id.
 * НЕ ПЕРЕЗАГРУЖАЕТ СТРАНИЦУ, РАБОТАЕТ ИЗ ЛЮБОГО МЕСТА (ФУТЕР, НАВБАР).
 *
 * ПРИМЕР ИСПОЛЬЗОВАНИЯ:
 * <ScrollToSection targetId='reservierung' className='..'>
 *   RESERVIERUNG
 * </ScrollToSection>
 *
 * НА СТРАНИЦЕ ДОЛЖЕН БЫТЬ ЭЛЕМЕНТ: <div id='reservierung'>..</div>
 *
 * @param {string} targetId - id ЭЛЕМЕНТА, К КОТОРОМУ СКРОЛЛИТЬ
 * @param {ReactNode} children - СОДЕРЖИМОЕ КНОПКИ (ТЕКСТ, ИКОНКА)
 * @param {string} className - СТИЛИ КНОПКИ
 *
 * /**
 * ОБРАБОТЧИК КЛИКА.
 * 1. ОТМЕНЯЕТ СТАНДАРТНОЕ ПОВЕДЕНИЕ КНОПКИ (e.preventDefault)
 * 2. НАХОДИТ ЭЛЕМЕНТ ПО id НА СТРАНИЦЕ
 * 3. ПЛАВНО ПРОКРУЧИВАЕТ К НЕМУ С АНИМАЦИЕЙ ease-in-out
 * 
 * ИЗМЕНЕНИЯ PR4 
 * файл переименован из .jsx в .tsx и типизирован
 * ПРИЧИНА Ошибка сборки "Type '{ children: Element; targetId: string; }' is not assignable to type 'string'."
 * РЕШЕНИЕ добавлен интерфейс ScrollToSectionProps, типизированы пропсы,
 * а также параметры и возвращаемое значение функции handleClick
 * 
 */

interface ScrollToSectionProps {
	targetId: string
	children: React.ReactNode
	className?: string
}
export default function ScrollToSection({
	targetId,
	children,
	className,
}: ScrollToSectionProps) {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const element = document.getElementById(targetId)
		if (!element) return // ЕСЛИ ЭЛЕМЕНТ НЕ НАЙДЕН — НИЧЕГО НЕ ДЕЛАЕМ

		// ВЫЧИСЛЯЕМ ПОЗИЦИЮ ЭЛЕМЕНТА С УЧЁТОМ ОТСТУПА ПОД НАВБАР (80px)
		const target = element.getBoundingClientRect().top + window.scrollY - 80
		const duration = 4000 // ДЛИТЕЛЬНОСТЬ АНИМАЦИИ — 4 СЕКУНДЫ (ОЧЕНЬ ПЛАВНО)
		const start = window.scrollY // ТЕКУЩАЯ ПОЗИЦИЯ ПРОКРУТКИ
		const startTime = performance.now() // ТОЧНОЕ ВРЕМЯ СТАРТА

		// ФУНКЦИЯ АНИМАЦИИ — ВЫЗЫВАЕТ САМА СЕБЯ ЧЕРЕЗ requestAnimationFrame
		const animateScroll = (currentTime: number) => {
			const elapsed = currentTime - startTime // СКОЛЬКО ПРОШЛО ВРЕМЕНИ
			const progress = Math.min(elapsed / duration, 1) // ПРОГРЕСС ОТ 0 ДО 1

			// easeInOutCubic — ПЛАВНЫЙ РАЗГОН + ПЛАВНОЕ ТОРМОЖЕНИЕ
			const easeInOutCubic =
				progress < 0.5
					? 4 * progress * progress * progress // ПЕРВАЯ ПОЛОВИНА: УСКОРЕНИЕ
					: 1 - Math.pow(-2 * progress + 2, 3) / 2 // ВТОРАЯ ПОЛОВИНА: ЗАМЕДЛЕНИЕ

			window.scrollTo(0, start + (target - start) * easeInOutCubic)

			// ПРОДОЛЖАЕМ АНИМАЦИЮ, ПОКА НЕ ДОСТИГЛИ КОНЦА
			if (progress < 1) requestAnimationFrame(animateScroll)
		}

		// ЗАПУСКАЕМ АНИМАЦИЮ
		requestAnimationFrame(animateScroll)
	}

	return (
		// type='button' — ЧТОБЫ КНОПКА НЕ ОТПРАВЛЯЛА ФОРМУ И НЕ ПЕРЕЗАГРУЖАЛА СТРАНИЦУ
		<button type='button' onClick={handleClick} className={className}>
			{children}
		</button>
	)
}

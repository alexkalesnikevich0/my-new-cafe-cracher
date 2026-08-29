import Link from 'next/link'

/**
 * УНИВЕРСАЛЬНАЯ КНОПКА-ССЫЛКА ДЛЯ МОБИЛЬНОГО МЕНЮ. ---	ПЕРЕДАЕТСЯ В ФАЙЛ MobileMenu.jsx ---
 * СОДЕРЖИТ ВСЕ СТИЛИ (ЦВЕТА, РАМКИ, АНИМАЦИИ) И ЛОГИКУ ПЛАВНОГО ПЕРЕХОДА.
 *
 * ПРОПСЫ:
 * @param {string} href - АДРЕС ССЫЛКИ
 * @param {ReactNode} children - СОДЕРЖИМОЕ КНОПКИ (ТЕКСТ И MobileLine)
 * @param {boolean} active - ПОДСВЕТКА, ЕСЛИ ПОЛЬЗОВАТЕЛЬ НА ЭТОЙ СТРАНИЦЕ
 * @param {function} onClick - ДОПОЛНИТЕЛЬНОЕ ДЕЙСТВИЕ ПРИ КЛИКЕ (ЗАКРЫТИЕ МЕНЮ)
 * @param {string} className - ДОПОЛНИТЕЛЬНЫЕ КЛАССЫ (НАПРИМЕР, ШИРИНА)
 * @param {boolean} isOpen - ПОДСВЕТКА, ЕСЛИ РОДИТЕЛЬСКИЙ РАЗДЕЛ ОТКРЫТ
 */
export default function MobileLink({
	href,
	children,
	active,
	onClick,
	className = '',
	isOpen,
}) {
	/**
	 * ОБРАБОТЧИК КЛИКА С ЗАДЕРЖКОЙ.
	 * 1. ОТМЕНЯЕТ МГНОВЕННЫЙ ПЕРЕХОД (e.preventDefault)
	 * 2. ВЫЗЫВАЕТ ПЕРЕДАННУЮ ФУНКЦИЮ (ЗАКРЫТИЕ МЕНЮ)
	 * 3. ЖДЁТ 600 МС (АНИМАЦИЯ ЗАКРЫТИЯ) И ПЕРЕХОДИТ НА СТРАНИЦУ
	 */
	const handleClick = e => {
		e.preventDefault()
		onClick?.() // БЕЗОПАСНЫЙ ВЫЗОВ: ЕСЛИ onClick НЕ ПЕРЕДАН, НИЧЕГО НЕ ПРОИЗОЙДЁТ
		setTimeout(() => {
			window.location.href = href
		}, 600) // ЗАДЕРЖКА 600 МС — ЧТОБЫ АНИМАЦИЯ ЗАКРЫТИЯ УСПЕЛА ПРОИГРАТЬСЯ
	}

	return (
		<Link
			href={href}
			onClick={handleClick}
			className={`w-55 flex flex-col items-center justify-center duration-1000 pl-4 uppercase pr-4 pt-2 pb-2 rounded-full group mx-auto
            border-2 border-yellow-600/8
            hover:bg-yellow-950/90 hover:border-white/70 hover:text-white
            active:bg-yellow-950/90 active:border-white/70 active:text-white
            ${active || isOpen ? '!bg-yellow-950/90 !border-white !text-white' : 'text-white/70 bg-yellow-800'}
            ${className}`}
		>
			{children}
		</Link>
	)
}

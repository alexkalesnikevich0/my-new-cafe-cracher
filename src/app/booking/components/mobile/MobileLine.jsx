/**
 * ---	ПЕРЕДАЕТСЯ В ФАЙЛ MobileMenu.jsx ---
 * КОМПОНЕНТ ДЕКОРАТИВНОЙ ЛИНИИ ПОД ТЕКСТОМ В МОБИЛЬНОМ МЕНЮ.
 * ПЛАВНО УВЕЛИЧИВАЕТСЯ ПРИ НАВЕДЕНИИ И АКТИВНОМ СОСТОЯНИИ.
 *
 * ПРОПСЫ:
 * @param {boolean} isActive - АКТИВНА ЛИ ССЫЛКА (ПОЛЬЗОВАТЕЛЬ НА ЭТОЙ СТРАНИЦЕ)
 * @param {string} width - ШИРИНА В ЗАКРЫТОМ СОСТОЯНИИ (ПО УМОЛЧАНИЮ 'w-20')
 * @param {string} activeWidth - ШИРИНА В АКТИВНОМ СОСТОЯНИИ (ПО УМОЛЧАНИЮ 'w-full')
 */
export default function MobileLine({
	isActive,
	width = 'w-20',
	activeWidth = 'w-full',
}) {
	return (
		<div
			className={`block h-1 rounded-full transition-all duration-1200 mx-auto w-20 bg-orange-300 group-hover:w-full group-active:w-full
                ${isActive ? activeWidth : width}`}
		></div>
	)
}

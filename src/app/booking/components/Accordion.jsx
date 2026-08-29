/**
 * КОМПОНЕНТ АККОРДЕОНА (РАСКРЫВАЮЩИЙСЯ БЛОК).
 * ПРИ КЛИКЕ НА ЗАГОЛОВОК СНИЗУ ПЛАВНО ПОЯВЛЯЕТСЯ СКРЫТЫЙ ТЕКСТ,
 * ОСТАЛЬНОЙ КОНТЕНТ СДВИГАЕТСЯ ВНИЗ.
 * ПРИ ПОВТОРНОМ КЛИКЕ — ТЕКСТ ПЛАВНО СКРЫВАЕТСЯ.
 *
 * ПРОПСЫ:
 * @param {string} title - ЗАГОЛОВОК АККОРДЕОНА
 * @param {ReactNode} children - СОДЕРЖИМОЕ, КОТОРОЕ ПОЯВЛЯЕТСЯ ПРИ РАСКРЫТИИ
 * @param {boolean} open - ОТКРЫТ ЛИ АККОРДЕОН (УПРАВЛЯЕТСЯ РОДИТЕЛЕМ)
 * @param {function} onToggle - ФУНКЦИЯ, ВЫЗЫВАЕМАЯ ПРИ КЛИКЕ (РОДИТЕЛЬ МЕНЯЕТ open)
 * @param {boolean} isActive - ПОДСВЕТКА, ЕСЛИ ПОЛЬЗОВАТЕЛЬ НА АКТИВНОЙ СТРАНИЦЕ
 */
export default function Accordion({
	title,
	children,
	open,
	onToggle,
	isActive,
}) {
	return (
		<div className='flex flex-col justify-center items-center pl-5 pr-4 select-none'>
			{/* ЗАГОЛОВОК (КЛИКАБЕЛЬНЫЙ) */}
			<h2
				onClick={onToggle}
				className={`flex cursor-pointer font-extrabold font-serif text-xl duration-1000
      sm:text-2xl 
			md:text-xl 
			lg:text-2xl 
			xl:text-3xl 2xl:text-4xl
      ${open || isActive ? 'text-orange-400/80' : 'text-white/70 hover:text-orange-400/80 active:text-orange-400/80'}`}
			>
				{title}
				{/* ЗНАК + ИЛИ - В ЗАВИСИМОСТИ ОТ СОСТОЯНИЯ */}
				<span className='font-black ml-5 2xl:ml-15'>{open ? '-' : '+'}</span>
			</h2>

			{/* РАСКРЫВАЮЩИЙСЯ БЛОК С АНИМАЦИЕЙ */}
			{/*
        КОГДА open = true:
        - max-h-[700px] — БЛОК РАСКРЫВАЕТСЯ ДО 700px
        - opacity-100 — ПОЛНОСТЬЮ ВИДИМ
        КОГДА open = false:
        - max-h-0 — БЛОК СЖАТ ДО 0px (СКРЫТ)
        - opacity-0 — ПРОЗРАЧЕН
        transition-all duration-1100 — ПЛАВНАЯ АНИМАЦИЯ ЗА 1.1 СЕКУНДЫ
        overflow-hidden — ОБРЕЗАЕТ СОДЕРЖИМОЕ, КОГДА БЛОК СЖАТ
      */}
			<div
				className={`overflow-hidden transition-all duration-1100 font-serif ease-in-out ${
					open ? 'max-h-[700px] opacity-100 mt-2' : 'max-h-0 opacity-0'
				}`}
			>
				{children}
			</div>
		</div>
	)
}

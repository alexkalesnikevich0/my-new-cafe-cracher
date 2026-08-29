/** globals.css code --- 2
 * КОМПОНЕНТ-ОБЕРТКА ДЛЯ СЕКЦИИ С ФОНОВОЙ КАРТИНКОЙ
 * КАРТИНКА МЕДЛЕННО ПРИБЛИЖАЕТСЯ (ЗУМ-ЭФФЕКТ) СОЗДАВАЯ ГЛУБИНУ
 * ПОВЕРХ КАРТИНКИ - ЗАТЕМНЕНИЕ И КОНТЕНТ (ТЕКСТ КНОПКИ)
 * ПРОПСЫ :
 * @param {string} src - ПУТЬ К КАРТИНКЕ (ИЗ ПАПКИ public/)
 * @param {string} alt - ОПИСАНИЕ КАРТИНКИ (ПО УМОЛЧАНИЮ 'Background')
 * @param {ReactNode} children - КОНТЕНТ ПОВЕРХ КАРТИНКИ (ЗАГОЛОВКИ И КНОПКИ)
 *
 * ПРИМЕР ИСПОЛЬЗОВАНИЯ
 * <SlowZoomBackground src='/here.jpg' alt='Cafe'>
 * <h1>Header</h1>
 * <button>BUTTON</button>
 * </SlowZoomBackground>
 */
export default function SlowZoomBackground({
	src,
	alt = 'Background',
	children,
}) {
	return (
		// relative + overflow-hidden - КОНТЕЙНЕР ФИКСИРУЕТ РАЗМЕРЫ И ОБРЕЗАЕТ КАРТИНКУ ПРИ ЗУМЕ
		<div className='relative w-full h-screen overflow-hidden'>
			{/**
			 * СЛОИ ВНУТРИ КОНТЕЙНЕРА (СНИЗУ ВВЕРХ)
			 * 1. КАРТИНКА (z-0) - САМЫЙ НИЖНИЙ СЛОЙ (МЕДЛЕННО ПРИБЛИЖАЕТСЯ)
			 * 2. ЗАТЕМНЕНИЕ (z-10) - ПОЛУПРОЗРАЧНЫЙ ЧЕРНЫЙ ЧТОБЫ ТЕКСТ БЫЛ ЧИТАЕМЫМ
			 * 3. КОНТЕНТ (z-20) - САМЫЙ ВЕРХНИЙ СЛОЙ ТЕКСТ И КНОПКИ
			 */}
			<div className='absolute inset-0 z-0 animate-slow-zoom'>
				<img src={src} alt={alt} className='w-full h-full object-cover' />
				{/** ЗАТЕМНЕНИЕ 40% ЧЕРНОГО ЧТОБЫ БЕЛЫЙ ТЕКСТ БЫЛ ВИДЕН  */}
				<div className='absolute inset-0 z-10 bg-black/40'></div>
				{/** КОНТЕНТ ПОВЕРХ ВСЕГО  */}
				<div className='relative flex z-20 flex-col items-center justify-center h-full'>
					{children}
				</div>
			</div>
		</div>
	)
}

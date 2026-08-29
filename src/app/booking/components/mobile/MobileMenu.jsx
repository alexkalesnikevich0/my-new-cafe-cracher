'use client'
import { useState } from 'react'
import Link from 'next/link'

// ДАННЫЕ ДЛЯ ПОДСВЕТКИ АКТИВНОЙ СТРАНИЦЫ
import { activeButton, isButtonActive } from '../../data/routes'
import { usePathname } from 'next/navigation'

// ПЕРЕИСПОЛЬЗУЕМЫЕ КОМПОНЕНТЫ ДЛЯ КНОПОК И ЛИНИЙ
import MobileLink from './MobileLink'
import MobileLine from './MobileLine'

/**
 * ГЛАВНЫЙ КОНТЕЙНЕР МОБИЛЬНОГО МЕНЮ (БУРГЕР-МЕНЮ).
 * ОТКРЫВАЕТСЯ НА ВЕСЬ ЭКРАН ПРИ НАЖАТИИ НА КНОПКУ В НАВБАРЕ.
 * СОДЕРЖИТ ВСЕ РАЗДЕЛЫ САЙТА С АНИМАЦИЕЙ ОТКРЫТИЯ/ЗАКРЫТИЯ.
 *
 * @param {function} closeForbutt - ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ МЕНЮ (ПЕРЕДАЁТСЯ ИЗ Navbar)
 */
export default function MobileMenu({ closeForbutt }) {
	// openSection — КАКОЙ РАЗДЕЛ ОТКРЫТ ('events', 'feste', И Т.Д.) ИЛИ null
	const [openSection, setOpenSection] = useState(null)

	// ФУНКЦИЯ-ПЕРЕКЛЮЧАТЕЛЬ: ЕСЛИ РАЗДЕЛ ОТКРЫТ — ЗАКРЫВАЕТ, ЕСЛИ ЗАКРЫТ — ОТКРЫВАЕТ
	const toggle = section =>
		setOpenSection(openSection === section ? null : section)

	// openSubSection — ДЛЯ ВЛОЖЕННОГО МЕНЮ KONTAKT
	const [openSubSection, setOpenSubSection] = useState(null)

	// ТЕКУЩИЙ URL ДЛЯ ПОДСВЕТКИ АКТИВНОЙ СТРАНИЦЫ
	const pathname = usePathname()

	return (
		// select-none — ЗАПРЕТ ВЫДЕЛЕНИЯ ТЕКСТА ПРИ СВАЙПЕ НА ТЕЛЕФОНЕ
		<div className='font-extrabold text-lg rounded-md font-mono text-stone-300 flex-col flex items-center gap-4 select-none'>
			{/* ===== КНОПКА EVENTS ===== */}
			<button
				onClick={() => toggle('events')}
				className={`'mb-6 duration-600 uppercase cursor-pointer transition-all block pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 
        hover:ring-offset-white/70 hover:text-white
        active:ring-offset-white/70 active:text-white

          ${openSection === 'events' || isButtonActive(activeButton.events, pathname) ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600 active:bg-yellow-600'}`}
			>
				events
				{/* ДЕКОРАТИВНАЯ ЛИНИЯ ПОД ТЕКСТОМ КНОПКИ */}
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  
            ${openSection === 'events' || isButtonActive(activeButton.events, pathname) ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60 group-active:bg-white/80 group-active:w-60'}`}
				></div>
			</button>

			{/* ВЫПАДАЮЩИЙ БЛОК EVENTS (АНИМАЦИЯ РАСКРЫТИЯ/ЗАКРЫТИЯ) */}
			<div
				className={`overflow-hidden transition-all duration-1500 ease-in-out ${openSection === 'events' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-6 border-3 mb-4 mt-5 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50 '>
					<div
						className={`flex flex-col gap-5 ${isButtonActive(activeButton.events, pathname)}`}
					>
						<MobileLink
							href='/bezzer'
							active={pathname === '/bezzer'}
							isOpen={openSection === '/events'}
							onClick={() => closeForbutt(false)}
						>
							bezzer quizzer
							<MobileLine
								isActive={pathname === '/bezzer' || openSection === '/bezzer'}
							/>
						</MobileLink>
						<MobileLink
							href='/wicky'
							active={pathname === '/wicky'}
							isOpen={openSection === '/events'}
							onClick={() => closeForbutt(false)}
						>
							wicky junggeburth
							<MobileLine
								isActive={pathname === '/wicky' || openSection === '/wicky'}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/hoosch'
							active={pathname === '/hoosch'}
							isOpen={pathname === '/events'}
							onClick={() => closeForbutt(false)}
						>
							höösch 2027
							<MobileLine
								isActive={pathname === '/hoosch' || openSection === '/wicky'}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/timeride'
							active={pathname === '/timeride'}
							isOpen={pathname === '/events'}
							onClick={() => closeForbutt(false)}
						>
							timeride
							<MobileLine
								isActive={
									pathname === '/timeride' || openSection === '/timeride'
								}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/archiv'
							active={pathname === '/archiv'}
							isOpen={pathname === '/events'}
							onClick={() => closeForbutt(false)}
						>
							archiv
							<MobileLine
								isActive={pathname === '/archiv' || openSection === '/archiv'}
							></MobileLine>
						</MobileLink>
					</div>
				</div>
			</div>

			{/* ===== КНОПКА FESTE FEIERN (ТА ЖЕ СТРУКТУРА) ===== */}
			<button
				onClick={() => toggle('feste')}
				className={`'mb-6 duration-600 uppercase cursor-pointer block pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 transition-all
          hover:ring-offset-white/70 hover:text-white
          active:ring-offset-white/70 active:text-white  
          ${openSection === 'feste' || isButtonActive(activeButton.feste, pathname) ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600 active:bg-yellow-600'}`}
			>
				feste feiern
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  
            ${openSection === 'feste' || isButtonActive(activeButton.feste, pathname) ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60 group-active:bg-white/80 group-active:w-60'}`}
				></div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-1200 ease-in-out 
          ${openSection === 'feste' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-5 border-3 mb-4 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50'>
					<div
						className={`flex flex-col gap-5 ${isButtonActive(activeButton.feste, pathname)}`}
					>
						<MobileLink
							href='/feierno'
							active={pathname === '/feierno'}
							isOpen={pathname === '/feste'}
							onClick={() => closeForbutt(false)}
						>
							feiern
							<MobileLine
								isActive={pathname === '/feierno' || openSection === 'feiero'}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/hochzeit'
							active={pathname === '/hochzeit'}
							isOpen={pathname === '/feste'}
							onClick={() => closeForbutt(false)}
						>
							hozhzeit
							<MobileLine
								isActive={
									pathname === '/hochzeit' || openSection === '/hochzeit'
								}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/galerie'
							active={pathname === '/galerie'}
							isOpen={pathname === '/feste'}
							onClick={() => closeForbutt(false)}
						>
							galerie
							<MobileLine
								isActive={pathname === '/galerie' || openSection === '/galerie'}
							></MobileLine>
						</MobileLink>
					</div>
				</div>
			</div>

			{/* ===== КНОПКА RESERVIERUNG ===== */}
			<button
				onClick={() => toggle('raumlich')}
				className={`'mb-6 duration-600 uppercase cursor-pointer block 
         pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 transition-all 
         hover:ring-offset-white/70 hover:text-white
         active:ring-offset-white/70 active:text-white
          ${openSection === 'raumlich' || isButtonActive(activeButton.raumlich, pathname) ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600 active:bg-yellow-600'}`}
			>
				reservierung
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  
            ${openSection === 'raumlich' || isButtonActive(activeButton.raumlich, pathname) ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60 group-active:bg-white/80 group-active:w-60'}`}
				></div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-1200 ease-in-out 
          ${openSection === 'raumlich' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-5 border-3 mb-4 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50'>
					<div className='flex flex-col gap-5'>
						<MobileLink
							href='/raumlichkeiten'
							active={pathname === '/raumlichkeiten'}
							isOpen={pathname === '/raumlich'}
							onClick={() => closeForbutt(false)}
						>
							raumlichkeiten
							<MobileLine
								isActive={
									pathname === '/raumlichkeiten' ||
									openSection === '/raumlichkeiten'
								}
							></MobileLine>
						</MobileLink>
					</div>
				</div>
			</div>

			{/* ===== КНОПКА SPEISEN & GERTRÄNKE ===== */}
			<button
				onClick={() => toggle('speisen')}
				className={`'mb-6 duration-600 uppercase cursor-pointer block pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 transition-all 
          hover:ring-offset-white/70 hover:text-white
          active:ring-offset-white/70 active:text-white
          ${openSection === 'speisen' || isButtonActive(activeButton.speisen, pathname) ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600 active:bg-yellow-600'}`}
			>
				SPEISEN & GERTRÄNKE
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  
            ${openSection === 'speisen' || isButtonActive(activeButton.speisen, pathname) ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60 group-active:bg-white/80 group-active:w-60'}`}
				></div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-1200 ease-in-out 
          ${openSection === 'speisen' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-5 border-3 mb-4 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50'>
					<div className={`flex flex-col gap-5`}>
						<MobileLink
							href='/speisekarte'
							active={pathname === '/speisekarte'}
							isOpen={pathname === '/speisekarte'}
							onClick={() => closeForbutt(false)}
						>
							speisekarte
							<MobileLine
								isActive={
									pathname === '/speisekarte' || openSection === '/speisekarte'
								}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/speisekarte?scroll=flammkuchen'
							active={pathname === '/speisekarte?scroll=flammkuchen'}
							isOpen={pathname === '/speisekarte?scroll=flammkuchen'}
							onClick={() => closeForbutt(false)}
						>
							flammkuchen
							<MobileLine
								isActive={pathname === '/speisekarte?scroll=flammkuchen'}
							></MobileLine>
						</MobileLink>
					</div>
				</div>
			</div>

			{/* ===== КНОПКА BRAUHAUS SION (С ВЛОЖЕННЫМ KONTAKT) ===== */}
			<button
				onClick={() => toggle('sion')}
				className={`'mb-6 duration-600 uppercase cursor-pointer block pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 transition-all  
          hover:text-white hover:ring-offset-white/70\
          active:ring-offset-white/70 active:text-white
          ${openSection === 'sion' || isButtonActive(activeButton.sion, pathname) ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600 active:bg-yellow-600'}`}
			>
				brauhaus sion
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  
            ${openSection === 'sion' || isButtonActive(activeButton.sion, pathname) ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60 group-active:bg-white/80 group-active:w-60'}`}
				></div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-1200 ease-in-out 
          ${openSection === 'sion' ? 'max-h-[650px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-5 border-3 mb-4 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50'>
					<div className='flex flex-col gap-5'>
						<MobileLink
							href='/tradition'
							active={pathname === '/tradition'}
							isOpen={pathname === '/sion'}
							onClick={() => closeForbutt(false)}
						>
							tradition
							<MobileLine
								isActive={
									pathname === '/tradition' || openSection === '/tradition'
								}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/kolsch'
							active={pathname === '/kolsch'}
							isOpen={pathname === '/sion'}
							onClick={() => closeForbutt(false)}
						>
							sion kolsch
							<MobileLine
								isActive={pathname === '/kolsch' || openSection === '/kolsch'}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/raumlichkeiten'
							active={pathname === '/raumlichkeiten'}
							isOpen={pathname === '/sion'}
							onClick={() => closeForbutt(false)}
						>
							raumlichkeiten
							<MobileLine
								isActive={
									pathname === '/raumlichkeiten' ||
									openSection === '/raumlichkeiten'
								}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/reservierung'
							active={pathname === '/reservierung'}
							isOpen={pathname === '/sion'}
							onClick={() => closeForbutt(false)}
						>
							reservierung
							<MobileLine
								isActive={
									pathname === '/reservierung' ||
									openSection === '/reservierung'
								}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/jobs'
							active={pathname === '/jobs'}
							isOpen={pathname === '/sion'}
							onClick={() => closeForbutt(false)}
						>
							jobs
							<MobileLine
								isActive={pathname === '/jobs' || openSection === '/jobs'}
							></MobileLine>
						</MobileLink>
						<MobileLink
							href='/restaurant'
							target='_blank'
							active={pathname === '/restaurant'}
							isOpen={pathname === '/sion'}
							onClick={() => closeForbutt(false)}
						>
							hotel sion
							<MobileLine
								isActive={
									pathname === '/restaurant' || openSection === '/restaurant'
								}
							></MobileLine>
						</MobileLink>

						{/* KONTAKT — ВЛОЖЕННЫЙ БЛОК (УПРАВЛЯЕТСЯ ОТДЕЛЬНЫМ СОСТОЯНИЕМ openSubSection) */}
						<button
							onClick={e => {
								e.stopPropagation() // НЕ ДАЁТ ЗАКРЫТЬ ВЕСЬ РАЗДЕЛ SION
								setOpenSubSection(
									openSubSection === 'kontakt' ? null : 'kontakt',
								)
							}}
							className={`w-55 uppercase flex flex-col cursor-pointer items-center justify-center hover:bg-yellow-950/90 hover:text-white duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            border-2 border-yellow-600/80 hover:border-white/80 active:border-white/80 transition-all
            ${openSubSection === 'kontakt' ? 'bg-yellow-950/90 border-2 !text-white !border-white' : 'text-white/70 bg-yellow-800'}`}
						>
							kontakt
							<div
								className={`block h-1 rounded-full transition-all duration-1400 mx-auto w-20 group-hover:w-full bg-orange-300
                  ${openSubSection === 'kontakt' ? 'w-full' : ''}`}
							></div>
						</button>
						<div
							className={`overflow-hidden transition-all duration-1500 ease-in-out ${openSubSection === 'kontakt' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<Link
								href='/?scroll=anfahrt'
								onClick={() => closeForbutt(false)}
								className='w-40 bg-yellow-800 flex uppercase flex-col items-center justify-center text-white/70 hover:text-white bg-yellow-800 hover:bg-yellow-950/90 duration-2000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto border-2 border-yellow-600 hover:border-white
               '
							>
								anfahrt
								<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* ===== КНОПКА EN (ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА — ЗАГЛУШКА) ===== */}
			<button
				className={`'mb-6 duration-600 uppercase cursor-pointer block hover:text-white pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 hover:ring-offset-white/70 transition-all  ${openSection === 'en' ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600'}`}
			>
				EN
				<div className='duration-800 w-15 group-hover:w-20 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
			</button>
		</div>
	)
}

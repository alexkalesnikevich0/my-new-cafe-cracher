'use client'
import Link from 'next/link'

import { useState } from 'react'
import Forbutt from './forbutt'

export default function Navbar() {
	const events = [
		{
			title: 'BEZZER QUIZZER',
			route: '/bezzer',
		},
		{
			title: 'WICKY JUNGGEBURTH',
			route: '/wicky',
		},
		{
			title: 'HÖÖSCH 2027',
			route: '/hoosch',
		},
		{
			title: 'TIMERIDE',
			route: '/timeride',
		},
		{
			title: 'ARCHIV',
			route: '/archiv',
		},
	]

	const feste = [
		{
			title: 'FEIERN',
			route: '/feierno',
		},
		{
			title: 'HOCHZEIT',
			route: '/hochzeit',
		},
		{
			title: 'GALERIE',
			route: '/galerie',
		},
	]

	const base = [
		{
			route: '/',
		},
	]

	const ogo = [
		{
			title: 'anfahrt',
			route: '/?scroll=anfahrt',
		},
	]

	const raumlich = [
		{
			title: 'RAUMLICHKEITEN',
			route: '/raumlichkeiten',
		},
	]

	const toFooter = [
		{
			route: '/?scroll=footer',
		},
	]

	const speisen = [
		{
			title: 'SPEISEKARTE',
			route: '/speisekarte',
		},
		{
			title: 'FLAMMKUCHEN',
			route: '/speisekarte?scroll=flammkuchen',
		},
	]

	const sion = [
		{
			title: 'TRADITION',
			route: '/tradition',
		},
		{
			title: 'SION KÖLSCH',
			route: '/kolsch',
		},
		{
			title: 'RÄUMLICHKEITEN',
			route: '/raumlichkeiten',
		},
		{
			title: 'RESERVIERUNG',
			route: '/reservierung',
		},
		{
			title: 'JOBS',
			route: '/jobs',
		},
		{
			title: 'HOTEL SION',
			route: '/restaurant',
			target: '_blank',
		},
	]

	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='bg-yellow-900 pt-6 pb-6 lg:items-center lg:flex lg:justify-end fixed top-0 left-0 right-0 z-50 shadow-xl'>
			<div className='flex flex-col lg:flex-row justify-between w-full  '>
				<div className='md:hidden md:inline-block md:items-center md:flex md:justify-center md:pb-3 lg:pb-0'>
					<div className='flex justify-between items-center px-10 md:justify-center'>
						<div className='relative z-50 p-1 pb-2 pl-2 pr-2 bg-yellow-950/60 rounded-lg'>
							{base.map(link => (
								<Link href={`${link.route}`} key={link.route}>
									<img
										src='/icon.png'
										alt='Cafe Cracher'
										className='h-13 w-13 cursor-pointer'
									/>
								</Link>
							))}
						</div>
						<div className='justify-end items-center '>
							<div className='justify-between w-full [&_section]:h-2 [&_section]:w-10 [&_section]:bg-white/90 [&_section]:rounded-full [&_section]:'>
								<button
									onClick={() => setIsOpen(!isOpen)}
									className={`md:hidden h-14 w-14 relative cursor-pointer z-50 rounded-md flex items-center justify-center duration-300 border-2 transition-all ${
										isOpen
											? 'bg-yellow-600 border-white'
											: 'bg-yellow-700 border-transparent hover:border-white/50'
									}`}
								>
									<svg viewBox='0 0 24 24' className='w-11 h-11'>
										<rect
											x='3'
											y='5'
											width='18'
											height='2.5'
											rx='1'
											className='fill-white transition-all duration-600'
											style={{
												transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
												transformOrigin: 'center',
											}}
										/>
										<rect
											x='3'
											y='11'
											width='18'
											height='2.5'
											rx='1'
											className='fill-white transition-all duration-600'
											style={{
												transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
												transformOrigin: 'center',
											}}
										/>
										<rect
											x='3'
											y='17'
											width='18'
											height='2.5'
											rx='1'
											className='fill-white transition-all duration-600'
											style={{
												transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
												transformOrigin: 'center',
											}}
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					{isOpen && <Forbutt closeForbutt={setIsOpen} />}
				</div>
				<div
					className='hidden md:inline-block font-extrabold text-lg font-mono text-stone-300 mx-auto md:text-sm lg:text-md xl:text-lg lg:mr-10 items-center flex-row
				[&_button]:bg-yellow-700/70 [&_button]:rounded-full [&_button]:ml-2 [&_button]:cursor-pointer md:[&_button]:pr-2 md:[&_button]:pt-2 md:[&_button]:pb-3 md:[&_button]:pl-2 lg:[&_button]:pt-3 lg:[&_button]:pb-4 lg:[&_button]:pr-3 lg:[&_button]:pl-3
				[&_section]:rounded-full [&_section]:bg-yellow-900 [&_section]:h-1 
				[&_article]:inline-block 
				[&_li]:text-white/60 [&_li:hover]:text-white [&_li]:mt-2 [&_li]:p-1 [&_li]:justify-center [&_li]:flex [&_li:hover]:bg-yellow-200/20 
				[&_ul]:rounded-xl [&_ul]:duration-700 [&_ul]:text-md [&_ul]:shadow-xl [&_ul]:border-2 [&_ul]:border-black/80 [&_ul]:opacity-0 [&_ul]:invisible [&_ul]:bg-yellow-900 [&_ul]:mt-2 [&_ul]:z-50 xl:[&_ul]:text-lg'
				>
					<article className='group relative'>
						<article className='w-7 lg:w-6 xl:w-8'></article>
						<button className='group group-hover:bg-yellow-700 group-hover:text-white'>
							EVENTS
							<section className='duration-800 w-12 group-hover:bg-white md:w-13 md:group-hover:w-19 xl:w-18 xl:group-hover:w-24'></section>
						</button>
						<ul className='absolute group-hover:opacity-100 group-hover:visible md:w-39 md:h-48 md:group-hover:w-42 xl:w-50 xl:h-58 xl:group-hover:w-53'>
							{events.map(link => (
								<li className='flex' key={link.route}>
									<Link
										className='w-full h-full block text-center'
										href={`${link.route}`}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</article>
					<article className='group relative'>
						<button className='group group-hover:bg-yellow-700 group-hover:text-white'>
							FESTE FEIERN
							<section className='duration-900 w-23 group-hover:bg-white md:w-23 md:ml-1 md:group-hover:w-30 xl:w-35 xl:group-hover:w-41'></section>
						</button>
						<ul className='absolute group-hover:opacity-100 group-hover:visible md:w-20 md:h-31 md:group-hover:w-39 xl:w-40 xl:h-37 xl:group-hover:w-50'>
							{feste.map(link => (
								<li className='' key={link.route}>
									<Link
										className='w-full h-full block text-center'
										href={`${link.route}`}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</article>
					<article className='group relative'>
						<button className='group group-hover:bg-yellow-700 group-hover:text-white'>
							RESERVIERUNG
							<section className='duration-900 group-hover:bg-white md:w-23 md:ml-1 md:group-hover:w-28 xl:w-35 xl:group-hover:w-40'></section>{' '}
						</button>
						<ul className='absolute group-hover:opacity-100 group-hover:visible md:w-30 md:group-hover:w-39 lg:group-hover:w-41 xl:w-45 xl:group-hover:w-51 xl:h-22'>
							{raumlich.map(link => (
								<ol
									className='justify-center flex mt-6 p-1 hover:bg-yellow-200/20 hover:text-white mb-6'
									key={link.route}
								>
									<Link
										className='w-full h-full block text-center'
										href={`${link.route}`}
									>
										{link.title}
									</Link>
								</ol>
							))}
						</ul>
					</article>
					<article className='group relative'>
						<button className='group group-hover:bg-yellow-700 group-hover:text-white'>
							SPEISEN & GERTRÄNKE
							<section className='duration-900 group-hover:bg-white md:w-38 md:ml-1 md:group-hover:w-45 xl:w-55 xl:group-hover:w-60'></section>
						</button>
						<div className='flex justify-center md:ml-3 lg:ml-1'>
							<ul className='absolute group-hover:opacity-100 group-hover:visible md:w-30 md:group-hover:w-40 md:h-22 lg:group-hover:w-42 xl:w-50 xl:group-hover:w-57 xl:group-hover:ml-3 xl:h-27'>
								{speisen.map(link => (
									<li className='' key={link.route}>
										<Link
											className='w-full h-full block text-center'
											href={`${link.route}`}
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</article>
					<article className='group relative'>
						<button className='group group-hover:bg-yellow-700 group-hover:text-white'>
							BRAUHAUS SION
							<section className='duration-800 group-hover:bg-white md:w-25 md:ml-1 md:group-hover:w-31 md:group-hover:ml-0 xl:w-39 xl:group-hover:w-44'></section>
						</button>
						<div className='flex justify-center md:ml-2'>
							<ul className='absolute flex flex-col justify-center mt-10 group-hover:opacity-100 group-hover:visible md:w-32 md:h-70 md:group-hover:w-40 lg:group-hover:w-37 xl:w-50 xl:group-hover:w-55 xl:h-83'>
								{sion.map(link => (
									<li className='' key={link.route}>
										<Link
											target={link.target || '_self'}
											className='w-full h-full block text-center'
											href={`${link.route}`}
										>
											{link.title}
										</Link>
									</li>
								))}
								<div className='group/kontakt relative'>
									{toFooter.map(link => (
										<div
											key={link.route}
											className='text-white/70 flex mt-2 mb-3 justify-center p-1 hover:bg-yellow-200/20 hover:text-white cursor-pointer'
										>
											<Link href={`${link.route}`}>KONTAKT</Link>
											<div className='h-1 w-7 mt-2 rounded-full bg-black/50 ml-3 duration-500 group-hover/kontakt:bg-black/80 xl:group-hover/kontakt:w-12 xl:group-hover/kontakt:ml-3 xl:w-10 xl:mt-3'></div>
										</div>
									))}
									<ul
										className='absolute right-full top-0 mr-2 w-40 opacity-0 invisible uppercase bg-yellow-900 pt-0 pb-2 rounded-sm border-2 border-black/80 shadow-xl transition-all duration-300
											group-hover/kontakt:opacity-100 group-hover/kontakt:visible '
									>
										{ogo.map(link => (
											<li key={link.route} className='hover:bg-yellow-200/20'>
												<Link
													href={link.route}
													className='block w-full h-full text-white/70 hover:text-white text-center'
												>
													anfahrt
												</Link>
											</li>
										))}
									</ul>
								</div>
							</ul>
						</div>
					</article>
					<button className='group'>
						EN
						<section className='duration-900 w-8 h-1  group-hover:w-12 group-hover:bg-white'></section>
					</button>
				</div>
			</div>
		</div>
	)
}

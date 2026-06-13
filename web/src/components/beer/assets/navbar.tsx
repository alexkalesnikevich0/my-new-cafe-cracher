'use client'
import Link from 'next/link'

import React, { useState } from 'react'

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
			route: '/empthy',
		},
	]

	const raumlich = [
		{
			title: 'RAUMLICHKEITEN',
			route: '/raumlichkeiten',
		},
	]

	const speisen = [
		{
			title: 'SPEISKARTE',
			route: '/speiskarte',
		},
		{
			title: 'GETRÄNKEKARTE',
			route: '/',
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
			route: '/',
		},
	]

	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='bg-yellow-950/90 pt-6 pb-6 lg:items-center lg:flex lg:justify-end'>
			<div className='flex flex-col lg:flex-row justify-between w-full'>
				<div className='md:hidden md:inline-block md:items-center md:flex md:justify-center md:pb-3 lg:pb-0'>
					<div className='flex justify-between items-center px-10 md:justify-center'>
						<div className=''>
							{base.map(link => (
								<Link href={`${link.route}`} key={link.route}>
									<svg
										key={link.route}
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='text-yellow-700 h-14 w-14'
									>
										<path d='M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z' />
										<path
											fillRule='evenodd'
											d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z'
											clipRule='evenodd'
										/>
									</svg>
								</Link>
							))}
						</div>
						<div className='justify-end items-center'>
							<div className='justify-between w-full [&_section]:h-2 [&_section]:w-10 [&_section]:bg-white/90 [&_section]:rounded-full [&_section]:'>
								<button
									onClick={() => setIsOpen(!isOpen)}
									className='md:hidden h-14 w-14 bg-yellow-700 rounded-md hover:border-3 border-black group duration-700 flex-col flex items-center justify-center'
								>
									{isOpen}
									<section className='group-hover:w-11 mb-2 duration-400'></section>
									<section className='group-hover:w-11 mb-2 duration-400'></section>
									<section className='group-hover:w-11 duration-400'></section>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className='hidden md:inline-block font-extrabold text-lg font-mono text-stone-300 mx-auto md:text-sm lg:text-md xl:text-lg lg:mr-10 items-center flex-row
				[&_button]:bg-yellow-700/70 [&_button]:rounded-full [&_button]:ml-2 [&_button]:cursor-pointer md:[&_button]:pr-2 md:[&_button]:pt-2 md:[&_button]:pb-3 md:[&_button]:pl-2 lg:[&_button]:pt-3 lg:[&_button]:pb-4 lg:[&_button]:pr-3 lg:[&_button]:pl-3
				[&_section]:rounded-full [&_section]:bg-yellow-900 [&_section]:h-1 
				[&_article]:inline-block 
				[&_li]:text-white/60 [&_li:hover]:text-white [&_li]:mt-2 [&_li]:p-1 [&_li]:justify-center [&_li]:flex [&_li:hover]:bg-yellow-200/20 
				[&_ul]:rounded-xl [&_ul]:duration-700 [&_ul]:text-md [&_ul]:shadow-xl [&_ul]:border-2 [&_ul]:border-black/80 [&_ul]:opacity-0 [&_ul]:invisible [&_ul]:bg-yellow-900/80 [&_ul]:mt-2 [&_ul]:z-50 xl:[&_ul]:text-lg'
				>
					<article className='group relative'>
						<article className='w-7 lg:w-6 xl:w-8'></article>
						<button className='group group-hover:bg-yellow-700 group-hover:text-white'>
							EVENTS
							<section className='duration-800 w-12 group-hover:bg-white md:w-13 md:group-hover:w-19 xl:w-18 xl:group-hover:w-24'></section>
						</button>
						<ul className='absolute group-hover:opacity-100 group-hover:visible md:w-39 md:h-48 md:group-hover:w-42 xl:w-50 xl:h-58 xl:group-hover:w-53'>
							{events.map(link => (
								<li className='flex ' key={link.route}>
									<Link href={`${link.route}`}>{link.title}</Link>
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
									<Link href={`${link.route}`}>{link.title}</Link>
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
									<Link href={`${link.route}`}>{link.title}</Link>
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
										<Link href={`${link.route}`}>{link.title}</Link>
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
										<Link href={`${link.route}`}>{link.title}</Link>
									</li>
								))}
								<div className='group/main'>
									{ogo.map(link => (
										<Link href={`${link.route}`} key={link.route}>
											<div className='text-white/70 flex mt-2 mb-3 justify-center p-1 hover:bg-yellow-200/20 hover:text-white'>
												KONTAKT
												<div className='h-1 w-7 mt-2 rounded-full bg-black/50 ml-3 duration-500 group-hover/main:bg-black/80 xl:group-hover/main:w-12 xl:group-hover/main:ml-3 xl:w-10 xl:mt-3'></div>
											</div>
										</Link>
									))}
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

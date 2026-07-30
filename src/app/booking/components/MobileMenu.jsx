'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu({ closeForbutt }) {
	const [openSection, setOpenSection] = useState(null)

	const toggle = section =>
		setOpenSection(openSection === section ? null : section)

	const [openSubSection, setOpenSubSection] = useState(null)

	return (
		<div className='font-extrabold text-lg rounded-md font-mono text-stone-300 flex-col flex items-center gap-4'>
			<button
				onClick={() => toggle('events')}
				className={`'mb-6 duration-600 uppercase cursor-pointer block hover:text-white pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 hover:ring-offset-white/70 transition-all  ${openSection === 'events' ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600'}`}
			>
				events
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  ${openSection === 'events' ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60'}`}
				></div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-1500 ease-in-out ${openSection === 'events' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-6 border-3 mb-4 mt-5 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50'>
					<Link
						href='/bezzer'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 flex flex-col items-center justify-center hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						BEZZER QUIZZER
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/wicky'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 flex flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-white transition-all'
					>
						WICKY JUNGGEBURTH
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/hoosch'
						onClick={() => closeForbutt(false)}
						className='w-45 bg-yellow-800 flex flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-white transition-all'
					>
						HÖÖSCH 2027
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/timeride'
						onClick={() => closeForbutt(false)}
						className='w-45 bg-yellow-800 flex flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-white transition-all'
					>
						TIMERIDE
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/archiv'
						onClick={() => closeForbutt(false)}
						className='w-45 bg-yellow-800 flex flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-white transition-all'
					>
						ARCHIV
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
				</div>
			</div>
			<button
				onClick={() => toggle('feste feiern')}
				className={`'mb-6 duration-600 uppercase cursor-pointer block hover:text-white pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 hover:ring-offset-white/70 transition-all  ${openSection === 'feste feiern' ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600'}`}
			>
				feste feiern
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  ${openSection === 'feste feiern' ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60'}`}
				></div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-1200 ease-in-out ${openSection === 'feste feiern' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-5 border-3 mb-4 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50'>
					<Link
						href='/feierno'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 uppercase flex flex-col items-center justify-center hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						feiern
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>

					<Link
						href='/hochzeit'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 uppercase flex flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						hozhzeit
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/galerie'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 uppercase flex flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						galerie
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
				</div>
			</div>
			<button
				onClick={() => toggle('reservierung')}
				className={`'mb-6 duration-600 uppercase cursor-pointer block hover:text-white pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 hover:ring-offset-white/70 transition-all  ${openSection === 'reservierung' ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600'}`}
			>
				reservierung
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  ${openSection === 'reservierung' ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60'}`}
				></div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-1200 ease-in-out ${openSection === 'reservierung' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-5 border-3 mb-4 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50'>
					<Link
						href='/raumlichkeiten'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 uppercase flex flex-col items-center justify-center hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						raumlichkeiten
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
				</div>
			</div>
			<button
				onClick={() => toggle('speisen')}
				className={`'mb-6 duration-600 uppercase cursor-pointer block hover:text-white pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 hover:ring-offset-white/70 transition-all  ${openSection === 'speisen' ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600'}`}
			>
				SPEISEN & GERTRÄNKE
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  ${openSection === 'speisen' ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60'}`}
				></div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-1200 ease-in-out ${openSection === 'speisen' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-5 border-3 mb-4 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50'>
					<Link
						href='/speisekarte'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 uppercase uppercase flex flex-col items-center justify-center hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						speisekarte
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/speisekarte?scroll=flammkuchen'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 uppercase uppercase flex flex-col items-center justify-center hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						flammkuchen
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
				</div>
			</div>

			<button
				onClick={() => toggle('sion')}
				className={`'mb-6 duration-600 uppercase cursor-pointer block hover:text-white pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 hover:ring-offset-white/70 transition-all  ${openSection === 'sion' ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600'}`}
			>
				brauhaus sion
				<div
					className={`rounded-full h-1 transition-all duration-1000 mx-auto  ${openSection === 'sion' ? 'w-60 bg-white' : 'w-55 bg-yellow-900 group-hover:bg-white/80 group-hover:w-60'}`}
				></div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-1200 ease-in-out ${openSection === 'sion' ? 'max-h-[650px] opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className='flex flex-col items-center justify-center gap-5 border-3 mb-4 rounded-xl border-yellow-950 pl-5 pr-5 pt-5 pb-5 bg-orange-300/50'>
					<Link
						href='/tradition'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 uppercase flex flex-col items-center justify-center hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						tradition
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>

					<Link
						href='/kolsch'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 uppercase flex flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						sion kolsch
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/raumlichkeiten'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 flex uppercase flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						raumlichkeiten
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/reservierung'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 flex uppercase flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						reservierung
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/jobs'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 flex uppercase flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						jobs
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<Link
						href='/restaurant'
						target='_blank'
						onClick={() => closeForbutt(false)}
						className='w-55 bg-yellow-800 flex uppercase flex-col items-center justify-center bg-yellow-800 hover:bg-yellow-900 duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 ring-transparent hover:ring-offset-0 hover:ring-white/70 transition-all'
					>
						hotel sion
						<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
					</Link>
					<button
						onClick={e => {
							e.stopPropagation()
							setOpenSubSection(openSubSection === 'kontakt' ? null : 'kontakt')
						}}
						className={`w-55 cursor-pointer flex uppercase flex-col items-center justify-center duration-1000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto
            ring-2 ring-offset-2 ring-offset-yellow-600 transition-all ${openSubSection === 'kontakt' ? 'bg-yellow-600 text-white ring-white' : 'bg-yellow-800 hover:bg-yellow-900 ring-transparent hover:ring-offset-0 hover:ring-white/70'}`}
					>
						kontakt
						<div
							className={`rounded-full h-1 transition-all duration-1000 mx-auto  ${openSubSection === 'kontakt' ? 'w-43 bg-white/90' : 'w-20 bg-orange-300 group-hover:bg-black group-hover:w-40'}`}
						></div>
					</button>
					<div
						className={`overflow-hidden transition-all duration-1500 ease-in-out ${openSubSection === 'kontakt' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
					>
						{' '}
						<Link
							href='/?scroll=anfahrt'
							onClick={() => closeForbutt(false)}
							className='w-35 bg-yellow-800 flex uppercase flex-col items-center  justify-center bg-yellow-800 hover:bg-yellow-900 duration-2000 pl-4 pr-4 pt-2 pb-2 rounded-full group mx-auto border-2 border-yellow-600 hover:border-white
               '
						>
							anfahrt
							<div className='block h-1 rounded-full transition-all duration-1200 mx-auto w-20 group-hover:w-full bg-orange-300'></div>
						</Link>
					</div>
				</div>
			</div>
			<button
				className={`'mb-6 duration-600 uppercase cursor-pointer block hover:text-white pt-2 pb-4 pr-3 pl-3 group rounded-3xl ring-2 ring-offset-2 ring-offset-yellow-600/80 hover:ring-offset-white/70 transition-all  ${openSection === 'en' ? 'bg-yellow-600 text-white ring-white' : 'ring-transparent bg-yellow-700/80 hover:bg-yellow-600'}`}
			>
				EN
				<div className='duration-800 w-15 group-hover:w-20 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
			</button>
		</div>
	)
}

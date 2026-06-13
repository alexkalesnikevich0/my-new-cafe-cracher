import Link from 'next/link'

const base = [
	{
		route: '/',
	},
]
export default function Footer() {
	return (
		<div className='bg-yellow-950/90'>
			<div className='pt-20 md:flex md:justify-center 2xl:pt-40'>
				<h1
					className='mb-20 text-4xl mt-0 font-serif text-center text-white/90 font-extrabold 
				md:w-[50%] md:mb-0 md:mt-10 md:h-50 md:text-5xl 
				lg:text-6xl 
				2xl:text-7xl 2xl:ml-5'
				>
					SO KOMMEN <br />
					SIE ZU UNS
				</h1>
				<div className='flex justify-center md:w-[50%]'>
					<div
						className='text-xl text-white/70 font-extrabold font-serif 
					sm:text-2xl 
					md:text-xl 
					lg:text-2xl 
					xl:text-3xl 
					2xl:text-4xl'
					>
						<h1 className='flex cursor-pointer hover:text-white'>
							ANFAHRT MIT BUS UND BAHN
							<div className='font-black cursor-pointer ml-5 2xl:ml-15'>+</div>
						</h1>
						<h1 className='mt-9 flex cursor-pointer hover:text-white'>
							ANFAHRT MIT DEM FAHRRAD
							<div className='font-black cursor-pointer ml-6 2xl:ml-17'>+</div>
						</h1>
						<h1 className='mt-9 flex cursor-pointer hover:text-white'>
							ANFAHRT MIT DEM AUTO
							<div className='font-black cursor-pointer ml-18 sm:ml-21 md:ml-18 lg:ml-21 xl:ml-24 2xl:ml-28 2xl:ml-39'>
								+
							</div>
						</h1>
						<h1 className='mt-9 flex cursor-pointer hover:text-white'>
							ANFAHRT MIT IN KÖLN
							<div className='font-black cursor-pointer ml-24 sm:ml-28 md:ml-24 lg:ml-28 xl:ml-33 2xl:ml-50'>
								+
							</div>
						</h1>
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='mt-25 w-[85%] h-3 bg-white/60 rounded-full md:mt-30 md:mb-10'></div>
			</div>
			<div className='md:flex md:w-full'>
				<div className='md:w-[60%] lg:w-[60%] 2xl:w-[60%] flex justify-center items-center'>
					<h1
						className='w-[80%] mt-10 md:ml-10 text-3xl text-white/90 font-extrabold text-center font-serif 
					sm:text-4xl sm:w-[80%] 
					md:w-[100%] md:text-6xl 
					lg:text-6xl 
					xl:text-5xl 
					2xl:text-7xl 2xl:w-[70%]'
					>
						DAS BRAUHAUS SION FREUT SICH AUF SIE!
					</h1>
				</div>
				<div className='text-center font-extrabold font-serif md:w-[50%] lg:w-[60%]'>
					<h1 className='font-extrabold text-2xl text-white/90 mt-15 sm:text-4xl 2xl:text-5xl'>
						BESUCHEN
					</h1>
					<h2 className='text-white/70 text-md md:text-xl font-bold mt-3 mb-13 2xl:mb-22 2xl:text-2xl'>
						Besuchen Brauhaus Sion <br />
						Unter Taschenmacher 5-7 <br />
						50667 Köln (Altstadt)
					</h2>
					<h1 className='font-extrabold text-2xl text-white/90 sm:text-4xl 2xl:text-6xl'>
						RESERVIEREN
					</h1>
					<h2 className='text-white/70 text-md md:text-xl mb-13 font-bold mt-3 2xl:mb-22 2xl:text-2xl'>
						Telefon +49 0221/2578540 <br />
						Reservierung
					</h2>
					<h1 className='font-extrabold text-2xl text-white/90 sm:text-4xl md:text-2xl 2xl:text-6xl'>
						ÖFFNUNGSZEITEN
					</h1>
					<h2 className='text-white/70 mb-13 text-md md:text-xl font-bold mt-3 2xl:text-2xl 2xl:mb-22'>
						Mo-So: ab 12:00 Uhr geöffnet
					</h2>
					<div className='group'>
						<div className=''>
							<a
								className=''
								href='https://www.facebook.com/?locale=ru_RU'
								target='_blank'
								rel='noopener noreferrer'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='h-7 w-7 cursor-pointer duration-400 text-white/80 inline-block hover:text-black/50 2xl:w-11 2xl:h-11'
									viewBox='0 0 16 16'
								>
									<path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951' />
								</svg>
							</a>
							<a
								className=''
								href='https://www.youtube.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='h-8 h-8 text-white/80 inline-block cursor-pointer duration-400 ml-5 hover:text-black/50 2xl:w-12 2xl:h-12'
									viewBox='0 0 16 16'
								>
									<path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z' />
								</svg>
							</a>

							<a
								className=''
								href='https://x.com/?lang=ru'
								target='_blank'
								rel='noopener noreferrer'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='h-7 h-7 text-white/80 inline-block cursor-pointer duration-400 ml-5 hover:text-black/50 2xl:w-11 2xl:h-11'
									viewBox='0 0 16 16'
								>
									<path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
								</svg>
							</a>

							<a
								className=''
								href='https://www.instagram.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='h-7 h-7 text-white/80 inline-block cursor-pointer duration-400 ml-5 2xl:w-11 2xl:h-11 hover:text-black/50'
									viewBox='0 0 16 16'
								>
									<path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='w-[90%] h-3 bg-white/60 rounded-full mt-20 mb-10'></div>
			</div>
			<div
				className='font-extrabold font-serif flex items-center flex-col justify-center text-white/60 text-xl pb-6
			[&_h1]:pt-2 [&_h1]:pb-2 [&_h1]:duration-200 [&_h1:hover]:font-black [&_h1:hover]:text-white
			 sm:text-xl 
			 md:text-xl md:flex-row md:justify-start md:[&_h1:hover]:bg-yellow-950/0
			 lg:text-2xl
			 xl:text-2xl'
			>
				<div className='md:ml-15 flex'>
					{base.map(link => (
						<Link href={`${link.route}`} key={link.route}>
							<div className=''>
								<h1>HOME</h1>
							</div>
						</Link>
					))}
				</div>
				<div className='md:ml-5'>
					{base.map(link => (
						<Link href={`${link.route}`} key={link.route}>
							<h1 className=''>IMPRESSUM</h1>
						</Link>
					))}
				</div>
				<div className='md:ml-5'>
					{base.map(link => (
						<Link href={`${link.route}`} key={link.route}>
							<h1 className=''>DATENSCHUTZEKLÄRUNG</h1>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

import Link from 'next/link'
import Image from 'next/image'
import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'

export default function Four() {
	return (
		<div className='xl:h-240 2xl:h-340'>
			<div className='mt-30'>
				<div className='justify-center items-center flex-col flex'>
					{/* === КАРТОЧКА 1 ВЫЕЗЖАЕТ СВЕРХУ === */}
					<FadeInFromTop delay={100} threshold={0.3}>
						<div
							className='w-80 h-135 group border-2 border-black/70 duration-900 rounded-2xl bg-white/70 hover:bg-white/80 
					md:flex md:hover:border-black md:w-180 md:h-70 md:hover:border-3 md:hover:w-185 
					lg:w-220 lg:h-75 lg:hover:w-230
					xl:h-70 xl:w-250 xl:hover:h-72 xl:hover:w-280 
					2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
						>
							{/* ! КАРТИНКА СОБЫТИЯ */}
							<div className='group'>
								<Link href='/timeride'>
									<Image
										className='w-66 h-65 ml-7 mr-2 mt-4 border-2 rounded-xl duration-900 border-black/70 
								md:group-hover:mr-2 md:group-hover:ml-4 md:group-hover:border-3 md:group-hover:border-black md:w-54 md:h-60 
								lg:w-60 lg:h-66 lg:group-hover:mr-10 
								xl:group-hover:w-60 xl:group-hover:h-60 xl:w-50 xl:h-50 xl:group-hover:ml-6 xl:group-hover:mt-6 xl:ml-8 xl:mt-10 
								2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7 2xl:group-hover:border-2'
										src='/drink.png'
										alt='tailWind'
										unoptimized
										width={270}
										height={640}
									/>
								</Link>
							</div>
							{/* ! ТЕКСТ СОБЫТИЯ */}
							<div className='group duration-700'>
								<div
									className='ml-15 pl-2 mt-9 font-black text-blue-950/90 text-xl duration-900 
							md:group-hover:mt-15 md:group-hover:text-blue-950 md:ml-0 md:group-hover:ml-4 md:text-xl 
							lg:ml-5 lg:text-2xl 
							xl:text-3xl xl:group-hover:ml-9 xl:mt-13 xl:ml-10 xl:group-hover:text-4xl 
							2xl:text-4xl 2xl:group-hover:text-5xl 2xl:group-hover:mt-28 2xl:mt-20 2xl:group-hover:ml-3'
								>
									{/* ! НАЗВАНИЯ СОБЫТИЯ (КЛИКАБЕЛЬНОЕ) */}
									<Link href='/timeride' className='hover:text-red-900/90'>
										SITZUNG - JUNGE <br />
										<span className='ml-3 md:ml-2 xl:ml-4'>
											MADCHER VUM
										</span>{' '}
										<br />
										<span className='ml-7 md:ml-6 xl:ml-10 2xl:ml-12'>
											ALDERMAAT
										</span>
									</Link>

									{/* ! ДЕКОРАТИВНАЯ ЛИНИЯ ПОД ТЕКСТОМ (УДЛИНЯЕТСЯ ПРИ НАВЕДЕНИИ) */}
									<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
										<div
											className='ml-3 items-center duration-900 w-40 mt-3 rounded-xl flex h-1 bg-black/50 
									md:ml-8 md:w-28 md:group-hover:w-34 md:group-hover:ml-5 md:group-hover:bg-black 
									lg:w-34 lg:group-hover:ml-2 lg:group-hover:w-47 xl:ml-13 
									xl:group-hover:ml-7 xl:w-40 xl:group-hover:w-63 
									2xl:group-hover:w-84 2xl:ml-21 2xl:h-2'
										></div>
									</div>
								</div>
							</div>
							{/* ! ДАТА СОБЫТИЯ, ОТДЕЛЕНА ВЕРТИКАЛЬНОЙ ЛИНИЕЙ */}

							<div className='ml-11 border-l-3 duration-900 border-black/40 h-8 mt-10 md:group-hover:mt-22 md:ml-5 md:group-hover:ml-12 md:group-hover:border-black md:group-hover:h-9 lg:ml-13 lg:group-hover:ml-20 xl:ml-20 xl:mt-15 xl:group-hover:ml-20 xl:group-hover:mt-28 2xl:mt-21 2xl:ml-8 2xl:group-hover:mt-40'>
								<div
									className='ml-6 font-mono text-lg text-black/80 group-hover:text-black font-extrabold duration-900 
							md:ml-3 md:group-hover:font-bold 
							lg:text-xl lg:ml-4 
							xl:group-hover:text-2xl 
							2xl:text-3xl 2xl:group-hover:text-4xl'
								>
									Dienstag,<span className='ml-2'>17.02.2026</span>
								</div>
							</div>
						</div>
					</FadeInFromTop>
				</div>
				{/* === КАРТОЧКА 2 ВЫЕЗЖАЕТ СНИЗУ === */}
				<FadeInFromBottom delay={100} threshold={0.4}>
					<div className='justify-center items-center flex-col flex md:justify-center'>
						<div
							className='w-80 h-135 duration-900 mt-10 group border-2 border-black/70 rounded-2xl bg-white/70 hover:bg-white/80 
					md:hover:border-3 md:hover:border-black md:flex md:w-180 md:hover:w-185 md:h-70 
					lg:w-220 lg:hover:w-230 
					xl:hover:h-72 xl:hover:w-280 xl:w-250 xl:h-70 
					2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
						>
							{/* ! КАРТИНКА ! */}
							<div className='group'>
								<Link href='/kolsch'>
									<Image
										className='w-66 h-65 ml-7 mt-7 rounded-xl border-2 border-black/70 duration-900 
								md:group-hover:ml-5 md:group-hover:border-black md:group-hover:border-3 md:w-54 md:h-60 md:mt-5 
								lg:w-59 
								xl:group-hover:ml-6 xl:group-hover:mt-6 xl:group-hover:w-60 xl:group-hover:h-60 xl:ml-8 xl:w-50 xl:mt-10 xl:h-50 
								2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7 2xl:group-hover:border-2'
										src='/drink.png'
										alt='tailWind'
										unoptimized
										width={270}
										height={640}
									/>
								</Link>
							</div>
							{/* ! ТЕКСТ ! */}
							<div className='group duration-700 md:ml-3 md:group-hover:ml-7 lg:ml-8 lg:group-hover:ml-10 2xl:ml-10 2xl:mt-12'>
								<div
									className='text-2xl mt-10 font-black text-blue-950/90 duration-900 text-center md:group-hover:text-blue-950 
							md:text-xl md:group-hover:text-xl md:group-hover:mt-17 
							lg:text-2xl lg:group-hover:text-2xl lg:group-hover:mt-18 lg:mt-12 
							xl:text-3xl xl:group-hover:text-4xl 
							2xl:group-hover:text-4xl 2xl:text-4xl 2xl:group-hover:text-5xl'
								>
									<Link href='/kolsch' className='hover:text-red-900/90'>
										NUBBELVERBRENNUNG <br />
										2026
									</Link>
									{/* ! ДЕКОРАТИВНАЯ ЛИНИЯ! */}
									<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
										<div
											className='ml-22 duration-900 w-37 h-1 bg-black/50 mt-3 rounded-xl 
									md:ml-19 md:group-hover:ml-15 md:group-hover:bg-black md:group-hover:w-30 md:w-22 
									lg:group-hover:ml-17 lg:group-hover:w-36 lg:ml-23 lg:w-25 xl:w-42 
									xl:group-hover:w-58 xl:group-hover:ml-23 
									2xl:group-hover:w-100 2xl:ml-33 2xl:group-hover:ml-20 2xl:h-2'
										></div>
									</div>
								</div>
							</div>
							{/* ! ДАТА ! */}
							<div className='group'>
								<div className='border-l-3 duration-900 border-black/40 h-8 ml-10 mt-13 md:ml-2 md:group-hover:ml-3 md:group-hover:h-9 md:group-hover:border-black md:group-hover:mt-25 lg:ml-10 lg:group-hover:ml-17 xl:ml-12 xl:group-hover:ml-12 2xl:mt-25 2xl:group-hover:mt-40'>
									<div
										className='font-mono text-lg text-black/80 font-extrabold duration-900 ml-5 group-hover:text-black
								md:text-lg md:group-hover:text-lg md:ml-2 md:group-hover:font-bold 
								lg:ml-4 lg:text-xl lg:group-hover:text-xl 
								xl:group-hover:text-2xl 
								2xl:text-3xl 2xl:group-hover:text-3xl'
									>
										Sonntag,<span className='ml-2'>18.01.2026</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</FadeInFromBottom>
				{/* === КАРТОЧКА 3 ВЫЕЗЖАЕТ СНИЗУ === */}
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='justify-center items-center flex-col flex mb-7'>
						<div
							className='w-80 h-135 mt-10 group border-2 border-black/70 rounded-2xl duration-900 bg-white/70 hover:bg-white/80 hover:border-black
					md:hover:border-3 md:w-180 md:hover:w-185 md:h-70 md:flex
					lg:w-220 lg:hover:w-230 xl:hover:h-72 xl:hover:w-280 xl:w-250 xl:h-70 
					2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
						>
							{/* ! КАРТИНКА ! */}
							<div className='group'>
								<Link href='/archiv'>
									<Image
										className='w-66 h-65 ml-6 mt-7 border-2 border-black/70 rounded-xl duration-900 
								md:w-55 md:h-58 md:mt-6 md:group-hover:border-3 md:group-hover:border-black
								xl:ml-8 xl:w-50 xl:mt-10 xl:h-50 xl:group-hover:w-60 xl:group-hover:h-60 xl:group-hover:ml-6 xl:group-hover:mt-6 
								2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7 2xl:group-hover:border-2'
										src='/drink.png'
										alt='tailWind'
										unoptimized
										width={270}
										height={640}
									/>
								</Link>
							</div>
							{/* ! ТЕКСТ ! */}
							<div className='group duration-900'>
								<div
									className='text-2xl ml-8 mt-12 font-black text-blue-950/90 duration-900 
							md:group-hover:text-blue-950 md:ml-3 md:text-xl md:group-hover:mt-20 md:group-hover:ml-8 
							lg:text-2xl lg:ml-10 lg:group-hover:ml-15 
							xl:group-hover:mt-22 xl:group-hover:ml-20 xl:group-hover:text-4xl xl:ml-13 xl:text-3xl 
							2xl:text-4xl 2xl:group-hover:text-5xl 2xl:group-hover:mt-30 2xl:mt-18'
								>
									<Link href='/archiv' className='hover:text-red-900/90'>
										AFTER-ZOCH-PARTY
									</Link>
									{/* ! ДЕКОРАТИВНАЯ ЛИНИЯ  ! */}
									<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
										<div
											className='ml-12 duration-900 w-40 flex h-1 bg-black/50 mt-3 rounded-xl 
									md:ml-11 md:w-30 md:group-hover:w-37 md:group-hover:ml-7 md:group-hover:bg-black 
									lg:w-36 lg:ml-13 lg:group-hover:w-47 
									xl:ml-13 xl:group-hover:ml-16 xl:w-50 xl:group-hover:w-60 
									2xl:group-hover:w-90 2xl:ml-18 2xl:w-55 2xl:h-2'
										></div>
									</div>
								</div>
							</div>
							{/* ! ДАТА ! */}
							<div className='ml-12 mt-14 duration-900 border-l-3 border-black/40 group-hover:border-black h-8 xl:group-hover:h-9 md:ml-5 md:mt-16 md:group-hover:mt-25 lg:ml-15 lg:group-hover:ml-20 xl:group-hover:mt-27 xl:ml-15 2xl:mt-23 2xl:group-hover:mt-37'>
								<div
									className='font-mono text-lg text-black/80 group-hover:text-black font-extrabold ml-5 duration-900  
							md:text-xl md:ml-3 md:group-hover:ml-2 md:group-hover:font-bold 
							lg:ml-4 
							xl:group-hover:text-2xl xl:ml-4 
							2xl:text-3xl 2xl:group-hover:text-3xl 2xl:ml-5'
								>
									Montag,<span className='ml-2'>16.01.2026</span>
								</div>
							</div>
						</div>
					</div>
				</FadeInFromBottom>
			</div>
		</div>
	)
}

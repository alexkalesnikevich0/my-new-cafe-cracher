import Link from 'next/link'
import Image from 'next/image'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '@/app/booking/animations/ZoomOutImage'

export default function Bezzer() {
	return (
		<div className='bg-orange-300/80'>
			<ZoomOutImage>
				<div className='relative h-screen w-full'>
					<Image
						src='/land.png'
						alt='Background'
						className='object-cover'
						fill
						priority
						sizes='100vw'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 h-full' />
					<div className='relative z-10 flex flex-col items-center justify-center h-full'>
						<FadeInFromTop delay={1600} threshold={0.2}>
							<div className='mb-15 bg-orange-300/50 h-2 w-80 2xl:w-180 2xl:h-4 mx-auto'></div>
							<h1
								className='uppercase font-bold text-2xl text-center bg-gradient-to-t from-white/80 via-white/80 to-white/90 bg-clip-text text-transparent mb-7 
						sm:text-3xl 
						md:text-4xl 
						lg:text-5xl 
						xl:text-7xl 
						2xl:mb-9'
							>
								Pubquiz - Bezzer Quizzer
							</h1>
						</FadeInFromTop>
						<FadeInFromBottom delay={1600} threshold={0.3}>
							<h2
								className='uppercase text-base text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent
						 md:text-2xl 
						 lg:text-4xl 
						 2xl:text-5xl'
							>
								Im Brauhaus Sion
							</h2>
							<div
								className='mt-15 bg-orange-300/50 md:mt-20 h-2 w-50 mx-auto
						2xl:w-80 2xl:h-3'
							></div>
						</FadeInFromBottom>
					</div>
				</div>
			</ZoomOutImage>
			<div className='flex items-center justify-center mt-35'>
				<FadeInFromBottom delay={100} threshold={0.2}>
					<div
						className='w-90 h-300 duration-600 border-2 rounded-xl bg-white/80 border-black/70 
				sm:h-152 sm:w-150
				md:w-170 md:h-152 
				lg:w-230 lg:h-175 
				xl:w-275 xl:h-185 
				2xl:h-220 2xl:w-370'
					>
						<div className='group '>
							<div className='sm:w-full sm:flex'>
								<div className='sm:w-[50%] md:w-[38%] group'>
									<Image
										className='h-70 w-70 ml-10 mt-8 border-4 duration-600 border-black/80 rounded-xl 
									sm:h-60 sm:w-60 sm:ml-7 sm:mt-17 
									md:h-60 md:w-60 md:ml-7 md:mt-18 
									lg:ml-11 lg:mt-17 lg:w-75 lg:h-75 
									xl:ml-10 xl:ml-15 xl:w-90 xl:mt-17 xl:mb-25 xl:h-85 
									2xl:w-117 2xl:h-113 2xl:mt-19 2xl:ml-18'
										src='/land.png'
										alt='tailWind'
										width={270}
										height={640}
									/>
									<div
										className='text-black/70 font-semibold flex justify-center text-center w-[80%] ml-8 mt-10 
								sm:mt-15 sm:ml-13 sm:w-[75%] sm:text-sm 
								md:w-[88%] md:ml-9 md:mt-15 md:text-base 
								lg:ml-12 lg:text-lg lg:mt-20 lg:w-[85%] 
								xl:w-[98%] xl:text-xl xl:ml-10 
								2xl:text-xl'
									>
										<h2 className=''>
											Unsere Küche sorgt für Euer leibliches Wohl und begleitet
											Euch am Pubquiz-Abend mit Essen und Snacks. Der perfekte
											Zeitpunkt für’s Essen ist vor dem Quiz.
										</h2>
									</div>
								</div>
								<div className='sm:w-[64%] md:w-[62%] group'>
									<div
										className='flex justify-center mt-10 
								sm:mt-8 
								md:mt-8 
								lg:mt-11 
								xl:mt-15 
								2xl:mt-35'
									>
										<h1
											className='text-center w-[80%] text-blue-950 font-bold text-lg 
									md:text-2xl 
									lg:text-3xl 
									xl:text-4xl 
									2xl:text-5xl'
										>
											Das Bezzer Quizzer Pubquiz
										</h1>
									</div>
									<div
										className='text-black/70 font-semibold 
								sm:w-[85%] sm:text-sm 
								md:text-base 
								lg:text-lg 
								xl:text-lg 
								2xl:text-xl'
									>
										<div
											className='flex text-center ml-8 mt-10 w-[80%] 
									sm:ml-12 sm:w-[85%] sm:justify-center 
									md:text-left md:justify-start md:w-[100%] md:mt-8 md:ml-10 
									lg:w-[90%] lg:mt-7 lg:ml-15 
									xl:ml-15 xl:mt-15 xl:w-[93%]'
										>
											<h2 className=''>
												Das Bezzer Quizzer Pubquiz ist ein Live-Pubquiz, bei dem
												Du und Dein Team in einer unterhaltsamen,
												zweieinhalbstündigen Runde gegen andere Teams antreten.
											</h2>
										</div>
										<div
											className='flex justify-center mt-10 w-[80%] text-center ml-8 
									sm:w-[95%] sm:ml-9 sm:text-center 
									md:text-left md:w-[90%] md:mt-6 md:ml-10 
									lg:w-[98%] lg:mt-7 lg:ml-15 
									xl:ml-15 xl:mt-10 xl:w-[95%]'
										>
											<h2 className=''>
												Hierbei werden Fragen und Aufgaben aus verschiedenen
												Kategorien gestellt, darunter klassische Fragen aus den
												Bereichen Allgemeinwissen, Musik- und Audioschnipsel,
												Filme, TV & Werbung, Geschichte, Köln, Bilderrätsel
												sowie logische und Gedächtnisfragen.
											</h2>
										</div>
										<div className='flex justify-center'>
											<Image
												className='h-40 w-70 mt-10 border-4 duration-600 border-black/80 rounded-xl 
											sm:h-40 sm:w-60 sm:ml-14 sm:mt-8 
											md:h-40 md:w-70 md:ml-14 md:mt-8 
											lg:ml-25 lg:w-90 lg:h-50 xl:ml-10 
											xl:ml-30 xl:w-100 xl:mt-14 xl:h-50 
											2xl:w-120 2xl:h-70 2xl:mt-14 2xl:ml-28'
												src='/land.png'
												alt='tailWind'
												width={270}
												height={640}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</FadeInFromBottom>
			</div>
			<div className='flex justify-center'>
				<div
					className='w-80 mt-10 h-4 bg-yellow-950/90 rounded-full mb-10 
				sm:w-130 
				md:w-170 md:mt-35 
				lg:w-220 
				xl:w-280 
				2xl:mt-35'
				></div>
			</div>
			<FadeInFromTop delay={100} threshold={0.3}>
				<div className='flex items-center justify-center mt-15'>
					<div
						className='w-80 h-115 duration-600 border-2 rounded-xl bg-white/80 border-black/70 
				sm:h-80 sm:w-130 
				md:w-160 md:h-88 
				lg:w-190 lg:h-88 
				xl:w-200 xl:h-90 
				2xl:h-100 2xl:w-240'
					>
						<h2
							className='text-blue-950 flex justify-center mt-8 font-extrabold text-xl 
					md:text-2xl 
					lg:text-3xl 
					xl:text-3xl 
					2xl:font-bold'
						>
							Termine
						</h2>
						<div
							className='text-black/90 mt-7 mb-7 justify-center 
					sm:columns-2 sm:flex-col sm:w-full
					md:text-lg 
					lg:text-xl'
						>
							<div className='flex-col lg:justify-center h-full md:w-[100%]'>
								<h2
									className='gap-2 font-medium flex justify-center 
							sm:justify-end sm:mr-8 
							md:mr-10 
							lg:mr-0 lg:justify-center '
								>
									<span className='font-black 2xl:font-semibold'>Beginn,</span>
									19:00 Uhr
								</h2>
								<h2
									className='gap-2 font-medium mt-3 flex justify-center 
							sm:justify-end sm:mr-8 sm:mt-5
							md:mr-10 md:text-lg md:mt-3
							lg:mr-0 lg:justify-center lg:text-xl'
								>
									<span className='font-black 2xl:font-semibold'>
										Eintritt,{' '}
									</span>{' '}
									ab 14,99€
								</h2>
							</div>
							<div className='flex-col justify-center md:text-lg lg:text-xl w-[100%]'>
								<h2
									className='gap-2 font-medium flex justify-center mt-7 
							sm:mt-0 sm:ml-7 sm:justify-start 
							md:ml-10 
							lg:ml-0 lg:justify-center'
								>
									Montag,
									<span className='font-black 2xl:font-bold'>30.03.2026</span>
								</h2>
								<h2
									className='gap-2 font-medium flex justify-center 
							sm:ml-7 sm:justify-start 
							md:ml-10 
							lg:ml-0 lg:justify-center'
								>
									Montag,
									<span className='font-black 2xl:font-bold'>27.04.2026</span>
								</h2>
								<h2
									className='gap-2 font-medium flex justify-center 
							sm:ml-7 sm:justify-start 
							md:ml-10 
							lg:ml-0 lg:justify-center'
								>
									Montag,
									<span className='font-black 2xl:font-bold'>25.05.2026</span>
								</h2>
							</div>
						</div>
						<div className='flex justify-center'>
							<div className='w-[75%] h-2 bg-blue-950 rounded-full sm:w-[80%] md:ml-3 lg:ml-0 lg:w-[80%]'></div>
						</div>
						<div className='sm:columns-2 sm:flex sm:w-full'>
							<div
								className='flex justify-center mt-5 
						sm:w-[50%] sm:mt-10 sm:justify-end 
						md:justify-center md:w-[47%] 
						lg:w-[50%]'
							>
								<h2
									className='flex sm:justify-end 
							sm:mr-2 
							md:text-lg md:ml-22 
							lg:ml-0 lg:mr-0 lg:text-xl'
								>
									<span className='text-black/90 font-extrabold mt-2 2xl:font-semibold'>
										Kartenpreis ab 14,99€
									</span>
								</h2>
							</div>
							<div
								className='flex justify-center mt-8 
						sm:mt-10 sm:mr-5 sm:w-[50%] 
						md:mr-0 md:justify-center 
						lg:ml-0 lg:justify-center'
							>
								<div className='flex justify-center group'>
									<div className='duration-800 group/main '>
										<Link href='/hoosch'>
											<section
												className='uppercase flex justify-center duration-700 font-bold border-2 border-black/80 text-sm rounded-lg p-2 text-white text-center bg-yellow-900/90 
											group-hover/main:bg-yellow-900 group-hover/main:border-black group-hover/main:text-white 
											sm:group-hover/main:text-lg 
											md:text-lg md:group-hover:text-xl md:group-hover:font-extrabold 
											xl:group-hover/main:text-xl xl:group-hover:pl-2 xl:group-hover:pr-2 
											2xl:group-hover:font-bold'
											>
												Hoosch
												<div className='flex items-center justify-center'>
													<div
														className='duration-500 w-9 group-hover:w-12 flex h-1 bg-black/40 ml-3 rounded-xl 
													group-hover/main:bg-black/70 
													sm:mt-0 sm:ml-3 sm:group-hover:ml-3 sm:w-9 sm:group-hover/main:w-12 
													md:group-hover:w-14 md:group-hover:ml-3 md:w-9 
													xl:w-10 xl:group-hover/main:w-13 
													2xl:w-10 2xl:group-hover:w-14'
													></div>
												</div>
											</section>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</FadeInFromTop>
		</div>
	)
}

import Link from 'next/link'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '@/app/booking/animations/ZoomOutImage'

export default function Timeride() {
	return (
		<div className='bg-orange-300/80'>
			<ZoomOutImage>
				<div className='relative h-screen w-full'>
					<img
						src='land.png'
						alt='Background'
						className='absolute inset-0 w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 h-full' />
					<div className='relative z-10 flex flex-col items-center justify-center h-full'>
						<FadeInFromTop delay={1600} threshold={0.2}>
							<div className='mb-15 h-1 bg-orange-300/50 h-2 w-80 mx-auto 2xl:w-180 2xl:h-4'></div>
							<h1
								className='uppercase text-3xl font-bold text-center bg-gradient-to-t from-white/80 via-white/80 to-white/90 bg-clip-text text-transparent mb-7 
					sm:text-3xl 
					md:text-5xl 
					lg:text-5xl 
					xl:text-7xl 
					2xl:text-8xl 2xl:mb-9'
							>
								TimeRide VR Cöln
							</h1>
						</FadeInFromTop>
						<FadeInFromBottom delay={1600} threshold={0.3}>
							<div className=''>
								<h2
									className='uppercase text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent 
								text-base 
								md:text-2xl 
								lg:text-4xl 
								2xl:text-5xl'
								>
									Mitten im damals
								</h2>
							</div>
							<div className='mt-15 h-1 bg-orange-300/50 md:mt-20 mx-auto mt-13 h-2 w-50 2xl:w-80 2xl:h-3'></div>
						</FadeInFromBottom>
					</div>
				</div>
			</ZoomOutImage>
			<FadeInFromBottom delay={100} threshold={0.3}>
				<div className='flex justify-center mt-20 h-fit'>
					<div className='h-full bg-white/60 border-l-2 border-r-2 border-black/70 border-t-2 rounded-t-xl w-[90%] lg:w-[90%] 2xl:w-330'>
						<div className='w-full flex-col flex lg:flex-row'>
							<div className='justify-center flex lg:flex-col lg:w-[60%]'>
								<img
									className='w-[80%] mt-8 border-4 flex rounded-xl border-black/70 duration-600 
								sm:mt-15 
								lg:mt-0 lg:w-[85%] lg:ml-10 
								xl:h-[80%] xl:mt-0
							  2xl:h-[85%] 2xl:mt-0'
									src='land.png'
									alt='tailWind'
									width={27}
									height={6400}
								/>
								<h2
									className='text-gray-700/80 font-medium font-stretch-semi-expanded text-sm text-center pl-10 w-[80%] mt-5 hidden 
							  md:text-base 
								lg:text-left lg:text-lg lg:mt-7 lg:block 
								xl:hidden xl:mt-10'
								>
									Begebt euch mit TimeRide auf eine packende Zeitreise und
									erlebt das unzerstörte Köln und das faszinierende Lebensgefühl
									der legendären Zwanziger Jahre!
								</h2>
							</div>
							<div className='w-[100%] sm:w-[100%] lg:w-[50%] justify-center flex'>
								<div className=''>
									<h1
										className='uppercase font-stretch-extra-condensed font-bold text-slate-800 text-center mt-7 pl-15 pr-15 text-xl 
								sm:text-2xl sm:mt-10 
								md:mt-7 md:text-3xl 
								lg:text-left lg:pl-0 lg:text-4xl lg:mt-10 
								xl:mt-15'
									>
										Mit Virtual Reality in das Köln der Goldenen Zwanziger Jahre
										eintauchen!
									</h1>
									<h2
										className='text-gray-700/80 font-medium font-stretch-semi-expanded text-sm text-center pl-10 pr-10 w-[100%] mt-5
								sm:pl-20 sm:pr-20 
								md:text-base 
								lg:text-left lg:text-lg lg:mt-7 lg:w-[90%] lg:hidden
								xl:block xl:pl-0 xl:mt-10'
									>
										Begebt euch mit TimeRide auf eine packende Zeitreise und
										erlebt das unzerstörte Köln und das faszinierende
										Lebensgefühl der legendären Zwanziger Jahre!
									</h2>
									<h2
										className='text-gray-700/80 font-medium font-stretch-semi-expanded mb-5 text-sm w-[100%] pl-10 pr-10 mt-5 pb-8 text-center 
								sm:pl-20 sm:pr-20 
								md:text-base md:mt-5 
								lg:pl-0 lg:text-left lg:text-lg lg:mt-7 lg:w-[100%] 
								xl:mt-10'
									>
										Gemeinsam mit der charmanten Hutmacherin Tessa und dem
										kölschen Urgestein Straßenbahnfahrer Pitter entdeckt ihr die
										spannende Zeit nach dem Ende des ersten Weltkriegs, der
										britischen Besatzung und der Spanischen Grippe. Ihr erlebt
										ein Köln im Aufbruch: Kino, Mode, Musik, Mobilität,
										Lebensfreude, Optimismus… und auch endlich wieder Karneval!
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='h-fit flex justify-center'>
					<div className='h-full bg-slate-400/60 border-l-2 pb-10 border-r-2 border-black/70 w-[90%] lg:w-[90%] 2xl:w-330'>
						<div className='w-full flex'>
							<div className='w-[7%] sm:w-[20%] md:w-[15%] lg:w-[35%]'></div>
							<div className='flex-col flex justify-center w-[82%] sm:w-[60%] md:w-[70%] lg:w-[44%]'>
								<Link href='/timeride' className='w-42'>
									<h1 className='text-red-700 font-medium font-serif cursor-pointer hover:text-red-600 mt-7 sm:text-lg md:mt-9 md:text-xl'>
										TimeRide VR Cöln
									</h1>
								</Link>

								<hr />
								<h1 className='text-slate-800 font-medium font-serif sm:text-lg md:text-xl'>
									Alter Markt 36-42
								</h1>
								<h1 className='text-slate-800 font-medium font-serif sm:text-lg md:text-xl'>
									50667 Köln
								</h1>
								<hr />
								<h1 className='text-slate-800 font-medium font-serif sm:text-lg md:text-xl'>
									100 Meter Fußweg vom Brauhaus Sion
								</h1>
								<hr />
								<h1 className='text-slate-800 font-bold font-serif sm:text-lg md:text-xl'>
									Öffnungszeiten:
								</h1>
								<hr />
								<h1 className='text-slate-800 font-medium font-serif sm:text-lg md:text-xl'>
									Freitag bis Sonntag 11:00 – 19:00 Uhr, letzter Einlass 18:20
									Uhr
								</h1>
								<hr className='' />
							</div>
						</div>
					</div>
				</div>
				<div className='h-40 sm:h-40 md:h-60 flex justify-center'>
					<div className='h-full bg-white/60 rounded-b-xl border-black/70 border-l-2 border-r-2 border-b-2 w-[90%] lg:w-[90%] 2xl:w-330'>
						<div className='flex items-center justify-center'>
							<h1
								className='font-serif italic font-light text-slate-800 w-[80%] mt-7 
						sm:w-[65%] sm:ml-2 sm:text-lg 
						md:mt-15 md:ml-4 md:w-[70%] md:text-2xl 
						lg:ml-20 lg:mt-16 lg:w-[55%] lg:text-2xl 
						xl:mt-20 xl:w-[50%]'
							>
								Tickets gibt es jederzeit an der Tageskasse auf dem Alter Markt
								oder im Vorverkauf unter <br />
								<div className='w-[44%]'>
									<Link href='/timeride'>
										<h1 className='text-red-700 font-medium font-serif cursor-pointer hover:text-red-600'>
											https://timeride.de/koeln/
										</h1>
									</Link>
								</div>
							</h1>
						</div>
					</div>
				</div>
			</FadeInFromBottom>
		</div>
	)
}

import Link from 'next/link'
import Reserv from '@/app/reserv/page'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '../booking/animations/ZoomOutImage'

export default function Archiv() {
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
								className='uppercase text-2xl font-bold text-center bg-gradient-to-t from-white/80 via-white/80 to-white/90 bg-clip-text text-transparent mb-7 
					sm:text-3xl 
					md:text-5xl 
					lg:text-5xl 
					xl:text-6xl 
					2xl:text-7xl 2xl:mb-9'
							>
								Im Brauhaus Sion ist <br />
								immer was los
							</h1>
						</FadeInFromTop>
						<FadeInFromBottom delay={1600} threshold={0.3}>
							<div className=''>
								<h1
									className='uppercase text-sm text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent
						md:text-2xl 
						lg:text-4xl 
						2xl:text-5xl'
								>
									eintauchen in eine stimmungsvolle <br />
									einzigartige atmosphäre
								</h1>
							</div>
							<div className='mt-15 h-1 bg-orange-300/50 md:mt-20 mx-auto mt-13 h-2 w-50 2xl:w-80 2xl:h-3'></div>
						</FadeInFromBottom>
					</div>
				</div>
			</ZoomOutImage>
			<div
				className='
			[&_section]:bg-white/70 [&_section:hover]:bg-white/80
			[&_h1]:text-blue-950 [&_h1:hover]:text-blue-900
			[&_h2]:text-black/70'
			>
				<div className='justify-center items-center flex-col flex'>
					<FadeInFromTop delay={100} threshold={0.2}>
						<section
							className='w-85 h-150 group border-2 border-black/70 duration-900 rounded-2xl mt-35 
					md:flex md:hover:border-black md:w-180 md:h-70 md:hover:w-185 md:hover:border-3
					lg:w-220 lg:h-75 lg:hover:w-230 
					xl:h-70 xl:w-250 xl:hover:h-72 xl:hover:w-280 
					2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
						>
							<div className='group'>
								<Link href='/bezzer'>
									<img
										className='w-71 h-70 ml-7 mr-2 mt-4 border-3 rounded-xl duration-900 border-black/70 hover:border-6 
										md:group-hover:mr-2 md:group-hover:ml-4 md:group-hover:border-black md:w-54 md:h-60 
										lg:w-60 lg:h-66 lg:group-hover:mr-10 
										xl:group-hover:w-60 xl:group-hover:h-60 xl:w-50 xl:h-50 xl:group-hover:ml-6 xl:group-hover:mt-6 xl:ml-8 xl:mt-10 
										2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7'
										src='drink.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</Link>
							</div>
							<div className='group duration-700'>
								<h1
									className='mt-9 font-black text-xl text-center duration-600 
							md:group-hover:mt-15 md:ml-5 md:group-hover:ml-4 md:text-xl md:group-hover:text-2xl 
							lg:ml-5 lg:text-2xl 
							xl:text-3xl xl:group-hover:ml-9 xl:mt-13 xl:ml-10 xl:group-hover:text-4xl 
							2xl:text-4xl 2xl:group-hover:text-5xl 2xl:group-hover:mt-28 2xl:mt-20 2xl:group-hover:ml-3 2xl:font-bold'
								>
									<Link href='/bezzer'>
										Nubbelverbrennung <br />
										2026
									</Link>

									<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
										<div
											className='ml-27 items-center duration-600 w-31 mt-3 rounded-xl flex h-1 bg-black/50 
									md:ml-14 md:w-22 md:group-hover:w-36 md:group-hover:ml-12 md:group-hover:bg-black 
									lg:w-25 lg:ml-17 lg:group-hover:ml-6 lg:group-hover:w-47 
									xl:ml-17 xl:group-hover:ml-13 xl:w-40 xl:group-hover:w-63 
									2xl:group-hover:w-87 2xl:ml-23 2xl:h-2'
										></div>
									</div>
								</h1>
							</div>
							<div
								className='ml-11 border-l-3 duration-900 border-black/40 h-8 mt-10 
						md:group-hover:mt-22 md:ml-5 md:group-hover:ml-3 md:group-hover:border-black md:group-hover:h-9 
						lg:ml-13 lg:group-hover:ml-20 
						xl:ml-20 xl:mt-15 xl:group-hover:ml-20 xl:group-hover:mt-28 
						2xl:mt-21 2xl:ml-8 2xl:group-hover:mt-40 '
							>
								<h2
									className='ml-6 font-mono group-hover:text-black text-lg font-extrabold duration-900 
							md:ml-3 md:group-hover:font-bold 
							lg:text-xl lg:ml-4 
							xl:group-hover:text-2xl 
							2xl:text-3xl 2xl:group-hover:text-4xl'
								>
									Dienstag,<span className=''>17.02.2026</span>
								</h2>
							</div>
						</section>
					</FadeInFromTop>
				</div>
				<div className='justify-center items-center flex-col flex md:justify-center'>
					<FadeInFromBottom delay={100} threshold={0.3}>
						<section
							className='w-85 h-150 duration-900 mt-10 group border-2 border-black/70 rounded-2xl 
					md:hover:border-3 md:hover:border-black md:flex md:w-180 md:hover:w-185 md:h-70 
					lg:w-220 lg:hover:w-230 
					xl:hover:h-72 xl:hover:w-280 xl:w-250 xl:h-70 
					2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
						>
							<div className='group'>
								<Link href='/wicky'>
									<img
										className='w-71 h-70 ml-7 mt-7 rounded-xl border-3 border-black/70 duration-900 hover:border-6 
										md:group-hover:ml-5 md:group-hover:border-black md:w-54 md:h-60 md:mt-5 
										lg:w-59 
										xl:group-hover:ml-6 xl:group-hover:mt-6 xl:group-hover:w-60 xl:group-hover:h-60 xl:ml-8 xl:w-50 xl:mt-10 xl:h-50 
										2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7'
										src='drink.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</Link>
							</div>
							<div className='group duration-700 md:ml-3 md:group-hover:ml-7 lg:ml-8 lg:group-hover:ml-10 2xl:ml-10 2xl:mt-12'>
								<h1
									className='text-xl mt-10 font-black duration-600 text-center 
							md:text-xl md:ml-5 md:group-hover:text-xl md:group-hover:mt-17 
							lg:text-2xl lg:group-hover:text-2xl lg:group-hover:mt-18 lg:mt-12 
							xl:text-3xl xl:group-hover:text-4xl xl:ml-13 2xl:group-hover:text-4xl 
							2xl:text-4xl 2xl:group-hover:text-5xl 2xl:font-bold'
								>
									<Link href='/wicky'>After-Zoch-Party</Link>

									<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
										<div
											className='ml-23 duration-600 w-37 h-1 bg-black/50 mt-3 rounded-xl 
									md:ml-10 md:group-hover:ml-6 md:group-hover:bg-black md:group-hover:w-30 md:w-22 
									lg:group-hover:ml-7 lg:group-hover:w-36 lg:ml-13 lg:w-25 
									xl:w-42 xl:group-hover:w-55 xl:group-hover:ml-11 xl:ml-11 
									2xl:group-hover:w-80 2xl:ml-15 2xl:group-hover:ml-8 2xl:h-2'
										></div>
									</div>
								</h1>
							</div>
							<div className='group'>
								<div
									className='border-l-3 duration-900 border-black/40 h-8 ml-10 mt-13 
							md:ml-3 md:group-hover:ml-8 md:group-hover:h-9 md:group-hover:border-black md:group-hover:mt-25 
							lg:ml-10 lg:group-hover:ml-17 
							xl:ml-12 xl:group-hover:ml-25 
							2xl:mt-25 2xl:group-hover:mt-40 2xl:h-10 2xl:group-hover:h-12 2xl:group-hover:ml-25'
								>
									<h2
										className='font-mono text-lg font-extrabold duration-900 ml-5 group-hover:text-black 
								md:text-lg md:group-hover:text-lg md:ml-2 md:group-hover:font-bold 
								lg:ml-4 lg:text-xl lg:group-hover:text-xl 
								xl:group-hover:text-2xl 
								2xl:text-3xl 2xl:group-hover:text-4xl'
									>
										Sonntag,<span className=''>18.01.2026</span>
									</h2>
								</div>
							</div>
						</section>
					</FadeInFromBottom>
				</div>
				<div className='justify-center items-center flex-col flex'>
					<FadeInFromTop delay={100} threshold={0.2}>
						<section
							className='w-85 h-150 group border-2 border-black/70 duration-900 rounded-2xl mt-25 
					md:flex md:hover:border-black md:w-180 md:h-70 md:hover:w-185 md:hover:border-3
					lg:w-220 lg:h-75 lg:hover:w-230 
					xl:h-70 xl:w-250 xl:hover:h-72 xl:hover:w-280 
					2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
						>
							<div className='group'>
								<Link href='/hoosch'>
									<img
										className='w-71 h-70 ml-7 mr-2 mt-4 border-3 rounded-xl duration-900 border-black/70 
										hover:border-6 
										md:group-hover:mr-2 md:group-hover:ml-4 md:group-hover:border-black md:w-54 md:h-60 
										lg:w-60 lg:h-66 lg:group-hover:mr-10 
										xl:group-hover:w-60 xl:group-hover:h-60 xl:w-50 xl:h-50 xl:group-hover:ml-6 xl:group-hover:mt-6 xl:ml-8 xl:mt-10 
										2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7'
										src='drink.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</Link>
							</div>
							<div className='group duration-700'>
								<h1
									className='mt-9 font-black text-center text-xl duration-600 
							md:group-hover:mt-15 md:ml-0 md:group-hover:ml-3 md:text-xl 
							lg:ml-5 lg:text-2xl 
							xl:text-3xl xl:group-hover:ml-9 xl:mt-13 xl:ml-12 xl:group-hover:text-4xl 
							2xl:text-4xl 2xl:group-hover:text-5xl 2xl:group-hover:mt-28 2xl:mt-20 2xl:group-hover:ml-3 2xl:font-bold'
								>
									<Link href='/hoosch'>
										Rosenmontag- <br />
										Stribünen am dom
									</Link>

									<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
										<div
											className='ml-21 items-center duration-600 w-40 mt-3 rounded-xl flex h-1 bg-black/50 
									md:ml-13 md:w-25 md:group-hover:w-34 md:group-hover:ml-8 md:group-hover:bg-black 
									lg:w-34 lg:group-hover:ml-8 lg:ml-14 lg:group-hover:w-46 
									xl:ml-13 xl:group-hover:ml-9 xl:w-40 xl:group-hover:w-63 
									2xl:group-hover:w-75 2xl:group-hover:ml-12 2xl:ml-17 2xl:h-2'
										></div>
									</div>
								</h1>
							</div>
							<div
								className='ml-11 border-l-3 duration-900 border-black/40 h-8 mt-10 
						md:group-hover:mt-22 md:ml-5 md:group-hover:ml-12 md:group-hover:border-black md:group-hover:h-9 
						lg:ml-13 lg:group-hover:ml-15 
						xl:ml-20 xl:mt-15 xl:group-hover:ml-25 xl:group-hover:mt-28 
						2xl:mt-21 2xl:ml-10 2xl:group-hover:mt-40 2xl:group-hover:ml-10 2xl:h-10 2xl:group-hover:h-12 2xl:group-hover:ml-20'
							>
								<h2
									className='ml-6 font-mono group-hover:text-black text-lg font-extrabold duration-900 
							md:ml-3 md:group-hover:font-bold 
							lg:text-xl lg:ml-4 
							xl:group-hover:text-2xl 
							2xl:text-3xl 2xl:group-hover:text-4xl'
								>
									Dienstag,<span className=''>17.02.2026</span>
								</h2>
							</div>
						</section>
					</FadeInFromTop>
				</div>
				<div className='justify-center items-center flex-col flex md:justify-center'>
					<FadeInFromBottom delay={100} threshold={0.3}>
						<section
							className='w-85 h-150 duration-900 mt-10 group border-2 border-black/70 rounded-2xl 
					md:hover:border-3 md:hover:border-black md:flex md:w-180 md:hover:w-185 md:h-70 
					lg:w-220 lg:hover:w-230 
					xl:hover:h-72 xl:hover:w-280 xl:w-250 xl:h-70 
					2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
						>
							<div className='group'>
								<Link href='/timeride'>
									<img
										className='w-71 h-70 ml-7 mt-7 rounded-xl border-3 border-black/70 duration-900 hover:border-6 
										md:group-hover:ml-5 md:group-hover:border-black md:w-54 md:h-60 md:mt-5 
										lg:w-59 xl:group-hover:ml-6 
										xl:group-hover:mt-6 xl:group-hover:w-60 xl:group-hover:h-60 xl:ml-8 xl:w-50 xl:mt-10 xl:h-50 
										2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7'
										src='drink.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</Link>
							</div>
							<div className='group duration-700 md:ml-3 md:group-hover:ml-7 lg:ml-8 lg:group-hover:ml-10 2xl:ml-10 2xl:mt-12'>
								<h1
									className='text-xl mt-10 font-black duration-600 text-center 
							md:text-xl md:ml-4 md:group-hover:text-xl md:group-hover:mt-17 
							lg:text-2xl lg:group-hover:text-2xl lg:group-hover:mt-18 lg:mt-12 lg:group-hover:ml-11 
							xl:text-3xl xl:group-hover:text-4xl 
							2xl:group-hover:text-4xl 2xl:text-4xl 2xl:group-hover:text-5xl 2xl:font-bold'
								>
									<Link href='/timeride'>
										Weiberfastnacht <br />
										Jeck em Sion
									</Link>
									<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
										<div
											className='ml-23 duration-900 w-40 h-1 bg-black/50 mt-3 rounded-xl 
									md:ml-10 md:group-hover:ml-5 md:group-hover:bg-black md:group-hover:w-30 md:w-22 
									lg:group-hover:ml-7 lg:group-hover:w-36 lg:ml-13 lg:w-25 
									xl:w-35 xl:group-hover:w-51 xl:group-hover:ml-11 
									2xl:group-hover:w-80 2xl:ml-17 2xl:group-hover:ml-7 2xl:h-2'
										></div>
									</div>
								</h1>
							</div>
							<div className='group'>
								<div
									className='border-l-3 duration-900 border-black/40 h-8 ml-10 mt-13 
							md:ml-8 md:group-hover:ml-10 md:group-hover:h-9 md:group-hover:border-black md:group-hover:mt-25 
							lg:ml-10 lg:group-hover:ml-17 
							xl:ml-12 xl:group-hover:ml-25 
							2xl:mt-25 2xl:group-hover:mt-40 2xl:group-hover:ml-25 2xl:h-10 2xl:group-hover:h-12'
								>
									<h2
										className='font-mono group-hover:text-black text-lg font-extrabold duration-900 ml-5 
								md:text-lg md:group-hover:text-lg md:ml-2 md:group-hover:font-bold 
								lg:ml-4 lg:text-xl lg:group-hover:text-xl 
								xl:group-hover:text-2xl 
								2xl:text-3xl 2xl:group-hover:text-4xl'
									>
										Sonntag,<span className=''>18.01.2026</span>
									</h2>
								</div>
							</div>
						</section>
					</FadeInFromBottom>
				</div>
				<div className='justify-center items-center flex-col flex md:justify-center'>
					<div className='justify-center items-center flex-col flex'>
						<FadeInFromTop delay={100} threshold={0.3}>
							<section
								className='w-85 h-150 group border-2 border-black/70 duration-900 rounded-2xl mt-25 
						md:flex md:hover:border-black md:w-180 md:h-70 md:hover:w-185 md:hover:border-3
						lg:w-220 lg:h-75 lg:hover:w-230 
						xl:h-70 xl:w-250 xl:hover:h-72 xl:hover:w-280 
						2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
							>
								<div className='group'>
									<Link href='/raumlichkeiten'>
										<img
											className='w-71 h-70 ml-7 mr-2 mt-4 border-3 rounded-xl duration-900 border-black/70 hover:border-6 
											md:group-hover:mr-2 md:group-hover:ml-4 md:group-hover:border-black md:w-54 md:h-60 
											lg:w-60 lg:h-66 lg:group-hover:mr-10 
											xl:group-hover:w-60 xl:group-hover:h-60 xl:w-50 xl:h-50 xl:group-hover:ml-6 xl:group-hover:mt-6 xl:ml-8 xl:mt-10 
											2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7'
											src='drink.png'
											alt='tailWind'
											width={27}
											height={6400}
										/>
									</Link>
								</div>
								<div className='group duration-700'>
									<h1
										className='mt-9 font-black text-center text-xl duration-600 
								md:group-hover:mt-15 md:ml-0 md:group-hover:ml-4 md:text-xl 
								lg:ml-5 lg:text-2xl 
								xl:text-3xl xl:group-hover:ml-9 xl:mt-13 xl:ml-10 xl:group-hover:text-4xl 
								2xl:text-4xl 2xl:group-hover:text-5xl 2xl:group-hover:mt-28 2xl:mt-20 2xl:ml-25 2xl:group-hover:ml-25 2xl:ml-5 2xl:font-bold'
									>
										<Link href='/raumlichkeiten'>
											Sitzung Junge un <br />
											Mädcher vum <br />
											Aldermaat
										</Link>
										<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
											<div
												className='ml-23 items-center duration-900 w-39 mt-3 rounded-xl flex h-1 bg-black/50 
										md:ml-8 md:w-28 md:group-hover:w-36 md:group-hover:ml-4 md:group-hover:bg-black 
										lg:w-34 lg:ml-9 lg:group-hover:ml-4 lg:group-hover:w-44 xl:ml-12 
										xl:group-hover:ml-8 xl:w-40 xl:group-hover:w-63 
										2xl:group-hover:w-80 2xl:w-50 2xl:ml-12 2xl:group-hover:ml-9 2xl:h-2'
											></div>
										</div>
									</h1>
								</div>
								<div
									className='ml-11 border-l-3 duration-900 border-black/40 h-8 mt-10 
							md:group-hover:mt-22 md:ml-5 md:group-hover:ml-12 md:group-hover:border-black md:group-hover:h-9 
							lg:ml-13 lg:group-hover:ml-20
							xl:ml-20 xl:mt-15 xl:group-hover:ml-20 xl:group-hover:mt-28 
							2xl:mt-21 2xl:ml-8 2xl:group-hover:mt-40 2xl:group-hover:ml-12'
								>
									<h2
										className='ml-6 font-mono group-hover:text-black text-lg font-extrabold duration-900 
								md:ml-3 md:group-hover:font-bold 
								lg:text-xl lg:ml-4 xl:group-hover:text-2xl 
								2xl:text-3xl 2xl:group-hover:text-4xl'
									>
										Dienstag,<span className=''>17.02.2026</span>
									</h2>
								</div>
							</section>
						</FadeInFromTop>
					</div>
					<div className='justify-center items-center flex-col flex md:justify-center'>
						<FadeInFromBottom delay={100} threshold={0.3}>
							<section
								className='w-85 h-150 duration-900 mt-10 group border-2 border-black/70 rounded-2xl 
						md:hover:border-3 md:hover:border-black md:flex md:w-180 md:hover:w-185 md:h-70 
						lg:w-220 lg:hover:w-230 
						xl:hover:h-72 xl:hover:w-280 xl:w-250 xl:h-70 
						2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
							>
								<div className='group'>
									<Link href='/feierno'>
										<img
											className='w-71 h-70 ml-7 mt-7 rounded-xl border-3 border-black/70 duration-900 hover:border-6 
											md:group-hover:ml-5 md:group-hover:border-black md:w-54 md:h-60 md:mt-5 
											lg:w-59 
											xl:group-hover:ml-6 xl:group-hover:mt-6 xl:group-hover:w-60 xl:group-hover:h-60 xl:ml-8 xl:w-50 xl:mt-10 xl:h-50 
											2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7'
											src='drink.png'
											alt='tailWind'
											width={27}
											height={6400}
										/>
									</Link>
								</div>
								<div className='group duration-700 md:ml-3 md:group-hover:ml-7 lg:ml-8 lg:group-hover:ml-10 2xl:ml-10 2xl:mt-12'>
									<h1
										className='text-xl mt-10 font-black duration-600 text-center 
								md:text-xl md:ml-5 md:group-hover:ml-12 md:group-hover:text-xl md:group-hover:mt-17 
								lg:text-2xl lg:group-hover:ml-10 lg:group-hover:text-2xl lg:group-hover:mt-18 lg:mt-12 
								xl:text-3xl xl:group-hover:text-4xl xl:ml-20 xl:group-hover:ml-25 
								2xl:group-hover:text-4xl 2xl:text-4xl 2xl:group-hover:text-5xl 2xl:ml-20 2xl:group-hover:ml-20 2xl:font-bold'
									>
										<Link href='/feierno'>Pubquiz</Link>
										<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
											<div
												className='ml-23 duration-800 w-37 h-1 bg-black/50 mt-3 rounded-xl 
										md:ml-1 md:group-hover:ml-2 md:group-hover:bg-black md:group-hover:w-30 md:w-22 
										lg:group-hover:ml-1 lg:group-hover:w-36 lg:ml-1 lg:w-28 
										xl:ml-3 xl:w-24 xl:group-hover:w-52 xl:group-hover:ml-1 
										2xl:group-hover:w-70 2xl:ml-3 2xl:w-29 2xl:group-hover:ml-2 2xl:h-2'
											></div>
										</div>
									</h1>
								</div>
								<div className='group'>
									<div
										className='border-l-3 duration-900 border-black/40 h-8 ml-10 mt-13 
								md:ml-10 md:group-hover:ml-15 md:group-hover:h-9 md:group-hover:border-black md:group-hover:mt-25 
								lg:ml-10 lg:group-hover:ml-17 
								xl:ml-12 xl:group-hover:ml-28 
								2xl:mt-25 2xl:group-hover:mt-40 2xl:group-hover:ml-40'
									>
										<h2
											className='font-mono group-hover:text-black text-lg font-extrabold duration-900 ml-5 
									md:text-lg md:group-hover:text-lg md:ml-2 md:group-hover:font-bold 
									lg:ml-4 lg:text-xl lg:group-hover:text-xl 
									xl:group-hover:text-2xl 
									2xl:text-3xl 2xl:group-hover:text-3xl'
										>
											Sonntag,<span className=''>18.01.2026</span>
										</h2>
									</div>
								</div>
							</section>
						</FadeInFromBottom>
					</div>
					<div className='justify-center items-center flex-col flex'>
						<div className='justify-center items-center flex-col flex'>
							<FadeInFromTop delay={100} threshold={0.2}>
								<section
									className='w-85 h-150 group border-2 border-black/70 duration-900 rounded-2xl mt-25 
							md:flex md:hover:border-black md:w-180 md:h-70 md:hover:w-185 md:hover:border-3
							lg:w-220 lg:h-75 lg:hover:w-230 
							xl:h-70 xl:w-250 xl:hover:h-72 xl:hover:w-280 
							2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
								>
									<div className='group'>
										<Link href='/hochzeit'>
											<img
												className='w-71 h-70 ml-7 mr-2 mt-4 border-3 rounded-xl duration-900 border-black/70 hover:border-6 
												md:group-hover:mr-2 md:group-hover:ml-4 md:group-hover:border-black md:w-54 md:h-60 
												lg:w-60 lg:h-66 lg:group-hover:mr-10 
												xl:group-hover:w-60 xl:group-hover:h-60 xl:w-50 xl:h-50 xl:group-hover:ml-6 xl:group-hover:mt-6 xl:ml-8 xl:mt-10 
												2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7'
												src='drink.png'
												alt='tailWind'
												width={27}
												height={6400}
											/>
										</Link>
									</div>
									<div className='group duration-700'>
										<h1
											className='mt-9 font-black text-center text-xl duration-600 
									md:ml-6 md:group-hover:mt-15 md:ml-0 md:group-hover:ml-10 md:text-xl 
									lg:ml-10 lg:text-2xl 
									xl:text-3xl xl:group-hover:ml-9 xl:mt-13 xl:ml-15 xl:group-hover:ml-20 xl:group-hover:text-4xl 
									2xl:text-4xl 2xl:group-hover:text-5xl 2xl:group-hover:mt-28 2xl:ml-25 2xl:mt-20 2xl:group-hover:ml-23 2xl:font-bold'
										>
											<Link href='/hochzeit'>
												CC Voices <br />
												Starparade
											</Link>
											<div className='duration-900 font-bold text-white text-black/80 text-lg mt-3 flex md:group-hover:font-extrabold'>
												<div
													className='ml-23 items-center duration-900 w-39 mt-3 rounded-xl flex h-1 bg-black/50 
											md:ml-3 md:w-23 md:group-hover:w-35 md:group-hover:ml-1 md:group-hover:bg-black 
											lg:w-28 lg:ml-2 lg:group-hover:ml-4 lg:group-hover:w-44 xl:ml-2 
											xl:group-hover:ml-2 xl:w-38 xl:group-hover:w-63 
											2xl:group-hover:w-80 2xl:w-42 2xl:ml-2 2xl:group-hover:ml-2 2xl:h-2'
												></div>
											</div>
										</h1>
									</div>
									<div
										className='ml-11 border-l-3 duration-900 border-black/40 h-8 mt-10 
								md:group-hover:mt-22 md:ml-5 md:group-hover:ml-12 md:group-hover:border-black md:group-hover:h-9 
								lg:ml-13 lg:group-hover:ml-20 
								xl:ml-20 xl:mt-15 xl:group-hover:ml-20 xl:group-hover:mt-28 
								2xl:mt-21 2xl:ml-8 2xl:group-hover:mt-40'
									>
										<h2
											className='ml-6 font-mono group-hover:text-black text-lg font-extrabold duration-900 
									md:ml-3 md:group-hover:font-bold 
									lg:text-xl lg:ml-4 
									xl:group-hover:text-2xl 
									2xl:text-3xl 2xl:group-hover:text-4xl'
										>
											Dienstag,<span className=''>17.02.2026</span>
										</h2>
									</div>
								</section>
							</FadeInFromTop>
						</div>
						<div className='justify-center items-center flex-col flex md:justify-center'>
							<FadeInFromBottom delay={100} threshold={0.3}>
								<section
									className='w-85 h-150 duration-900 mt-10 group border-2 border-black/70 rounded-2xl 
							md:hover:border-3 md:hover:border-black md:flex md:w-180 md:hover:w-185 md:h-70 
							lg:w-220 lg:hover:w-230 
							xl:hover:h-72 xl:hover:w-280 xl:w-250 xl:h-70 
							2xl:hover:w-360 2xl:hover:h-108 2xl:w-330 2xl:h-100 2xl:hover:ml-12'
								>
									<div className='group'>
										<Link href='/galerie'>
											<img
												className='w-71 h-70 ml-7 mt-7 rounded-xl border-3 border-black/70 duration-900 hover:border-6 
												md:group-hover:ml-5 md:group-hover:border-black md:w-54 md:h-60 md:mt-5 
												lg:w-59 
												xl:group-hover:ml-6 xl:group-hover:mt-6 xl:group-hover:w-60 xl:group-hover:h-60 xl:ml-8 xl:w-50 xl:mt-10 xl:h-50 
												2xl:w-80 2xl:h-80 2xl:group-hover:w-90 2xl:group-hover:h-93 2xl:group-hover:ml-6 2xl:group-hover:mt-7'
												src='drink.png'
												alt='tailWind'
												width={27}
												height={6400}
											/>
										</Link>
									</div>
									<div className='group duration-700 md:ml-3 md:group-hover:ml-7 lg:ml-8 lg:group-hover:ml-10 2xl:ml-10 2xl:mt-12'>
										<h1
											className='text-xl mt-10 font-black duration-600 text-center 
									md:text-xl md:ml-5 md:group-hover:ml-12 md:group-hover:text-2xl md:group-hover:mt-17 
									lg:text-2xl lg:group-hover:ml-10 lg:group-hover:text-3xl lg:group-hover:mt-18 lg:mt-12 
									xl:text-3xl xl:group-hover:text-4xl xl:ml-15 xl:group-hover:ml-20 
									2xl:text-4xl 2xl:group-hover:text-5xl 2xl:ml-16 2xl:group-hover:ml-24 2xl:font-bold'
										>
											<Link href='/galerie'>
												Jeck em Sion <br />
												11.11.25
											</Link>
											<div className='duration-900 font-bold text-white text-black/80 mt-3 flex md:group-hover:font-extrabold'>
												<div
													className='ml-23 duration-800 w-37 h-1 bg-black/50 mt-3 rounded-xl 
											md:ml-6 md:group-hover:ml-2 md:group-hover:bg-black md:group-hover:w-29 md:w-21 
											lg:group-hover:ml-1 lg:group-hover:w-36 lg:ml-8 lg:w-24 
											xl:ml-13 xl:w-24 xl:group-hover:w-52 xl:group-hover:ml-4 
											2xl:group-hover:w-70 2xl:ml-13 2xl:w-29 2xl:group-hover:ml-2 2xl:h-2'
												></div>
											</div>
										</h1>
									</div>
									<div className='group'>
										<div
											className='border-l-3 duration-900 border-black/40 h-8 ml-10 mt-13 
									md:ml-10 md:group-hover:ml-15 md:group-hover:h-8 md:group-hover:border-black md:group-hover:mt-25 
									lg:ml-10 lg:group-hover:ml-27 
									xl:ml-12 xl:group-hover:ml-30 
									2xl:mt-25 2xl:group-hover:mt-40 2xl:group-hover:ml-40'
										>
											<h2
												className='font-mono group-hover:text-black text-lg font-extrabold duration-900 ml-5 
										md:text-lg md:group-hover:text-lg md:ml-2 md:group-hover:font-bold 
										lg:ml-4 lg:text-xl lg:group-hover:text-xl 
										xl:group-hover:text-2xl 
										2xl:text-3xl 2xl:group-hover:text-3xl'
											>
												Sonntag,<span className=''>18.01.2026</span>
											</h2>
										</div>
									</div>
								</section>
							</FadeInFromBottom>
						</div>
					</div>
				</div>
			</div>
			<Reserv />
		</div>
	)
}

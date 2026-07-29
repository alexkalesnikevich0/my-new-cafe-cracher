import Link from 'next/link'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '@/app/booking/animations/ZoomOutImage'

export default function Hoosch() {
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
								className='text-4xl font-bold text-center bg-gradient-to-t from-white/80 via-white/80 to-white/90 bg-clip-text text-transparent mb-7 
					sm:text-3xl 
					md:text-5xl 
					lg:text-5xl 
					xl:text-7xl 
					2xl:text-7xl 2xl:mb-9'
							>
								HÖÖSCH
							</h1>
						</FadeInFromTop>
						<FadeInFromBottom delay={1600} threshold={0.3}>
							<h2
								className='uppercase text-base text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent 
					md:text-2xl 
					lg:text-4xl 
					2xl:text-5xl'
							>
								Die Kölsche Milljö-Sitzung <br />
								im Brauhaus Sion
							</h2>
							<div className='mt-15 h-1 bg-orange-300/50 md:mt-20 mt-13 h-2 w-50 mx-auto 2xl:w-80 2xl:h-3'></div>
						</FadeInFromBottom>
					</div>
				</div>
			</ZoomOutImage>
			<FadeInFromBottom delay={100} threshold={0.1}>
				<div className='flex items-center justify-center mt-35'>
					<div
						className='w-[85%] h-fit py-7 duration-600 border-2 rounded-xl bg-white/80 border-black/70
				sm:w-[90%] 
				md:w-[90%] 
				lg:w-[88%] 
				xl:w-[80%] 
				2xl:w-300 '
					>
						<div className='group'>
							<div className='sm:w-full sm:flex'>
								<div className='group sm:w-[50%] md:w-[62%] lg:w-[55%]'>
									<div className='flex justify-center mt-10 sm:mt-8 lg:mt-20 xl:mt-25 pl-3 pr-0'>
										<h1 className='text-center text-blue-950 font-bold text-2xl md:text-2xl px-2 lg:text-4xl 2xl:text-5xl'>
											Liebe Freundinnen und Freunde des kölschen Fastelovends
										</h1>
									</div>
									<div
										className='text-black/90 ml-2 flex flex-col items-center justify-center font-semibold 
								sm:text-sm 
								md:text-base 
								lg:text-lg 
								xl:text-lg 
								2xl:text-xl'
									>
										<div className='flex text-center mt-7 w-[70%] sm:justify-center md:text-center md:justify-center md:mt-8 lg:mt-11 xl:mt-15 '>
											<h2 className=''>
												Endlich wieder bei der Brauhaussitzung gemeinsam mit
												euch schunkeln und feiern!
											</h2>
										</div>
										<div
											className='flex justify-center mt-6 text-center gap-3
									sm:text-center 
									md:text-center md:mt-6 md:flex-row 
									lg:flex-row lg:flex lg:mt-11 
									xl:mt-15'
										>
											<h2
												className='bg-blue-950/90 text-white/90 rounded-xl border-black/70 border-2 inline-block pl-4 pr-4 pb-2 pt-2 
										md:pl-5 md:pr-5 md:pt-3 md:pb-3 
										lg:gap-3 lg:pl-3 lg:pr-3 lg:p-3 
										xl:gap-5'
											>
												Einlass <br />
												17:30
											</h2>
											<div className='hidden bg-blue-950/90 text-white/90 p-3 rounded-xl border-black/70 border-2 lg:block lg:inline-block'>
												<h2 className=''>
													Freuen Sie sich auf <br />
													reservierte Plätze!
												</h2>
											</div>
											<div
												className='bg-blue-950/90 text-white/90 rounded-xl border-black/70 border-2 inline-block pl-4 pr-4 pb-2 pt-2 
										md:pl-5 md:pr-5 md:pt-3 md:pb-3 
										lg:pl-3 lg:pr-3 lg:p-3'
											>
												<h2 className=''>
													Beginn <br />
													18:45
												</h2>
											</div>
										</div>
										<div className='flex justify-center items-center'>
											<div
												className='bg-blue-950/90 text-white/90 p-3 mt-3 rounded-xl border-black/70 border-2 
										sm:pl-4 sm:pr-4 
										md:pl-7 md:pr-7 md:block 
										lg:hidden'
											>
												<h2 className=''>
													Freuen Sie sich auf <br />
													reservierte Plätze!
												</h2>
											</div>
										</div>
									</div>
									<div
										className='flex ml-2 justify-center items-center text-center font-bold text-black/90 mt-7 
								sm:text-sm sm:mt-4 
								md:mt-7 md:text-lg 
								lg:mt-13 lg:text-xl
								2xl:font-semibold 2xl:w-[96%]'
									>
										© Fotografie Dieter Ebeling 2023
									</div>
									<div
										className='flex ml-2 justify-center items-center text-center md:text-base font-bold text-black/90 mt-10 px-5 
								sm:text-sm
								md:px-15 
								lg:text-lg 
								xl:text-xl'
									>
										Wir bitten um Verständnis, dass die Garderobe aus
										feuerpolizeilichen Gründen abgegeben werden muss und nicht
										mit in den Saal genommen werden.
									</div>
									<div className='lg:hidden flex justify-center mt-8 sm:mt-8 md:ml-6 md:mr-0 lg:ml-0'>
										<div
											className='bg-blue-950/90 flex border-black/80 items-center justify-center border-2 rounded-lg pt-2 pb-2 pr-4 pl-4 gap-3 
									sm:gap-6 sm:pr-2 sm:pl-2 sm:h-18 
									md:pr-5 md:pl-5 md:gap-10 md:h-20 
									2xl:gap-17 2xl:w-105 2xl:mt-15'
										>
											<div className='w-[50%] flex justify-center items-center text-base font-bold text-white sm:text-sm 2xl:text-lg'>
												<h5 className='mb-0 sm:mb-0'>
													Kartenpreis <br className='2xl:hidden' />
													ab 39 €
												</h5>
											</div>
											<div className='flex justify-center group/main w-38'>
												<div className=''>
													<Link href='/archiv'>
														<section
															className='duration-800 uppercase bg-yellow-900/90 font-bold flex justify-center border-2 border-black/60 text-sm rounded-lg p-2 text-white/90 text-center 
														group-hover/main:bg-yellow-900 group-hover/main:border-black group-hover/main:text-white/80 
														hover:text-white hover:pr-2 hover:pl-2 
														sm:text-base sm:hover:text-sm 
														md:hover:pr-2 md:hover:pl-2 md:text-sm md:group-hover/main:text-sm md:group-hover/main:font-extrabold 
														xl:group-hover/main:pl-2 xl:group-hover/main:pr-2 
														2xl:group-hover/main:font-bold'
														>
															archiv
															<div className='flex items-center justify-center'>
																<div
																	className='duration-500 w-6 group-hover/main:w-8 flex h-1 bg-black/40 ml-3 rounded-xl group-hover/main:bg-black/70 
																sm:mt-0 sm:ml-2 sm:group-hover/main:ml-2 sm:w-7 sm:group-hover/main:w-9 
																md:group-hover/main:ml-3 md:w-6 
																xl:w-10 
																2xl:w-8 2xl:group-hover/main:w-10'
																></div>
															</div>
														</section>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='sm:w-[51%] group md:w-[60%]'>
									<div className='flex-col justify-center flex items-center px-10 sm:justify-start sm:flex-col sm:px-3'>
										<div className='w-[100%] lg:w-[95%] xl:w-[85%]'>
											<img
												className='w-[100%] h-[100%] mt-8 md:h-80 lg:h-100 border-4 duration-600 border-black/80 rounded-xl'
												src='land.png'
												alt='tailWind'
												width={27}
												height={6400}
											/>
										</div>
										<div
											className='text-white/60 font-semibold flex-col flex justify-center text-center w-[100%] mt-10 
									sm:mt-6 sm:text-sm 
									md:mt-7 md:text-base 
									lg:text-lg lg:mt-11 
									xl:text-xl 
									2xl:text-xl 2xl:justify-center'
										>
											<div className='flex justify-center md:mb-6 lg:mb-9'>
												<h1 className='uppercase text-blue-950 text-2xl font-bold lg:text-3xl 2xl:text-4xl lg:w-[90%]'>
													Tickets erhältlich ab{' '}
													<span className='gap-2 text-black/80'>
														04.03.2026
													</span>
												</h1>
											</div>
											<div className='mt-10 sm:mt-5 md:mt-0 sm:text-base lg:mr-0 lg:ml-5 2xl:ml-0 flex flex-col'>
												<h2 className='gap-2 font-medium lg:flex 2xl:justify-center'>
													<div className='text-lg sm:text-base text-black/90 lg:text-xl 2xl:text-xl'>
														Dienstag,{' '}
														<span className='font-black text-black/80 2xl:font-bold'>
															12.01.2027
														</span>
													</div>
													<div className='hidden text-black/70 md:text-lg lg:block'>
														(Online-VVK)
													</div>
													<div className='text-black/70 sm:text-base text-black/70 md:block md:text-sm lg:hidden'>
														(Online-VVK)
													</div>
												</h2>
												<h2 className='gap-2 font-medium mt-3 sm:mt-5 lg:flex lg:mt-3 2xl:justify-center'>
													<div className='text-lg sm:text-base text-black/90 lg:text-xl 2xl:text-xl'>
														Mittwoch,{' '}
														<span className='font-black text-black/80 2xl:font-bold'>
															13.01.2027
														</span>
													</div>
													<div className='hidden text-black/70 md:text-lg lg:block'>
														(Online-VVK)
													</div>
													<div className='text-black/70 sm:text-base md:block md:text-sm lg:hidden'>
														(Online-VVK)
													</div>
												</h2>
												<h2 className='gap-2 font-medium mt-3 sm:mt-5 lg:flex lg:mt-3 2xl:justify-center'>
													<div className='text-lg sm:text-base text-black/90 lg:text-xl 2xl:text-xl'>
														Donnerstag,{' '}
														<span className='font-black text-black/80 2xl:font-bold'>
															13.01.2027
														</span>
													</div>
													<div className='hidden text-black/70 md:text-lg lg:block'>
														(VVK über Akademie)
													</div>
													<div className='text-black/90 sm:text-base md:block md:text-sm lg:hidden'>
														(VVK über Akademie)
													</div>
												</h2>
												<h2 className='gap-2 font-medium mt-3 sm:mt-5 lg:flex lg:mt-3 2xl:justify-center'>
													<div className='text-lg sm:text-base text-black/90 lg:text-xl 2xl:text-xl'>
														Freitag,{' '}
														<span className='font-black text-black/80 2xl:font-bold'>
															13.01.2027
														</span>
													</div>
													<div className='hidden text-black/70 md:text-lg lg:block'>
														(Online-VVK Akademie)
													</div>
													<div className='text-black/70 lg:hidden md:block md:text-sm'>
														(Online-VVK Akademie)
													</div>
												</h2>
												<h2 className='gap-2 font-medium mt-3 sm:mt-5 lg:flex lg:mt-3 2xl:justify-center'>
													<div className='text-lg sm:text-base text-black/90 lg:text-xl 2xl:text-xl'>
														Montag,{' '}
														<span className='font-black text-black/80 2xl:font-bold'>
															13.01.2027
														</span>
													</div>
													<div className='hidden text-black/70 md:text-lg lg:block'>
														(Online-VVK)
													</div>
													<div className='text-black/70 sm:text-base md:block md:text-sm lg:hidden'>
														(Online-VVK)
													</div>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='hidden lg:block'>
							<div className='flex justify-center mt-8 sm:mt-15 sm:mr-5 md:mr-0 lg:ml-0'>
								<div className='bg-blue-950/90 flex border-black items-center justify-center border-2 rounded-lg gap-30 pr-10 pl-10 h-24'>
									<div className='flex justify-center items-center text-xl font-bold text-white/90'>
										<h1 className=''>Kartenpreis ab 39 €</h1>
									</div>
									<div className='flex justify-center group w-35'>
										<div className='duration-800 group/main '>
											<Link href='/archiv'>
												<section
													className='uppercase flex justify-center duration-700 border-2 border-black/70 text-base rounded-lg p-2 text-white/90 text-center bg-yellow-900/90 
												group-hover/main:bg-yellow-900 font-bold group-hover/main:border-black group-hover/main:text-white 
												sm:group-hover/main:text-lg 
												md:text-lg md:group-hover:text-xl md:group-hover:font-extrabold 
												xl:group-hover/main:text-xl xl:group-hover:pl-2 xl:group-hover:pr-2 
												2xl:group-hover:font-bold'
												>
													archiv
													<div className='flex items-center justify-center'>
														<div
															className='duration-500 w-9 group-hover:w-12 flex h-1 bg-black/40 ml-3 rounded-xl 
														group-hover/main:bg-black/70 
														sm:mt-0 sm:ml-3 sm:group-hover:ml-3 sm:w-9 sm:group-hover/main:w-12 
														md:group-hover:w-14 md:group-hover:ml-3 md:w-9 xl:w-10 
														xl:group-hover/main:w-13 
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
				</div>
			</FadeInFromBottom>
			<FadeInFromBottom delay={100} threshold={0.3}>
				<div className='flex items-center justify-center mt-30'>
					<div
						className='w-90 h-270 duration-600 border-2 rounded-xl bg-white/80 border-black/90 
				sm:w-150 sm:h-109 
				md:w-165 md:h-118 
				lg:w-230 lg:h-145 
				xl:w-265 xl:h-150 
				2xl:w-290 2xl:h-165'
					>
						<div className='flex justify-center items-center mt-8 text-lg text-blue-950 uppercase font-extrabold sm:mt-11 md:text-xl lg:text-3xl 2xl:font-bold'>
							Du brauchst weitere Infos?
						</div>
						<div
							className='justify-center items-center text-center font-bold text-black/80 mt-6 w-[85%] ml-6 text-sm 
					sm:w-[75%] sm:ml-18 sm:mt-7 
					md:text-base md:w-[75%] md:ml-21 
					lg:text-xl lg:ml-20 lg:w-[82%] 
					xl:ml-26 xl:w-[80%] 
					2xl:w-[70%] 2xl:ml-42 2xl:font-medium'
						>
							Unser Büro ist gerne jederzeit per E-Mail unter
							<span className='text-blue-500/90 hover:text-blue-600/90 ml-1'>
								alexkalesnikevich@gmail.com
							</span>
							, oder telefonisch von Mittwoch bis Sonntag von 10.00 bis 17.00
							Uhr unter der Rufnummer 02212578540 für euch da.
						</div>
						<div className='flex-col justify-center mt-10 sm:gap-3 sm:flex sm:flex-row md:gap-5 lg:gap-7 xl:gap-10 2xl:gap-8'>
							<div className='sm:inline-block'>
								<Link href='/timeride'>
									<img
										className='h-60 w-60 mt-6 ml-14 border-4 duration-600 border-black/80 rounded-xl 
										hover:border-6 hover:h-65 hover:w-65 hover:ml-12 hover:mt-3 
										sm:h-44 sm:w-44 sm:mt-3 sm:ml-0 sm:hover:ml-0 sm:hover:h-48 sm:hover:w-48 sm:hover:mt-1 
										md:w-46 md:h-46 md:mt-5 
										lg:hover:border-6 lg:mt-12 lg:w-65 lg:h-64 lg:hover:w-70 lg:hover:h-69 lg:hover:mt-10 
										xl:w-70 xl:h-65 xl:hover:h-70 xl:hover:w-75 xl:hover:mt-10 xl:mt-12 
										2xl:w-80 2xl:h-80 2xl:mt-12 2xl:hover:h-90 2xl:hover:w-90 2xl:hover:mt-8'
										src='land.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</Link>
							</div>
							<div className='sm:inline-block'>
								<Link href='/bezzer'>
									<img
										className='h-60 w-60 mt-10 ml-14 border-4 duration-600 border-black/80 rounded-xl 
									  hover:border-6 hover:h-65 hover:w-65 hover:ml-12 hover:mt-8 
										sm:h-44 sm:w-44 sm:mt-3 sm:ml-0 sm:hover:ml-0 sm:hover:h-48 sm:hover:w-48 sm:hover:mt-1 
										md:w-46 md:h-46 md:mt-5 
										lg:hover:border-6 lg:mt-12 lg:w-65 lg:h-64 lg:hover:w-70 lg:hover:h-69 lg:hover:mt-10 
										xl:w-70 xl:mt-12 xl:h-65 xl:hover:h-70 xl:hover:w-75 xl:hover:mt-10 
										2xl:w-80 2xl:h-80 2xl:mt-12 2xl:hover:h-90 2xl:hover:w-90 2xl:hover:mt-8'
										src='land.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</Link>
							</div>
							<div className='sm:inline-block'>
								<Link href='/raumlichkeiten'>
									<img
										className='h-60 w-60 mt-10 ml-14 border-4 duration-600 border-black/80 rounded-xl 
										hover:h-65 hover:w-65 hover:ml-12 hover:mt-8 hover:border-6 
										sm:h-44 sm:w-44 sm:mt-3 sm:ml-0 sm:hover:ml-0 sm:hover:h-48 sm:hover:w-48 sm:hover:mt-1 
										md:w-46 md:h-46 md:mt-5 
										lg:hover:border-6 lg:mt-12 lg:w-65 lg:h-64 lg:hover:w-70 lg:hover:h-69 lg:hover:mt-10 
										xl:w-70 xl:mt-12 xl:h-65 xl:hover:h-70 xl:hover:w-75 xl:hover:mt-10 
										2xl:w-80 2xl:h-80 2xl:mt-12 2xl:hover:h-90 2xl:hover:w-90 2xl:hover:mt-8'
										src='land.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</FadeInFromBottom>
		</div>
	)
}

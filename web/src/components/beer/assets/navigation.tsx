import Link from 'next/link'

export default function Navigation() {
	return (
		<div className='bg-orange-300/80 pt-20 2xl:h-160'>
			<div className='flex justify-center'>
				<div
					className='w-80 mt-10 h-4 bg-yellow-950/90 rounded-full mb-10 
				sm:w-130 
				md:w-170 md:mt-15
				lg:w-220 
				xl:w-260 
				2xl:w-370'
				></div>
			</div>
			<div className='mt-10 flex flex-col md:flex-row md:w-full md:gap-10'>
				<div className='md:w-[50%] lg:w-[60%] xl:w-[50%] 2xl:w-[60%]'>
					<div className='justify-center flex'>
						<h1
							className='pl-8 pr-8 text-lg font-black text-center 
						sm:text-lg sm:pl-20 sm:pr-20
						md:text-md md:pl-0 md:pr-0 md:ml-10 md:max-w-xl 
						lg:ml-15 lg:text-xl 
						2xl:mt-9 2xl:mb-10 2xl:text-3xl 2xl:font-bold'
						>
							Sie sehen gerade einen Platzhalterinhalt von Google Maps. Um auf
							den eigentlichen Inhalt zuzugreifen, klicken Sie auf die.
							Schaltfläche unten Bitte beachten. Sie dass Dabei Daten an
							Drittanbieter weitergegeben werden.
						</h1>
					</div>
					<div className='flex justify-center h-15 items-center'>
						<section
							className='lg:p-4 text-blue-700/90 font-extrabold duration-500 text-lg 
								hover:text-lg hover:text-blue-700 hover:font-black hover:text-2xl 
								sm:text-xl sm:hover:text-xl sm:hover:mt-3 
								md:ml-14 lg:h-5 mt-0 
								2xl:hover:text-4xl 2xl:text-3xl 2xl:hover:mt-2 2xl:font-bold'
						>
							<Link href='/timeride' className='p-2'>
								Mehr Informationen Timeride
							</Link>
						</section>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center h-70 flex-shrink-0 w-full md:w-[45%]'>
					<div className='md:pt-28 2xl:mt-17 '>
						<Link href='/speisekarte'>
							<div
								className='group h-12 w-55 border-black border-1 items-center justify-center bg-yellow-900/90 flex rounded-sm duration-600 hover:bg-white 
					 	       md:w-64 md:hover:w-70 md:h-14 md:hover:h-15 md:hover:mt-2 md:hover:text-xl 
						       lg:hover:h-14 lg:hover:w-78 lg:w-80 lg:hover:h-18 lg:h-16 lg:hover:text-2xl 
									 xl:hover:h-16
									2xl:ml-15 2xl:hover:ml-13 2xl:hover:h-19 2xl:hover:w-135 2xl:w-130 2xl:h-19'
							>
								<div className='text-center text-white font-extrabold mb-2 mt-2 group'>
									<section
										className='duration-500 flex font-bold text-white text-base uppercase group-hover:text-yellow-800/90 
											md:group-hover:text-xl 
											lg:group-hover:font-extrabold
											2xl:text-2xl 2xl:group-hover:text-3xl 2xl:group-hover:font-semibold 2xl:font-semibold 2xl:mb-1'
									>
										speisekarte
										<div className='flex justify-center items-center'>
											<div
												className='duration-500 w-12 flex h-1 bg-black/40 ml-5 group-hover:ml-8 rounded-xl mt-1
													group-hover:ml-5 group-hover:bg-black/80 
													md:w-16 md:group-hover:w-18 
													lg:group-hover:w-19 
													2xl:w-17 2xl:group-hover:w-24'
											></div>
										</div>
									</section>
								</div>
							</div>
						</Link>
					</div>
					<div className='mt-5 pb-20 md:mb-30'>
						<Link href='/speisekarte?scroll=flammkuchen'>
							<div
								className='pr-5 group h-12 w-55 border-black border-1 items-center bg-yellow-900/90 flex duration-600 rounded-sm justify-center 
								hover:bg-white 
						md:pr-0 md:w-64 md:hover:w-70 md:h-17 md:hover:h-17 
						lg:hover:h-14 lg:hover:w-78 lg:w-80 lg:hover:h-18 lg:h-16 lg:hover:text-2xl 
						2xl:ml-15 2xl:hover:ml-13 2xl:hover:h-22 2xl:hover:border-1 2xl:hover:w-135 2xl:w-130 2xl:h-22'
							>
								<div className='text-center text-white font-extrabold mb-3 mt-2 group'>
									<section
										className='text-base duration-500 ml-4 font-bold text-white flex text-center items-center uppercase justify-center group-hover:text-yellow-800/90 
											md:group-hover:text-md md:text-md 
											xl:text-lg xl:group-hover:text-xl xl:group-hover:font-extrabold 
											2xl:text-2xl 2xl:group-hover:text-2xl 2xl:group-hover:font-semibold 2xl:font-semibold'
									>
										flammkuchen
										<div
											className='duration-500 w-12 h-1 bg-black/40 ml-3 rounded-full group-hover:bg-black/80
												md:group-hover:ml-6 md:ml-4 md:group-hover:ml-7 md:group-hover:w-17 
												lg:group-hover:w-18 
												2xl:group-hover:w-22'
										></div>
									</section>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

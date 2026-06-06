import Link from 'next/link'
const image = [
	{
		route: '/',
	},
]
export default function Navigation() {
	return (
		<div className='bg-orange-300/80 pt-20 2xl:h-160'>
			<div className='flex justify-center'>
				<div className='w-80 mt-10 h-4 bg-yellow-950/90 rounded-full mb-10 sm:w-130 md:w-170 lg:w-220 xl:w-260 2xl:w-370 2xl:mt-20 md:mt-15'></div>
			</div>
			<div className='mt-10 md:flex md:w-full'>
				<div className='md:w-[50%] lg:w-[60%] xl:w-[50%] 2xl:w-[60%]'>
					<div className='justify-center flex'>
						<h1 className='w-90 h-50 text-lg font-black text-center sm:text-lg md:text-md md:mt-10 md:ml-10 md:h-43 md:w-250 lg:h-30 lg:ml-15 lg:text-xl 2xl:mt-9 2xl:mb-10 2xl:text-3xl 2xl:font-bold'>
							Sie sehen gerade einen Platzhalterinhalt von Google Maps. Um auf
							den eigentlichen Inhalt zuzugreifen, klicken Sie auf die.
							Schaltfläche unten Bitte beachten. Sie dass Dabei Daten an
							Drittanbieter weitergegeben werden.
						</h1>
					</div>
					<div className='flex justify-center h-15 md:h-20 md:mt-3'>
						{image.map(link => (
							<Link href={`${link.route}`} key={link.route}>
								<section className='p-4 mt-2 text-blue-700/90 font-extrabold duration-500 cursor-pointer text-lg hover:text-lg hover:text-blue-700 hover:font-black hover:text-2xl sm:text-xl sm:hover:text-2xl sm:hover:mt-1 md:ml-9 2xl:hover:text-4xl 2xl:text-3xl 2xl:hover:mt-2 2xl:font-bold'>
									Mehr Informationen
								</section>
							</Link>
						))}
					</div>
				</div>
				<div className='md:w-[50%] lg:w-[40%] xl:w-[50%] 2xl:w-[40%] md:h-60 lg:h-80'>
					<div className='mt-8 md:mt-15 2xl:mt-17'>
						<div className='group h-15 w-70 border-black border-1 text-lg items-center mx-auto justify-center bg-yellow-900/90 flex rounded-sm cursor-pointer duration-600 hover:bg-white md:w-82 md:hover:w-88 md:hover:ml-5 md:ml-8 md:h-14 md:hover:h-15 md:hover:mt-2 md:hover:text-xl lg:ml-7 lg:hover:ml-6 lg:hover:h-14 lg:hover:w-94 lg:w-92 lg:hover:h-18 lg:h-16 lg:hover:text-2xl xl:ml-55 xl:hover:h-16 xl:hover:ml-54 2xl:ml-15 2xl:hover:ml-13 2xl:hover:h-19 2xl:hover:w-135 2xl:w-130 2xl:h-19'>
							<div className='text-center text-white font-extrabold mb-2 mt-2'>
								<div className='group'>
									{image.map(link => (
										<Link href={`${link.route}`} key={link.route}>
											<section className='duration-500 flex font-bold text-white text-md group-hover:text-yellow-800/90 lg:group-hover:font-extrabold md:group-hover:text-xl 2xl:text-2xl 2xl:group-hover:text-3xl 2xl:group-hover:font-semibold 2xl:font-semibold 2xl:mb-1'>
												Inhalt entsperren
												<div className='flex justify-center items-center'>
													<div className='duration-500 w-12 flex h-1 bg-black/40 ml-5 group-hover:ml-8 rounded-xl group-hover:ml-5 group-hover:bg-black/80 md:w-16 md:group-hover:w-18 lg:group-hover:w-19 2xl:w-17 2xl:group-hover:w-24 mt-1'></div>
												</div>
											</section>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className='mt-5 pb-20 md:mb-30'>
						<div className='pr-5 group w-70 h-20 border-black border-1 items-center bg-yellow-900/90 flex duration-600 rounded-sm cursor-pointer justify-center md:ml-8 mx-auto hover:bg-white md:pr-0 md:hover:h-17 md:hover:w-88 md:w-82 md:hover:ml-5 md:hover:h-12 md:h-17 md:hover:mt-2 lg:ml-7 lg:hover:ml-6 lg:w-92 lg:hover:w-94 xl:ml-55 xl:hover:ml-54 2xl:ml-15 2xl:hover:ml-13 2xl:hover:h-22 2xl:hover:border-1 2xl:hover:w-135 2xl:w-130 2xl:h-22'>
							<div className='text-center text-white font-extrabold mb-3 mt-2'>
								<div className='group'>
									{image.map(link => (
										<Link href={`${link.route}`} key={link.route}>
											<section className='text-sm duration-500 font-bold text-white flex text-center items-center justify-center group-hover:text-yellow-800/90 xl:group-hover:font-extrabold md:group-hover:text-md md:text-md 2xl:text-2xl 2xl:group-hover:text-2xl 2xl:group-hover:font-semibold 2xl:font-semibold'>
												Erforderlichen Service akzeptieren <br />
												und Inhalte entsperren
												<div className='ml-2 duration-500 w-15 h-1 bg-black/40 rounded-full md:group-hover:ml-7 group-hover:bg-black/80 md:group-hover:w-17 lg:group-hover:w-18 md:group-hover:ml-6 md:ml-4 2xl:group-hover:w-22'></div>
											</section>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

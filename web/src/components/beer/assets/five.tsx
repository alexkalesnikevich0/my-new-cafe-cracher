import Link from 'next/link'
const image = [
	{
		route: '/',
	},
]
export default function Five() {
	return (
		<div className='flex flex-col items-center'>
			<div className='group mt-9 h-10'>
				{image.map(link => (
					<Link href={`${link.route}`} key={link.route}>
						<div
							className='group border-black border-1 text-xl items-center justify-center mx-auto h-12 bg-yellow-900/90 flex rounded-sm duration-600 
				hover:bg-yellow-800/90 
				md:hover:h-13 md:hover:w-70 md:hover:border-2 md:hover:text-2xl md:w-60 md:h-12'
						>
							<section
								className='uppercase text-center text-white font-extrabold pl-5 pr-5 duration-500 font-bold text-base text-white flex group-hover:font-extrabold 
							md:group-hover:text-xl md:pl-0 md:pr-0 md:text-lg 
							2xl:group-hover:font-bold'
							>
								alle events
								<div className='flex items-center justify-center'>
									<div className='duration-500 w-10 flex h-1 bg-black/50 ml-3 rounded-xl md:group-hover:ml-3 group-hover:bg-black/80 md:group-hover:w-18 md:w-13'></div>
								</div>
							</section>
						</div>
					</Link>
				))}
			</div>
			<div className='mt-15 w-[60%] h-4 bg-yellow-950/90 rounded-full mb-25 md:w-[80%] 2xl:w-[55%] md:mt-45'></div>
			<div
				className='w-90 h-155 duration-600 border-2 rounded-xl bg-white/60 border-black/70 hover:bg-white/80 group-hover:border-3 
			md:w-170 md:h-80 
			lg:w-210 lg:h-90 
			xl:w-240 xl:group-hover:h-110 xl:h-100 
			2xl:h-130 2xl:w-310'
			>
				<div className='group '>
					<div className='md:w-full md:flex'>
						<div className='md:w-[50%] group'>
							<h1
								className='mt-12 text-center duration-600 text-3xl text-blue-950 font-bold font-mono items-center 
							md:mt-16 md:group-hover:mt-20 md:text-2xl md:ml-10 md:group-hover:text-2xl 
							lg:text-3xl lg:group-hover:text-3xl lg:mt-18 lg:group-hover:mt-24 
							xl:group-hover:mt-25 xl:group-hover:text-4xl xl:mt-20 2xl:mt-35 
							2xl:group-hover:mt-40 2xl:text-5xl 2xl:group-hover:text-5xl '
							>
								SION BRAUHAUSZEITUNG
							</h1>
							<div className='md:flex md:justify-center md:text-center md:items-center '>
								<h2
									className='font-extrabold text-xl mb-7 text-black/80 text-center font-mono duration-600 mt-2 group-hover:text-black 
								md:ml-10 md:font-bold xl:text-2xl xl:group-hover:text-3xl'
								>
									Jetzt im Brauhaus Sion
									<br />
									oder direkt
								</h2>
							</div>
							<div className='flex justify-center items-center '>
								<div className='duration-500 group/main'>
									{image.map(link => (
										<Link href={`${link.route}`} key={link.route}>
											<section
												className='uppercase duration-500 border-2 border-black/80 text-lg group/lol rounded-lg p-2 pl-3 pr-3 hover:pl-5 hover:pr-5 text-white/90 flex text-center bg-yellow-900/90 duration-500 font-bold 
											group-hover:border-black group-hover/main:text-white group-hover/main:bg-yellow-900 
											md:group-hover:text-xl md:ml-9 md:group-hover:font-extrabold 
											xl:group-hover/main:text-xl 2xl:group-hover:font-bold 2xl:mt-2'
											>
												hier
												<div className='flex justify-center items-center'>
													<div
														className='duration-500 w-9 flex h-1 bg-black/90 ml-3 rounded-xl group-hover:ml-4
													md:group-hover:bg-black/70 md:group-hover/lol:w-12 md:group-hover:ml-3 md:w-9 
													xl:w-8 xl:group-hover/lol:w-13 
													2xl:w-10 2xl:group-hover:w-14'
													></div>
												</div>
											</section>
										</Link>
									))}
								</div>
							</div>
						</div>
						<div className='md:w-[50%] group'>
							<img
								className='h-70 w-70 ml-10 xl:ml-10 mt-8 border-2 duration-600 border-black/70 rounded-xl 
								md:h-70 md:w-70 md:group-hover:w-70 md:mt-5 md:group-hover:mt-3 md:group-hover:h-73 md:group-hover:ml-10 md:group-hover:border-black md:group-hover:border-2 
								lg:ml-18 lg:group-hover:ml-23 lg:w-75 lg:h-77 lg:group-hover:w-76 lg:group-hover:h-78 lg:group-hover:mt-5 
								xl:ml-18 xl:group-hover:ml-22 xl:w-90 xl:mt-6 xl:group-hover:mt-4 xl:group-hover:w-93 xl:h-87 xl:group-hover:h-90 
								2xl:w-117 2xl:h-119 2xl:mt-5 2xl:group-hover:w-122 2xl:group-hover:h-118 2xl:group-hover:mt-5 2xl:ml-27 2xl:group-hover:ml-27'
								src='drink.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

import Link from 'next/link'

const res = [
	{
		route: '/',
	},
]
export default function Reserv() {
	return (
		<div className=''>
			<div className='flex justify-center w-full pt-20'>
				<div className='mb-10 w-[65%] sm:w-[50%] h-3 bg-orange-950/80 rounded-full md:mb-10 lg:mb-13 lg:h-4 lg:w-120 2xl:w-180'></div>
			</div>
			<div className='flex justify-center w-full mb-7'>
				<h1 className='uppercase font-extrabold font-stretch-condensed text-blue-950 text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl'>
					Reservierung
				</h1>
			</div>
			<div className='h-20'>
				<div className='uppercase duration-800 text-center text-white font-extrabold mt-2 mt-5 w-55 hover:h-12 hover:w-67 h-10 group duration-600 pl-3 pr-3 border-black border-1 items-center justify-center mx-auto bg-yellow-900/90 mt-7 flex rounded-sm cursor-pointer hover:bg-yellow-800/90 hover:border-2 md:hover:text-2xl hover:mt-7 md:hover:h-12 md:hover:w-80 md:w-64 md:h-12 md:group-hover:pl-0'>
					{res.map(link => (
						<Link href={`${link.route}`} key={link.route} className=''>
							<h1 className='duration-800 font-bold text-white text-sm hover:text-base md:text-lg group-hover:ml-3 group-hover:font-extrabold md:group-hover:text-xl 2xl:group-hover:font-bold flex'>
								jetzt hier im sion
								<div className='flex items-center justify-center'>
									<div className='duration-700 w-10 flex h-1 bg-black/50 ml-3 rounded-xl md:group-hover:ml-5 group-hover:bg-black/80 group-hover:w-14'></div>
								</div>
							</h1>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

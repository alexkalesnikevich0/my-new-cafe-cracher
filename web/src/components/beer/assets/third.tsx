import Link from 'next/link'
const image = [
	{
		route: '/',
	},
]
export default function Third() {
	return (
		<div className='flex flex-col items-center justify-center '>
			<div className='mt-5 h-3 w-81 flex items-center justify-center bg-yellow-900/90 rounded-full md:mt-20 md:w-100'></div>
			<div className='text-5xl mt-10 text-center text-yellow-950/90 font-serif font-black md:text-7xl md:mt-20 lg:text-8xl'>
				TOP EVENTS
			</div>
			<div className='text-3xl mt-7 text-center pl-10 pr-10 font-extrabold text-yellow-900/80 font-serif md:mt-10 md:text-4xl lg:text-5xl'>
				MUSIK, SPASS UND LECKER KÖLSCH
			</div>
			<div className='h-10'>
				<div
					className='text-center text-white font-extrabold mt-2 mt-8 group duration-600 pt-1 pb-1 pl-3 pr-3 border-black border-1 text-xl items-center justify-center mx-auto bg-yellow-900/90 flex rounded-sm
			 hover:bg-yellow-800/90 hover:border-2 hover:text-2xl hover:mt-8 md:hover:h-12 md:hover:w-49 md:w-44 md:h-12 md:group-hover:pl-0'
				>
					{image.map(link => (
						<Link href={`${link.route}`} key={link.route}>
							<section className='duration-500 font-bold text-white text-lg group-hover:ml-3 group-hover:font-extrabold group-hover:text-xl 2xl:group-hover:font-bold flex'>
								MEHR
								<div className='flex items-center justify-center'>
									<div className='duration-700 w-10 flex h-1 bg-black/50 ml-3 rounded-xl md:group-hover:ml-5 group-hover:bg-black/80 group-hover:w-14'></div>
								</div>
							</section>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

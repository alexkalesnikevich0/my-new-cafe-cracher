import Second from '@/components/beer/assets/second'
import Third from '@/components/beer/assets/third'
import Four from '@/components/beer/assets/four'
import Five from '@/components/beer/assets/five'


export default function Reservierung() {
	return (
		<div className='bg-orange-300/80'>
			<div className=''>
				<div className='relative h-screen'>
					<img
						src='land.png'
						alt='Background'
						className='absolute inset-0 w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 h-full' />
					<div className='relative z-10 flex flex-col items-center justify-center h-full'>
						<div className='mb-15 h-1 bg-orange-300/50 h-2 w-80 2xl:w-180 2xl:h-4'></div>
						<h1 className='uppercase text-4xl text-center text-white/90 font-bold mb-7 sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl 2xl:mb-9'>
							Eindrücke aus dem <br />
							Brauhaus
						</h1>
						<div className=''>
							<h2 className='uppercase text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent text-xl md:text-2xl lg:text-4xl 2xl:text-5xl'>
								impressionen, die lust auf <br />
								mehr machen
							</h2>
						</div>
						<div className='mt-15 h-1 bg-orange-300/50 md:mt-20 mt-13 h-2 w-50 2xl:w-80 2xl:h-3'></div>
					</div>
				</div>
			</div>
			<Second />
			<Third />
			<Four />
			<Five />
		</div>
	)
}

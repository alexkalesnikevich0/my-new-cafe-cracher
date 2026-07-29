import Link from 'next/link'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '@/app/booking/animations/ZoomOutImage'

import SlowZoomInView from '@/app/booking/animations/SlowZoomInView'
import ScrollToSection from '@/app/booking/components/ScrollToSection'

export default function Third() {
	return (
		<div className='mt-20 text-center flex justify-center items-center'>
			<SlowZoomInView threshold={0.1}>
				<ZoomOutImage>
					<div className='relative h-screen w-full'>
						<img
							src='land.png'
							alt='Background'
							className='absolute inset-0 w-full h-full object-cover'
						/>
						<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 h-full' />
						<div className='relative z-10 flex flex-col items-center justify-center h-full'>
							<FadeInFromTop delay={100} threshold={0.5}>
								<div className='mt-5 h-3 w-[80%] bg-yellow-700/60 rounded-full mx-auto md:mt-20 md:w-100'></div>
								<div className='text-4xl mt-10 text-yellow-600/80 font-serif font-black md:text-7xl md:mt-20 lg:text-8xl'>
									TOP EVENTS
								</div>
							</FadeInFromTop>
							<FadeInFromBottom delay={100} threshold={0.6}>
								<div className='text-2xl mt-7 pl-10 pr-10 font-extrabold text-yellow-700/80 font-serif md:mt-10 md:text-4xl lg:text-5xl'>
									MUSIK, SPASS UND LECKER KÖLSCH
								</div>
							</FadeInFromBottom>
							<FadeInFromBottom delay={100} threshold={0.6}>
								<ScrollToSection targetId='up'>
									<div
										className='text-white flex justify-center items-center font-extrabold mt-2 mt-8 group duration-600 pt-1 pb-1 pl-3 pr-3 border-black border-1 text-xl bg-yellow-900/90 cursor-pointer uppercase rounded-sm
			   									hover:bg-yellow-800/90 hover:border-2 hover:text-2xl hover:mt-8 
			       							md:hover:h-10 md:hover:w-45 md:w-40 md:h-10 md:group-hover:pl-0'
									>
										<section
											className='cursor-pointer duration-500 font-bold text-white text-lg flex
												group-hover:ml-3 group-hover:font-extrabold group-hover:text-xl 
												2xl:group-hover:font-bold'
										>
											mehr
											<div className='flex items-center justify-center'>
												<div
													className='duration-700 w-10 flex h-1 bg-black/50 ml-3 rounded-xl 
														group-hover:bg-black/80 group-hover:w-14
														md:group-hover:ml-5'
												></div>
											</div>
										</section>
									</div>
								</ScrollToSection>
							</FadeInFromBottom>
						</div>
					</div>
				</ZoomOutImage>
			</SlowZoomInView>
		</div>
	)
}

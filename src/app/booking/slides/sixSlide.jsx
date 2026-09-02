import Link from 'next/link'
import Image from 'next/image'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '@/app/booking/animations/ZoomOutImage'

export default function SixSlide() {
	return (
		<ZoomOutImage delay={100} threshold={0.2}>
			<div className='relative w-full h-screen select-none'>
				<Image
					src='/land.png'
					alt='Background'
					className='object-cover'
					fill
					priority
					sizes='100vw'
				/>
				<FadeInFromTop delay={1600} threshold={0.3}>
					<div className='mb-10 flex justify-center md:mb-25 pt-45 2xl:pt-70 '>
						<div className='w-55 h-2 bg-orange-400/60 rounded-full md:h-4 md:w-155 2xl:w-190'></div>
					</div>
					<h1
						className='relative z-20 text-center justify-center font-serif font-black text-white/90 text-2xl uppercase
                  sm:text-4xl 
                  md:text-5xl 
                  lg:text-7xl 
                  2xl:text-8xl'
					>
						mir söke dich
					</h1>
				</FadeInFromTop>
				<FadeInFromBottom delay={1600} threshold={0.3}>
					<div
						className='text-center relative z-10 text-md font-serif font-semibold mt-5 flex justify-center items-center
                sm:text-xl 
                md:mt-12 md:text-2xl 
                lg:text-4xl 
                2xl:text-5xl'
					>
						<h2 className='text-white/70 justify-center bg-orange-300/30 px-10 w-fit rounded-lg uppercase'>
							köbes & kranz-marie!
						</h2>
					</div>
					<div className='justify-center flex'>
						<button className='h-17 items-center justify-center md:mt-5'>
							<Link href='/jobs'>
								<h1
									className='duration-900 group text-sm font-bold rounded-lg mt-10 text-white/80 pl-2 pr-2 text-center pt-1 pb-1 text-lg uppercase 
                      hover:bg-yellow-900/70 hover:text-orange-400/90 hover:text-base
                      md:text-lg md:hover:text-xl 
                      xl:hover:pl-2 xl:hover:pr-2 xl:mt-15 xl:text-xl xl:hover:text-2xl 
                      2xl:text-2xl 2xl:hover:text-3xl 2xl:hover:font-black 2xl:font-extrabold 2xl:mt-30'
								>
									jobanebote
									<div className='flex justify-center'>
										<article
											className='duration-800 ml-1 w-33 py-1 px-2 group-hover:w-50 
                      md:w-41 md:ml-0 md:group-hover:w-60 
                      xl:w-40 xl:group-hover:w-55 
                      2xl:w-56 2xl:group-hover:w-95'
										>
											<hr className='h-1 border-orange-400/80 border-2 rounded-full group-hover:border-stone-300'></hr>
										</article>
									</div>
								</h1>
							</Link>
						</button>
					</div>
				</FadeInFromBottom>
			</div>
		</ZoomOutImage>
	)
}

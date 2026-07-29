import Link from 'next/link'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'

export default function Second() {
	const raumlichkeiten = [
		{
			route: '/raumlichkeiten',
		},
	]

	const home = [
		{
			route: '/',
		},
	]
	return (
		<div className=''>
			<div className='items-center flex justify-center pt-15'>
				<div className='w-70 h-2 bg-yellow-950/90 mt-15 rounded-full md:w-100 2xl:mt-0 2xl:w-190 2xl:h-4'></div>
			</div>
			<div
				className='[&_section]:bg-white/60 [&_section]:rounded-2xl [&_section]:border-2 [&_section]:border-black/70 [&_section]:h-110 md:[&_section:hover]:border-black md:[&_section]:flex md:[&_section:hover]:border-3 md:[&_section]:w-133 md:[&_section]:h-68 md:[&_section:hover]:h-72 lg:[&_section]:h-68 lg:[&_section]:w-121 xl:[&_section]:xl:h-70 xl:[&_section]:xl:w-130 xl:[&_section:hover]:h-75 xl:[&_section:hover]:w-145 2xl:[&_section]:w-180 2xl:[&_section]:xl:h-110 2xl:[&_section:hover]:h-115 2xl:[&_section:hover]:w-190
			[&_img]:border-2 [&_img]:border-black/70 [&_img]:rounded-xl 
	    [&_article]:group [&_article]:duration-700 [&_article]:justify-center [&_article]:flex
			[&_h1]:font-black [&_h1]:text-xl md:[&_h1]:text-xl [&_h1]:text-blue-950 [&_h1]:uppercase 2xl:[&_h1]:text-3xl
			[&_h2]:font-bold [&_h2]:text-sm [&_h2]:text-black/70
			[&_figcaption]:bg-yellow-800/90 [&_figcaption]:border-black/90 [&_figcaption]:rounded-lg [&_figcaption]:font-bold [&_figcaption]:duration-600 [&_figcaption:hover]:text-white [&_figcaption]:text-lg [&_figcaption]:flex [&_figcaption]:text-white/70 [&_figcaption:hover]:border-2'
			>
				<FadeInFromTop delay={100} threshold={0.3}>
					<div className='justify-center items-center flex-col flex'>
						<div
							className='mt-15 justify-center 
					md:mt-30 
					lg:flex lg:hidden:items-center lg:hidden:flex-col lg:hidden:justify-center lg:hidden:flex lg:columns-2 lg:gap-8 
					xl:gap-15'
						>
							<section className='group duration-900 xl:mr-0'>
								<article className='flex items-center md:w-[50%]'>
									<img
										className='duration-900 w-[70%] h-50 mt-5 
									md:mt-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='drink.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</article>
								<article className='group duration-900 justify-center flex md:w-[43%]'>
									<div className='group duration-900 md:py-10'>
										<h1
											className='duration-900 text-center mt-3 
									md:mt-0 md:text-left md:group-hover:text-2xl 
									xl:group-hover:text-3xl 
									2xl:group-hover:text-4xl 2xl:group-hover:mt-15'
										>
											HIER WIRD <br />
											DER NUBBEL <br />
											VERBANNT
										</h1>
										<h2
											className='duration-900 mt-2 text-center 
									md:text-left md:group-hover:font-extrabold md:group-hover:text-base xl:group-hover:text-lg'
										>
											Nubbelverbrennung 2023
										</h2>
										<div className='flex items-center justify-center md:justify-start'>
											<div className='group/lol duration-300'>
												<Link href='/bezzer'>
													<figcaption className='border-2 pl-2 pr-2 p-1 flex items-center gap-2 mt-4 mb-4 md:mb-0'>
														MEHR
														<figure
															className='rounded-full duration-600 w-8 group-hover/lol:w-11 flex h-1 bg-black/90 
															md:bg-black/50 md:group-hover/lol:bg-black md:w-9 md:group-hover/lol:w-11 
															xl:w-9 xl:group-hover/lol:w-12 
															2xl:w-11 2xl:group-hover/lol:w-13'
														></figure>
													</figcaption>
												</Link>
											</div>
										</div>
									</div>
								</article>
							</section>
							<section className='group duration-900 mt-15 lg:mt-0'>
								<article className='group duration-900 justify-center flex md:w-[50%]'>
									<div className='group duration-900 md:py-10 text-center md:text-right'>
										<h1
											className='duration-900 mt-5
									md:mt-0
									lg:group-hover:text-2xl 
									xl:group-hover:text-3xl 
									2xl:group-hover:text-4xl 2xl:group-hover:mt-15'
										>
											HIER WIRD <br />
											DER NUBBEL <br />
											VERBANNT
										</h1>
										<h2 className='duration-900 mt-2 text-center md:text-right md:group-hover:font-extrabold md:group-hover:text-base xl:group-hover:text-lg'>
											Nubbelverbrennung 2019
										</h2>
										<div className='flex items-center justify-center md:justify-end'>
											<div className='group/lol duration-300 '>
												<Link href='/timeride'>
													<figcaption className='border-2 pl-2 pr-2 p-1 flex items-center gap-2 mt-4 mb-4 md:mb-0'>
														MEHR
														<figure
															className='rounded-full duration-600 w-8 group-hover/lol:w-11 flex h-1 bg-black/90 
														md:bg-black/50 md:group-hover/lol:bg-black md:w-9 md:group-hover/lol:w-11 
														xl:w-9 xl:group-hover/lol:w-12 
														2xl:w-11 2xl:group-hover/lol:w-13'
														></figure>
													</figcaption>
												</Link>
											</div>
										</div>
									</div>
								</article>
								<article className='flex items-center md:w-[55%]'>
									<img
										className='duration-900 w-[70%] h-50 mb-5 
									md:mb-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='drink.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</article>
							</section>
						</div>
					</div>
				</FadeInFromTop>
				<FadeInFromBottom delay={100} threshold={0.4}>
					<div className='justify-center items-center flex-col flex'>
						<div
							className='mt-15 justify-center 
					lg:flex lg:hidden:items-center lg:hidden:flex-col lg:hidden:justify-center lg:hidden:flex lg:columns-2 lg:gap-8 
					xl:gap-15'
						>
							<section className='group duration-900 xl:mr-0'>
								<article className='flex items-center md:w-[50%]'>
									<img
										className='duration-900 w-[70%] h-50 mt-5 
									md:mt-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='drink.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</article>
								<div className='group duration-900 justify-center flex md:w-[43%]'>
									<div className='group duration-900 md:py-10'>
										<h1
											className='duration-900 text-center mt-3 
									md:mt-0 md:text-left md:group-hover:text-2xl 
									xl:group-hover:text-3xl 
									2xl:group-hover:text-4xl 2xl:group-hover:mt-20'
										>
											Kölsch <br />
											Konvent
										</h1>
										<h2
											className='duration-900 mt-2 text-center 
									md:text-left md:group-hover:font-extrabold md:group-hover:text-base 
									xl:group-hover:text-lg'
										>
											08. November 2018
										</h2>
										<div className='flex items-center justify-center md:justify-start'>
											<div className='group/lol duration-300'>
												<Link href='/kolsch'>
													<figcaption className='border-2 pl-2 pr-2 p-1 flex items-center gap-2 mt-4 mb-4 md:mb-0'>
														MEHR
														<figure
															className='rounded-full duration-600 w-8 group-hover/lol:w-11 flex h-1 bg-black/90 
															md:bg-black/50 md:group-hover/lol:bg-black md:w-9 md:group-hover/lol:w-11 
															xl:w-9 xl:group-hover/lol:w-12 
															2xl:w-11 2xl:group-hover/lol:w-13'
														></figure>
													</figcaption>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section className='group duration-900 mt-15 lg:mt-0'>
								<article className='group duration-900 justify-center flex md:w-[50%]'>
									<div className='group duration-900 md:py-10 text-center md:text-right'>
										<h1
											className='duration-900 mt-5
									md:mt-0
									lg:group-hover:text-2xl 
									xl:group-hover:text-3xl 
									2xl:group-hover:text-4xl 2xl:group-hover:mt-20'
										>
											700 Jahre <br />
											Brauhaus Sion
											<br />
										</h1>
										<h2
											className='duration-900 mt-2 text-center 
									md:text-right md:group-hover:font-extrabold md:group-hover:text-base 
									xl:group-hover:text-lg'
										>
											Unsere Jubiläumsfeier
										</h2>
										<div className='flex items-center justify-center md:justify-end'>
											<div className='group/lol duration-300 '>
												<Link href='/raumlichkeiten'>
													<figcaption className='border-2 pl-2 pr-2 p-1 flex items-center gap-2 mt-4 mb-4 md:mb-0'>
														MEHR
														<figure
															className='rounded-full duration-600 w-8 flex h-1 bg-black/90 group-hover/lol:w-11
														md:bg-black/50 md:group-hover/lol:bg-black md:w-9 md:group-hover/lol:w-11 
														xl:w-9 xl:group-hover/lol:w-12 
														2xl:w-11 2xl:group-hover/lol:w-13'
														></figure>
													</figcaption>
												</Link>
											</div>
										</div>
									</div>
								</article>
								<article className='flex items-center md:w-[55%]'>
									<img
										className='duration-900 w-[70%] h-50 mb-5 
									md:mb-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='drink.png'
										alt='tailWind'
										width={27}
										height={6400}
									/>
								</article>
							</section>
						</div>
					</div>
				</FadeInFromBottom>
			</div>

			<div className='flex justify-center mt-25'>
				<div className='h-2 w-80 bg-yellow-950/90 rounded-full 2xl:h-4'></div>
			</div>
			<div className='py-5'>
				<div className='group md:p-20 mb-8'>
					<FadeInFromTop delay={100} threshold={0.2}>
						<div
							className='text-3xl mt-10 duration-900 text-yellow-950/80 font-extrabold text-center 
				   md:text-7xl 
				   2xl:text-8xl'
						>
							RESERVIERUNG
						</div>
					</FadeInFromTop>
					<FadeInFromBottom delay={100} threshold={0.2}>
						<div
							className='text-2xl mt-2 duration-900 text-yellow-900/80 font-extrabold text-center font-serif 
				   md:mt-10 md:text-5xl 
				   2xl:text-6xl 2xl:mt-18'
						>
							TISCH BUCHENÖLSCH GENIESSEN.
						</div>
					</FadeInFromBottom>
				</div>
			</div>
			<div className='w-screen flex justify-center'>
				<div className='w-60 h-2 bg-yellow-950/90 rounded-full md:w-160 2xl:h-4'></div>
			</div>
		</div>
	)
}

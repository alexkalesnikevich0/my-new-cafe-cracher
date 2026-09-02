import Reserv from '@/app/reserv/page'
import Link from 'next/link'
import Image from 'next/image'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '@/app/booking/animations/ZoomOutImage'

export default function Glaerie() {
	return (
		<div className='bg-orange-300/80'>
			<ZoomOutImage>
				<div className='relative h-screen w-full'>
					<Image
						src='/land.png'
						alt='Background'
						fill
						priority
						sizes='100vw'
						className='object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 h-full' />
					<div className='relative z-10 flex flex-col items-center justify-center h-full'>
						<FadeInFromTop delay={1600} threshold={0.2}>
							<div className='mb-15 h-2 bg-orange-300/50 w-80 mx-auto 2xl:w-180 2xl:h-4'></div>
							<h1
								className='uppercase text-3xl text-center font-bold text-white/90 mb-7 
					sm:text-4xl 
					md:text-5xl 
					lg:text-5xl 
					xl:text-7xl 
					2xl:text-7xl 2xl:mb-9'
							>
								Eindrücke <br />
								aus dem Brauhaus
							</h1>
						</FadeInFromTop>
						<FadeInFromBottom delay={1600} threshold={0.3}>
							<div className=''>
								<h2
									className='uppercase text-base text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent 
						md:text-2xl 
						lg:text-4xl 
						2xl:text-5xl'
								>
									impressionen, die lust auf <br />
									mehr machen
								</h2>
							</div>
							<div className='mt-15 bg-orange-300/50 md:mt-20 h-2 mx-auto w-50 2xl:w-80 2xl:h-3'></div>
						</FadeInFromBottom>
					</div>
				</div>
			</ZoomOutImage>
			<div
				className='
			[&_section]:bg-white/60 [&_section]:rounded-2xl [&_section]:border-2 [&_section]:border-black/70 [&_section]h-110 md:[&_section]:w-133 md:[&_section]:h-68 md:[&_section:hover]:h-72 lg:[&_section]:h-68 lg:[&_section]:w-121 xl:[&_section]:xl:h-70 xl:[&_section]:xl:w-130 xl:[&_section:hover]:h-75 xl:[&_section:hover]:w-145 2xl:[&_section]:w-180 2xl:[&_section]:xl:h-110 2xl:[&_section:hover]:h-115 2xl:[&_section:hover]:w-190
			[&_img]:border-2 [&_img]:border-black/70 [&_img]:rounded-xl 
	    [&_article]:group [&_article]:duration-700 [&_article]:justify-center [&_article]:flex
			[&_h1]:font-black [&_h1]:text-xl [&_h1]:text-blue-950 [&_h1]:uppercase md:[&_h1]:text-xl 2xl:[&_h1]:text-3xl
			[&_h2]:font-bold [&_h2]:text-sm [&_h2]:text-black/70
			[&_figcaption]:bg-yellow-800/90 [&_figcaption]:border-black/90 [&_figcaption]:rounded-lg [&_figcaption]:font-bold [&_figcaption]:text-lg [&_figcaption]:flex [&_figcaption]:text-white/70 [&_figcaption:hover]:border-2 [&_figcaption:hover]:text-white [&_figcaption]:duration-400'
			>
				<div className='justify-center items-center flex-col flex'>
					<div
						className='mt-15 justify-center 
					md:mt-30 
					lg:flex lg:hidden:items-center lg:hidden:flex-col lg:hidden:justify-center lg:hidden:flex lg:columns-2 lg:gap-8 
					xl:gap-15'
					>
						<FadeInFromTop delay={100} threshold={0.2}>
							<section className='group duration-900 md:flex md:hover:border-3 md:hover:border-black xl:mr-0'>
								<article className='flex items-center md:w-[50%]'>
									<Image
										className='duration-900 w-[70%] h-50 mt-5 
									md:mt-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='/drink.png'
										alt='tailWind'
										width={270}
										height={640}
									/>
								</article>
								<div className='group duration-900 justify-center flex md:w-[43%]'>
									<div className='group duration-900 md:py-10'>
										<h1
											className='duration-900 text-center mt-3 md:mt-0 
									md:text-left md:group-hover:text-2xl 
									xl:group-hover:text-3xl 
									2xl:group-hover:text-4xl 2xl:group-hover:mt-15'
										>
											HIER WIRD <br />
											DER NUBBEL <br />
											VERBANNT
										</h1>
										<h2
											className='duration-900 mt-2 text-center 
									md:text-left md:group-hover:font-extrabold md:group-hover:text-base 
									xl:group-hover:text-lg'
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
															xl:w-9 xl:group-hover/lol:w-11 
															2xl:w-11 2xl:group-hover/lol:w-13'
														></figure>
													</figcaption>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</section>
						</FadeInFromTop>
						<FadeInFromBottom delay={100} threshold={0.2}>
							<section className='group duration-900 md:flex md:hover:border-3 md:hover:border-black mt-15 lg:mt-0'>
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
										<h2
											className='duration-900 mt-2 text-center 
									md:text-right md:group-hover:font-extrabold md:group-hover:text-base 
									xl:group-hover:text-lg'
										>
											Nubbelverbrennung 2019
										</h2>
										<div className='flex items-center justify-center md:justify-end'>
											<div className='group/lol duration-300 '>
												<Link href='/wicky'>
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
									<Image
										className='duration-900 w-[70%] h-50 mb-5 md:mb-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='/drink.png'
										alt='tailWind'
										width={270}
										height={640}
									/>
								</article>
							</section>
						</FadeInFromBottom>
					</div>
				</div>
				<div className='justify-center items-center flex-col flex'>
					<div
						className='mt-15 justify-center 
					lg:flex lg:hidden:items-center lg:hidden:flex-col lg:hidden:justify-center lg:hidden:flex lg:columns-2 lg:gap-8 
					xl:gap-15'
					>
						<FadeInFromBottom delay={100} threshold={0.2}>
							<section className='group duration-900 md:flex md:hover:border-3 md:hover:border-black xl:mr-0'>
								<article className='flex items-center md:w-[50%]'>
									<Image
										className='duration-900 w-[70%] h-50 mt-5 md:mt-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='/drink.png'
										alt='tailWind'
										width={270}
										height={640}
									/>
								</article>
								<div className='group duration-900 justify-center flex md:w-[43%]'>
									<div className='group duration-900 md:py-10'>
										<h1
											className='duration-900 text-center mt-3 
									md:mt-0 md:text-left md:group-hover:text-2xl 
									xl:group-hover:text-3xl 
									2xl:group-hover:text-4xl 2xl:group-hover:mt-15'
										>
											Kölsch <br />
											Konvent
										</h1>
										<h2
											className='duration-900 mt-2 text-center md:text-left 
									md:group-hover:font-extrabold md:group-hover:text-base 
									xl:group-hover:text-lg'
										>
											08. November 2018
										</h2>
										<div className='flex items-center justify-center md:justify-start'>
											<div className='group/lol duration-300'>
												<Link href='/hoosch'>
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
						</FadeInFromBottom>
						<FadeInFromTop delay={100} threshold={0.2}>
							<section className='group duration-900 md:flex md:hover:border-3 md:hover:border-black mt-15 lg:mt-0'>
								<article className='group duration-900 justify-center flex md:w-[50%]'>
									<div className='group duration-900 md:py-10 text-center md:text-right'>
										<h1
											className='duration-900 mt-5
									md:mt-0
									lg:group-hover:text-2xl 
									xl:group-hover:text-3xl 
									2xl:group-hover:text-4xl 2xl:group-hover:mt-15'
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
									<Image
										className='duration-900 w-[70%] h-50 mb-5 md:mb-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='/drink.png'
										alt='tailWind'
										width={270}
										height={640}
									/>
								</article>
							</section>
						</FadeInFromTop>
					</div>
				</div>
				<div className='justify-center items-center flex-col flex'>
					<div
						className='mt-15 justify-center 
					lg:flex lg:hidden:items-center lg:hidden:flex-col lg:hidden:justify-center lg:hidden:flex lg:columns-2 lg:gap-8 
					xl:gap-15'
					>
						<FadeInFromTop delay={100} threshold={0.2}>
							<section className='group duration-900 md:flex md:hover:border-3 md:hover:border-black xl:mr-0'>
								<article className='flex items-center md:w-[50%]'>
									<Image
										className='duration-900 w-[70%] h-50 mt-5 md:mt-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='/drink.png'
										alt='tailWind'
										width={270}
										height={640}
									/>
								</article>
								<div className='group duration-900 justify-center flex md:w-[43%]'>
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
									md:text-left md:group-hover:font-extrabold md:group-hover:text-base 
									xl:group-hover:text-lg'
										>
											Nubbelverbrennung 2018
										</h2>
										<div className='flex items-center justify-center md:justify-start'>
											<div className='group/lol duration-300'>
												<Link href='/archiv'>
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
						</FadeInFromTop>
						<FadeInFromBottom delay={100} threshold={0.2}>
							<section className='group duration-900 md:flex md:hover:border-3 md:hover:border-black mt-15 lg:mt-0'>
								<article className='group duration-900 justify-center flex md:w-[50%]'>
									<div className='group duration-900 md:py-10 text-center md:text-right'>
										<h1
											className='duration-900 mt-5
									md:mt-0
									lg:group-hover:text-2xl 
									xl:group-hover:text-3xl 
									2xl:group-hover:text-4xl 2xl:group-hover:mt-15'
										>
											Junge und <br />
											Mädcher vum <br />
											Aldermaat
										</h1>
										<h2
											className='duration-900 mt-2 text-center 
									md:text-right md:group-hover:font-extrabold md:group-hover:text-base 
									xl:group-hover:text-lg'
										>
											Nubbelverbrennung 2019
										</h2>
										<div className='flex items-center justify-center md:justify-end'>
											<div className='group/lol duration-300 '>
												<Link href='/feierno'>
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
									<Image
										className='duration-900 w-[70%] h-50 mb-5 md:mb-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='/drink.png'
										alt='tailWind'
										width={270}
										height={640}
									/>
								</article>
							</section>
						</FadeInFromBottom>
					</div>
				</div>
				<div className='justify-center items-center flex-col flex'>
					<div
						className='mt-15 justify-center 
					lg:flex lg:hidden:items-center lg:hidden:flex-col lg:hidden:justify-center lg:hidden:flex lg:columns-2 lg:gap-8 
					xl:gap-15'
					>
						<FadeInFromBottom delay={100} threshold={0.2}>
							<section className='group duration-900 md:flex md:hover:border-3 md:hover:border-black xl:mr-0'>
								<article className='flex items-center md:w-[50%]'>
									<Image
										className='duration-900 w-[70%] h-50 mt-5 md:mt-0 md:h-[75%] md:w-[80%] md:group-hover:h-[80%] md:group-hover:w-[85%]'
										src='/drink.png'
										alt='tailWind'
										width={270}
										height={640}
									/>
								</article>
								<div className='group duration-900 justify-center flex md:w-[43%]'>
									<div className='group duration-900 md:py-10'>
										<h1
											className='duration-900 text-center mt-3 
									md:mt-0 md:group-hover:text-2xl 
									xl:group-hover:text-3xl 
									2xl:group-hover:text-4xl 2xl:group-hover:mt-15'
										>
											HIER WIRD <br />
											DER NUBBEL <br />
											VERBANNT
										</h1>
										<h2 className='duration-900 mt-2 text-center md:group-hover:font-extrabold md:group-hover:text-base xl:group-hover:text-lg'>
											Nubbelverbrennung 2023
										</h2>
										<div className='flex items-center justify-center md:justify-center'>
											<div className='group/lol duration-300'>
												<Link href='/hochzeit'>
													<figcaption className='border-2 pl-2 pr-2 p-1 flex items-center gap-2 mt-4 mb-4 md:mb-0'>
														MEHR
														<figure
															className='rounded-full duration-600 w-8 group-hover/lol:w-11 flex h-1 bg-black/90 md:bg-black/50 
															md:group-hover/lol:bg-black md:w-9 md:group-hover/lol:w-11 
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
						</FadeInFromBottom>
					</div>
				</div>
			</div>
			<Reserv />
		</div>
	)
}

import Link from 'next/link'
import Image from 'next/image'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '@/app/booking/animations/ZoomOutImage'

import Reserv from '@/app/reserv/page'
export default function Raumlichkeiten() {
	return (
		<div className='bg-orange-300/80'>
			<ZoomOutImage>
				<div className='relative h-screen w-full'>
					<Image
						src='/land.png'
						alt='Background'
						className='object-cover'
						fill
						priority
						sizes='100vw'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 h-full' />
					<div className='relative z-10 flex flex-col items-center justify-center h-full'>
						<FadeInFromTop delay={1600} threshold={0.2}>
							<div className='mb-15 bg-orange-300/50 h-2 w-80 mx-auto 2xl:w-180 2xl:h-4'></div>
							<h1
								className='text-2xl font-bold text-center bg-gradient-to-t from-white/90 via-white/80 to-white/90 bg-clip-text text-transparent mb-10 
					sm:text-3xl
					md:text-4xl 
					lg:text-6xl 
					2xl:text-6xl 2xl:mb-13'
							>
								GROSSES BRAUHAUS MIT <br />
								GROSSER VIELFALT
							</h1>
						</FadeInFromTop>
						<FadeInFromBottom delay={1600} threshold={0.3}>
							<h2
								className='uppercase text-base text-center px-4 font-serif font-black bg-orange-300/30 ml-15 mr-15 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent 
					md:text-2xl 
					lg:text-4xl 
					2xl:text-5xl'
							>
								DIE TOLLE ATMOSPHARE IN DER SCHANKE DER <br />
								ALTEN BRAUEREI ODER DEEN KLEINEN <br />
								STUBEN ERLEBEN
							</h2>
							<div className='mt-15 bg-orange-300/50 md:mt-20 mx-auto h-2 w-50 2xl:w-80 2xl:h-3'></div>
						</FadeInFromBottom>
					</div>
				</div>
			</ZoomOutImage>
			<div
				className='[&_section]:bg-white/70 [&_section]:border-4 [&_section]:rounded-xl [&_section]:border-black [&_section]:w-[85%] sm:[&_section]:w-[65%] md:[&_section]:w-[90%] lg:[&_section]:w-[85%] md:[&_section]:hidden:flex-col md:[&_section]:flex 2xl:[&_section]:w-300 2xl:[&_section]:h-120
				[&_h1]:text-blue-950 [&_h1]:uppercase [&_h1]:font-extrabold [&_h1]:text-2xl sm:[&_h1]:text-2xl md:[&_h1]:text-2xl lg:[&_h1]:text-3xl xl:[&_h1]:text-4xl 2xl:[&_h1]:text-5xl 
				[&_h2]:font-semibold [&_h2]:text-black/60 [&_h2]:text-sm sm:[&_h2]:text-base xl:[&_h2]:text-lg 2xl:[&_h2]:text-xl
				[&_h3]:font-semibold [&_h3]:text-black/40 [&_h3]:text-sm md:[&_h3]:text-base
				[&_img]:border-black [&_img]:w-screen md:[&_img]:h-[100%]
				[&_article]:rounded-xl [&_article]:border-black [&_article]:bg-white/70 [&_article]:border-4 
				'
			>
				{' '}
				<FadeInFromBottom delay={100} threshold={0.2}>
					<div className='flex justify-center mt-40'>
						<section className=''>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='h-70 border-b-3 md:border-b-0 rounded-md rounded-b-none 
								md:rounded-br-none md:rounded-bl-md md:rounded-l-md md:rounded-r-none md:border-r-3'
									src='/land.png'
									alt='tailWind'
									unoptimized
									width={270}
									height={640}
								/>
							</div>
							<div className='w-[100%] md:w-[50%]'>
								<h1 className='text-center md:text-left mt-5 md:pl-10 md:mt-10 2xl:mt-15'>
									SCHÄNKE
								</h1>
								<h2 className='text-center pl-5 pr-5 mb-5 mt-5 md:pl-8 md:pr-11 md:text-left xl:mb-4 2xl:mt-12'>
									Der Brauereiausschank im Brauhaus Sion. Hier genießt man
									alles, was zu einem frisch gezapften, gepflegten Sion Kölsch
									vom Fass passt. Ein absoluter Hingucker ist natürlich die
									Aufzuganlage, durch die unsere eiskalten Fässer den Weg aus
									dem Keller auf die Theke finden.
									<br />
								</h2>
							</div>
						</section>
					</div>
				</FadeInFromBottom>
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='flex justify-center mt-10'>
						<section className=' '>
							<div className='w-[100%] md:w-[50%]'>
								<h1 className='text-center text-2xl mt-10 lg:text-right lg:pr-10 2xl:mt-15'>
									ALTE BRAUEREI
								</h1>
								<h2 className='text-center text-center mt-5 pr-8 pl-11 lg:text-right 2xl:mt-10'>
									In der alten Brauerei befand sich bis zur Zerstörung 1942 die
									Produktionsstätte des Sion Kölsch; sie gilt bis heute als
									Nukleus der Marke. Sitzend finden hier rund 200 Personen
									Platz.
								</h2>
								<h3 className='mb-4 text-center lg:text-right lg:pr-8 mt-3 2xl:mt-5'>
									Sitzplätze: ca. 200
								</h3>
								<div className='flex justify-center lg:justify-end px-8 ml-2 mr-2 mt-2 mb-2'>
									<Link href='/'>
										<div
											className='group duration-600 hover:bg-yellow-800/90 border-black bg-yellow-900/90 flex rounded-sm justify-center border-2 
								md:pr-3 md:w-46 md:hover:w-50 md:h-12 md:hover:h-12
								2xl:mt-5'
										>
											<div className='group text-center text-white items-center flex'>
												<h5
													className='duration-500 font-bold p-1 flex group-hover:text-white 
												md:group-hover:ml-1 md:group-hover:text-lg 
												2xl:group-hover:font-bold'
												>
													ALLE EVENTS
													<div className='flex justify-center items-center'>
														<div className='duration-500 w-10 flex h-1 bg-black/50 ml-3 rounded-xl group-hover:bg-black/80 group-hover:w-10'></div>
													</div>
												</h5>
											</div>
										</div>
									</Link>
								</div>
							</div>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='border-t-3 rounded-md rounded-t-none 
								md:rounded-bl-none md:rounded-br-md md:rounded-r-md md:rounded-l-none md:border-r-0 md:border-l-3 md:border-t-0'
									src='/land.png'
									alt='tailWind'
									unoptimized
									width={270}
									height={640}
								/>
							</div>
						</section>
					</div>
				</FadeInFromBottom>
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='flex justify-center mt-10'>
						<section className=''>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='rounded-md rounded-b-none border-b-3 
								md:border-b-0 md:rounded-br-none md:rounded-bl-md md:rounded-l-md md:rounded-r-none md:border-r-3'
									src='/land.png'
									alt='tailWind'
									unoptimized
									width={270}
									height={640}
								/>
							</div>
							<div className='w-[100%] h-40 flex-col items-center mt-10 md:w-[50%]'>
								<h1 className='text-center items-center mt-5 md:mt-0 md:text-left md:pl-10 lg:mt-10 2xl:mt-15'>
									Restaurant
								</h1>
								<h2 className='pl-5 pr-5 text-md text-center mt-5 sm:text-lg md:pr-11 2xl:mt-12 2xl:pr-20'>
									Das Herzstück unseres Hauses.
									<br />
									<br />
									<br />
								</h2>
							</div>
						</section>
					</div>
				</FadeInFromBottom>
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='flex justify-center mt-10'>
						<section className=' '>
							<div className='w-[100%] md:w-[50%]'>
								<h1 className='text-center mb-5 mt-5 sm:mb-5 lg:mt-10 lg:text-right lg:pr-10 2xl:mt-15'>
									Hans Sion-Stube
								</h1>
								<h2 className='text-center text-center pr-8 pl-11 mt-2 lg:text-right lg:mt-5 2xl:mt-10'>
									Die Hans Sion-Stube bietet Platz für ungefähr 25 Personen.
									Diese Stube eignet sich jedoch auch hervorragend für
									Gesellschaften von maximal 16 Personen, die dann gemeinsam an
									einer großen Tafel ihren Aufenthalt im Brauhaus Sion in
									privater Atmosphäre genießen können.
								</h2>
								<h3 className='mb-5 text-center mt-3 sm:text-lg sm:mb-6 lg:text-right lg:pr-8 2xl:mt-5'>
									Sitzplätze: ca. 16-25
								</h3>
							</div>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='border-t-3 rounded-md rounded-t-none 
								md:rounded-bl-none md:rounded-br-md md:rounded-r-md md:rounded-l-none md:border-r-0 md:border-l-3 md:border-t-0'
									src='/land.png'
									alt='tailWind'
									width={270}
									height={640}
								/>
							</div>
						</section>
					</div>
				</FadeInFromBottom>
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='flex justify-center mt-10'>
						<section className=''>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='rounded-md rounded-b-none border-b-3 
								md:border-b-0 md:rounded-br-none md:rounded-bl-md md:rounded-l-md md:rounded-r-none md:border-r-3'
									src='/land.png'
									alt='tailWind'
									unoptimized
									width={270}
									height={640}
								/>
							</div>
							<div className='w-[100%] md:w-[50%]'>
								<h1 className='text-center mt-5 md:text-left md:pl-10 md:mt-10 2xl:mt-15'>
									Ratsstube
								</h1>
								<h2 className='text-center pl-5 pr-5 mb-5 mt-5 md:pl-8 md:pr-11 md:text-left xl:mb-4 2xl:mt-12'>
									Insgesamt finden hier ca. 50 Personen Platz und die Ratsstube
									eignet sich besonders für Gesellschaften, die zwar
									„gutbürgerlich“, aber dennoch gediegen feiern wollen.
								</h2>
								<h3 className='text-center text-center sm:text-lg md:text-left md:text-xl md:pl-8 xl:mt-7'>
									Sitzplätze: ca. 50
									<br />
									<br />
								</h3>
							</div>
						</section>
					</div>
				</FadeInFromBottom>
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='flex justify-center mt-10'>
						<section className=' '>
							<div className='w-[100%] md:w-[50%]'>
								<h1 className='text-center mt-5 lg:text-right lg:mt-10 lg:pr-10 2xl:mt-15'>
									Braustube
								</h1>
								<h2 className='text-center text-center mt-5 pr-8 pl-11 lg:text-right 2xl:mt-10'>
									Dieser Raum bietet Platz für ca. 50 Personen, grenzt aber an
									den Hopfengarten an und kann daher auch erweitert werden. Hier
									wird das Thema Kölner Dreigestirn inszeniert – oder sagen wir:
									„zelebriert“.
								</h2>
								<h3 className='mb-10 text-center sm:text-lg lg:text-right lg:pr-8 mt-3 2xl:mt-5'>
									Sitzplätze: ca. 50
								</h3>
							</div>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='border-t-3 rounded-md rounded-t-none 
								md:rounded-bl-none md:rounded-br-md md:rounded-r-md md:rounded-l-none md:border-r-0 md:border-l-3 md:border-t-0'
									src='/land.png'
									alt='tailWind'
									unoptimized
									width={270}
									height={640}
								/>
							</div>
						</section>
					</div>
				</FadeInFromBottom>
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='flex justify-center mt-10'>
						<section className=''>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='border-b-3 rounded-md rounded-b-none 
								md:border-b-0 md:rounded-br-none md:rounded-bl-md md:rounded-l-md md:rounded-r-none md:border-r-3'
									src='/land.png'
									alt='tailWind'
									unoptimized
									width={270}
									height={640}
								/>
							</div>
							<div className='w-[100%] md:w-[50%]'>
								<h1 className='text-center mt-5 md:mt-10 md:text-left md:pl-10 2xl:mt-15'>
									Altstadtstube
								</h1>
								<h2 className='pl-5 pr-5 mb-4 mt-5 text-center md:text-left text-md md:pl-8 md:pr-11 xl:mb-4 2xl:mt-12'>
									Hier trifft man sich, um in kneipenähnlicher Atmosphäre
									leckeres Sion Kölsch zu genießen. Die Stube bietet ca.
								</h2>
								<h3 className='text-center text-center sm:text-lg md:text-left md:text-lg md:pl-8 xl:mt-7'>
									Sitzplätze: ca. 40
									<br />
									<br />
								</h3>
							</div>
						</section>
					</div>
				</FadeInFromBottom>
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='flex justify-center mt-10'>
						<section className=' '>
							<div className='w-[100%] md:w-[50%]'>
								<h1 className='text-center mt-5 lg:mt-10 lg:text-right lg:pr-10 2xl:mt-15'>
									Hopfengarten
								</h1>
								<h2 className='text-center text-center mt-5 pr-8 pl-11 lg:text-right 2xl:mt-10'>
									In unserem Hopfengarten finden rund 36 Personen Platz. In
									diesem überdachten Freibereich kann man ganzjährig
									Biergarten-Atmosphäre genießen.
								</h2>
								<h3 className='mb-10 text-center mt-3 sm:text-lg lg:text-right lg:pr-8 2xl:mt-5'>
									Sitzplätze: ca. 36
								</h3>
							</div>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='border-t-3 rounded-md rounded-t-none 
								md:rounded-bl-none md:rounded-br-md md:rounded-r-md md:rounded-l-none md:border-r-0 md:border-l-3 md:border-t-0'
									src='/land.png'
									alt='tailWind'
									unoptimized
									width={270}
									height={640}
								/>
							</div>
						</section>
					</div>
				</FadeInFromBottom>
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='flex justify-center mt-10'>
						<section className=''>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='border-b-3 rounded-md rounded-b-none 
								md:border-b-0 md:rounded-br-none md:rounded-bl-md md:rounded-l-md md:rounded-r-none md:border-r-3'
									src='/land.png'
									alt='tailWind'
									unoptimized
									width={270}
									height={640}
								/>
							</div>
							<div className='w-[100%] md:w-[50%]'>
								<h1 className='text-center mt-5 md:text-left sm:mt-10 md:pl-8 md:mt-10 2xl:mt-15'>
									Terrasse
								</h1>
								<h2 className='pl-5 pr-5 mb-2 text-center mt-5  md:pl-8 md:text-left md:pr-11 xl:mb-4 2xl:mt-12'>
									Unsere Außengastronomie bietet Platz für rund 120 Personen und
									erfreut sich während der Sommermonate zahlreicher Gäste.
									<br />
									<br />
									<br />
								</h2>
							</div>
						</section>
					</div>
				</FadeInFromBottom>
				<FadeInFromBottom delay={100} threshold={0.3}>
					<div className='flex justify-center mt-10'>
						<article className='w-[90%] sm:w-[75%] md:hidden:flex-col md:flex md:w-[80%] 2xl:w-350 2xl:h-120 '>
							<div className='w-[100%] md:w-[50%]'>
								<h1 className='text-center text-2xl mt-10 lg:mt-10 sm:text-4xl lg:text-5xl lg:mt-25 2xl:mt-34 2xl:text-5xl'>
									360°-Tour
								</h1>
								<h2 className='mb-15 text-center text-lg text-center mt-5 pr-8 pl-11 sm:text-xl 2xl:text-xl 2xl:mt-7'>
									Entdecken Sie unser Brauhaus in unserem 360° Rundgang und
									machen Sie sich einen originalgetreuen Eindruck unserer
									Räumlichkeiten.
								</h2>
							</div>
							<div className='w-[100%] md:w-[50%]'>
								<Image
									className='border-t-3 rounded-md rounded-t-none 
								md:border-l-3 md:border-t-0 md:rounded-bl-none md:rounded-br-md md:rounded-r-md md:rounded-l-none md:border-r-0'
									src='/land.png'
									alt='tailWind'
									unoptimized
									width={270}
									height={640}
								/>
							</div>
						</article>
					</div>
				</FadeInFromBottom>
			</div>
			<Reserv />
		</div>
	)
}

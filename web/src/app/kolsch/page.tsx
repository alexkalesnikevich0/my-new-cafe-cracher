import Reserv from '../reserv/page'
import Link from 'next/link'
const home = [
	{
		route: '/',
	},
]

export default function Kolsch() {
	return (
		<div className='bg-orange-300/80'>
			<div className='relative h-screen'>
				<img
					src='land.png'
					alt='Background'
					className='absolute inset-0 w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 h-full' />
				<div className='relative z-10 flex flex-col items-center justify-center h-full'>
					<div className='mb-15 h-1 bg-orange-300/50 h-2 w-80 2xl:w-180 2xl:h-4'></div>
					<h2
						className='uppercase text-4xl text-center text-white/90 font-bold mb-7 
					sm:text-4xl 
					md:text-5xl 
					lg:text-5xl 
					xl:text-7xl 
					2xl:text-7xl 2xl:mb-9'
					>
						HEIRATEN IM HERZEN <br />
						VON KÖLN
					</h2>
					<div className=''>
						<h1
							className='uppercase text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent text-xl 
						md:text-2xl 
						lg:text-4xl 
						2xl:text-5xl'
						>
							Planen Sie gemeinsam mit <br />
							uns Ihre ideale Wunschhochzeit
						</h1>
					</div>
					<div className='mt-15 h-1 bg-orange-300/50 md:mt-20 mt-13 h-2 w-50 2xl:w-80 2xl:h-3'></div>
				</div>
			</div>
			<div className='border-2 border-black/80 rounded-md bg-white/60 mx-auto max-w-[88%] sm:max-w-[88%] md:max-w-[85%] mt-20 lg:max-w-[85%] xl:max-w-[90%] 2xl:w-[60%]'>
				<div
					className='p-10 lg:p-10 
				[&_h1]:text-xl [&_h1]:text-orange-950/90 [&_h1]:uppercase [&_h1]:font-extrabold [&_h1]:font-stretch-semi-condensed sm:[&_h1]:text-2xl md:[&_h1]:text-4xl lg:[&_h1]:text-3xl xl:[&_h1]:text-4xl
        [&_p]:text-black/80 [&_p]:font-semibold [&_p]:text-sm [&_p]:font-stretch-expanded md:[&_p]:text-base lg:[&_p]:text-lg xl:[&_p]:text-lg'
				>
					<div className='lg:flex md:gap-1 xl:items-start xl:gap-10'>
						<div className='block lg:w-[85%] xl:w-[90%] xl:p-0'>
							<h1 className='mt-5 text-left xl:mt-20'>
								sion Kölsch <br />
								mit starkem Auftritt
							</h1>
							<p className='mt-5 text-left'>
								Guter Geschmack spricht für sich. Mit SION Kölsch setzen wir uns
								von der Masse ab. Das feinherbe Kölsch, frisch und süffig aus
								dem Herzen der Domstadt, ist einfach überzeugend.
							</p>
							<p className='mt-3'>
								Die Anmeldung zur Eheschließung kann frühestens sechs Monate vor
								dem Termin erfolgen. Und wenn Sie Ihr Datum fixiert haben, dann
								sollten Sie direkt bei uns darauf anstoßen und direkt die
								Feierlocation in einem abstimmen.
							</p>
						</div>
						<div className='sm:flex sm:justify-center sm:pt-10 sm:pb-0 md:p-10 lg:p-5 md:w-[100%] lg:items-center lg:pt-0 lg:pr-0'>
							<img
								className='w-full border-3 rounded-xl w-[100%] mt-7 border-black/80 lg:h-100 xl:h-120 xl:mt-0'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='mt-5 mb-10 rounded-full bg-orange-950/80 h-2 w-[60%] lg:mt-5 lg:mb-5 2xl:h-4'></div>
				</div>
				<div className='flex justify-center'>
					<div className='sm:flex sm:justify-center sm:p-8 lg:p-20 xl:w-[85%] 2xl:w-[75%]'>
						<img
							className='w-full sm:border-3 sm:rounded-xl sm:border-black'
							src='land.png'
							alt='tailWind'
							width={27}
							height={6400}
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='mt-10 mb-10 rounded-full h-1 bg-orange-950/80 h-2 w-[60%] lg:mt-5 lg:mb-15 2xl:h-4'></div>
				</div>
				<div className='justify-between  sm:flex sm:w-full xl:pr-25 xl:pl-25 2xl:pl-20 2xl:pr-20'>
					<div className='sm:w-[50%] sm:pl-3'>
						<div
							className='sm:flex sm:justify-center sm:h-65 sm:border-2 sm:border-black sm:rounded-2xl 
						md:border-3 md:rounded-xl 
						lg:h-85'
						>
							<img
								className='w-full sm:rounded-xl md:rounded-lg'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
						<div className='p-5 mt-10 mb-10 sm:mt-0 sm:mb-0 sm:pt-5 sm:p-0 '>
							<div className='p-4 rounded-lg border-3 border-orange-950/80 bg-orange-300/30'>
								<h1 className='uppercase text-black/80 text-base font-bold font-stretch-semi-expanded lg:text-xl'>
									„Kölsch is e Jeföhl, dat verbingk.“
								</h1>
								<p className='text-sm text-black/70 font-extrabold mt-6 font-stretch-expanded lg:text-lg'>
									René Sion
								</p>
							</div>
						</div>
					</div>
					<div className='sm:w-[45%] sm:flex sm:items-center sm:pr-3'>
						<div className='sm:flex sm:justify-center sm:h-70 sm:border-2 sm:border-black sm:rounded-2xl md:border-3 md:rounded-xl lg:h-110'>
							<img
								className='w-full sm:rounded-xl md:rounded-lg'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='mt-10 mb-10 rounded-full h-1 bg-orange-950/80 h-2 w-[60%] lg:mt-15 lg:mb-0 2xl:h-4'></div>
				</div>
				<div
					className='p-10 
					[&_h1]:text-xl [&_h1]:text-orange-950/90 [&_h1]:uppercase [&_h1]:font-extrabold [&_h1]:font-stretch-semi-condensed sm:[&_h1]:text-2xl md:[&_h1]:text-4xl
        [&_p]:text-black/80 [&_p]:font-semibold [&_p]:text-sm [&_p]:font-stretch-expanded md:[&_p]:text-base lg:[&_p]:text-lg'
				>
					<div className='xl:flex xl:w-full md:gap-1 xl:items-center xl:gap-15'>
						<div className='lg:flex sm:justify-center sm:flex sm:justify-center xl:w-[45%] xl:items-center lg:pr-0'>
							<img
								className='w-full border-3 rounded-xl border-black/80 md:w-140 md:h-100 lg:w-160 lg:h-100 xl:w-120 xl:h-115'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
						<div className='lg:block xl:w-[50%] xl:w-[50%]'>
							<h1 className='mt-15 lg:mt-15'>Neues Design</h1>
							<p className='mt-5'>
								Die Sion Gastroflasche setzt mit ihrem neuen Design ein wahres
								„Trinkmal“. Sie ist anders, sie ist besonders. Sie ist vor
								allem: null Chichi, voll eigenständig. Schwarz, matt, Gold!
							</p>
							<p className='mt-5'>
								Die beste Verpackung für 0,33 Liter reinste Sion Freude. Hier
								ist mal wieder eindrucksvoll bewiesen, dass echte Kölner
								Trinkkultur eben schon immer die gelungene Verbindung von Form
								und Inhalt war.
							</p>
							<p className='mt-5'>
								Reines Wasser aus eigenem Brunnen, obergärige Hefe aus eigener
								Reinzucht, bestes Gersten- und Weizenmalz und ausgesuchte
								Hopfensorten – unsere Gäste schätzen den Geschmack:
								spritzig-frisch auf der Zunge, feinherb-hopfig am Gaumen,
								schlank-elegant im Abgang.
							</p>
							<p className='mt-5'>
								Wer sich mit leckerem SION Kölsch aus der matt-schwarz-goldenen
								Gastroflasche auch zu Hause zuprosten möchte, der kann sich den
								Kasten direkt von unserem Partner FAKO BRINGTS nach Hause
								liefern lassen:
							</p>
							<div className='h-10 mt-10 lg:mb-10'>
								<div
									className='uppercase duration-800 text-center text-white font-extrabold w-54 mt-2 mb-30 h-10 group pl-3 pr-3 border-black border-1 items-center justify-center mx-auto bg-yellow-900/90 flex rounded-sm 
								 hover:w-60 hover:h-11 hover:bg-yellow-800/90 hover:border-2 
								 md:hover:text-2xl md:hover:h-12 md:hover:w-70 md:w-62 md:h-12 md:group-hover:pl-0'
								>
									{home.map(link => (
										<Link href={`${link.route}`} key={link.route}>
											<section
												className='duration-800 flex font-bold text-white text-sm 
											group-hover:text-base group-hover:ml-0 group-hover:font-extrabold
											md:text-lg md:group-hover:text-xl 
											2xl:group-hover:font-bold'
											>
												hier bestellen!
												<div className='flex items-center justify-center'>
													<div className='duration-600 w-10 flex h-1 bg-black/50 ml-3 rounded-xl md:group-hover:ml-5 group-hover:bg-black/80 group-hover:w-13'></div>
												</div>
											</section>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Reserv />
		</div>
	)
}

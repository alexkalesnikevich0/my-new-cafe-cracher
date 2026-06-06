import Link from 'next/link'
import Reserv from '@/app/reserv/page'

const back = [
	{
		route: '/',
	},
]

export default function Feiern() {
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
					<h2 className='uppercase text-4xl text-center bg-gradient-to-t from-white/90 via-white/80 font-bold to-white/90 bg-clip-text text-transparent mb-7 sm:text-3xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl 2xl:mb-9'>
						Im Brauhaus feiern!
					</h2>
					<div className=''>
						<h1 className='uppercase text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent text-xl md:text-2xl lg:text-4xl 2xl:text-5xl'>
							Wir wissen, wie's geht
						</h1>
					</div>
					<div className='mt-15 h-1 bg-orange-300/50 md:mt-20 mt-13 h-2 w-50 2xl:w-80 2xl:h-3'></div>
				</div>
			</div>
			<div
				className='[&_img]:border-blue-950/80 [&_span]:text-red-500/90 [&_span]:duration-400 [&_span]:hover:text-red-700/90 [&_p]:font-stretch-semi-expanded [&_p]:pt-2 [&_p]:font-semibold 
			[&_p]:text-black/70 [&_p]:text-sm sm:[&_img]:w-[100%] [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:font-stretch-semi-condensed [&_h1]:text-blue-900/90 sm:[&_p]:text-base sm:[&_h1]:text-3xl 
			md:[&_img]:w-[70%] md:[&_p]:text-base md:[&_h1]:text-3xl lg:[&_img]:w-[100%] md:[&_img]:mt-8 lg:[&_p]:text-base xl:[&_p]:text-lg xl:[&_h1]:text-4xl xl:[&_p]:mt-4 xl:[&_h1]:mt-14 2xl:[&_p]:text-xl'
			>
				<div className='border-2 border-black/80 rounded-md bg-white/60 mx-auto max-w-[85%] md:max-w-[75%] mt-20 lg:max-w-[85%] xl:max-w-[90%] 2xl:w-[60%]'>
					<div className='flex-col flex lg:flex-row lg:items-start lg:gap-5'>
						<div className='sm:flex sm:justify-center lg:ml-10'>
							<img
								className='w-full rounded-t-sm md:border-4 md:rounded-xl'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
						<div className='p-8'>
							<h1 className='uppercase'>Private Feiern</h1>
							<p className=''>
								Ob Geburtstag, Taufe, Kommunion oder auch ein Wiedersehensfest
								mit den besten Freunden. Es gibt viele Gründe zum Feiern. Und
								wir haben immer den passenden Rahmen für Sie. Feiern Sie doch
								Ihren nächsten Geburtstag im Herzen Kölns in der{' '}
								{back.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<span className=''>Altstadtstube</span>!
									</Link>
								))}
							</p>
						</div>
					</div>
					<div className='flex-col flex lg:flex-row lg:items-start lg:gap-5'>
						<div className='p-8'>
							<h1 className='uppercase text-right'>Hochzeiten</h1>
							<p className=' text-right'>
								Ihr großer Tag soll richtig kölsch und besonders sein? Nach der
								standesamtlichen Trauung im Kölner Rathaus finden Sie im
								Brauhaus die perfekte{' '}
								{back.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<span className=''> Hochzeitsfeier-Location</span>
									</Link>
								))}
								. Für Ihr außergewöhnliches Fest sind wir gerne Gastgeber.
								Planen Sie Ihre Hochzeit doch bei uns in der{' '}
								{back.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<span className=''>Alten Brauerei</span>!
									</Link>
								))}
							</p>
						</div>
						<div className='sm:flex sm:justify-center lg:mr-10'>
							<img
								className='w-full md:border-4 md:rounded-xl'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
					</div>
					<div className='lg:hidden'>
						<div className='flex items-center justify-center mt-15'>
							<div className='w-[80%] mb-15 h-3 rounded-full bg-blue-800/70 md:w-[80%]'></div>
						</div>
						<div className='flex justify-center mb-15 h-15'>
							<div className='duration-800 '>
								{back.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<h3 className='uppercase flex justify-center group/main font-bold duration-700 border-2 border-black/80 text-base rounded-lg cursor-pointer p-2 text-white/90 flex text-center bg-yellow-900/90 hover:bg-yellow-800/90 duration-500 hover:border-black hover:text-white sm:hover:text-lg md:text-lg md:hover:text-xl md:hover:font-extrabold xl:hover:text-xl xl:hover:pl-2 xl:hover:pr-2 2xl:hover'>
											HOME
											<div className='flex items-center justify-center'>
												<div className='duration-500 w-9 group-hover:w-12 flex h-1 bg-black/40 ml-3 rounded-xl group-hover/main:bg-black/70 sm:mt-0 sm:ml-3 sm:group-hover/main:ml-3 sm:w-9 sm:group-hover/main:w-12 md:group-hover/main:w-14 md:group-hover/main:ml-3 md:w-9 xl:w-10 xl:group-hover/main:w-13 2xl:w-10 2xl:group-hover/main:w-14'></div>
											</div>
										</h3>
									</Link>
								))}
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<div className='w-[60%] mb-15 h-3 rounded-full bg-blue-800/70 md:w-[60%]'></div>
						</div>
					</div>

					<div className='flex-col flex lg:flex-row lg:items-start lg:gap-5'>
						<div className='sm:flex sm:justify-center lg:ml-10'>
							<img
								className='w-full md:border-4 md:rounded-xl'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
						<div className='p-8'>
							<h1 className='uppercase'>Firmenevents</h1>
							<p className=''>
								Wie wäre es mit einem Firmenmeeting, Seminar, Messeevent oder
								auch einer Konferenz im besonderen Ambiente? Wir haben die
								passende Location für Sie! Ob großer oder kleiner Rahmen – so
								macht Business richtig Spaß. Wir empfehlen Ihnen für Ihre
								Konferenz die{' '}
								{back.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<span className=''>Alte Brauerei</span>!
									</Link>
								))}
							</p>
						</div>
					</div>
					<div className='flex-col flex lg:flex-row lg:items-start lg:gap-5'>
						<div className='p-8'>
							<h1 className='uppercase text-right'>Weihnachtsfeiern</h1>
							<p className=' text-right'>
								Gemeinsam das Jahr Revue passieren lassen und die
								Weihnachtsfeier in besonderer Atmosphäre erleben. Hier fühlen
								Sie sich wohl und stoßen mit leckerem Sion Kölsch miteinander
								an. Und das mitten im Herzen der Kölns. Wie wäre es mit dem
								gelungenen Jahresabschluss in unserer{' '}
								{back.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<span className=''>Ratsstube</span>!
									</Link>
								))}
							</p>
						</div>
						<div className='sm:flex sm:justify-center lg:mr-10 lg:mb-10'>
							<img
								className='w-full rounded-b-sm md:mb-10 lg:mb-0 md:border-4 md:rounded-xl'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
					</div>
				</div>
			</div>
			<Reserv />
		</div>
	)
}

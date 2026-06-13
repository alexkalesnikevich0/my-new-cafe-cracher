import Reserv from '@/app/reserv/page'
import Link from 'next/link'

const home = [
	{
		route: '/',
	},
]

export default function Hochzeit() {
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
						HEIRATEN IM <br />
						HERZEN VON KÖLN
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
			<div
				className='border-2 border-black/80 rounded-md bg-white/70 mx-auto max-w-[88%] mt-20
			sm:max-w-[88%] 
			md:max-w-[85%] 
			lg:max-w-[75%] 
			xl:max-w-[75%] 
			2xl:w-290'
			>
				<div
					className='p-10 lg:p-15
				[&_h1]:text-xl [&_h1]:text-blue-950 [&_h1]:uppercase [&_h1]:font-extrabold [&_h1]:font-stretch-semi-condensed sm:[&_h1]:text-2xl md:[&_h1]:text-3xl xl:[&_h1]:text-4xl
        [&_p]:text-black/80 [&_p]:font-semibold [&_p]:text-sm [&_p]:font-stretch-expanded md:[&_p]:text-base lg:[&_p]:text-base 2xl:[&_p]:text-lg'
				>
					<div className=''>
						<div className=''>
							<h1 className='mt-3 text-left'>
								Ihre Hochzeit <br className='' />
								im Brauhaus Sion
							</h1>
							<p className='mt-3 text-left'>
								Feiern Sie Ihr Ja-Wort im Brauhaus Sion in einem ganz
								außergewöhnlichen Ambiente. Nur wenige Meter vom Brauhaus
								entfernt, können Sie sich im historischen Rathaus standesamtlich
								trauen lassen. Das Brauhaus Sion bietet Ihnen als
								Hochzeitslocation Emotionen pur. Im Herzen der Domstadt, unweit
								vom Rhein, feiern Sie Ihre unvergessliche Hochzeit.
							</p>
							<p className='mt-3 text-left'>
								Zur standesamtlichen Trauung im Rathausturm – ob in der
								Rentkammer oder im Turmkeller des Historischen Rathauses – passt
								die Feier im traditionellen Brauhaus mit viel Charme. Direkt am
								Dom stoßen Sie mit Ihren Gästen auf das gemeinsame „Ja“ an.
							</p>
						</div>
						<div className=''>
							{' '}
							<h1 className='mt-15 text-right'>
								Die perfekte <br className='' />
								Hochzeitslocation
							</h1>
							<p className='mt-5 text-right'>
								Erleben Sie Ihren Hochzeitstag im historischen Zentrum Kölns.
								Für dieses außergewöhnliche Fest sind wir gerne Ihre Gastgeber.
								Ganz nach Ihren Wünschen und Vorstellungen, denn daran werden
								Sie sich für immer erinnern. Wir sorgen dafür, dass dieser Tag
								unvergesslich wird.
							</p>
							<p className='mt-3 text-right'>
								Planen Sie Ihre Hochzeit bei uns, im Herzen von Köln und direkt
								am Kölner Rathaus – mit allem, was dazu gehört. Denn
								selbstverständlich beraten wir Sie auch ganz persönlich bei der
								Gesamtplanung Ihrer Hochzeit. Ob im kleinen Kreis oder mit
								großer Gesellschaft – unsere Räumlichkeiten bieten immer die
								passende Location für Sie.
							</p>
							<p className='mt-3 text-right'>
								Ob in der{' '}
								{home.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<span className='text-blue-800 hover:text-blue-600 font-extrabold'>
											Alten Brauerei
										</span>
									</Link>
								))}{' '}
								oder in der{' '}
								{home.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<span className='text-blue-800 hover:text-blue-600 font-extrabold'>
											Braustube
										</span>{' '}
									</Link>
								))}
								– lassen Sie uns gemeinsam Ihre Hochzeitsfeier planen! Nur
								wenige Meter vom Kölner Standesamt entfernt.
							</p>
						</div>
					</div>
					<div className='xl:flex xl:gap-10 xl:items-center'>
						<div className='hidden xl:block lg:w-[100%]'>
							<h1 className='mt-15 text-left xl:mt-10'>
								Standesamtliche <br className='' />
								Trauung in KÖln
							</h1>
							<p className='mt-3 text-left'>
								Es ist die erste Adresse, wenn Sie sich trauen. Das Kölner
								Standesamt ist nicht nur bei den Kölnern ein beliebter Ort, sich
								das Ja-Wort zu geben. Wer seinen Wunschtermin vereinbaren
								möchte, der sollte schnell sein! Übrigens:
							</p>
							<p className='mt-3'>
								Die Anmeldung zur Eheschließung kann frühestens sechs Monate vor
								dem Termin erfolgen. Und wenn Sie Ihr Datum fixiert haben, dann
								sollten Sie direkt bei uns darauf anstoßen und direkt die
								Feierlocation in einem abstimmen.
							</p>
						</div>
						<div className='sm:flex sm:justify-center sm:pt-10 sm:pb-0 md:p-10 md:w-[100%] lg:p-5 lg:pl-0 lg:items-center lg:pr-0'>
							<img
								className='w-full border-3 rounded-xl w-[100%] h-[100%] mt-7 border-black xl:h-100 2xl:w-[100%] 2xl:h-120'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
						<div className='xl:hidden block lg:w-[85%] xl:w-[100%]'>
							<h1 className='mt-5 text-left'>
								Standesamtliche <br className='' />
								Trauung in KÖln
							</h1>
							<p className='mt-3 text-left'>
								Es ist die erste Adresse, wenn Sie sich trauen. Das Kölner
								Standesamt ist nicht nur bei den Kölnern ein beliebter Ort, sich
								das Ja-Wort zu geben. Wer seinen Wunschtermin vereinbaren
								möchte, der sollte schnell sein! Übrigens:
							</p>
							<p className='mt-3'>
								Die Anmeldung zur Eheschließung kann frühestens sechs Monate vor
								dem Termin erfolgen. Und wenn Sie Ihr Datum fixiert haben, dann
								sollten Sie direkt bei uns darauf anstoßen und direkt die
								Feierlocation in einem abstimmen.
							</p>
						</div>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='mt-5 mb-10 rounded-full h-1 bg-blue-950/90 h-2 w-[60%] lg:mt-5 lg:mb-5 2xl:h-4'></div>
				</div>
				<div className='sm:flex sm:justify-center sm:p-8 lg:pt-5 lg:pl-20 lg:pr-20 lg:pb-5'>
					<img
						className='w-full sm:border-3 sm:rounded-xl sm:border-black 2xl:w-[85%]'
						src='land.png'
						alt='tailWind'
						width={27}
						height={6400}
					/>
				</div>
				<div className='flex justify-center'>
					<div className='mt-10 mb-10 rounded-full h-1 bg-blue-950/90 h-2 w-[60%] lg:mt-5 lg:mb-15 2xl:h-4'></div>
				</div>
				<div className='sm:flex sm:w-full justify-between xl:pr-12 xl:pl-12 2xl:pr-0 2xl:gap-10'>
					<div className='sm:w-[50%] sm:pl-3'>
						<div
							className='sm:flex sm:justify-center sm:h-65 sm:border-2 sm:border-black sm:rounded-2xl 
						md:border-3 md:rounded-xl 
						2xl:h-120'
						>
							<img
								className='w-full sm:rounded-xl md:rounded-lg'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
						<div className='p-5 mt-10 mb-10 sm:mt-0 sm:mb-0 sm:pt-5 sm:p-0'>
							<div className='p-4 rounded-lg border-3 border-blue-900/80 bg-orange-300/30'>
								<h1 className='uppercase text-yellow-950/90 text-base font-bold font-stretch-semi-expanded 2xl:text-2xl'>
									Liebe ist das einzige, was wächst indem wir es verschwenden
								</h1>
								<p className='text-sm text-black/70 font-extrabold mt-6 font-stretch-expanded 2xl:text-xl'>
									Ricarda Huch (1864 - 1947)
								</p>
							</div>
						</div>
					</div>
					<div className='sm:w-[45%] sm:flex sm:items-center sm:pr-3 2xl:w-[60%] 2xl:pr-10'>
						<div
							className='sm:flex sm:justify-center sm:h-90 sm:border-2 sm:border-black sm:rounded-2xl 
						md:border-3 md:rounded-xl 
						2xl:h-120'
						>
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
					<div className='mt-10 mb-10 rounded-full h-1 bg-blue-950/90 h-2 w-[60%] lg:mt-15 lg:mb-0 2xl:h-4'></div>
				</div>
				<div className='sm:flex sm:justify-center sm:p-8 lg:pt-10 lg:pl-20 lg:pr-20 lg:pb-0 2xl:pb-15'>
					<img
						className='w-full sm:border-3 sm:rounded-xl sm:border-black 2xl:w-[85%]'
						src='land.png'
						alt='tailWind'
						width={27}
						height={6400}
					/>
				</div>
				<div
					className='p-10 2xl:pb-20 2xl:pl-20 2xl:pr-20 2xl:pt-0
					[&_h1]:text-xl [&_h1]:text-blue-950 [&_h1]:uppercase [&_h1]:font-extrabold [&_h1]:font-stretch-semi-condensed sm:[&_h1]:text-2xl md:[&_h1]:text-3xl xl:[&_h1]:text-4xl 2xl:[&_h1]:text-4xl
					[&_p]:text-black/80 [&_p]:font-semibold [&_p]:text-sm [&_p]:font-stretch-expanded md:[&_p]:text-base 2xl:[&_p]:text-lg '
				>
					<div className=''>
						<h1 className='text-right'>
							Regelmäßig die <br className='' />
							Liebe feiern
						</h1>
						<p className='mt-8 text-right'>
							Hochzeit in Zahlen. Ihr Glück können die Brautleute in schöner
							Regelmäßigkeit zelebrieren. Hier die bekanntesten Jubiläen: Nach
							zehn Jahren ist es Zeit, auf die Rosenhochzeit anzustoßen; nach 15
							Jahren steht die Kristallhochzeit ins Haus; sind bereits 25 Jahre
							vorbei, gibt es zur Silberhochzeit bestimmt ein großes Fest –
							ebenso wie nach 40 Jahren bei der Rubinhochzeit und erst recht
							nach 50 Jahren zur Goldenen Hochzeit.
						</p>
						<p className='mt-5 text-right'>
							Und da es nichts schöneres gibt, als das Glück zweier Menschen,
							die sich lieben zu feiern, können wir bei vielen weiteren Jubiläen
							einen Toast aussprechen, wie zum Beispiel bei der Hölzernen
							Hochzeit nach fünf Jahren, der Porzellanhochzeit nach 20 oder der
							Perlenhochzeit nach 30 Jahren. Immer dabei: ein frisch gezapftes
							Sion Kölsch!
						</p>
					</div>
					<div className='lg:flex lg:w-full md:gap-1 lg:items-center'>
						<div className='lg:block lg:w-[50%] xl:w-[50%]'>
							<h1 className='mt-15 lg:mt-15'>
								Übernachtung nach <br className='' />
								der Hochzeit
							</h1>
							<p className='mt-5'>
								Auch das ist möglich im Brauhaus Sion. Nach der standesamtlichen
								Trauung und der anschließenden Hochzeitsfeier verbringen Sie
								Ihre Hochzeitsnacht direkt im Hotel Sion. Angenehmer geht’s kaum
								und Sie müssen sich keine Sorgen um Transfers oder Heimreise
								machen. So geben Sie Ihrer Feier den perfekten Abschluss.
							</p>
							<div className='h-10 mt-10 flex justify-center items-center'>
								{home.map(link => (
									<Link href={`${link.route}`} key={link.route} className=''>
										<div
											className='uppercase text-center flex justify-center items-cennter text-white w-43 h-10 group duration-600 pl-3 pr-3 border-black border-1 bg-yellow-900/90 rounded-sm 
								hover:w-50 hover:h-11 hover:bg-yellow-800/90 hover:border-2 
								md:hover:text-2xl md:hover:h-12 md:hover:w-60 md:w-52 md:h-12 md:group-hover:pl-0'
										>
											<h3
												className='duration-800 font-bold text-white text-sm flex items-center
											group-hover:ml-0 group-hover:font-extrabold group-hover:text-base 
											md:text-lg md:group-hover:text-xl 
											2xl:group-hover:font-bold'
											>
												hotel sion
												<div className='flex items-center justify-center'>
													<div
														className='duration-600 w-10 flex h-1 bg-black/50 ml-3 rounded-xl 
													group-hover:bg-black/80 group-hover:w-13
													md:group-hover:ml-5'
													></div>
												</div>
											</h3>
										</div>
									</Link>
								))}
							</div>
						</div>
						<div
							className='mt-8 sm:justify-center sm:flex sm:justify-center sm:pt-10 sm:pb-0 
							md:mt-5
						lg:flex lg:p-5 lg:w-[50%] lg:items-center lg:pr-0'
						>
							<img
								className='w-full border-3 rounded-xl border-black/80 
								lg:w-100 lg:h-80 
								xl:w-100 xl:h-100 
								2xl:w-[100%] 2xl:h-120'
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

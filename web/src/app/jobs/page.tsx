import Link from 'next/link'
export default function Jobs() {
	const home = [
		{
			route: '/',
		},
	]
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
						Jobs
					</h2>
					<div className=''>
						<h1
							className='uppercase text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent text-xl 
						md:text-2xl 
						lg:text-4xl 
						2xl:text-5xl'
						>
							Vom Köbes bis zum Koch – wir suchen immer
							<br />
							wieder motivierte Mitarbeiter für
							<br />
							unser Brauhaus
						</h1>
					</div>
					<div className='mt-15 h-1 bg-orange-300/50 md:mt-20 mt-13 h-2 w-50 2xl:w-80 2xl:h-3'></div>
				</div>
			</div>
			<div
				className='border-2 border-black/80 rounded-md bg-white/60 mx-auto mt-20 max-w-[88%] sm:max-w-[88%] md:max-w-[85%] lg:max-w-[85%] xl:max-w-[90%] 2xl:w-[60%]
        [&_h1]:text-xl [&_h1]:text-blue-950 [&_h1]:uppercase [&_h1]:font-extrabold [&_h1]:font-stretch-semi-condensed sm:[&_h1]:text-3xl md:[&_h1]:text-4xl lg:[&_h1]:text-3xl xl:[&_h1]:text-5xl
        [&_p]:text-black/80 [&_p]:font-semibold [&_p]:text-sm [&_p]:font-stretch-expanded md:[&_p]:text-base lg:[&_p]:text-sm xl:[&_p]:text-lg '
			>
				<div className='p-15 lg:w-[85%] xl:w-[90%]'>
					<h1 className='mt-5 text-left xl:mt-20'>
						Ein Teil vom Brauhaus Sion werden
					</h1>
					<p className='mt-5 text-left'>
						Sie haben Interesse, in einem traditionsreichen Brauhaus und in
						einem lebensfrohen und typisch kölschen Team zu arbeiten? Wir bieten
						Ihnen verschiedene Stellenangebote, ob hinter der Theke, als Köbes
						oder in der Küche, und freuen uns auf Ihre aussagekräftige
						Bewerbung!
					</p>
				</div>
				<div
					className='mt-15 w-full bg-gray-400/40 items-center justify-center p-10
				md:flex-col 
				lg:flex-row lg:flex lg:gap-10 
				xl:gap-0 xl:p-20'
				>
					<div
						className='flex-col text-center justify-center 
					lg:text-left lg:justify-start lg:items-start lg:w-[50%] 
					xl:w-[65%]'
					>
						<h1 className=''>
							Köbes in Vollzeit <br />
							oder Teilzeit
						</h1>
						<p className='mt-7'>
							Zur Verstärkung unseres Teams suchen wir ab sofort einen
						</p>
						<p className='mt-3'>
							(auch Minijobber oder Studenten können sich gerne bewerben)
						</p>
						<div
							className='pl-10 pr-10 mt-10 text-black/60 font-stretch-condensed font-semibold
						md:pl-20 md:pr-20 
						lg:pl-0 lg:pr-0 lg:w-[85%] 
						[&_h3]:mt-5'
						>
							<h3 className=''>
								Das Brauhaus Sion, in der Kölner Altstadt zwischen Dom und Alter
								Markt gelegen, ist ein traditionsreiches Kölner Brauhaus und
								verfügt über rund 650 Sitzplätze in verschiedenen
								Räumlichkeiten. Es ist ein Haus mit einer langen
								Familientradition.
							</h3>
							<h3 className=''>
								Das frische Sion Kölsch und das abwechslungsreiche und regionale
								Speisenangebot haben das Brauhaus Sion zu einem der
								Renommiertesten der Domstadt gemacht.
							</h3>
							<h3 className=''>
								Du bringst idealerweise Erfahrung in der Gastronomie oder in
								einem anderen Dienstleistungsbereich mit, bist zuverlässig und
								belastbar und hast Spaß daran, unseren Kölner und
								internationalen Gästen ein guter Gastgeber zu sein.
							</h3>
						</div>
						<div className='mt-15 block text-left pl-10 lg:pl-0 lg:hidden xl:block'>
							<h2 className='text-blue-950 uppercase font-extrabold font-stretch-semi-condensed lg:text-3xl'>
								Deine Hauptaufgaben sind:
							</h2>
							<ul className='text-black/60 font-semibold [&_li]:mt-3 font-stretch-semi-expanded'>
								<li className='list-disc'>
									Professionelle Beratung und Betreuung der Gäste
								</li>
								<li className='list-disc'>
									Verantwortung über deine eigene Station
								</li>
								<li className='list-disc'>Bedienung der Kassensoftware</li>
								<li className='list-disc'>
									Tägliche Abrechnung mit dem Restaurantleiter
								</li>
							</ul>
						</div>
					</div>
					<div className='flex-col justify-center pl-10 lg:pl-0 items-center mt-15 lg:mt-0 lg:w-[50%] xl:w-[35%]'>
						<p>Brauhaus Sion Untertaschenmacher</p>
						<p className=''>KG Unter</p>
						<p className=''>Taschenmacher GmbH&Co 5-7</p>
						<p className=''>50667 Köln</p>
						<p className='mt-5 md:mt-10'>Tel.: 0221/2 57 85 40</p>
						<p className=''>Fax: 0221/2 58 20 81</p>
						<p className='mt-5 md:mt-10 w-[90%] lg:w-[100%]'>
							Hast du Lust, im Herzen der Kölner Altstadt zu arbeiten und Teil
							unseres tollen Teams zu werden? Dann freuen wir uns auf deine
							Bewerbung an:{' '}
							{home.map(link => (
								<Link href={link.route} key={link.route}>
									<span className='text-red-700 hover:text-blue-700 duration-200'>
										Sabrina.silva@brauhaus-sion.de
									</span>
								</Link>
							))}
						</p>
						<div className='mt-15 hidden lg:block xl:hidden'>
							<h2 className='text-blue-950 uppercase font-extrabold font-stretch-semi-condensed lg:text-2xl xl:text-3xl'>
								Deine Hauptaufgaben sind:
							</h2>
							<ul className='text-black/60 font-semibold [&_li]:mt-3 font-stretch-semi-expanded'>
								<li className='list-disc'>
									Professionelle Beratung und Betreuung der Gäste
								</li>
								<li className='list-disc'>
									Verantwortung über deine eigene Station
								</li>
								<li className='list-disc'>Bedienung der Kassensoftware</li>
								<li className='list-disc'>
									Tägliche Abrechnung mit dem Restaurantleiter
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

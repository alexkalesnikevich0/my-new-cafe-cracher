import Link from 'next/link'

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
											{raumlichkeiten.map(link => (
												<div key={link.route} className=''>
													<Link href={`${link.route}`} className=''>
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
											))}
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
											{raumlichkeiten.map(link => (
												<Link href={`${link.route}`} key={link.route}>
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
											))}
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
											{raumlichkeiten.map(link => (
												<div key={link.route} className=''>
													<Link href={`${link.route}`} className=''>
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
											))}
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
											{raumlichkeiten.map(link => (
												<Link href={`${link.route}`} key={link.route}>
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
											))}
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
			</div>
			<div className='flex justify-center mt-25 '>
				<div className='h-2 w-80 bg-yellow-950/90 rounded-full 2xl:h-4'></div>
			</div>
			<div className='group md:p-20 mb-8'>
				<div
					className='text-3xl mt-10 duration-900 text-yellow-950/80 font-extrabold text-center 
				md:text-7xl 
				2xl:text-8xl'
				>
					RESERVIERUNG
				</div>
				<div
					className='text-2xl mt-2 duration-900 text-yellow-900/80 font-extrabold text-center font-serif 
				md:mt-10 md:text-5xl 
				2xl:text-6xl 2xl:mt-18'
				>
					TISCH BUCHENÖLSCH GENIESSEN.
				</div>
			</div>
			<div className='w-screen flex justify-center'>
				<div className='w-60 h-2 bg-yellow-950/90 rounded-full md:w-160 2xl:h-4'></div>
			</div>
			<div className='flex justify-center items-center '>
				<div className='group pt-20 pb-15'>
					<div
						className='duration-600 w-94 mt-5 border-2 rounded-xl bg-orange-100/80 border-slate-700 
					md:group-hover:border-3 md:w-165 md:h-220 md:group-hover:h-225 
					lg:group-hover:h-240 lg:h-230 lg:w-220'
					>
						<div>
							<div
								className='ml-17 text-xl mt-5 font-black text-slate-900 
							md:flex md:text-center md:mt-14 md:text-2xl md:ml-0 md:justify-center 
							lg:text-3xl lg:mt-25'
							>
								TABLE RESERVIERUNG
							</div>
							<div className='flex gap-1 md:h-20'>
								<div
									className='ml-7 mr-5 text-xl rounded-full bg-blue-900 h-9 w-8 mt-5 md:mt-2 lg:mt-6 justify-center items-center flex text-white/90 font-black font-mono 
								md:mr-15 md:ml-18 md:text-2xl 
								lg:mr-15 lg:ml-29'
								>
									1
								</div>
								<div className='w-50 h-2 bg-blue-950 mt-9 rounded-full md:mt-5 md:w-80 lg:mt-9 lg:w-115'></div>
								<div
									className='ml-5 text-xl rounded-full bg-blue-900 h-9 w-8 mt-5 justify-center flex items-center text-white/90 font-black font-mono 
								md:mt-2 md:text-2xl md:ml-16 
								lg:mt-6'
								>
									2
								</div>
							</div>
							<div className='flex justify-center items-center'>
								<div
									className='w-70 text-center mt-12 font-extrabold border-gray-900 border-3 duration-700 rounded-xl p-3 
								md:mt-7 md:w-110 md:ml-0 
								lg:mt-12 lg:w-140 
								2xl:font-bold'
								>
									Liebe Gäste, hier können Sie Ihre Tischreservierung bis 10
									Personen vornehmen. Bitte beachten Sie die derzeit geltenden
									Vorschriften. Wir haben durchgängig für Sie geöffnet.
								</div>
							</div>
							<div
								className='mt-14 flex-col justify-center ml-25 
						md:gap-10 md:ml-0 md:flex md:flex-row md:gap-14 
						[&_input]:bg-gray-800/10 [&_input]:border-blue-950 [&_input]:pl-2 [&_input]:pr-2 [&_input]:border-2 [&_input]:h-12 [&_input]:w-40 [&_input]:rounded sm:[&_input]:ml-0 md:[&_input]:w-35 lg:[&_input]:w-40
						[&_section]:flex-col [&_section]:flex [&_section]:font-extrabold [&_section]:text-xl 2xl:[&_section]:font-bold'
							>
								<section className=''>
									Person:
									<input type='number' className='md:ml-2'></input>
								</section>
								<section className='mt-7 md:mt-0'>
									Date:
									<input type='date' className='md:ml-10'></input>
								</section>
								<section className='mt-7 md:mt-0'>
									Time:
									<input type='time' className='md:ml-12'></input>
								</section>
							</div>
							<div className='text-md font-medium text-red-700/90 mt-3 text-right mr-10 lg:text-xl lg:ml-142'>
								*Mandatory fields
							</div>
							<div className='ml-8 mt-11 flex md:gap-38 md:ml-26 lg:mt-10 lg:ml-28 h-20'>
								<div className='group/main items-center justify-center flex'>
									{home.map(link => (
										<Link href={`${link.route}`} key={link.route}>
											<div
												className='flex items-center justify-center bg-gray-600/10 border-red-600/90 border-2 w-30 h-12 rounded duration-300 
											group-hover/main:bg-gray-600/20 group-hover/main:border-red-600 group-hover/main:rounded-sm group-hover/main:border-3 
											md:h-12 md:w-35'
											>
												<div
													className='items-center text-red-600/90 font-semibold duration-500 
												group-hover/main:text-red-700 group-hover/main:font-bold 
												md:group-hover/main:mt-0 md:group-hover/main:ml-0 
												2xl:group-hover:font-semibold'
												>
													Zurücksetyen
												</div>
											</div>
										</Link>
									))}
								</div>
								<div className='flex justify-center items-center text-center'>
									{home.map(link => (
										<Link href={`${link.route}`} key={link.route}>
											<div
												className='w-30 h-12 ml-15 border-1 border-black text-xl items-center justify-center bg-red-700 rounded-sm duration-400 hover:text-2xl 
											md:ml-0 md:w-40 md:hover:border-2 
											lg:w-55 lg:h-12 lg:hover:h-13 lg:hover:ml-28 lg:hover:w-62 lg:ml-32'
											>
												<div className='text-white font-extrabold mb-3 mt-2 md:text-center'>
													<div className=''>WEITER</div>
												</div>
											</div>
										</Link>
									))}
								</div>
							</div>
							<div className='md:text-center'>
								<div className='flex justify-center'>
									<div
										className='text-xl w-80 mt-14 text-center text-slate-900 font-serif font-black 
									md:text-2xl md:w-100 md:mt-15 
									lg:text-3xl lg:w-220'
									>
										RESERVIERUNGS-ANFRAGE AB 10 PERSONEN
									</div>
								</div>
								<div className='flex justify-center'>
									<div
										className='text-md text-bold mt-2 text-slate-900/90 font-serif 
									md:text-xl md:mt-5 md:font-medium 
									lg:text-2xl'
									>
										Wir freuen uns auf Ihre Anfrage
									</div>
								</div>
								<div className='flex justify-center items-center'>
									{home.map(link => (
										<Link href={link.route} key={link.route}>
											<div
												className='mb-15 w-49 h-12 border-1 text-xl bg-red-700 mt-7 rounded-sm duration-400 border-black 
								hover:border-2 hover:mt-7 
								md:hover:text-2xl md:w-55 md:hover:w-65 md:mb-0 
								lg:w-70 lg:h-12 lg:hover:h-13 lg:hover:w-74'
											>
												<div className='text-center text-white font-extrabold mt-2 mb-3'>
													<div className=''>ONLINE ANFRAGE</div>
												</div>
											</div>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

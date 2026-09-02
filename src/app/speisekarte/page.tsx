'use client'

import Reserv from '@/app/reserv/page'
import Link from 'next/link'
import Image from 'next/image'

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '@/app/booking/animations/ZoomOutImage'

import ScrollToHash from '@/app/booking/animations/ScrollToHash'

/**
 * ИЗМЕНЕНИЯ PR4
 * обертка ScrollToHash в Suspense
 * ПРИЧИНА 
 * ошибка сборки "useSearchParams() should be wrapped in a suspense boundary".
 * РЕШЕНИЕ
 * компонент ScrollToHash, использующий useSearchParams(), обернут в <Suspense>
 * чтобы корректно обрабатываться на сервере во время статической генерации
 */
import { Suspense } from 'react'

import GoogleMap from '@/app/booking/components/GoogleMap'

const home = [
	{
		route: '/',
	},
]

export default function Speisekarte() {
	return (
		<div className='bg-orange-300/80'>
			<Suspense>
				<ScrollToHash />
			</Suspense>
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
							<h2
								className='uppercase text-3xl text-center bg-gradient-to-t from-white/90 via-white/90 font-bold to-white/90 bg-clip-text text-transparent mb-7 
					sm:text-3xl 
					md:text-5xl 
					lg:text-5xl 
					xl:text-6xl 
					2xl:text-7xl 2xl:mb-9'
							>
								Frisch aus der <br />
								Brauhaus-Küche
							</h2>
						</FadeInFromTop>
						<FadeInFromBottom delay={1600} threshold={0.3}>
							<div className=''>
								<h1
									className='uppercase text-base text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent
						md:text-2xl 
						lg:text-4xl 
						2xl:text-5xl'
								>
									die vielfalt unserer speisekarte <br />
									trifft jeden geschmack
								</h1>
							</div>
							<div className='mt-15 bg-orange-300/50 md:mt-20 mx-auto h-2 w-50 2xl:w-80 2xl:h-3'></div>
						</FadeInFromBottom>
					</div>
				</div>
			</ZoomOutImage>
			<div
				className='border-2 border-black/80 mt-20 rounded-md bg-white/80 mx-auto max-w-[85%] 2xl:w-[60%] xl:max-w-[90%] md:max-w-[75%] lg:max-w-[85%] 
			  [&_h1]:text-2xl [&_h1]:font-stretch-ultra-condensed [&_h1]:font-bold [&_h1]:uppercase [&_h1]:text-blue-950 lg:[&_h1]:text-3xl  xl:[&_h1]:text-3xl
				[&_h2]:text-orange-800 [&_h2]:font-stretch-semi-condensed [&_h2]:mb-1 lg:[&_h2]:text-xl xl:[&_h2]:text-lg xl:[&_h2]:font-semibold
				[&_h3]:text-blue-950 [&_h3]:uppercase [&_h3]:font-stretch-ultra-condensed [&_h3]:font-bold [&_h3]:text-3xl sm:[&_h3]:text-3xl md:[&_h3]:text-3xl lg:[&_h3]:text-4xl xl:[&_h3]:text-5xl'
			>
				<div className='flex flex-col items-center'>
					<div className='flex-col sm:flex sm:flex-row w-full sm:justify-between pt-2 items-center'>
						<div className='[&_h2]:hover:text-orange-700/60 text-center flex flex-col sm:w-1/2 justify-center items-center'>
							<FadeInFromBottom delay={100} threshold={0.3}>
								<h1 className='mt-10 sm:mt-14'>Speisen</h1>
								{home.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<h2 className='mt-3'>Hauseigene Spezialität</h2>
										<h2 className=''>Tipp der Woche</h2>
										<h2 className=''>Vegetarisch</h2>
										<h2 className=''>Flammkuchen</h2>
										<h2 className=''>Leckeres Sion Kölsch</h2>
										<h2 className=''>Brauhausspezialitäten</h2>
										<h2 className=''>Jeden Donnerstag</h2>
									</Link>
								))}
							</FadeInFromBottom>
						</div>
						<div className='[&_h2]:hover:text-orange-700/60 text-center flex flex-col sm:w-1/2 justify-center items-center'>
							<FadeInFromBottom delay={100} threshold={0.3}>
								<h1 className='mt-13 sm:mt-14'>Getränke</h1>
								{home.map(link => (
									<Link href={`${link.route}`} key={link.route}>
										<h2 className='mt-3'>Heißgetränke</h2>
										<h2 className=''>Wein</h2>
										<h2 className=''>Sion Kölsch</h2>
										<h2 className=''>Unsere Schnitzelklassiker</h2>
										<h2 className=''>Frische der Saison</h2>
										<h2 className=''>alkoholfreie Getränke</h2>
										<h2 className=''>Spirituosen</h2>
									</Link>
								))}
							</FadeInFromBottom>
						</div>
					</div>
					<FadeInFromTop delay={100} threshold={0.3}>
						<h3 className='mt-15 mb-10 text-center'>Hauseigene Spezialität</h3>
					</FadeInFromTop>
					<div
						className='p-10 w-full bg-yellow-900/80 flex flex-col items-center justify-center
						[&_h4]:text-center [&_h4]:text-black/80 [&_h4]:font-bold [&_h4]:text-base lg:[&_h4]:text-lg xl:[&_h4]:text-xl
						[&_h5]:text-center [&_h5]:text-xl lg:[&_h5]:text-2xl xl:[&_h5]:text-3xl
				  	[&_h6]:font-bold [&_h6]:text-black/60 [&_h6]:text-center [&_h6]:text-base lg:[&_h6]:text-lg xl:[&_h6]:text-xl'
					>
						<h5 className='text-white font-bold mb-3'>
							Sion Sud­pfannen­putzer
						</h5>
						<h5 className='text-white text-center mb-8 xl:mb-8 font-bold'>
							1/4 Meter frische, deftige Bratwurst
						</h5>
						<h4 className=''>mit Wirsing in Rahm und Bratkartoffeln</h4>
						<h6 className='mb-4 xl:mb-5'>18,40 €</h6>
						<h4 className=''>mit traditionellem Kartoffelsalat</h4>
						<h6 className=''>16,70 €</h6>
					</div>
					<FadeInFromTop delay={100} threshold={0.2}>
						<h3 className='mt-12 mb-2 text-center'>Tipp der Woche</h3>
					</FadeInFromTop>
				</div>
				<div
					className='p-5
				  [&_h1]:bg-gray-300
          [&_h4]:text-blue-950 [&_h4]:mb-1 [&_h4]:mt-7 [&_h4]:font-semibold [&_h4]:font-stretch-condensed md:[&_h4]:text-xl lg:[&_h4]:text-2xl xl:[&_h4]:text-2xl
				  [&_h5]:font-medium [&_h5]:text-black/90 [&_h5]:mb-2 md:[&_h5]:text-base [&_h5]:font-stretch-semi-condensed lg:[&_h5]:text-lg xl:[&_h5]:text-lg
				  [&_h6]:font-black [&_h6]:text-blue-950  md:[&_h6]:text-lg lg:[&_h6]:text-xl xl:[&_h6]:text-xl'
				>
					<FadeInFromBottom delay={0} threshold={0.1}>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Rheinische Kartoffelsuppe</h4>
								<h5 className=''>mit Speck, serviert mit Röggelchen 0,35l</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								7,30 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Rheinische Kartoffelsuppe</h4>
								<h5 className=''>
									mit Speck, serviert mit Röggelchen, in der Suppentasse 0,2l
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								5,20 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Herzhafte Gulaschsuppe</h4>
								<h5 className=''>
									mit Paprika, Kartoffeln und kleines Röggelchen 0,35l
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								9,50 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Herzhafte Gulaschsuppe</h4>
								<h5 className=''>in der Suppentasse 0,2l</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								6,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Spargelcremsuppe</h4>
								<h5 className=''>mit Röggelchen - Bowl 0,35l</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								7,30 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Portion Stürzelsberger Spargel</h4>
								<h5 className=''>
									mit Sauce Hollandaise und Butter Kartoffeln
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								20,90 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Portion Stürzelsberger Spargel</h4>
								<h5 className=''>
									mit Sauce Hollandaise, gekochtem Schinken und
									Butter-Kartoffeln
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								25,90 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Portion Stürzelsberger Spargel</h4>
								<h5 className=''>
									mit Sauce Hollandaise, zwei Wiener Schnitzel &
									Butter-Kartoffeln
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								26,90 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Portion Stürzelsberger Spargel</h4>
								<h5 className=''>
									mit Sauce Hollandaise, Kalbsschnitzel und Kroketten
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								32,50 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Portion Stürzelsberger Spargel</h4>
								<h5 className=''>
									mit Sauce Hollandaise, einem Rumpsteak (250g) und Kroketten
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								36,50 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Flammkuchen -vegan-</h4>
								<h5 className=''>mit 7 Gemüsesorten</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								17,40 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Brauhaus-Saftgulasch</h4>
								<h5 className=''>vom Rind mit Eierspätzle und Salat</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								22,30 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Wiener Kalbsschnitzel mit Preiselbeeren</h4>
								<h5 className=''>
									wahlweise mit Pommes Frites oder Bratkartoffeln
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								23,30 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
					</FadeInFromBottom>
					<div className='flex flex-col items-center justify-center'>
						<FadeInFromTop delay={100} threshold={0.2}>
							<h3 className='mb-10 mt-15 xl:mt-25'>Vegetarisch</h3>
						</FadeInFromTop>
					</div>
					<FadeInFromBottom delay={0} threshold={0.1}>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Flammkuchen</h4>
								<h5 className=''>
									mit Crème fraîche, Paprika, Mais und Weichkäse
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								15,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col mb-6 justify-start items-center'>
								<h4 className=''>Kleiner Salat</h4>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								6,40 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Gebackener Ziegenkäse auf Blattsalat</h4>
								<h5 className=''>mit Thymianhonig und gerösteten Walnüssen</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								17,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div
							className='sm:flex sm:justify-center sm:pt-10 sm:pb-0 md:p-10 lg:p-5 md:w-[100%] lg:items-center lg:pr-0'
							id='flammkuchen'
						>
							<Image
								className='w-full border-3 rounded-xl w-[100%] h-[100%] mt-7 border-black lg:w-170 lg:h-100 lg:w-190 lg:h-110'
								src='/land.png'
								alt='tailWind'
								unoptimized
								width={270}
								height={640}
							/>
						</div>
					</FadeInFromBottom>
					<div className='flex flex-col items-center justify-center'>
						<FadeInFromTop delay={100} threshold={0.2}>
							<h3 className='mb-10 mt-15'>FLAMMKUCHEN – FRISCH AUS DEM OFEN</h3>
						</FadeInFromTop>
					</div>
					<FadeInFromBottom delay={100} threshold={0.1}>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Flammkuchen – vegetarisch</h4>
								<h5 className=''>
									mit Crème fraîche, Paprika, Mais und Weichkäse
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								15,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Flammkuchen Elsässer Art</h4>
								<h5 className=''>mit Crème fraîche, Speck und Zwiebel</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								6,40 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Brauhaus Flammkuchen</h4>
								<h5 className=''>
									mit Gerstenmalz gebacken, Crème fraîche Schwarzwälder
									Schinken, Lauch und Zwiebeln
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								16,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Flammkuchen Mediteran</h4>
								<h5 className=''>Crème fraîche, Lachsstreifen und Lauch</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								16,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
					</FadeInFromBottom>
					<FadeInFromTop delay={100} threshold={0.2}>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='mb-10 mt-15 xl:mt-25'>
								Leckeres zum frischen Sion Kölsch
							</h3>
						</div>
					</FadeInFromTop>
					<FadeInFromBottom delay={100} threshold={0.1}>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Happen Mett</h4>
								<h5 className=''>mit Zwiebeln auf zwei halben Röggelchen</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								7,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Happen Tatar</h4>
								<h5 className=''>mit Zwiebeln auf zwei halben Röggelchen</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								8,60 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Halve Hahn</h4>
								<h5 className=''>
									mittelalter Holländer mit Zwiebeln, Butter und Röggelchen
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								7,90 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Westerwälder Bauernsülze</h4>
								<h5 className=''>
									mit Gewürzgurke, Bratkartoffeln und Remoulade
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								14,30 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='sm:flex sm:justify-center sm:pt-10 sm:pb-0 md:p-10 lg:p-5 md:w-[100%] lg:items-center lg:pr-0'>
							<Image
								className='w-full border-3 rounded-xl w-[100%] h-[100%] mt-7 border-black lg:w-170 lg:h-100 lg:w-190 lg:h-110'
								src='/land.png'
								alt='tailWind'
								unoptimized
								width={270}
								height={640}
							/>
						</div>
					</FadeInFromBottom>
					<FadeInFromTop delay={100} threshold={0.2}>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='mb-10 mt-15 xl:mt-10'>Brauhausspezialitäten</h3>
						</div>
					</FadeInFromTop>
					<FadeInFromBottom delay={100} threshold={0.1}>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Himmel un Äd</h4>
								<h5 className=''>
									gebratene Blutwurst mit Schmorzwiebeln auf Kartoffelpüree,
									dazu Apfelkompott
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								15,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Roastbeef</h4>
								<h5 className=''>
									Roastbeef, kalt, rosa gebraten, mit Bratkartoffeln und
									Remoulade
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								22,40 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>„Scharfe Reni“ Currywurst</h4>
								<h5 className=''>
									mit einer pikanten Sauce, Pommes frites und Mayonnaise
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								13,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Bierkutscher Kotelett (270 g)</h4>
								<h5 className=''>
									mit Schmorzwiebeln, Spiegelei und Bratkartoffeln
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								19,40 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Ofenfrische Schweinehaxe (ca. 900 g)</h4>
								<h5 className=''>
									mit Bratkartoffeln und Krautsalat (Erhältlich von 12:00 bis
									14:00 Uhr und von 18:00 bis 21:00 Uhr.)
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								23,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Ofenfrische Schweinehaxe (ca. 900 g)</h4>
								<h5 className=''>
									mit Röggelchen und Krautsalat (Erhältlich von 12:00 bis 14:00
									Uhr und von 18:00 bis 21:00 Uhr.)
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								22,40 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Sion Sudpfannenputzer</h4>
								<h5 className=''>
									1/4 Meter frische, deftige Bratwurst, mit Wirsing in Rahm und
									Bratkartoffeln
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								18,40 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Sion Sudpfannenputzer</h4>
								<h5 className=''>
									1/4 Meter frische, deftige Bratwurst, mit traditionellem
									Kartoffelsalat
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								16,70 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Rheinischer Sauerbraten</h4>
								<h5 className=''>
									mit einer Mandel-Sauce, Kartoffelklößen und Apfelkompott
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								24,30 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Kölner Dombockwurst „Prinz Frank“ (220 g)</h4>
								<h5 className=''>mit traditionellem Kartoffelsalat</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								13,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
					</FadeInFromBottom>

					<div className='flex flex-col items-center justify-center'>
						<FadeInFromTop delay={100} threshold={0.2}>
							<h3 className='mt-15 xl:mt-25'>Unsere Schnitzelklassiker</h3>
						</FadeInFromTop>
						<FadeInFromBottom delay={100} threshold={0.3}>
							<h4 className='mb-10'>
								Alle Schnitzel servieren wir mit einem gemischten Salat
							</h4>
						</FadeInFromBottom>
					</div>
					<FadeInFromBottom delay={100} threshold={0.1}>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Schnitzel „Wiener Art“</h4>
								<h5 className=''>mit Pommes frites</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								17,80 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Schnitzel</h4>
								<h5 className=''>mit Champignonsauce und Bratkartoffeln</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								20,40 €
							</h6>
						</div>
						<h1 className='rounded-full h-1'></h1>
						<div className='flex w-full justify-between px-5'>
							<div className='flex-col justify-start items-center'>
								<h4 className=''>Schnitzel</h4>
								<h5 className=''>
									mit einer pikanten Sauce und Bratkartoffeln
								</h5>
							</div>
							<h6 className='flex-shrink-0 flex ml-auto items-center'>
								20,40 €
							</h6>
						</div>
						<h1 className='rounded-full h-1 mb-10'></h1>
					</FadeInFromBottom>
				</div>
			</div>
			<GoogleMap />
			<Reserv />
		</div>
	)
}

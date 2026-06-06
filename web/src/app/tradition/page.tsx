import Reserv from '@/app/reserv/page'

export default function Tradition() {
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
					<h2 className='uppercase text-4xl text-center bg-gradient-to-t from-white/80 via-white/80 font-bold to-white/90 bg-clip-text text-transparent mb-7 sm:text-3xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl 2xl:mb-9'>
						Brautradition seit 1318
					</h2>
					<div className=''>
						<h1 className='uppercase text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent text-xl md:text-2xl lg:text-4xl 2xl:text-5xl'>
							Der Qualität und der eigenen <br />
							Geschichte verpflichtet
						</h1>
					</div>
					<div className='mt-15 h-1 bg-orange-300/50 md:mt-20 mt-13 h-2 w-50 2xl:w-80 2xl:h-3'></div>
				</div>
			</div>
			<div
				className='border-2 border-black/80 mt-20 rounded-md bg-white/80 mx-auto max-w-[85%] md:max-w-[75%] lg:max-w-[85%] xl:max-w-[90%] 2xl:w-[60%] 
				[&_h1]:text-2xl [&_h1]:font-stretch-ultra-condensed [&_h1]:font-bold [&_h1]:uppercase [&_h1]:text-blue-950 [&_h2]:text-black/70 [&_h2]:font-stretch-condensed [&_h2]:mb-1 
				[&_svg]:h-10 [&_svg]:w-10 [&_svg]:mt-7 [&_svg]:text-orange-950 [&_h2]:text-sm [&_h2]:p-3
        sm:[&_h1]:text-xl sm:[&_h2]:text-base
        lg:[&_h2]:text-lg
				lg:[&_h1]:text-3xl
			  xl:[&_h1]:text-4xl xl:[&_svg]:h-15 xl:[&_svg]:w-15 xl:[&_h2]:text-xl
        '
			>
				<div className='flex-col sm:flex sm:flex-row w-full sm:justify-between gap-3 lg:gap-9 p-5 items-center'>
					<div className='flex flex-col sm:w-1/2 justify-center items-center'>
						<div className='sm:flex sm:justify-center sm:pt-2 lg:p-5 md:w-[100%] lg:items-center lg:pr-0'>
							<img
								className='w-full border-3 rounded-xl h-70 lg:h-[100%] border-black xl:mt-3 xl:ml-6'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
					</div>
					<div className='flex flex-col sm:w-1/2 justify-start items-center'>
						<div className='gap-5 flex flex-row'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className=''
							>
								<path d='M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z' />
								<path
									fillRule='evenodd'
									d='M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z'
									clipRule='evenodd'
								/>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className=''
							>
								<path d='M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z' />
								<path
									fillRule='evenodd'
									d='M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z'
									clipRule='evenodd'
								/>
								<path d='M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z' />
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className=''
							>
								<path
									fillRule='evenodd'
									d='M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
						<h1 className='text-center md:text-left mt-5 xl:mt-10 md:ml-4'>
							Hans Sion – der "Vater des Kölsch"
						</h1>
						<h2 className='text-center md:text-left mb-20 xl:pt-2 xl:pr-15 xl:pl-15'>
							1912 geht das Haus „Unter Taschenmacher zu Köln“ in den Besitz von
							Jean Sion über. Er macht das Brauhaus zu einem beliebten, vor
							allem aber klassenlosen Treffpunkt. Handwerker, Ratsherren,
							Arbeiter oder Beamte – sie alle kommen „Em Sion“ auf ein Kölsch
							zusammen.
						</h2>
					</div>
				</div>
				<div className='flex-col lg:flex lg:flex-row w-full lg:justify-between lg:gap-3 xl:gap-9 xl:p-5 items-center'>
					<div className='flex flex-col lg:w-1/2 justify-center items-center text-right'>
						<div className='md:block lg:hidden justify-center w-full items-center mt-10 pl-10 pr-10 md:pl-20 md:pr-20'>
							<div className=''>
								<img
									className='w-full border-3 rounded-xl w-[60%] h-[60%] border-black xl:mt-3 xl:ml-6'
									src='land.png'
									alt='tailWind'
									width={27}
									height={6400}
								/>
							</div>
						</div>
						<div className='text-center lg:text-right p-5 sm:p-10 lg:pl-6 lg:p-0'>
							<h2 className=''>
								ohn Hans, studierter Jurist und Braumeister, übernimmt den
								Familienbetrieb in schwierigen Zeiten. Im Mai 1942 wird das
								geschichtsträchtige Brauhaus in der „Nacht der 1000 Bomben“ auf
								Köln völlig zerstört. Aus den Trümmern baute Hans Sion den
								elterlichen Betrieb wieder auf, organisierte Rohstoffe und
								besorgte Braugenehmigungen bei der englischen Besatzung. Und
								mehr noch …
							</h2>
							<h2 className=''>
								Hans Sion erkannte als Erster, wie wichtig es ist, ein lokales
								und unverwechselbares Bier zu brauen. Mit aller Kraft setzte er
								sich für das obergärige Kölsch ein und legte damit den Grundstee
								auch den in für den Erfolg als regionaltypische Spezialität. Als
								Hans Sion im Januar 1998 im Alter von 86 Jahren starb, verlor
								das Kölner Braugewerbe einen wichtigen Impulsgeber. Als
								Verfechter der Kölsch-Kultur, Wegbereiter der Kölsch-Konvention
								und Gründer des Kölner Brauhaus Wanderweges trägt Hans Sion
								daher heutEhrentitel „Vater des Kölsch“.
							</h2>
						</div>
					</div>
					<div className='hidden lg:block flex flex-col lg:w-1/2 justify-center items-center'>
						<div className='sm:flex sm:justify-center lg:p-5 md:w-[100%] lg:items-center'>
							<img
								className='w-full border-3 rounded-xl w-[100%] h-[100%] border-black xl:mt-3 xl:ml-6 lg:h-100'
								src='land.png'
								alt='tailWind'
								width={27}
								height={6400}
							/>
						</div>
					</div>
				</div>
				<div className='sm:flex sm:justify-center lg:p-5 md:w-[100%] lg:items-center lg:pl-30 lg:pr-30 lg:mb-10'>
					<img
						className='w-full border-t-2 rounded-b-sm border-black lg:border-3 lg:rounded-xl lg:border-black xl:mt-3 xl:ml-6'
						src='land.png'
						alt='tailWind'
						width={27}
						height={6400}
					/>
				</div>
			</div>
			<Reserv />
		</div>
	)
}

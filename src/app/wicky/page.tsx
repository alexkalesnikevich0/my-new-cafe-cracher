import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'
import FadeInFromTop from '@/app/booking/animations/FadeInfromTop'
import ZoomOutImage from '@/app/booking/animations/ZoomOutImage'
import Image from 'next/image'

export default function Wicky() {
	return (
		<div className='bg-orange-300/80'>
			<ZoomOutImage>
				<div className='relative h-screen w-full '>
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
							<div
								className='mb-15 bg-orange-300/50 h-2 w-80 mx-auto
					2xl:w-180 2xl:h-4'
							></div>
							<h1
								className='text-2xl font-bold text-center bg-gradient-to-t from-white/80 via-white/80 to-white/90 bg-clip-text text-transparent mb-7 
					sm:text-3xl 
					md:text-4xl 
					lg:text-5xl 
					xl:text-7xl 
					2xl:mb-9'
							>
								DER KÖLSCHE FASTELOVEND
							</h1>
						</FadeInFromTop>
						<FadeInFromBottom delay={1600} threshold={0.3}>
							<h2
								className='uppercase text-base text-center px-4 font-serif font-black bg-orange-300/30 text-white rounded-md w-fit from-white/90 via-white/70 to-white/80 text-transparent
					md:text-2xl 
					lg:text-4xl 
					2xl:text-5xl'
							>
								IN WORT UND TON MIT <br />
								WICKY JUNGGEBURTH
							</h2>
							<div
								className='mt-15 h-2 w-50 bg-orange-300/50 mx-auto
					md:mt-20 
					2xl:w-80 2xl:h-3'
							></div>
						</FadeInFromBottom>
					</div>
				</div>
			</ZoomOutImage>
			<FadeInFromBottom threshold={0.2}>
				<div className='flex items-center justify-center mt-35'>
					<div
						className='w-90 h-305 duration-600 border-2 rounded-xl bg-white/80 border-black/80 
				sm:w-150 sm:h-160 
				md:w-185 md:h-140 
				lg:w-230 lg:h-175 
				xl:w-275 xl:h-180 
				2xl:w-370 2xl:h-220'
					>
						<div className='group '>
							<div className='sm:w-full sm:flex'>
								<div className='group sm:w-[50%] md:w-[38%]'>
									<Image
										className='h-70 w-70 ml-10 mt-8 border-4 duration-600 border-black/80 rounded-xl sm:h-60 sm:w-60 sm:ml-7 sm:mt-8 md:h-60 md:w-60 md:ml-7 md:mt-7 lg:ml-9 lg:w-85 lg:h-85 xl:ml-10 xl:ml-17 xl:w-90 xl:mt-17 xl:h-85 2xl:w-117 2xl:h-113 2xl:mt-19 2xl:ml-18'
										src='/land.png'
										alt='tailWind'
										unoptimized
										width={270}
										height={640}
									/>
									<div className='flex justify-center ml-2 mt-10 sm:mt-15 sm:ml-6 lg:ml-13'>
										<div
											className='flex-col justify-center text-black/70 
									sm:text-md 
									md:text-md 
									lg:text-xl 
									2xl:text-xl'
										>
											<h2 className='font-medium'>
												Samstag,
												<span className='font-black text-black/80 2xl:font-bold'>
													14. März 2026
												</span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													fill='currentColor'
													className='ml-3 inline-block ml-0 text-blue-950/90 h-9 w-9 lg:h-10 lg:w-10'
												>
													<path
														fillRule='evenodd'
														d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z'
														clipRule='evenodd'
													/>
												</svg>
											</h2>
											<h2 className='font-medium mt-3 sm:mt-5 md:mt-3'>
												Samstag,
												<span className='font-black text-black/80 2xl:font-bold'>
													21. März 2026
												</span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													fill='currentColor'
													className='ml-3 inline-block ml-0 text-blue-950/90 h-9 w-9 lg:h-10 lg:w-10'
												>
													<path
														fillRule='evenodd'
														d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z'
														clipRule='evenodd'
													/>
												</svg>
											</h2>
											<h2 className='font-medium mt-3 sm:mt-5 md:mt-3'>
												Sonntag,
												<span className='font-black text-black/80 2xl:font-bold'>
													15. März 2026
												</span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													fill='currentColor'
													className='ml-3 inline-block ml-0 text-blue-950/90 h-9 w-9 lg:h-10 lg:w-10'
												>
													<path
														fillRule='evenodd'
														d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z'
														clipRule='evenodd'
													/>
												</svg>
											</h2>

											<h2 className='font-medium mt-3 sm:mt-5 md:mt-3'>
												Sonntag,
												<span className='font-black text-black/80 2xl:font-bold'>
													22. März 2026
												</span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													fill='currentColor'
													className='ml-3 inline-block ml-0 text-blue-950/90 h-9 w-9 lg:h-10 lg:w-10'
												>
													<path
														fillRule='evenodd'
														d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z'
														clipRule='evenodd'
													/>
												</svg>
											</h2>
										</div>
									</div>
								</div>
								<div className='sm:w-[64%] md:w-[62%] group'>
									<div
										className='flex justify-center mt-10 
								sm:mt-8 
								md:mt-12 
								lg:mt-15 
								xl:mt-15 
								2xl:mt-35'
									>
										<h1
											className='text-center w-[80%] text-blue-950 font-bold text-lg 
									md:text-2xl 
									lg:text-3xl
								  xl:text-4xl 
									2xl:text-5xl 2xl:font-semibold'
										>
											Leev Fründinne un Fründe des &apos;Kölschen Fastelovend
											der Nachkriegszeit&apos;
										</h1>
									</div>
									<div
										className='text-black/70 font-semibold 
								sm:w-[85%] sm:text-sm 
								md:text-md 
								lg:text-lg 
								xl:text-lg 
								2xl:text-xl'
									>
										<div
											className='flex text-center ml-8 mt-10 w-[80%] 
									sm:ml-14 sm:justify-center 
									md:justify-start md:w-[85%] md:ml-8 
									lg:ml-15 lg:mt-15 
									2xl:font-medium'
										>
											<h2 className=''>
												Wir haben gute Nachrichten! Et jeiht widder loss!
											</h2>
										</div>
										<div
											className='flex justify-center mt-10 w-[80%] text-center ml-8 
									sm:w-[80%] sm:ml-14 sm:text-center 
									md:text-left md:w-[75%] md:ml-8 
									lg:w-[75%] lg:ml-15 lg:mt-10 lg:mt-7 
									2xl:w-[65%] 2xl:font-medium'
										>
											<h2 className=''>
												Die neue 13. Staffel steht unter dem Motto &apos;WAT ET
												NIT ALL JOOV&apos;
											</h2>
										</div>
										<div
											className='flex justify-center text-center w-[80%] ml-8 mt-10 
									sm:ml-11 sm:w-[90%] 
									md:w-[100%] md:ml-8 md:text-left 
									lg:ml-15 lg:mt-10 lg:mt-7 lg:w-[98%] 
									2xl:font-medium'
										>
											<h2 className=''>
												Et weed urig, urkölsch, teilweise frivol und vor allem
												unvergleichlich. Außerdem wird auch den Liedern gefrönt,
												die nicht „rundfunkfähig“ waren. Scheunenlieder sind
												nichts für zarte Seelen. Sie wissen schon was ich meine.
												Mir freuen uns op Üch.
											</h2>
										</div>

										<div
											className='flex justify-center text-white/90 bg-blue-950/90 p-2 mb-10 sm:mb-0 rounded-2xl mt-12 text-center text-lg w-[80%] ml-8 
									sm:text-lg sm:text-center sm:w-[94%] sm:mt-8 sm:ml-9 
									md:ml-15 md:w-[85%] md:text-center 
									lg:ml-22 lg:text-2xl lg:mt-15
									xl:ml-30 xl:w-[75%] 
									2xl:text-3xl 2xl:ml-48 2xl:w-[70%]'
										>
											<h2 className=''>
												Kartenvorverkauf im Brauhaus Sion von 12 – 15 Uhr
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</FadeInFromBottom>

			<div className='flex-col items-center flex justify-center md:flex-row md:columns-2 flex justify-center mt-40 md:gap-5 lg:gap-25 xl:gap-30 2xl:gap-35'>
				<FadeInFromTop delay={100} threshold={0.2}>
					<div
						className='bg-white/80 border-2 border-black rounded-xl w-85 h-250 text-black/90 text-center justify-center 
					[&_h2]:text-sm sm:[&_h2]:text-lg md:[&_h2]:text-base xl:[&_h2]:text-lg 2xl:[&_h2]:text-xl
				sm:w-120 sm:h-280 
				md:w-90 md:h-270 
				lg:w-110 lg:h-265  
				xl:w-130 xl:h-280 
				2xl:w-140 2xl:h-290'
					>
						<h1 className='font-bold mt-15 text-blue-950 text-2xl sm:text-3xl md:text-2xl lg:text-3xl 2xl:text-4xl'>
							13 Staffel - Termine 2026
						</h1>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[80%] rounded-full p-1 mt-1'></div>
						</div>
						<h2 className='mt-10 font-semibold'>
							Freitag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								18 September 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='font-semibold mt-8'>
							Samstag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								19 September 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='mt-8 font-semibold'>
							Donnerstag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								24 September 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='font-semibold mt-8'>
							Freitag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								25 September 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='mt-8 font-semibold'>
							Donnerstag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								01 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='font-semibold mt-8'>
							Freitag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								02 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='mt-8 font-semibold'>
							Mittwoch,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								07 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='font-semibold mt-8'>
							Freitag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								09 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='mt-8 font-semibold'>
							Samstag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								10 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='font-semibold mt-8'>
							Freitag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								16 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='mt-8 font-semibold'>
							Samstag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								17 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='font-semibold mt-8'>
							Freitag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								23 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='mt-8 font-semibold'>
							Samstag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								24 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
						<h2 className='font-semibold mt-8'>
							Freitag,{' '}
							<span className='font-extrabold 2xl:font-bold'>
								30 Oktober 2026
							</span>{' '}
							(13. Staffel)
						</h2>
						<div className='flex justify-center'>
							<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
						</div>
					</div>
				</FadeInFromTop>

				<div className=''>
					<FadeInFromBottom delay={100} threshold={0.2}>
						<div
							className='bg-white/80 border-2 text-center border-black rounded-xl mt-15 w-85 h-180 text-black/90 
						[&_h2]:text-sm sm:[&_h2]:text-lg md:[&_h2]:text-base xl:[&_h2]:text-lg 2xl:[&_h2]:text-xl
					sm:mt-20 sm:w-120 sm:h-200 
					md:w-90 md:mt-0 md:h-190 
					lg:h-185 lg:w-110 
					xl:w-130 xl:h-200 
					2xl:w-130 2xl:h-210'
						>
							<h1 className='font-bold mt-12 text-blue-950 text-2xl sm:text-3xl md:text-2xl lg:text-3xl 2xl:text-4xl'>
								13 Staffel - Termine 2027
							</h1>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[80%] rounded-full p-1 mt-1'></div>
							</div>
							<h2 className='mt-10 font-semibold'>
								Mittwoch,{' '}
								<span className='font-extrabold 2xl:font-bold'>
									06 Januar 2027
								</span>{' '}
								(13. Staffel)
							</h2>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
							</div>
							<h2 className='font-semibold mt-8'>
								Donnerstag,{' '}
								<span className='font-extrabold 2xl:font-bold'>
									07 Januar 2027
								</span>{' '}
								(13. Staffel)
							</h2>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
							</div>
							<h2 className='mt-8 font-semibold'>
								Samstag,{' '}
								<span className='font-extrabold 2xl:font-bold'>
									16 Januar 2027
								</span>{' '}
								(13. Staffel)
							</h2>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
							</div>
							<h2 className='font-semibold mt-8'>
								Dienstag,{' '}
								<span className='font-extrabold 2xl:font-bold'>
									19 Januar 2027
								</span>{' '}
								(13. Staffel)
							</h2>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
							</div>
							<h2 className='mt-10 font-semibold'>
								Mittwoch,{' '}
								<span className='font-extrabold 2xl:font-bold'>
									20 Januar 2027
								</span>{' '}
								(13. Staffel)
							</h2>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
							</div>
							<h2 className='font-semibold mt-8'>
								Freitag,{' '}
								<span className='font-extrabold 2xl:font-bold'>
									22 Januar 2027
								</span>{' '}
								(13. Staffel)
							</h2>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
							</div>
							<h2 className='mt-8 font-semibold'>
								Samstag,{' '}
								<span className='font-extrabold 2xl:font-bold'>
									23 Januar 2027
								</span>{' '}
								(13. Staffel)
							</h2>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
							</div>
							<h2 className='font-semibold mt-8'>
								Mittwoch,{' '}
								<span className='font-extrabold 2xl:font-bold'>
									27 Januar 2027
								</span>{' '}
								(13. Staffel)
							</h2>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
							</div>
							<h2 className='font-semibold mt-8'>
								Freitag,{' '}
								<span className='font-extrabold 2xl:font-bold'>
									29 Januar 2027
								</span>{' '}
								(13. Staffel)
							</h2>
							<div className='flex justify-center'>
								<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
							</div>
						</div>
					</FadeInFromBottom>
					<FadeInFromBottom delay={100} threshold={0.2}>
						<div className='flex justify-center '>
							<div
								className='bg-white/80 border-2 border-black text-white/70 rounded-xl text-center h-69 w-85 mt-15 
						[&_h2]:text-sm sm:[&_h2]:text-lg md:[&_h2]:text-base xl:[&_h2]:text-lg 2xl:[&_h2]:text-xl
						sm:mt-15 sm:w-120 sm:h-75 
						md:mt-15 md:h-65 md:w-90 
						lg:mt-12 lg:h-68 lg:w-110 
						xl:mt-10 xl:w-130 xl:h-70 
						2xl:w-130 2xl:h-70 2xl:mt-10'
							>
								<h1 className='font-bold mt-11 text-blue-950 text-2xl sm:text-3xl md:mt-7 md:text-2xl lg:text-3xl 2xl:text-4xl'>
									Zusatztermine 12 Staffel
								</h1>
								<div className='flex justify-center'>
									<div className='bg-black/80 h-1 w-[80%] rounded-full p-1 mt-1'></div>
								</div>
								<h2 className='mt-10 font-semibold text-black/90'>
									Donnerstag,{' '}
									<span className='font-extrabold 2xl:font-bold'>
										23 April 2026
									</span>
									{'  '}
									(12. Staffel)
								</h2>
								<div className='flex justify-center'>
									<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
								</div>
								<h2 className='mt-10 font-semibold text-black/90'>
									Freitag,{' '}
									<span className='font-extrabold 2xl:font-bold'>
										24 April 2026
									</span>{' '}
									(13. Staffel)
								</h2>
								<div className='flex justify-center'>
									<div className='bg-black/80 h-1 w-[70%] rounded-full mt-1'></div>
								</div>
							</div>
						</div>
					</FadeInFromBottom>
				</div>
			</div>
			<FadeInFromBottom delay={200} threshold={0.3}>
				<div className='flex items-center justify-center mt-35'>
					<div className='w-[85%] h-fit duration-600 border-2 rounded-xl bg-white/80 border-black/80 2xl:w-320'>
						<div className='group '>
							<div className='flex justify-center mt-18 lg:mt-15'>
								<h1
									className='text-center text-blue-950 w-[95%] font-bold text-2xl 
							sm:text-2xl sm:w-[90%] 
							md:w-[75%] md:text-2xl 
							lg:text-3xl 
							xl:text-4xl 
							2xl:text-4xl 2xl:mb-5'
								>
									Karten gibt es wie gehabt, nur direkt über Wicky Junggeburth
									selbst
								</h1>
							</div>
							<div className='md:w-full md:flex'>
								<div className='group flex justify-center md:w-[60%]'>
									<div
										className='flex text-center text-blue-950 font-semibold mt-10 w-[80%] p-4
								sm:ml-8 sm:justify-center 
								md:text-left md:justify-center md:w-[80%] md:ml-8 
								lg:ml-15 lg:mt-15 
								xl:ml-15'
									>
										<h2 className='md:text-lg lg:text-xl lg:mb-0 xl:text-xl'>
											Die Tickets kosten 20 Euro. Einlass ist um 17:30 Uhr,
											Beginn jeweils um 19:30 Uhr. Freuen Sie sich auf
											reservierte Plätze. Dauer ca. 2 Stunden.
										</h2>
									</div>
									<div className='flex justify-center sm:ml-2 mt-10 sm:mt-15 sm:ml-6 lg:ml-13'>
										<div className='flex-col justify-center sm:text-md md:text-md lg:text-xl text-white/70 2xl:text-xl'></div>
									</div>
								</div>
								<div className='group flex justify-center md:w-[60%]'>
									<div
										className='flex text-center text-blue-950 font-semibold sm:ml-1 mt-10 w-[80%] p-4
								sm:justify-center 
								md:text-right md:justify-center md:w-[70%] 
								lg:w-[70%] lg:ml-9 lg:mt-15 
								xl:ml-13'
									>
										<h2 className='md:text-lg lg:text-xl xl:text-xl'>
											Versprechen können wir: Einen sehr amüsanten Abend in der
											locker-leichten Atmosphäre des wundervollen Brauhauses
											Sion.
										</h2>
									</div>
								</div>
							</div>
							<div className='flex justify-center'>
								<div
									className='flex text-center text-blue-950 font-semibold mt-5 w-[90%] p-4
							sm:w-[85%] sm:justify-center 
							md:justify-center md:w-[80%]'
								>
									<h2 className='md:text-lg lg:text-xl xl:text-xl'>
										Wir freuen uns auf Eure/Ihre Kontaktaufnahme; sehr gerne
										über E-Mail (
										<span className='cursor-pointer text-red-600/90 hover:text-red-700/90'>
											alexkalesnikevich@gmail.com
										</span>
										), wenn nit – och joot – üvver Telefon,{' '}
										<span className='cursor-pointer text-red-600/90 hover:text-red-700/90'>
											+375 33 918 49 70
										</span>
										. M’r spreche jän met nette Lück! Deshalb gibt es Karten nur
										und ausschließlich über uns.
									</h2>
								</div>
							</div>
							<div className='flex justify-center'>
								<div
									className='flex text-center text-blue-950 font-bold sm:ml-8 mt-10 w-[70%] 
							sm:justify-center 
							md:justify-center md:w-[80%]'
								>
									<h2 className='md:text-xl lg:text-xl'>
										Auf ein frohes Wiedersehen un met hätzlije, kölsche Jröß
									</h2>
								</div>
							</div>
							<div className='flex justify-center'>
								<div
									className='flex text-center text-blue-950 font-bold mt-10 mb-13 
							sm:ml-8 sm:w-[70%] sm:justify-center 
							md:justify-center md:w-[80%]'
								>
									<h2 className='md:text-xl lg:text-xl'>
										Catherinche m’em Wicky
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</FadeInFromBottom>
		</div>
	)
}

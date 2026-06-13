import Link from 'next/link'

export default function First() {
	const base = [
		{
			route: '/',
		},
	]
	return (
		<div className='bg-orange-300/80'>
			<div className='mb-10 flex justify-center md:mb-25 pt-30 2xl:pt-70'>
				<div className='w-55 h-2 bg-yellow-950/90 rounded-full md:h-4 md:w-155 2xl:w-190'></div>
			</div>
			<h1 className='text-center justify-center font-serif font-black text-yellow-900 text-2xl 
			sm:text-4xl 
			md:text-5xl 
			lg:text-7xl 
			2xl:text-8xl'>
				GANS SCHÖN LECKER!
			</h1>
			<div className='text-center text-md font-serif font-semibold mt-5 
			sm:text-xl 
			md:mt-12 md:text-2xl 
			lg:text-4xl 
			2xl:text-5xl'>
				<h2 className='text-yellow-950 justify-center'>
					FENFRISCHE GÄNSEKEULE MIT KARTOFFELKLÖSSEN <br />
					GÄNSE-JUS, BRATAPFEL UND ROTKOHL
				</h2>
			</div>
			<div className='justify-center flex'>
				<button className='h-17 items-center justify-center md:mt-5'>
					{base.map(link => (
						<Link href={`${link.route}`} key={link.route}>
							<h1
								className='duration-900 group text-sm font-bold rounded-lg mt-10 text-yellow-950/80 pl-2 pr-2 text-center pt-1 pb-1 text-lg 
					      hover:bg-yellow-800 hover:text-white/90 hover:text-base
								md:text-lg md:hover:text-xl 
								xl:hover:pl-2 xl:hover:pr-2 xl:mt-15 xl:text-xl xl:hover:text-2xl 
								2xl:text-2xl 2xl:hover:text-3xl 2xl:hover:font-black 2xl:font-extrabold 2xl:mt-30'
							>
								TISCH RESERVIEREN
								<div className='flex justify-center'>
									<article
										className='duration-800 ml-1 w-33 py-1 px-2 group-hover:w-50 
									md:w-41 md:ml-0 md:group-hover:w-60 
									xl:w-49 xl:group-hover:w-75 
									2xl:w-56 2xl:group-hover:w-95'
									>
										<hr className='h-1 border-yellow-800 border-2 rounded-full group-hover:border-stone-300'></hr>
									</article>
								</div>
							</h1>
						</Link>
					))}
				</button>
			</div>
			<div
				className='mt-35 pb-10 duration-900 items-center justify-center flex md:mt-50 lg:mt-32 2xl:mt-105
			[&_section]:rounded-full [&_section]:mt-2 [&_section]:duration-500 [&_section]:h-3 [&_section]:w-3 [&_section]:bg-yellow-800/80
			[&_section:hover]:h-4 [&_section:hover]:mt-1 [&_section:hover]:w-4 [&_section:hover]:bg-yellow-900 
			2xl:[&_section]:w-5 2xl:[&_section]:2xl:h-5 2xl:[&_section:hover]:w-6 2xl:[&_section:hover]:h-6
			'
			>
				{base.map(link => (
					<Link href={`${link.route}`} key={link.route} className='flex h-2'>
						<section className=''></section>
						<section className='ml-2'></section>
						<section className='ml-2'></section>
						<section className='ml-2'></section>
						<section className='ml-2'></section>
					</Link>
				))}
			</div>
		</div>
	)
}

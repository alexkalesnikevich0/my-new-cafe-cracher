export default function SlowZoomBackground({
	src,
	alt = 'Background',
	children,
}) {
	return (
		<div className='relative w-full h-screen overflow-hidden'>
			<div className='absolute inset-0 z-0 animate-slow-zoom'>
				<img src={src} alt={alt} className='w-full h-full object-cover' />
				<div className='absolute inset-0 z-10 bg-black/40'></div>
				<div className='relative flex z-20 flex-col items-center justify-center h-full'>
					{children}
				</div>
			</div>
		</div>
	)
}

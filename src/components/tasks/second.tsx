import Image from 'next/image'
export default function Second() {
	return (
		<div className='mr-5 columns-xl mt-20 sm:ml-2'>
			<h4 className='text-indigo-500 sm:ml-15 mt-1 ml-8 font-semibold sm:font-bold'>
				Deploy faster
			</h4>
			<h1 className='ml-7 sm:ml-15 mt-2 text-4xl font-medium sm:font-semibold'>
				A better workflow
			</h1>
			<h4 className='text-md ml-7 sm:ml-15 mt-7 font-normal font-sans text-slate-600 sm:mr-60 '>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
				impedit perferendis suscipit eque, iste dolor cupiditate blanditiis
				ratione.
			</h4>
			<div className='ml-7 sm:ml-15'>
				<div className='font-normal font-sans flex'>
					<svg
						className='fill-indigo-600 mr-2 w-6 h-6 mt-12'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 
						4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 
						10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06
						1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z'
							clipRule='evenodd'
						/>
					</svg>
					<p className='mt-12 text-slate-600'>
						<span className='font-semibold text-black'>Push to deploy</span>
						. Lorem ipsum, dolor sit amet consectetur <br />
						adipisicing elit. Maiores impedit perferendis suscipit eaque, <br />
						iste dolor cupiditate blanditiis ratione.
					</p>
				</div>
				<div className='mt-6 font-normal font-sans flex mb-2'>
					<svg
						className='fill-indigo-600 mr-2 w-6 h-6 mt-5'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0
						 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 
						 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
							clipRule='evenodd'
						/>
					</svg>
					<p className='mt-5 font-normal font-sans text-slate-600'>
						<span className='font-semibold text-black'>SSL certificates</span>
						. Anim aute id magna aliqua ad ad non <br />
						deserunt sunt. Qui irure qui lorem cupidat commodo.
					</p>
				</div>
				<div className='mb-15 font-normal font-sans flex'>
					<svg
						className='ml-1 mr-3 w-5 h-5 mt-11 text-indigo-600'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<path
							d='M4.08 5.227A3 3 0 0 1 6.979 3H17.02a3 3 0 0 1 2.9 2.227l2.113
						 7.926A5.228 5.228 0 0 0 18.75 12H5.25a5.228 5.228 0 0 0-3.284 1.153L4.08 5.227Z'
						/>
						<path
							fillRule='evenodd'
							d='M5.25 13.5a3.75 3.75 0 1 0 0 7.5h13.5a3.75 3.75 0 1 0 0-7.5H5.25Zm10.5 
							4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 
							0 0 1 1.5 0Z'
							clipRule='evenodd'
						/>
					</svg>
					<p className='mb-5 mt-10 font-normal font-sans text-slate-600'>
						<span className='font-semibold text-black'>Database backups</span>.
						Ac tincidunt sapien vehicula erat auctor <br />
						pellentesque rhoncus. Et magna sit morbi lobortis.
					</p>
				</div>
			</div>
			<div className='w-92 h-30 ml-5 mt-0 mb-4 sm:w-150 sm:ml-0'>
				<Image
					className='border-black-500 rounded-2xl h-90 sm:h-125 p-0 bg-gray-200'
					src='/land.png'
					alt='Next.js Logo'
					width={2000}
					height={0}
				/>
			</div>
		</div>
	)
}

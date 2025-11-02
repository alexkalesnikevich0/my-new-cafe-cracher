import Image from 'next/image'
export default function Second() {
	return (
		<div className='text-left sm:ml-20 text-center'>
			<h4 className='text-indigo-600 ml-20 mt-20 font-bold'>Deploy faster</h4>
			<h1 className='ml-20 mt-5 text-4xl font-bold'>A better workflow </h1>
			<h4 className='ml-20 mt-5 font-normal font-sans'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
				Maiores impedit perferendis suscipit eque, iste dolor <br />
				cupiditate blanditiis ratione.
			</h4>
			<div className='ml-20 mt-15 font-normal font-sans flex'>
				<Image
					className='mr-5'
					src='/window.svg'
					alt='File'
					width={25}
					height={25}
				/>
				<p>
					<span className='font-bold text-indigo-800'>Push to deploy. </span>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
					Maiores impedit perferendis suscipit eque, iste dolor <br />
					cupiditate blanditiis ratione.
				</p>
			</div>
			<div className='ml-20 mt-5 font-normal font-sans flex'>
				<Image
					className='mr-5 mt-7'
					src='/file.svg'
					alt='File'
					width={25}
					height={25}
				/>
				<p className='mt-10 font-normal font-sans'>
					<span className='font-bold text-indigo-800'>SSL certificates.</span>{' '}
					Anim aute id magna aliqua ad ad non <br />
					deserunt sunt. Qui irure qui lorem cupidat commodo.
				</p>
			</div>
			<div className='mb-5 ml-20 mt-5 font-normal font-sans flex'>
				<Image
					className='mr-5 mt-7'
					src='/globe.svg'
					alt='File'
					width={25}
					height={25}
				/>
				<p className=' mb-5 mt-10 font-normal font-sans '>
					<span className='font-bold text-indigo-800'>Database backups.</span>{' '}
					Ac tincidunt sapien vehicula erat auctor <br />
					pellentesque rhoncus. Et magna sit morbi lobortis.
				</p>
			</div>
			<div className='justify-center sm:justify-left flex'>
				<Image
					className=''
					src='/land.png'
					alt='Next.js Logo'
					width={500}
					height={200}
				/>
			</div>
		</div>
	)
}

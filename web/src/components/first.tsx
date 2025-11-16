import Image from 'next/image'
export default function First() {
	return (
		<div className='sm:font-medium'>
			<h1 className='mb-15 text-5xl sm:text-6xl ml-2 mr-0 sm:mr-190 sm:ml-12'>
				Everything you need to deploy your
			</h1>

			<div className='rounded-4xl border-2 border-gray-200 p-2 ml-0 sm:ml-17 bg-gray-100 w-90 h-85 sm:w-300 sm:h-190'>
				<Image
					className='rounded-3xl border-gray-300 w-90 h-80 sm:w-300 sm:h-185'
					src='/land.png'
					alt='Next.js Logo'
					width={2000}
					height={0}
					priority
				/>
			</div>
		</div>
	)
}

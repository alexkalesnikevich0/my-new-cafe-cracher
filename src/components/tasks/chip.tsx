import Image from 'next/image'
export default function Chip() {
	return (
		<div className='border-indigo-600'>
			<div className='ml-100 px-35 py-20 bg-yellow-500 text-black rounded-full text-lg font-medium inline-block'>
				CHIP
			</div>
			<div className='font-medium font-sans'>
				<h1 className='text-4xl ml-5 w-80 sm:text-6xl mb-20 ml-5 sm:w-100'>
					Everything you need to deploy your app
				</h1>
				<div className='rounded-4xl border-2 border-gray-200 p-2 inline-block ml-25 bg-gray-100'>
					<Image
						className='w-50 sm:w-300'
						src='/land.png'
						alt='Next.js Logo'
						width={1200}
						height={600}
						priority
					/>
				</div>
			</div>
		</div>
	)
}

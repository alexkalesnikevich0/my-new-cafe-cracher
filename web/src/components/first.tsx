import Image from 'next/image'
export default function First() {
	return (
		<div className='text-6xl ml-10 mr-100 max-sm:text-5xl font-semibold font-mono'>
			<h1>
				Everything you need <br />
				to deploy your app
			</h1>
			<div className='max-sm: 5xl'>
				<Image
					className='ml-10 mt-10'
					src='/land.png'
					alt='Next.js Logo'
					width={700}
					height={600}
					priority
				/>
			</div>
		</div>
	)
}

import Image from 'next/image'
export default function Footer() {
	return (
		<div className='font-sans'>
			<Image
				className='ml-15 mt-20 inline-block'
				src='/tailwind.svg'
				alt='tailWind'
				width={50}
				height={50}
			/>
			<h1 className='sm:text-left text-left ml-15 mt-5 text-2xl font-serif font-medium'>
				Making the world a better through <br />
				constructing elegant hierarchies.
			</h1>
		</div>
	)
}

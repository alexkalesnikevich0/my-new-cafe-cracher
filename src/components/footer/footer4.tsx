import Image from 'next/image'
export default function Footer4() {
	return (
		<div className='mt-10'>
			<Image
				className='ml-15 inline-block'
				src='/for footer/facebook.svg'
				alt='facebook'
				width={50}
				height={50}
			/>
			<Image
				className='ml-3 inline-block'
				src='/for footer/instagram.svg'
				alt='instagram'
				width={30}
				height={50}
			/>
			<Image
				className='ml-7 inline-block'
				src='/for footer/x.svg'
				alt='X'
				width={25}
				height={50}
			/>
			<Image
				className='ml-3 inline-block'
				src='/for footer/github.svg'
				alt='github'
				width={50}
				height={50}
			/>
			<Image
				className='ml-2 inline-block'
				src='/for footer/youtube.svg'
				alt='youtube'
				width={50}
				height={50}
			/>
		</div>
	)
}

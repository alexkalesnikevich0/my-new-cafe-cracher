import Image from 'next/image'
export default function Mainfooter() {
	return (
		<div className='font-sans columns-sm columns-3 sm:mt-10'>
			<div className=''>
				<Image
					className=' ml-7 sm:ml-10 inline-block fill-indigo-600'
					src='/tail.svg'
					alt='tailWind'
					width={50}
					height={50}
				/>
				<h4 className='text-sm sm:text-left ml-8 sm:ml-11 mt-8 text-xl font-sans font-normal text-gray-500'>
					Making the world a better through <br />
					constructing elegant hierarchies.
				</h4>
				<div className='columns-xl mb-20'>
					<Image
						className='ml-7 sm:ml-10 inline-block mt-8'
						src='/for footer/facebook.svg'
						alt='facebook'
						width={49}
						height={49}
					/>
					<Image
						className='ml-5 inline-block mt-9'
						src='/for footer/instagram.svg'
						alt='instagram'
						width={30}
						height={50}
					/>
					<Image
						className='ml-9 inline-block mt-9'
						src='/for footer/x.svg'
						alt='X'
						width={25}
						height={50}
					/>
					<Image
						className='ml-5 inline-block mt-9'
						src='/for footer/github.svg'
						alt='github'
						width={50}
						height={50}
					/>
					<Image
						className='ml-4 inline-block mt-9'
						src='/for footer/youtube.svg'
						alt='youtube'
						width={50}
						height={50}
					/>
				</div>
			</div>
			<div className='font-medium font-sans text-gray-500 ml-8'>
				<div className='inline-block mr-35'>
					<h4 className='font-semibold mb-5 text-black'>Solutions</h4>
					<h4 className='mt-8 mb-0'>Marketing</h4>
					<h4 className='mt-8 mb-5'>Analytics</h4>
					<h4 className='mt-8 mb-5'>Automation</h4>
					<h4 className='mt-8 mb-5'>Commerce</h4>
					<h4 className='mt-8'>Insights</h4>
				</div>

				<div className='inline-block mb-0 sm:ml-2'>
					<h4 className='font-semibold mb-5 text-black'>Company</h4>
					<h4 className='mt-8 mb-0'>About</h4>
					<h4 className='mt-8 mb-5'>Blog</h4>
					<h4 className='mt-8 mb-5'>Jobs</h4>
					<h4 className='mt-8'>Press</h4>
					<h4 className='mt-8'>
						<br />
					</h4>
				</div>
			</div>
			<div className='inline-block text-gray-500'>
				<div className='inline-block ml-8 sm:ml-0 mt-20 sm:mt-0'>
					<h4 className='font-semibold mb-5 text-black'>Support</h4>
					<h4 className='mt-8 mb-5'>Submit ticket</h4>
					<h4 className='mt-8 mb-5'>Documentation</h4>
					<h4 className='mt-8 mb-5'>Guides</h4>
					<h4 className='mt-8 mb-5'>
						<br />
					</h4>
					<h4 className='mt-8 mb-0 sm:mb-11'>
						<br />
					</h4>
				</div>
				<div className='ml-25 sm:ml-35 inline-block text-gray-500'>
					<h4 className='font-semibold mb-5 text-black'>Legal</h4>
					<h4 className='mt-8 mb-5'>Terms of service</h4>
					<h4 className='mt-8 mb-5'>Privacy policy</h4>
					<h4 className='mt-8 mb-5'>License</h4>
					<h4 className='mt-8'>
						<br />
					</h4>
					<h4 className='mt-8'>
						<br />
					</h4>
				</div>
			</div>
		</div>
	)
}

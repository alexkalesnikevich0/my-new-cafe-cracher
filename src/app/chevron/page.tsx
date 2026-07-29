import Link from 'next/link'
const tunnel = [
	{
		title: 'home',
		route: '/',
	},
]

export default function Chevron() {
	return (
		<div className='bg-orange-300/80 pt-20'>
			<div className='flex justify-between w-[100%] pl-5 pr-5 items-center 2xl:pl-20 2xl:pr-20 2xl:text-xl'>
				<div className='cursor-pointer p-1 group text-black/60'>
					{tunnel.map(link => (
						<Link className='flex' href={`${link.route}`} key={link.route}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-8 h-8 group-hover:text-black duration-600 2xl:w-10 2xl:h-10'
							>
								<path
									fillRule='evenodd'
									d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
									clipRule='evenodd'
								/>
							</svg>
							<div className='uppercase mt-1 font-bold ml-2 group-hover:ml-0 duration-600 group-hover:text-black'>
								prev
							</div>
						</Link>
					))}
				</div>
				<div className='flex cursor-pointer p-1 group text-black/60'>
					{tunnel.map(link => (
						<Link className='flex' href={`${link.route}`} key={link.route}>
							<div className='uppercase mt-1 font-bold group-hover:text-black duration-600'>
								next
							</div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-8 h-8 ml-2 group-hover:ml-0 duration-600 group-hover:text-black 2xl:w-10 2xl:h-10'
							>
								<path
									fillRule='evenodd'
									d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
									clipRule='evenodd'
								/>
							</svg>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

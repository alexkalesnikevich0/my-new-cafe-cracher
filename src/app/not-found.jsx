import Link from 'next/link'

const home = [
	{
		route: '/',
	},
]

export default function NotFound() {
	return (
		<div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 text-center px-5'>
			<h1 className='text-8xl font-extrabold text-gray-300'>404</h1>
			<h2 className='text-3xl font-bold text-gray-700 mt-5'>Page Not Found</h2>
			<p className='text-gray-500 mt-3 text-lg'>
				The page you are looking for does not exist
			</p>
			{home.map(link => (
				<Link
					href={`${link.route}`}
					key={link.route}
					className='mt-10 bg-blue-600/70 text-white/70 px-6 py-2 uppercase rounded-lg font-medium border-2 border-white/30 shadow-xl
                  hover:bg-blue-700 hover:text-white hover:border-white/90 transition-colors duration-500'
				>
					back home
				</Link>
			))}
		</div>
	)
}

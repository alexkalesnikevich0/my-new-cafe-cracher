import Link from 'next/link'

const image = [
	{
		route: '/',
	},
]

export default function Newone() {
	return (
		<section className=''>
			{image.map(link => (
				<Link
					href={link.route}
					key={link.route}
					className='items-center text-center justify-center flex h-200 bg-yellow-100/90'
				>
					<h1 className='uppercase font-extrabold text-4xl font-serif '>
						Hello guys
					</h1>
				</Link>
			))}
		</section>
	)
}

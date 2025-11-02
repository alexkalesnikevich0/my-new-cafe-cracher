import Headline from '@/components/headline'
import First from '@/components/first'
import Second from '@/components/second'
import Footer from '@/components/footer/footer'
import Footer2 from '@/components/footer/footer2'
import Footer3 from '@/components/footer/footer3'
import Footer4 from '@/components/footer/footer4'
import Chip from '@/components/chip'
import Paragraph from '@/components/paragraph'
import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<section className='py-24 border-b border-b-gray-200'>
				<Headline />
			</section>
			<section className='py-2 px-5 border-b-gray-500 mt-20'>
				<First />
			</section>
			<section className='mt-20 mb-20 border-t border-t-gray-200'>
				<Second />
			</section>
			<section className='py-20 border-t border-b border-b-gray-200'>
				<Footer />
				<Footer4 />
				<Footer2 />
				<hr />
				<Footer3 />
			</section>
			<section className='py-24 border-t border-b border-b-gray-200'>
				<Chip />
			</section>
			<section className=' py-24 border-b border-b-gray-200'>
				<Image
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</section>
			<section className='py-24 border-b border-b-gray-200'>
				<Paragraph />
			</section>
		</div>
	)
}

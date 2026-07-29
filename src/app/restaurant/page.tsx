import Realnav from '@/components/navbar/realnav'
import Headline from '@/components/tasks/headline'
import First from '@/components/tasks/first'
import Second from '@/components/tasks/second'
import Mainfoot from '@/components/footer/mainfoot'
import Footer3 from '@/components/footer/footer3'
import Chip from '@/components/tasks/chip'
import Paragraph from '@/components/tasks/paragraph'
import Image from 'next/image'

export default function Restaurant() {
	return (
		<div className='pt-20'>
			<section className='mb-40'>
				<Realnav />
			</section>
			<section className='py-24 border-b border-b-gray-200 border-t'>
				<Headline />
			</section>
			<section className='py-2 px-5 border-b-gray-500 mt-20'>
				<First />
			</section>
			<section className='mt-20 mb-20 border-t border-t-gray-200'>
				<Second />
			</section>
			<section className='py-20 border-t border-b border-b-gray-200'>
				<Mainfoot />
				<hr className='ml-7 mt-5 mr-7 mb-0 sm:ml-15 sm:mt-15 sm:mr-15 sm:mb-0' />
				<Footer3 />
			</section>
		</div>
	)
}

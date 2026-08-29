'use client'
import Second from '@/components/beer/assets/second'
import Third from '@/components/beer/assets/third'
import Four from '@/components/beer/assets/four'
import Five from '@/components/beer/assets/five'
import MenuForm from '@/app/booking/components/menuForm'
import GoogleMap from './booking/components/GoogleMap'
import ScrollToHash from '@/app/booking/animations/ScrollToHash'
import HeroSlider from '@/app/booking/components/HeroSlider'

export default function Home() {
	return (
		<div className='bg-orange-300/80'>
			<ScrollToHash />
			<HeroSlider />
			<Second />
			<div id='anfahrt'>
				<MenuForm />
			</div>
			<Third />
			<Four />
			<Five />
			<GoogleMap />
		</div>
	)
}

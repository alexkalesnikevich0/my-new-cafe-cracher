import Second from '@/components/beer/assets/second'
import Third from '@/components/beer/assets/third'
import Four from '@/components/beer/assets/four'
import Five from '@/components/beer/assets/five'
import MenuForm from '@/app/booking/components/menuForm'
import GoogleMap from './booking/components/GoogleMap'
import HeroSlider from '@/app/booking/components/HeroSlider'
import ScrollToHashWrapper from './booking/animations/ScrollToHashWrapper'


/** 
 * ИЗМЕНЕНИЯ PR4
 * страница переведена в динамический режим рендеринга
 * ПРИЧИНА 
 * упорная ошибка "useSearchParams() should be wrapped in a suspense boundary",
 * которую не удалось решить через Suspense
 * РЕШЕНИЕ добавлена директива 'force-dynamic', которая заставляет страницу рендериться на сервере при каждом запросе (не статически)
*/
export const dynamic = 'force-dynamic'

export default function Home() {
	return (
		<div className='bg-orange-300/80'>
			<ScrollToHashWrapper />
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

import FadeInFromBottom from '@/app/booking/animations/FadeInFromBottom'

export default function GoogleMap() {
	return (
		<FadeInFromBottom delay={100} threshold={0.3}>
			<div className='flex items-center justify-center pt-50'>
				<div className='w-[95%] h-130 rounded-xl overflow-hidden shadow-3xl border-3 border-black'>
					<div className='w-full h-full'>
						<iframe
							className=''
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1040.492064525332!2d27.64892214902707!3d53.931610086232304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcedd4e03a1bd%3A0x7912e6398b03a332!2z0YPQuy4g0J_QtdGC0YDQsCDQnNGB0YLQuNGB0LvQsNCy0YbQsCAxMCwg0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwgMjIwMDc2!5e0!3m2!1sru!2sby!4v1784827169890!5m2!1sru!2sby'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
							referrerPolicy='strict-origin-when-cross-origin'
						></iframe>{' '}
					</div>
				</div>
			</div>
		</FadeInFromBottom>
	)
}

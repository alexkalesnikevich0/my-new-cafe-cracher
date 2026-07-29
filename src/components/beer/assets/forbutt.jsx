'use client'

import MobileMenu from '@/app/booking/components/MobileMenu'

export default function Forbutt({ closeForbutt }) {
	return (
		<div className='fixed top-[105px] left-0 right-0 bottom-0 z-40 overflow-hidden md:hidden'>
			<div className='h-full bg-yellow-900 flex flex-col items-center justify-start pt-10 overflow-y-auto animate-slide-down'>
				<MobileMenu closeForbutt={closeForbutt} />
			</div>
		</div>
	)
}

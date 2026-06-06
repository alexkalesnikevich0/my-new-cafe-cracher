'use client'
import First from '@/components/beer/assets/first'
import Second from '@/components/beer/assets/second'
import Third from '@/components/beer/assets/third'
import Four from '@/components/beer/assets/four'
import Five from '@/components/beer/assets/five'

export default function Home() {
	return (
		<div className='bg-orange-300/80'>
			<First />
			<Second />
			<Third />
			<Four />
			<Five />
		</div>
	)
}

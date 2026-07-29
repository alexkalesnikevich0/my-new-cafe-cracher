export default function TodayCounter({ total, label }) {
	return (
		<p className='font-bold'>
			<span className='text-gray-700 text-base'>Today:</span>{' '}
			<span className='text-black font-black text-base'>
				{total} {label}
			</span>
		</p>
	)
}

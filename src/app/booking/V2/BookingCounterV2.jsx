export default function BookingCounterV2({ total }) {
	return (
		<p className='font-bold mb-5'>
			<span className='text-gray-700 text-xl'>Total:</span>{' '}
			<span className='text-black font-black text-xl'>
				{total} reservations
			</span>
		</p>
	)
}

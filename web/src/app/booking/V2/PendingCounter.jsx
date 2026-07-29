export default function PendingCounter({ total }) {
	return (
		<p className='font-bold'>
			<span className='text-gray-700'>Pending:</span>{' '}
			<span className='text-grey-600 font-extrabold'>{total}</span>{' '}
			<span className=''>
				has status{' '}
				<span className='ml-2 border-1 border-gray-800 font-bold px-2.5 py-1 rounded-full bg-yellow-500 text-yellow-950'>
					NEW
				</span>
			</span>
		</p>
	)
}

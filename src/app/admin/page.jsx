import PaginationBooking from '../booking/V2/PaginationBooking'

export default function AdminPage() {
	return (
		<div className='bg-orange-300 flex flex-col justify-center items-center'>
			<h1 className='text-5xl mt-40 mb-10 border-5 border-black/80 font-extrabold uppercase shadow-xl p-4 bg-white/50 rounded-3xl'>
				admin page
			</h1>
			<div className='flex justify-center mb-4'>
				<a
					href='/admin/tables'
					className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium
				hover:bg-blue-700 transition-colors'
				>
					Table management
				</a>
			</div>
			<PaginationBooking />
			<h1 className='text-5xl mt-20 mb-20 border-5 border-black/80 font-extrabold uppercase shadow-xl p-4 bg-white/50 rounded-3xl'>
				admin page
			</h1>
		</div>
	)
}

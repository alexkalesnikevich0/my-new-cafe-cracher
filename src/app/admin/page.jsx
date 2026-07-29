import PaginationBooking from '../booking/V2/PoginationBooking'
import LogoutButton from './logout/logoutButton'

export default function AdminPage() {
	return (
		<div className='bg-orange-300 flex flex-col justify-center items-center'>
			<h1 className='text-5xl mt-40 mb-10 border-5 border-black/80 font-extrabold uppercase shadow-xl p-4 bg-white/50 rounded-3xl'>
				admin page
			</h1>
			<PaginationBooking />
			<h1 className='text-5xl mt-20 mb-20 border-5 border-black/80 font-extrabold uppercase shadow-xl p-4 bg-white/50 rounded-3xl'>
				admin page
			</h1>
		</div>
	)
}

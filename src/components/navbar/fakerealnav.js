'use client'
import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/navbar/Modal'
import Navbar from './navbar'

export default function Realnav() {
	const [openForModal, setOpenModal] = useState(false)

	return (
		<div className=''>
			<div className='font-bold sm:inline-block'>
				<Image
					className='ml-9 mt-5 sm:mt-0 sm:ml-10 inline-block'
					src='/tail.svg'
					alt='tailWind'
					width={50}
					height={50}
				/>
				<div className='sm:inline-block'>
					<button
						className='ml-7 mt-7 sm:border-white bg-gray-200 sm:bg-white border-blue-600
						rounded-sm border-2 hover:border-blue-600 hover:rounded-sm px-2
						h-8 inline-block hover:bg-gray-200 sm:ml-110 sm:mt-0 mr-40 sm:mr-0'
						onClick={() => {
							setOpenModal(true)
						}}
					>
						Product
						<div className='inline-block sm:ml-0'>
							<Navbar />
						</div>
					</button>
					<h2 className='ml-9 sm:ml-10 mt-6 border-b-gray-400 rounded-xs inline-block mr-40 sm:mr-0 '>
						Features
						<Navbar />
					</h2>
					<h2 className='mr-30 sm:mr-0 ml-9 sm:ml-12 mt-7 inline-block '>
						Marketplace
						<Navbar />
					</h2>
					<h2 className='ml-9 mt-7 inline-block'>
						Company
						<Navbar />
					</h2>
					<hr className='sm:hidden mt-10 sm:mt-0 mr-8 ml-8 sm:mr-0 sm:ml-0' />
					<h2 className='inline-block mt-7 ml-9 sm:ml-70'>Log in</h2>
				</div>
			</div>
			{openForModal && <Modal closeModal={setOpenModal} />}
		</div>
	)
}

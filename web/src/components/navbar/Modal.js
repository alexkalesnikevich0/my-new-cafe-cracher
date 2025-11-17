'use client'
import React from 'react'

function Modal({ closeModal }) {
	return (
		<div className='mt-30 sm:mt-0'>
			<div className='rounded-4xl border border-gray-200 w-117 ml-1 sm:ml-85'>
				<button
					onClick={() => closeModal(false)}
					className='ml-105 mt-5 bg-gray-200 border-2 hover:bg-gray-300 sm:border-white border-blue-600 hover:border-blue-600 px-2 py-1 rounded-4xl font-extrabold'
				>
					X
				</button>
				<div className='flex'>
					<div className='flex w-12 h-12 bg-gray-200 items-center justify-center rounded-md mt-4 ml-8'>
						<svg
							className='w-7 h-7 text-gray-600'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z'
							/>
						</svg>
					</div>
					<div>
						<h2 className='font-semibold size-4xl ml-5 mt-3'>Analytics</h2>
						<p className='ml-5 text-gray-500 font-medium mt-1'>
							Get a better understanding of your traffic
						</p>
					</div>
				</div>
				<div className='flex'>
					<div className='flex w-12 h-12 bg-gray-200 items-center justify-center rounded-md mt-10 ml-8'>
						<svg
							className='w-7 h-7 text-gray-600'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59'
							/>
						</svg>
					</div>
					<div>
						<h2 className='font-semibold size-4xl ml-5 mt-9'>Engagement</h2>
						<p className='ml-5 text-gray-500 font-medium mt-1'>
							Speak directly to your customers
						</p>
					</div>
				</div>
				<div className='flex'>
					<div className='flex w-12 h-12 bg-gray-200 items-center justify-center rounded-md mt-10 ml-8'>
						<svg
							className='w-7 h-7 text-gray-600'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33'
							/>
						</svg>
					</div>
					<div>
						<h2 className='font-semibold size-4xl ml-5 mt-9'>Security</h2>
						<p className='ml-5 text-gray-500 font-medium mt-1'>
							Your customers' data will be safe and secure
						</p>
					</div>
				</div>
				<div className='flex'>
					<div className='flex w-12 h-12 bg-gray-200 items-center justify-center rounded-md mt-10 ml-8'>
						<svg
							className='w-7 h-7 text-gray-600'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 
								10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 
								0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 
								0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 
								0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z'
							/>
						</svg>
					</div>
					<div>
						<h2 className='font-semibold size-4xl ml-5 mt-9'>Integrations</h2>
						<p className='ml-5 text-gray-500 font-medium mt-1'>
							Connect with third-party tools
						</p>
					</div>
				</div>
				<div className='flex'>
					<div className='flex w-12 h-12 bg-gray-200 items-center justify-center rounded-md mt-9 ml-8'>
						<svg
							className='w-7 h-7 text-gray-600'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
							/>
						</svg>
					</div>
					<div>
						<h2 className='font-semibold size-4xl ml-5 mt-8'>Automations</h2>
						<p className='ml-5 text-gray-500 font-medium mt-1'>
							Build strategic funnels that will convert
						</p>
					</div>
				</div>
				<div className='flex mt-13 w-full h-14 border-b  bg-gray-100 border-gray-300 rounded-b-4xl font-semibold'>
					<div className='border-r border-gray-300 h-full '>
						<div className='flex mt-4 flex ml-11'>
							<svg
								className='h-7 w-7 flex mr-2 text-slate-100 fill-gray-400 rounded-xl'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
								/>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
								/>
							</svg>
							<div className='mr-13'>Watch demo</div>
						</div>
					</div>

					<div className='ml-12 mt-4 flex'>
						<div className='mr-3 h-6 w-6 fill-gray-300'>
							<svg
								className='h-6 w-6 fill-gray-400 text-gray-400 font-normal stroke-1'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25
									 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97
									  1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963
										 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
								/>
							</svg>
						</div>
						Contact sales
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal

'use client'
import React from 'react'

export default function Modal({ closeModal }) {
	return (
		<div className='md:hidden block bg-black font-extrabold text-lg mt-23 rounded-md ml-20 font-mono text-stone-300 2xl:ml-190 flex-col items-center justify-center h-115 mb-10 w-70'>
			<button
				onClick={() => closeModal(false)}
				className='ml-105 mt-5 bg-gray-200 border-2 hover:bg-gray-300 sm:border-white border-blue-600 hover:border-blue-600 px-2 py-1 rounded-4xl font-extrabold'
			>
				X
			</button>
			<button className='ml-20 mb-3 duration-600 cursor-pointer block hover:text-white  pt-2 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
				EVENTS
				<div className='duration-800 w-18 group-hover:w-24 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
			</button>
			<button className='duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pl-3 pr-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
				FESTE FEIERN
				<div className='duration-900 w-35 group-hover:w-41 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
			</button>
			<button className='duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
				RESERVIERUNG
				<div className='duration-900 w-35 group-hover:w-40 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
			</button>
			<button className='duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
				SPEISEN & GERTRÄNKE
				<div className='duration-900 w-55 group-hover:w-60 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
			</button>
			<button className='duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
				BRAUHAUS SION
				<div className='duration-900 w-39 group-hover:w-44 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
			</button>
			<button className='duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
				EN
				<div className='duration-900 w-8 group-hover:w-12 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
			</button>
		</div>
	)
}

'use client'
import React from 'react'

export default function Forbutt({ closeForbutt }) {
	return (
		<div className='flex s'>
			<div className='md:hidden block mb-0 font-extrabold text-lg mt-15 rounded-md bg-yellow-950/50 ml-0 font-mono text-stone-300 flex-col flex items-center justify-center h-128 w-80 bg-black'>
				<button
					onClick={() => closeForbutt(false)}
					className='ml-60 mt-5 bg-yellow-900 text-2xl cursor-pointer border-2 hover:bg-yellow-950 mb-5 md:border-white border-yellow-600 hover:border-blue-600 px-3 py-2 rounded-4xl font-extrabold'
				>
					X
				</button>
				<button className='mb-3 duration-600 cursor-pointer block hover:text-white pt-2 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
					EVENTS
					<div className='duration-800 w-18 group-hover:w-24 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
				</button>
				<button className='mb-3 duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pl-3 pr-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
					FESTE FEIERN
					<div className='duration-900 w-35 group-hover:w-41 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
				</button>
				<button className='mb-3 duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
					RESERVIERUNG
					<div className='duration-900 w-35 group-hover:w-40 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
				</button>
				<button className='mb-3 duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
					SPEISEN & GERTRÄNKE
					<div className='duration-900 w-55 group-hover:w-60 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
				</button>
				<button className='mb-3 duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
					BRAUHAUS SION
					<div className='duration-900 w-39 group-hover:w-44 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
				</button>
				<button className='mb-3 duration-600 cursor-pointer block ml-2 hover:text-white pt-3 pb-4 pr-3 pl-3 group bg-yellow-700 hover:bg-yellow-700 rounded-full'>
					EN
					<div className='duration-900 w-8 group-hover:w-12 rounded-full h-1 bg-yellow-900 group-hover:bg-white'></div>
				</button>
			</div>
		</div>
	)
}

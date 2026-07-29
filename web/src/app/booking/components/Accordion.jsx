export default function Accordion({ title, children, open, onToggle }) {
	return (
		<div className='flex flex-col justify-center items-center pl-5 pr-4'>
			<h2
				onClick={onToggle}
				className='flex cursor-pointer text-white/70 font-extrabold font-serif text-xl hover:text-white
      sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'
			>
				{title}
				<span className='font-black ml-5 2xl:ml-15'>{open ? '-' : '+'}</span>
			</h2>
			<div
				className={`overflow-hidden transition-all duration-1100 font-serif ease-in-out ${
					open ? 'max-h-[700px] opacity-100 mt-2' : 'max-h-0 opacity-0'
				}`}
			>
				{children}
			</div>
		</div>
	)
}

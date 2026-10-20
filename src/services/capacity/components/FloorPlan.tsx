/**
 * ФАЙЛ: services/capacity/components/FloorPlan.tsx
 *
 * ВИЗУАЛЬНАЯ СХЕМА ЗАЛА (PR 6.6.4 / Обновление дизайна).
 * Бар и вход по центру, фонтан, проход.
 */

'use client'

import { ReactNode } from 'react'

interface FloorPlanProps {
	children: ReactNode
}

export default function FloorPlan({ children }: FloorPlanProps) {
	return (
		<div className='w-full'>
			<div className='relative w-full aspect-[16/10] bg-black/80 rounded-2xl border-2 border-black overflow-hidden shadow-inner'>
				{/* ПРОХОД ОТ ВХОДА К БАРУ (светлая полоса по центру) */}
				<div className='absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[20%] bg-red-950/60 border-x-2 border-dashed border-black z-0' />

				{/* БАР (сверху, по центру) */}
				<div className='absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[10%] bg-gradient-to-b from-purple-900 to-neutral-800 rounded-b-4xl flex items-center justify-center border-b-6 border-neutral-900 shadow-md z-10'>
					<span className='text-neutral-100 text-xs md:text-sm font-bold tracking-[0.3em] uppercase'>
						BAR & SCENE
					</span>
				</div>

				{/* ВХОД (снизу, по центру) */}
				<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[8%] bg-gradient-to-t from-purple-900 to-purple-950/80 rounded-t-4xl flex items-center justify-center border-t-2 border border-neutral-900 shadow-md z-10'>
					<span className='text-neutral-100 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase'>
						ENTRANCE
					</span>
				</div>

				{/* ФОНТАН (в центре зала) */}
				<div className='absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15%] aspect-square bg-purple-900/50 rounded-full border-4 border-blue-300/60 flex items-center justify-center shadow-lg z-0'>
					{/* Внутренний круг для воды */}
					<div className='w-[70%] aspect-square bg-blue-300/50 rounded-full animate-pulse' />
				</div>

				{/* ИГРОВОЕ ПОЛЕ (столы) */}
				<div className='absolute inset-0 z-20'>{children}</div>

				{/* ДЕКОР: СЕТКА ПОЛА */}
				<svg
					className='absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] z-0'
					xmlns='http://www.w3.org/2000/svg'
				>
					<defs>
						<pattern
							id='floor-grid'
							width='40'
							height='40'
							patternUnits='userSpaceOnUse'
						>
							<path
								d='M 40 0 L 0 0 0 40'
								fill='none'
								stroke='#000'
								strokeWidth='1'
							/>
						</pattern>
					</defs>
					<rect width='100%' height='100%' fill='url(#floor-grid)' />
				</svg>
			</div>
		</div>
	)
}

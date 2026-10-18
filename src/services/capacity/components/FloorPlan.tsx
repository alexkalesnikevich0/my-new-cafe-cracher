/**
 * ФАЙЛ: services/capacity/components/FloorPlan.tsx
 *
 * ВИЗУАЛЬНАЯ СХЕМА ЗАЛА (PR 6.6.4).
 *
 * Рисует "вид сверху" на ресторан:
 *   - фон (пол)
 *   - верхняя полоса: бар / сцена
 *   - нижняя полоса: вход
 *   - внутри children — столы (абсолютное позиционирование)
 *
 * Пропорция 16:10 — горизонтальная, как реальный зал.
 */

'use client'

import { ReactNode } from 'react'

interface FloorPlanProps {
	children: ReactNode
}

export default function FloorPlan({ children }: FloorPlanProps) {
	return (
		<div className='w-full'>
			<div className='relative w-full aspect-[16/10] bg-orange-950/80 rounded-2xl border-2 border-neutral-200 overflow-hidden shadow-inner'>
				{/* === БАР / СЦЕНА (верх) === */}
				<div className='absolute top-0 left-0 right-0 h-[12%] bg-gradient-to-b from-orange-400/80 to-orange-900 flex items-center justify-center border-b-4 border-neutral-900'>
					<span className='text-neutral-100 text-xs md:text-sm font-bold tracking-[0.3em] uppercase'>
						BAR & SCENE
					</span>
				</div>

				{/* === ВХОД (низ) === */}
				<div className='absolute bottom-0 left-0 right-0 h-[8%] bg-gradient-to-t from-neutral-300 to-neutral-200 flex items-center justify-center border-t-4 border-dashed border-neutral-400'>
					<span className='text-neutral-600 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase'>
						ENTRANCE
					</span>
				</div>

				{/* === ИГРОВОЕ ПОЛЕ (столы) === */}
				<div className='inset-0 absolute'>{children}</div>
				{/* === ДЕКОР: ЛЁГКАЯ СЕТКА ПОЛА === */}
			</div>
		</div>
	)
}

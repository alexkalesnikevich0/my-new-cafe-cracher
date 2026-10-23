/**
 * ФАЙЛ: services/capacity/components/TableCard.tsx
 *
 * КАРТОЧКА ОДНОГО СТОЛА — ВИД СВЕРХУ + DRAG (PR 6.6.3 / 6.6.7.2).
 */
'use client'

import { useRef } from 'react'

// ============================================================
// ТИПЫ
// ============================================================

interface TableData {
	id: number
	number: number
	capacity: number
	occupied: number
	status: 'free' | 'busy'
	posX: number
	posY: number
	shape: string
	rotation: number
}

interface TableCardProps {
	table: TableData
	onClick: (table: TableData) => void
	editMode?: boolean
	onDragMove?: (id: number, xPercent: number, yPercent: number) => void
}

// ============================================================
// КОНФИГ ФОРМ
// ============================================================

const CHAIR_RADIUS: Record<string, number> = {
	round: 9,
	square: 8,
	'rect-wide': 7,
	'rect-large': 7,
}

const TABLE_VIEWBOX: Record<string, string> = {
	round: '-4 -4 108 108',
	square: '0 0 110 110',
	'rect-wide': '-5 -5 110 110',
	'rect-large': '-8 -8 116 116',
}

const TABLE_SIZES: Record<string, number> = {
	round: 70,
	square: 72,
	'rect-wide': 96,
	'rect-large': 120,
}

const CHAIRS_BY_SHAPE: Record<string, [number, number][]> = {
	round: [
		[8, 50],
		[94, 50],
	],
	square: [
		[51, 11],
		[91, 50],
		[51, 90],
		[12, 50],
	],
	'rect-wide': [
		[28, 18],
		[50, 18],
		[72, 18],
		[28, 82],
		[50, 82],
		[72, 82],
	],
	'rect-large': [
		[30, 10],
		[50, 10],
		[70, 10],
		[30, 90],
		[50, 90],
		[70, 90],
		[0, 50],
		[100, 50],
	],
}

// ============================================================
// КОМПОНЕНТ
// ============================================================

export default function TableCard({
	table,
	onClick,
	editMode = false,
	onDragMove,
}: TableCardProps) {
	const wrapperRef = useRef<HTMLDivElement>(null)

	const dragRef = useRef<{
		isDragging: boolean
		offsetX: number
		offsetY: number
		parentRect: DOMRect | null
	}>({
		isDragging: false,
		offsetX: 0,
		offsetY: 0,
		parentRect: null,
	})

	// === Вычисления ===
	const size = TABLE_SIZES[table.shape] ?? TABLE_SIZES['rect-wide']
	const chairs = CHAIRS_BY_SHAPE[table.shape] ?? CHAIRS_BY_SHAPE['rect-wide']
	const visibleChairs = chairs.slice(0, Math.min(table.capacity, chairs.length))

	const isFree = table.status === 'free'
	const tableFill = isFree ? '#dcfce7' : '#fee2e2'
	const tableStroke = isFree ? '#16a34a' : '#dc2626'
	const chairFill = isFree ? '#86efac' : '#fca5a5'

	// === Drag handlers ===
	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!editMode) return

		const el = wrapperRef.current
		if (!el) return

		const parentEl = el.parentElement
		if (!parentEl) return

		const rect = el.getBoundingClientRect()
		dragRef.current = {
			isDragging: true,
			offsetX: e.clientX - rect.left - rect.width / 2,
			offsetY: e.clientY - rect.top - rect.height / 2,
			parentRect: parentEl.getBoundingClientRect(),
		}

		el.setPointerCapture(e.pointerId)
	}

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!dragRef.current.isDragging) return
		if (!onDragMove) return
		if (!dragRef.current.parentRect) return

		const parentRect = dragRef.current.parentRect
		const centerX = e.clientX - parentRect.left - dragRef.current.offsetX
		const centerY = e.clientY - parentRect.top - dragRef.current.offsetY

		const xPercent = (centerX / parentRect.width) * 100
		const yPercent = (centerY / parentRect.height) * 100

		const clampedX = Math.max(0, Math.min(100, xPercent))
		const clampedY = Math.max(0, Math.min(100, yPercent))

		onDragMove(table.id, Math.round(clampedX), Math.round(clampedY))
	}

	const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
		dragRef.current.isDragging = false
		const el = wrapperRef.current
		if (el) el.releasePointerCapture(e.pointerId)
	}

	// === Click ===
	const handleClick = () => {
		if (editMode) return
		onClick(table)
	}

	// === JSX ===
	return (
		<div
			ref={wrapperRef}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
			onPointerCancel={handlePointerUp}
			className='absolute'
			style={{
				left: `${table.posX}%`,
				top: `${table.posY}%`,
				transform: `translate(-50%, -50%) rotate(${table.rotation}deg)`,
				cursor: editMode ? 'grab' : 'pointer',
				touchAction: editMode ? 'none' : 'auto',
				zIndex: dragRef.current.isDragging ? 100 : 1,
			}}
		>
			<button
				type='button'
				onClick={handleClick}
				className='flex flex-col items-center gap-1 cursor-pointer duration-700 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1'
				aria-label={`Стол ${table.number}, мест: ${table.capacity}, ${
					isFree ? 'свободен' : 'занят'
				}`}
			>
				<svg
					width={size}
					height={size}
					viewBox={TABLE_VIEWBOX[table.shape] ?? '0 0 100 100'}
					xmlns='http://www.w3.org/2000/svg'
				>
					{table.shape === 'round' ? (
						<circle
							cx={51}
							cy={51}
							r={28}
							fill={tableFill}
							stroke={tableStroke}
							strokeWidth={3}
						/>
					) : (
						<rect
							x={
								table.shape === 'square'
									? 26
									: table.shape === 'rect-wide'
										? 15
										: 12
							}
							y={
								table.shape === 'square'
									? 25
									: table.shape === 'rect-wide'
										? 30
										: 22
							}
							width={
								table.shape === 'square'
									? 50
									: table.shape === 'rect-wide'
										? 70
										: 76
							}
							height={
								table.shape === 'square'
									? 50
									: table.shape === 'rect-wide'
										? 40
										: 56
							}
							rx={table.shape === 'square' ? 6 : 8}
							fill={tableFill}
							stroke={tableStroke}
							strokeWidth={3}
						/>
					)}
					{/** Стулья */}
					{visibleChairs.map(([cx, cy], i) => (
						<circle
							key={i}
							cx={cx}
							cy={cy}
							r={CHAIR_RADIUS[table.shape] ?? 7}
							fill={chairFill}
							stroke={tableStroke}
							strokeWidth={2}
						/>
					))}

					<text
						x={51}
						y={50}
						textAnchor='middle'
						dominantBaseline='central'
						fontSize={22}
						fontWeight='bold'
						fill={tableStroke}
					>
						{table.number}
					</text>
				</svg>
				{/** подпись под столом сколько мест */}
				<div className='rounded-lg pb-1 bg-orange-300/40 border border-black/70 hidden xl:block'>
					<span className='text-[10px] p-1 md:text-xs text-white/70 font-medium whitespace-nowrap'>
						{table.capacity} seats
					</span>
				</div>
			</button>
		</div>
	)
}

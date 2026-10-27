/**
 * ФАЙЛ: services/capacity/components/TablesGrid.tsx
 *
 * СЕТКА СТОЛОВ (PR 6.5.3) + РЕЖИМ РЕДАКТИРОВАНИЯ (6.6.4) + ВЫБОР ДАТЫ.
 */

'use client'

import { useState, useEffect } from 'react'
import TableCard from './TableCard'
import TableModal from './TableModal'
import FloorPlan from './FloorPlan'

import toast from 'react-hot-toast'

// =
// ТИПЫ
// ==
interface TableData {
	id: number
	number: number
	capacity: number
	occupied: number
	status: 'free' | 'busy' | 'blocked'
	posX: number
	posY: number
	shape: string
	rotation: number
	isBlocked: boolean
}

// ===
// КОМПОНЕНТ
// ===

export default function TablesGrid() {
	const [tables, setTables] = useState<TableData[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [selectedTable, setSelectedTable] = useState<TableData | null>(null)

	// == Режим редактирования ==
	const [editMode, setEditMode] = useState(false)
	const [saving, setSaving] = useState(false)

	// == Выбор даты (по умолчанию сегодня) ==
	const today = new Date().toISOString().split('T')[0]
	const [selectedDate, setSelectedDate] = useState(today)

	// Загрузка столов из API (зависит от выбранной даты)
	useEffect(() => {
		setLoading(true)
		fetch(`/api/tables?date=${selectedDate}`) //  ПЕРЕДАЕМ ДАТУ
			.then(res => {
				if (!res.ok) throw new Error('Failed to fetch')
				return res.json()
			})
			.then((data: TableData[]) => setTables(data))
			.catch(() => setError('Failed to load tables'))
			.finally(() => setLoading(false))
	}, [selectedDate]) // ПЕРЕЗАГРУЖАЕМ ПРИ СМЕНЕ ДАТЫ

	// ===
	// Drag
	// ===
	const handleDragMove = (id: number, xPercent: number, yPercent: number) => {
		setTables(prev =>
			prev.map(t =>
				t.id === id ? { ...t, posX: xPercent, posY: yPercent } : t,
			),
		)
	}

	// ===
	// save / cancel
	// ===
	const handleSave = async () => {
		setSaving(true)
		try {
			const positions = tables.map(t => ({
				id: t.id,
				posX: t.posX,
				posY: t.posY,
			}))
			const res = await fetch('/api/tables', {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ positions }),
			})

			if (!res.ok) throw new Error('Failed to save')

			toast.success('Position saved')
			setEditMode(false)
		} catch {
			toast.error('Can not saved positions')
		} finally {
			setSaving(false)
		}
	}

	const handleCancel = async () => {
		setLoading(true)
		try {
			const res = await fetch(`/api/tables?date=${selectedDate}`) //  ДАТА
			if (!res.ok) throw new Error('Failed to reload')
			const data: TableData[] = await res.json()
			setTables(data)
			setEditMode(false)
		} catch {
			toast.error('Can not saved changes')
		} finally {
			setLoading(false)
		}
	}

	// ==
	// СОСТОЯНИЯ
	// ==

	if (loading) {
		return (
			<div className='text-center py-10 text-gray-500 animate-pulse'>
				Loading tables...
			</div>
		)
	}

	if (error) {
		return (
			<div className='text-center py-10 text-red-600' role='alert'>
				{error}
			</div>
		)
	}

	if (tables.length === 0) {
		return (
			<div className='text-center py-10 text-gray-500'>
				Tables has not found. Add them to Prisma Studio
			</div>
		)
	}

	// ============================================================
	// ОСНОВНОЙ РЕНДЕР
	// ============================================================

	return (
		<div className='relative'>
			{/** Control Panel */}
			<div className='flex flex-col md:flex-row items-center justify-between mb-4 gap-4'>
				<div className='text-sm text-gray-600'>
					{editMode
						? 'Drag tables with mouse. Then click save'
						: 'Click on table to open details'}
				</div>

				<div className='flex items-center gap-4'>
					{/*  КАЛЕНДАРИК ВЫБОРА ДАТЫ */}
					{!editMode && (
						<div className='flex items-center gap-2 '>
							<label
								htmlFor='date-picker'
								className='text-sm font-medium text-gray-700'
							>
								Date:
							</label>
							<input
								type='date'
								id='date-picker'
								value={selectedDate}
								onChange={e => setSelectedDate(e.target.value)}
								className='border border-gray-500 cursor-pointer rounded-md bg-stone-200 px-3 py-1.5 text-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900'
							/>
						</div>
					)}

					{!editMode && (
						<button
							type='button'
							onClick={() => setEditMode(true)}
							className='px-8 py-2 cursor-pointer text-sm font-medium bg-blue-600 text-white/70 hover:text-white rounded-lg hover:bg-blue-700 transition-colors'
						>
							Edit
						</button>
					)}
				</div>
			</div>

			{/** схема */}
			<FloorPlan>
				{tables.map(table => (
					<TableCard
						key={table.id}
						table={table}
						onClick={t => setSelectedTable(t)}
						editMode={editMode}
						onDragMove={handleDragMove}
					/>
				))}
			</FloorPlan>

			{/** Saving panel (only in edit mode) */}
			{editMode && (
				<div className='fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white border-2 border-gray-200 shadow-2xl rounded-xl px-4 py-3 flex items-center gap-3'>
					<button
						type='button'
						onClick={handleCancel}
						disabled={saving}
						className='px-4 py-2 text-sm font-medium cursor-pointer bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50'
					>
						Cancel
					</button>
					<button
						type='button'
						onClick={handleSave}
						disabled={saving}
						className='px-4 py-2 text-sm font-medium cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50'
					>
						{saving ? 'Saving...' : 'Save'}
					</button>
				</div>
			)}

			{/** Modal */}
			{!editMode && (
				<TableModal
					table={selectedTable}
					selectedDate={selectedDate} //  ПЕРЕДАЕМ ДАТУ В МОДАЛКУ
					onClose={() => setSelectedTable(null)}
					onSaved={() => {
						fetch(`/api/tables?date=${selectedDate}`) // ПРИ ОБНОВЛЕНИИ ТОЖЕ ДАТА
							.then(res => res.json())
							.then((data: TableData[]) => setTables(data))
					}}
				/>
			)}
		</div>
	)
}

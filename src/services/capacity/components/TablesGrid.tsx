/**
 * ФАЙЛ: services/capacity/components/TablesGrid.tsx
 *
 * СЕТКА СТОЛОВ (PR 6.5.3).
 * Загружает столы из API, показывает TableCard для каждого.
 */

'use client'

import { useState, useEffect } from 'react'
import TableCard from './TableCard'
import TableModal from './TableModal'

// ============================================================
// ТИПЫ
// ============================================================

interface TableData {
	id: number
	number: number
	capacity: number
	occupied: number
	status: 'free' | 'busy'
}

// ============================================================
// КОМПОНЕНТ
// ============================================================

export default function TablesGrid() {
	const [tables, setTables] = useState<TableData[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [selectedTable, setSelectedTable] = useState<TableData | null>(null)
	// Загрузка столов из API
	useEffect(() => {
		fetch('/api/tables')
			.then(res => {
				if (!res.ok) throw new Error('Failed to fetch')
				return res.json()
			})
			.then((data: TableData[]) => setTables(data))
			.catch(() => setError('Failed to load tables'))
			.finally(() => setLoading(false))
	}, [])

	// ============================================================
	// СОСТОЯНИЯ
	// ============================================================

	if (loading) {
		return (
			<div className='text-center py-10 text-gray-500 animate-pulse'>
				Загружаем столы...
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
				Столы не найдены. Добавьте их в Prisma Studio.
			</div>
		)
	}

	// ============================================================
	// ОСНОВНОЙ РЕНДЕР
	// ============================================================

	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center'>
			{tables.map(table => (
				<TableCard
					key={table.id}
					table={table}
					onClick={t => setSelectedTable(t)}
				/>
			))}
			{/** Modal */}
			<TableModal
				table={selectedTable}
				onClose={() => setSelectedTable(null)}
			/>
		</div>
	)
}

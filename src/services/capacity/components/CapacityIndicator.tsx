/**
 * ФАЙЛ: services/capacity/components/CapacityIndicator.tsx
 *
 * ПОКАЗЫВАЕТ СВОБОДНЫЕ МЕСТА (PR 6.4).
 * Обновляется при смене даты/времени.
 *
 * Цвета:
 * - Зелёный: много мест (> 50%)
 * - Жёлтый: мало мест (10–50%)
 * - Красный: почти нет (< 10%)
 */

'use client'

import { useEffect, useState } from 'react'

interface CapacityIndicatorProps {
	date: string
	time: string
	duration?: number
}

interface CapacityData {
	total: number
	used: number
	available: number
}

export default function CapacityIndicator({
	date,
	time,
	duration = 120,
}: CapacityIndicatorProps) {
	const [capacity, setCapacity] = useState<CapacityData | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	// Загружаем capacity при смене date/time
	useEffect(() => {
		if (!date || !time) {
			setCapacity(null)
			return
		}

		setLoading(true)
		setError(null)

		fetch(`/api/capacity?date=${date}&time=${time}&duration=${duration}`)
			.then(res => {
				if (!res.ok) throw new Error('Failed to fetch')
				return res.json()
			})
			.then((data: CapacityData) => setCapacity(data))
			.catch(() => setError('Failed to load capacity'))
			.finally(() => setLoading(false))
	}, [date, time, duration])

	// Цвет в зависимости от доступных мест
	function getColor(): string {
		if (!capacity) return 'text-gray-400'
		const percent = (capacity.available / capacity.total) * 100
		if (percent > 50) return 'text-green-600'
		if (percent > 10) return 'text-yellow-600'
		return 'text-red-600'
	}

	function getBgColor(): string {
		if (!capacity) return 'bg-gray-100'
		const percent = (capacity.available / capacity.total) * 100
		if (percent > 50) return 'bg-green-100'
		if (percent > 10) return 'bg-yellow-100'
		return 'bg-red-100'
	}

	// Состояния
	if (loading) {
		return (
			<div className='text-sm text-gray-500 animate-pulse'>
				Checking available seats...
			</div>
		)
	}

	if (error) {
		return (
			<div className='text-sm text-red-600' role='alert'>
				{error}
			</div>
		)
	}

	if (!capacity) {
		return (
			<div className='text-sm text-gray-500'>Choose another date and time</div>
		)
	}

	// Основной рендер
	return (
		<div
			className={`px-4 py-2 rounded-lg border-2 ${getBgColor()} ${getColor()} font-medium text-sm`}
			role='status'
			aria-live='polite'
		>
			Available: {capacity.available} from {capacity.total} seats
		</div>
	)
}

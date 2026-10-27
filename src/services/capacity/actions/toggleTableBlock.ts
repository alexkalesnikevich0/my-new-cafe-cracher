'use server'

import prisma from '@/app/booking/lib/prisma'

export async function toggleTableBlock(tableId: number, isBlocked: boolean) {
	try {
		await prisma.table.update({
			where: { id: tableId },
			data: { isBlocked },
		})
		return { success: true }
	} catch (error) {
		console.error('toggleTableBlock error:', error)
		return { error: 'Failed to block/unblock table' }
	}
}

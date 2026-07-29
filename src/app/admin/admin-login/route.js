import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request) {
	const { password } = await request.json()

	if (password === process.env.ADMIN_PASSWORD) {
		const cookiesStore = await cookies()
		cookiesStore.set('admin_token', 'true', {
			httpOnly: true,
			secure: false,
			path: '/',
		})
		return NextResponse.json({ ok: true })
	}
	return NextResponse.json({ error: 'Wrong password!' }, { status: 401 })
}

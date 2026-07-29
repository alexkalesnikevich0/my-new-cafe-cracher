import { NextResponse } from 'next/server'

export function middleware(request) {
	const token = request.cookies.get('admin_token')
	const { pathname } = request.nextUrl

	if (
		pathname.startsWith('/admin') &&
		pathname !== '/admin/login' &&
		pathname !== '/admin/admin-login'
	) {
		if (!token || token.value !== 'true') {
			return NextResponse.redirect(new URL('/admin/login', request.url))
		}
	}

	return NextResponse.next()
}

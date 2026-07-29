import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/beer/assets/navbar'
import Footer from '@/app/footer/page'
import Navigation from '@/components/beer/assets/navigation'
import Chevron from '@/app/chevron/page'
import ScrollToTop from '@/app/booking/components/scrollToTop'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Cafe Cracher',
	description: 'CAFE',
	icons: {
		icon: '/icon.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className=''>
					<header>
						<Navbar />
					</header>
					<main className='pt-15'>{children}</main>
					<footer>
						<Navigation />
						<div id='footer'>
							<Footer />
						</div>
					</footer>
				</div>
				<ScrollToTop />
			</body>
		</html>
	)
}

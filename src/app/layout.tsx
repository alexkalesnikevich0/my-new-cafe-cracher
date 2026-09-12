import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/beer/assets/navbar'
import Footer from '@/app/footer/page'
import Navigation from '@/components/beer/assets/navigation'
import ScrollToTop from '@/app/booking/components/scroll/scrollToTop'
import { Toaster } from 'react-hot-toast'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

// ============================================================
// НОВОЕ ИЗМЕНЕНИЕ: Метаданные для PWA
// ДАТА: Сентябрь 2026
//
// ЧТО ДОБАВЛЕНО:
// - manifest: '/manifest.json' — подключаем PWA-манифест.
// - appleWebApp — настройки для iOS (Safari).
// - themeColor — цвет адресной строки в браузере.
// - viewport — параметры отображения для мобильных устройств.
// ============================================================
export const metadata: Metadata = {
	title: 'Cafe Cracher',
	description: 'CAFE — система бронирования столиков',
	manifest: '/manifest.json', // подключаем PWA-манифест
	icons: {
		icon: '/icon.png',
		apple: '/icon.png', // иконка для iOS
	},
	appleWebApp: {
		capable: true, // разрешаем установку на домашний экран iOS
		statusBarStyle: 'default',
		title: 'Cafe Cracher',
	},
}

// ============================================================
// VIEWPORT — настройки отображения для мобильных
// ============================================================
export const viewport: Viewport = {
	themeColor: '#f5c17a',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
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
				<Toaster position='bottom-right' />
			</body>
		</html>
	)
}

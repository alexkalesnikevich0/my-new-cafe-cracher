import type { NextConfig } from 'next'
import withPWAInit from '@ducanh2912/next-pwa'

// ============================================================
// НОВОЕ ИЗМЕНЕНИЕ: Настройка PWA (Progressive Web App)
// ДАТА: Сентябрь 2026
//
// ЧТО ДЕЛАЕТ:
// - Создаёт Service Worker для кэширования и офлайн-режима.
// - Позволяет установить сайт как приложение на телефон.
//
// ОПЦИИ:
// - dest: 'public' — куда положить сгенерированный Service Worker.
// - cacheOnFrontEndNav: true — кэшировать страницы при навигации.
// - aggressiveFrontEndNavCaching: true — кэшировать всё, что видит пользователь.
// - reloadOnOnline: true — перезагружать страницу, когда интернет вернётся.
// - disable: false — включён в продакшене (можно поставить true для dev).
// ============================================================
const withPWA = withPWAInit({
	dest: 'public',
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	disable: false,
	workboxOptions: {
		disableDevLogs: true,
	},
})

const nextConfig: NextConfig = {
	allowedDevOrigins: ['172.20.10.14'],
	turbopack: {
		root: process.cwd(),
	},
}

// ============================================================
// ОБОРАЧИВАЕМ КОНФИГ В withPWA
// Это включает поддержку PWA во всём проекте.
// ============================================================
export default withPWA(nextConfig)

import type { NextConfig } from 'next'
import withPWAInit from '@ducanh2912/next-pwa'

// ============================================================
// НОВОЕ ИЗМЕНЕНИЕ: PWA (Progressive Web App)
// ДАТА: Сентябрь 2026
//
// ЧТО ЭТО:
// PWA — технология, которая позволяет установить сайт
// как приложение на телефон/компьютер.
//
// ЧТО ДЕЛАЕТ withPWAInit:
// - Автоматически создаёт Service Worker (sw.js).
// - Кэширует страницы и ресурсы для офлайн-режима.
// - Подключает манифест PWA.
//
// ОПЦИИ:
// - dest: 'public' — куда класть sw.js (в папку public).
// - cacheOnFrontEndNav: true — кэшировать страницы при переходах.
// - aggressiveFrontEndNavCaching: true — агрессивное кэширование.
// - reloadOnOnline: true — перезагружать, когда вернётся интернет.
// - disable: false — PWA всегда включён (можно поставить true для dev).
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

// ============================================================
// ОСНОВНОЙ КОНФИГ NEXT.JS
//
// ЧТО ЗДЕСЬ:
// - allowedDevOrigins — разрешает доступ с других устройств в сети.
// - turbopack.root — указывает корень проекта для Turbopack.
// ============================================================
const nextConfig: NextConfig = {
	allowedDevOrigins: ['192.168.1.5'],
	turbopack: {
		root: process.cwd(),
	},
}

// ============================================================
// ЭКСПОРТ: ОБОРАЧИ2ВАЕМ КОНФИГ В withPWA
// Так PWA подключается ко всему проекту.
// ============================================================
export default withPWA(nextConfig)

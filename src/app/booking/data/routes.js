/**
 * ФАЙЛ: app/booking/data/routes.js
 *
 * ОБЩИЕ ДАННЫЕ ДЛЯ ПОДСВЕТКИ АКТИВНОЙ СТРАНИЦЫ В НАВБАРЕ И МОБИЛЬНОМ МЕНЮ.
 * ИСПОЛЬЗУЕТСЯ В: Navbar.jsx, MobileMenu.jsx
 */

/**
 * ГРУППЫ МАРШРУТОВ ДЛЯ КАЖДОЙ КНОПКИ НАВБАРА.
 * КЛЮЧ — НАЗВАНИЕ РАЗДЕЛА, ЗНАЧЕНИЕ — МАССИВ ПУТЕЙ, ОТНОСЯЩИХСЯ К ЭТОМУ РАЗДЕЛУ.
 * ЕСЛИ ПОЛЬЗОВАТЕЛЬ НА ЛЮБОМ ИЗ ЭТИХ ПУТЕЙ — КНОПКА СЧИТАЕТСЯ АКТИВНОЙ.
 */
export const activeButton = {
	events: ['/bezzer', '/wicky', '/hoosch', '/timeride', '/archiv'],
	feste: ['/feierno', '/hochzeit', '/galerie'],
	raumlich: ['/raumlichkeiten'],
	speisen: ['/speisekarte'],
	sion: [
		'/tradition',
		'/kolsch',
		'/raumlichkeiten',
		'/reservierung',
		'/jobs',
		'/restaurant',
	],
}

/**
 * ПРОВЕРЯЕТ, НАХОДИТСЯ ЛИ ПОЛЬЗОВАТЕЛЬ НА ОДНОЙ ИЗ СТРАНИЦ РАЗДЕЛА.
 *
 * @param {string[]} routes - МАССИВ ПУТЕЙ (НАПРИМЕР, ['/bezzer', '/wicky'])
 * @param {string} pathname - ТЕКУЩИЙ URL (ИЗ usePathname())
 * @returns {boolean} - true ЕСЛИ ХОТЯ БЫ ОДИН ПУТЬ СОВПАДАЕТ
 *
 * ПРИМЕР:
 * isButtonActive(['/bezzer', '/wicky'], '/bezzer') → true
 * isButtonActive(['/bezzer', '/wicky'], '/speisekarte') → false
 */
export const isButtonActive = (routes, pathname) =>
	routes.some(route => pathname.startsWith(route))

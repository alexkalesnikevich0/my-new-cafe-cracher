'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// 1. Словарь переводов (мы объединили все слова в одном месте)
const translations = {
	de: {
		// Слова для навбара
		events: 'EVENTS',
		feste: 'FESTE FEIERN',
		reservierung: 'RESERVIERUNG',
		speisen: 'SPEISEN & GERTRÄNKE',
		sion: 'BRAUHAUS SION',

		// Общие слова
		bookTable: 'Tisch reservieren',
		admin: 'Admin',
		tables: 'Tische',
		reservations: 'Reservierungen',
		backToAdmin: 'Zurück zum Admin',
	},
	en: {
		// Слова для навбара
		events: 'EVENTS',
		feste: 'PARTIES & CELEBRATIONS',
		reservierung: 'RESERVATION',
		speisen: 'FOOD & DRINKS',
		sion: 'BRAUHAUS SION',

		// Общие слова
		bookTable: 'Book a table',
		admin: 'Admin',
		tables: 'Tables',
		reservations: 'Reservations',
		backToAdmin: 'Back to Admin',
	},
}

type Language = 'en' | 'de'
// TypeScript автоматически понимает, какие ключи есть в словаре
type TranslationKey = keyof (typeof translations)['en']

interface LanguageContextType {
	lang: Language
	toggleLang: () => void
	t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
)

export function LanguageProvider({ children }: { children: ReactNode }) {
	// ВАЖНО: ставим 'de', потому что твой сайт изначально на немецком
	const [lang, setLang] = useState<Language>('de')

	const toggleLang = () => {
		setLang(prev => (prev === 'de' ? 'en' : 'de')) // Меняем de <-> en
	}

	const t = (key: TranslationKey) => {
		return translations[lang][key] || key
	}

	return (
		<LanguageContext.Provider value={{ lang, toggleLang, t }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within LanguageProvider')
	}
	return context
}

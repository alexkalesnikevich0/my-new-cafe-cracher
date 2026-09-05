import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: ['src/features/booking/tests/**/*.{test,spec}.{js,ts}'],
		environment: 'node',
		testTimeout: 10000,
	},
})

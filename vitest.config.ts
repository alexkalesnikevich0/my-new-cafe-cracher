import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: [
			'src/features/booking/tests/**/*.{test,spec}.{js,ts}',
			'src/services/capacity/tests/**/*.{test,spec}.{js,ts}', // NEW PR6 6.3
		],
		environment: 'node',
		testTimeout: 10000,
	},
})

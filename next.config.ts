import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	allowedDevOrigins: ['172.20.10.14'],
	turbopack: {
		root: process.cwd(),
	},
}

export default nextConfig

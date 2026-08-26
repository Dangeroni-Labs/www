// @ts-check

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon({
			include: {
				mdi: [
					'weather-sunny',
					'weather-night',
					'desktop-classic',
					'arrow-right',
					'open-in-new',
					'bug-outline',
				],
				'simple-icons': ['github', 'curseforge', 'modrinth'],
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
})

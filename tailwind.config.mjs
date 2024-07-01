/** @type {import('tailwindcss').Config} */

import { theme } from 'tailwindcss/defaultConfig'

const colors = theme.colors;

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				backgroundPrimary: '#FFDFEA',
				backgroundSecondary: '#FFF4F8',
				primary: '#BC88DB',
				secondary: '#86B2FE',
				font: '#000000',
				unrealEngine: '#313131',
				blender: '#F5792A',
			},
			fontFamily: {
				handwrite: 'Salsa'
			}
		},
	},
	plugins: [],
}

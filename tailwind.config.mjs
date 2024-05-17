import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans Variable', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'primary': {
					'50': '#fefae8',
					'100': '#fef5c3',
					'200': '#feec8a',
					'300': '#fde047',
					'400': '#fad615',
					'500': '#eac608',
					'600': '#caaa04',
					'700': '#a18807',
					'800': '#85720e',
					'900': '#716212',
					'950': '#423806',
			},
			}
		},
	},
	plugins: [],
}

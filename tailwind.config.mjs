import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'primary': { // #d7d275
					'50': '#fbfaef',
					'100': '#f2f2d3',
					'200': '#e4e3a3',
					'300': '#d7d275',
					'400': '#cdc252',
					'500': '#c3aa3d',
					'600': '#ac8a33',
					'700': '#8f6a2e',
					'800': '#76552a',
					'900': '#614626',
					'950': '#372511',
			},
				'secondary': { // #63ab94
					'50': '#f4f9f7',
					'100': '#d9eee6',
					'200': '#b2ddcc',
					'300': '#84c4ae',
					'400': '#63ab94',
					'500': '#418b75',
					'600': '#326f5e',
					'700': '#2b5a4d',
					'800': '#264940',
					'900': '#233e37',
					'950': '#10231f',
			},
			}
		},
	},
	plugins: [],
}

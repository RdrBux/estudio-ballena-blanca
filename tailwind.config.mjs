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
				'primary': { // #e4e267
					'50': '#fbfbeb',
					'100': '#f4f6cb',
					'200': '#ebed9b',
					'300': '#e4e267',
					'400': '#d9cf36',
					'500': '#cab928',
					'600': '#ae9420',
					'700': '#8b6e1d',
					'800': '#74581f',
					'900': '#634a20',
					'950': '#39270f',
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

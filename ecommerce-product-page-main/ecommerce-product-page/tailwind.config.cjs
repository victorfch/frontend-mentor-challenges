/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light-gray-blue': 'hsl(223, 64%, 98%);',
				'primary': 'hsl(26, 100%, 55%);',
				'secondary': 'hsl(25, 100%, 94%);'
			},
			borderColor: {
				'hsl-primary': 'hsl(26, 100%, 55%)',
				'hsl-gray-blue': 'hsl(220, 14%, 75%)'
			},
			boxShadow: {
				'xl': '0 4px 25px -5px rgba(0, 0, 0, .1), 0 8px 10px -6px rgba(0, 0, 0, .1);'
			},
			gridTemplateColumns: {
				'autofit': 'repeat(auto-fit, minmax(400px, 1fr));'
			},
		},
	},
	plugins: [],
}

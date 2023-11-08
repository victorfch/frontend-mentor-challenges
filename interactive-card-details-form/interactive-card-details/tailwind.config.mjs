/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'light-grayish-violet': "hsl(270, 3%, 87%)",
        'dark-violet-custom': "hsl(278, 68%, 11%)" 
      }
		},
	},
	plugins: [],
}

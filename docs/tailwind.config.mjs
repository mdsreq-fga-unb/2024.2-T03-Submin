import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

const accentColors = { 200: '#96D0FF	', 300: '#96D0FF', 600: '#6DACDF' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent: accentColors,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.zinc,
			},
		},
	},
	plugins: [starlightPlugin()],
};

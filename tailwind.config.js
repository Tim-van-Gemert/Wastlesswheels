
// Config
import colors from '../src/_tailwind/config/colors.js';
import spacing from './src/_tailwind/config/spacing.js';
import width from './src/_tailwind/config/width.js';
import maxWidth from './src/_tailwind/config/maxWidth.js';
import breakpoints from './src/_tailwind/config/breakpoints.js';
import fontSize from './src/_tailwind/config/fontSize.js';



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors,
      spacing,
      width,
      maxWidth,
      breakpoints,
      fontSize,
    },
  },
  plugins: [],
}

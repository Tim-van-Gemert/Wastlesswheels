
// Config
import colors from './src/_tailwind/config/colors';
import spacing from './src/_tailwind/config/spacing';
import width from './src/_tailwind/config/width';
import maxWidth from './src/_tailwind/config/maxWidth';
import screens from './src/_tailwind/config/screens';
import fontSize from './src/_tailwind/config/fontSize';



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
      screens,
      fontSize,
    },
  },
  plugins: [],
}

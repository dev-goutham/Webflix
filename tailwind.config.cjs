/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vulcan: {
          50: '#f3f3f4',
          100: '#e7e8e9',
          200: '#c3c4c7',
          300: '#9fa1a5',
          400: '#585b62',
          500: '#10141e',
          600: '#0e121b',
          700: '#0c0f17',
          800: '#0a0c12',
          900: '#080a0f',
        },
        jacarta: {
          50: '#f4f4f7',
          100: '#e9e9ef',
          200: '#c9c8d8',
          300: '#a9a7c1',
          400: '#686492',
          500: '#272263',
          600: '#231f59',
          700: '#1d1a4a',
          800: '#17143b',
          900: '#131131',
        },
      },
    },
  },
  plugins: [],
};

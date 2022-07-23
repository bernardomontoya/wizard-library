/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#595959',
        'gray-very-dark': '#404040',
        'gray-light': '#F0F3F5',
        'blue-vivid': '#0072CE',
      },
    },
  },
  plugins: [],
};

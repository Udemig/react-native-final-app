/** @type {import('tailwindcss').Config} */

const colors = require('./src/components/ui/theme/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    ...colors,
  },
};

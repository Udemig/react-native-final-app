/** @type {import('tailwindcss').Config} */

const colors = require('./src/components/ui/theme/colors');
const nativewind = require('nativewind/tailwind/native');

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    ...colors,
  },
};

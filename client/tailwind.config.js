/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        dynaPuff: ['DynaPuff', ...defaultTheme.fontFamily.sans],
        fredoka: ['Fredoka', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
}


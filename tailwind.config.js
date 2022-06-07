const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['"Roboto Slab"', 'serif'],
        body: ['Roboto', 'sans-serif'],
    },
    extend: {},
},
variants: {
    extend: {},
},
  // plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
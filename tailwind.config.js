/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      myTheme: '#E5CB9F',
    },
    extend: {},
  },
  plugins: [],
}

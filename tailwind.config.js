/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myTheme: '#E5CB9F',
        tagBgColor: '#FFA500',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        myBgColor: '#E5CB9F',
        myBgColorHover: '#D3BA8E',
        myTextColor: '#06283D',
        myTagColor: '#06283D',
        myBlogListBgColor: '#F5F5F5',
        myBlogContentBgColor: '#F5F5F5',
        myBlogContentBgColorHover: '#EFEFEF',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

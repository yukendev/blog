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
        myBgColor: '#FFFFFF', // 全体の背景色
        myBgColorDark: '#F2F2F2', // 背景色より少し濃い色
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

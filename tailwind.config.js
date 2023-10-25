/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '5xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors:{
        custom: {
          black: '#202020',
        },
          'gray-light': '#C2C1C1',
      },
      backgroundImage:{
        'header': "url('./assets/img/bg-header.png')",
      },
      backgroundColor: {
        'gray-dark': '#202020',
      },
      fontFamily: {
        inter: ['Inter', 'sans'], 
        raleway: ['Raleway', 'sans']
      },
    },
  },
  plugins: [],
}
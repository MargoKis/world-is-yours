/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom: {
          black: '#2D2D2D',
        }
      },
      backgroundImage:{
        'header': "url('./assets/img/bg-header.png')",
      }
    },
  },
  plugins: [],
}
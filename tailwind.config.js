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
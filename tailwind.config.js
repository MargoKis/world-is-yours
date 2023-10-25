/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-dark': '#2D2D2D',
      },
      fontFamily: {
        inter: ['Inter', 'sans'], 
        raleway: ['Raleway', 'sans']
      },
      colors: {
        'gray-light': '#C2C1C1',
      },
    },
  },
  plugins: [],
}
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
        inter: ['Inter', 'sans'], // 'CustomFont' - название шрифта, 'sans' - системный шрифт по умолчанию
      },
    },
  },
  plugins: [],
}
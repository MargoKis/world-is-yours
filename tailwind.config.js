/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        "5xl": "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        custom: {
          black: "#202020",
        },
        grayLight: "#C2C1C1",
        grayDark: "#202020",
        gray: '#646464',
        blue: '#135CFB',
      },
      width: {
        '49': '49%', // Пример собственной ширины
      },
      backgroundImage: {
        header: "url('./assets/img/bg-header.png')",
      },
      backgroundColor: {
        "gray-dark": "#202020",
      },
      fontFamily: {
        inter: ["Inter", "sans"],
        raleway: ["Raleway", "sans"],
      },
      fontSize: { 
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '21px': '21px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '50px': '50px',
      },
    },
  },
  plugins: [],
};

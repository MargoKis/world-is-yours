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
        gray: '#888888',
        blue: '#135CFB',
        textLight: '#515151',
      },
      borderColor: {
        'black': "#202020", 
      },
      width: {
        '49': '49%', 
        '21': '21rem',
      },
      backgroundImage: {
        header: "url('./assets/img/bg-header.png')",
        page404: "url('./assets/icons/notFound404.png')"
      },
      backgroundColor: {
        "gray-dark": "#202020",
      },
      fontFamily: {
        // inter: ["Inter", "sans"],
        raleway: ["Raleway", "sans"],
      },
      fontWeight: {
        light: 300, 
        normal: 400,
        bold: 700,
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

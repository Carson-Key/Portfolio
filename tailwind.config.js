module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'drawer-menu': "url('./assets/Menu-BG.png')"
      },
      colors: {
        primary: "#9e9243",
        secondary: "#222222"
      },
      fontFamily: {
        helvetica: ["Helvetica"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

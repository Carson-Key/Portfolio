module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'drawer-menu': "url('./Menu-BG.png')"
      },
      colors: {
        primary: "#9e9243",
        secondary: "#222222"
      },
      fontFamily: {
        helvetica: ["Helvetica"],
      },
      zIndex: {
        '-10': '-10',
      },
      height: {
        '112': '36rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

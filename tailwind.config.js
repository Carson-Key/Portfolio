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
      width: {
        '128': '44rem'
      },
      height: {
        '68': '17rem',
        '76': '19rem',
        '98': '29rem',
        '100': '30rem',
        '102': '31rem',
        '104': '32rem',
        '112': '36rem',
        '128': '42rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

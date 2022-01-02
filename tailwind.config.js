module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        custom_black: '#000428',
        custom_blue: '#004e92',
        custom_pink: '#fc00ff',
        custom_cyan: '#00dbde',
        lightblue: '#00C9FF',
        lightgreen: '#92FE9D',
        custom_purple: '#833ab4',
        custom_red: '#fd1d1d',
        custom_orange: '#fcb045',
        custom_black1: '#16222A',
        custom_black2: '#3A6073',
        'custom_pink-200': '#cc2b5e',
        'custom_purple-50': '#753a88',
        custom_green: '#348F50',
        'custom_cyan-50': '#56B4D3',
        'custom_black-100': '#0E0C0A'
      }
    },
    fontFamily: {
      nunito: ['Nunito Sans']
    }
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
  darkMode: 'class',
  variants: {
    scrollbar: ['dark']
  }
}

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
        heading: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '10xl': '10rem',
      },
      colors: {
        primary: '#EB5757',
        secondary: '#F2994A',
      },
    },
  },
  plugins: [],
}

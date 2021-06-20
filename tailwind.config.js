/* eslint-disable */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/data/*.js', './src/**/*.vue', './src/*.vue'],
  darkMode: false,
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      padding: {
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

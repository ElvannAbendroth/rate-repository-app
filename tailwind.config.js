/** @type {import('tailwindcss').Config} */

//const colors = require('tailwindcss/colors')
// const { platformSelect } = require('nativewind')

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: '#fff', //white
        primary: '#06b6d4', //cyan-500
        muted: '#94a3b8', //slate-400
        background: '#0f172a', //slate-900
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

//const colors = require('tailwindcss/colors')
// const { platformSelect } = require('nativewind')

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: '#fafafa', //zinc-50
        primary: '##3b82f6', //blue-500
        muted: '#94a3b8', //slate-400
        background: '#18181b', //zinc-900
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans'],
        anton: ['Anton'],
        nexa: ['Nexa']
      },
      colors: {
        lavender: '#9F7FF3',
        pnk: '#C936B7',
        bg: '#040513'
      },
      dropShadow: {
        shapes: '0px 0px 10px #C936B7',
        road: '0px 0px 10px #9F7FF3'

      }
    },
  },
  plugins: [],
}


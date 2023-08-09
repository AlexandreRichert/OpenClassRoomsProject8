// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      1: '0px 0px 5px rgba(66, 66, 66, 0.75)',
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      1: '5px 5px 5px rgba(66, 66, 66, 0.75)',
      2: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/shape_contact.svg')",
        'about-pattern': "url('./assets/about.svg')",
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
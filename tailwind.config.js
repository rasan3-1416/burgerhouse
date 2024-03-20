/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      // Background images URL
      backgroundImage: {
        'home': "url('../../src/img/home-bg.png')"
      }
    },
  },
  plugins: [],
}


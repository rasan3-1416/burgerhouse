/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      // Custom Font Family
      fontFamily: {
        'mont': 'var(--font-mont)',
        'bebas': 'var(--font-bebas)',
        'alfa': 'var(--font-alfa)',
      },
      // Background images URL
      backgroundImage: {
        'home': "url('../../src/img/home-bg.png')",
        'plater-1': "url('../../src/img/plater-1.jpg')",
        'plater-2': "url('../../src/img/plater-2.jpg')",
        'plater-3': "url('../../src/img/plater-3.jpg')",
      },
      // Custom Z index value
      zIndex: {
        'tooltip': 51,
        'fixed': 52,
        'modal': 60,
        'preloader': 100,
      },
    },
    // Custom Colors
    colors: {
      'transparent': 'transparent',
      'c-first': 'hsl(var(--first-color) / <alpha-value>)',
      'c-first-alt': 'hsl(var(--first-alt-color) / <alpha-value>)',
      'c-body': 'hsl(var(--body-color) / <alpha-value>)',
      'c-title': 'hsl(var(--title-color) / <alpha-value>)',
      'c-prime': 'hsl(var(--text-color) / <alpha-value>)',
      'c-first': 'hsl(var(--first-color) / <alpha-value>)',
      'c-alt-first': 'hsl(var(--alt-first-color) / <alpha-value>)',
      "c-black": "hsl(var(--black) / <alpha-value>)",
      "c-white": "hsl(var(--white) / <alpha-value>)",
    },
    // Custom Breakpoints
    screens: {
      'xm': {'max':'320px'},
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024px',
      'xxl': '1300px',
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities ({
        // Responsive Typography
        '.fs-biggest': {fontSize:'clamp(4rem, 7vw, 7.25rem)'},
        '.fs-biggest-alt': {fontSize:'clamp(2rem, 7vw, 3.5rem)'},
        '.fs-heading': {fontSize: 'var(--fs-heading)'},
        '.fs-xxl': {fontSize: 'var(--fs-xxl)'},
        '.fs-xl': {fontSize: 'var(--fs-xl)'},
        '.fs-lg': {fontSize: 'var(--fs-lg)'},
        '.fs-md': {fontSize: 'var(--fs-md)'},
        '.fs-sm': {fontSize: 'var(--fs-sm)'},
        '.fs-xm': {fontSize: 'var(--fs-xm)'},
        '.fs-xxm': {fontSize: 'var(--fs-xxm)'},
        // Responsive Header Height
        '.h-header': {height: 'var(--header-height)', '@screen md': {height: 'calc(var(--header-height) + 2.5rem)'}},
        // Custom Transition
        '.transe-ease': {transition: '0.3s ease-in-out'},
        '.transe-ease-l': {transition: '0.4s ease-in-out'}
      })
    }),
    plugin(function({ addVariant }){
      addVariant ('dynamic-style', '.dynamic-style&')
    }),
    plugin(function({ addComponents }) {
      addComponents({
        // Custom Container Styles
        '.container': {
          maxWidth: '1300px', paddingLeft: '1.5rem', paddingRight: '1.5rem',
          '@screen md': {paddingLeft: '2rem', paddingRight: '2rem'},
          '@screen lg': {paddingLeft: '2.5rem', paddingRight: '2.5rem'},
          '@screen xl': {paddingLeft: '3rem', paddingRight: '3rem'},
          '@screen xxl': {marginLeft: 'auto', marginRight: 'auto'},
        },
        // Custom Utility Classes
        // '.vertical-rl': {writingMode: 'vertical-rl'}
      })
    })
  ],
}


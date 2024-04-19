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
      // Drop Shadows
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
    // Custom Colors
    colors: {
      'transparent': 'transparent',
      'c-first': 'hsl(var(--first-color) / <alpha-value>)',
      'c-first-alt': 'hsl(var(--first-color-alt) / <alpha-value>)',
      'c-body': 'hsl(var(--body-color) / <alpha-value>)',
      'c-title': 'hsl(var(--title-color) / <alpha-value>)',
      'c-prime': 'hsl(var(--text-color) / <alpha-value>)',
      'c-title-alt': 'hsl(var(--title-color-alt) / <alpha-value>)',
      "c-black": "hsl(var(--black) / <alpha-value>)",
      "c-white": "hsl(var(--white) / <alpha-value>)",
    },
    // Custom Breakpoints
    screens: {
      'xm': {'max':'320px'},
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1350px',
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities ({
        // Responsive Typography
        '.fs-biggest': {fontSize:'clamp(4rem, 7vw, 7.25rem)'},
        '.fs-biggest-alt': {fontSize:'clamp(2rem, 7vw, 3.5rem)'},
        '.fs-heading': {fontSize:'clamp(1.75rem, 7vw, 3.125rem)'},
        '.fs-heading-alt': {fontSize:'clamp(1.65rem, 6vw, 2.75rem)'},
        '.fs-xxxl': {fontSize:'clamp(1.5rem, 7vw, 2.5rem)'},
        '.fs-xxl': {fontSize:'clamp(1.25rem, 7vw, 2rem)'},
        '.fs-xl': {fontSize:'clamp(1rem, 7vw, 1.5rem)'},
        '.fs-lg': {fontSize:'clamp(0.875rem, 7vw, 1.25rem)'},
        '.fs-md': {fontSize:'clamp(0.8125rem, 7vw, 1rem)'},
        '.fs-sm': {fontSize:'clamp(0.75rem, 7vw, 0.875rem)'},
        '.fs-xm': {fontSize:'clamp(0.65rem, 7vw, 0.8125rem)'},
        '.fs-xxm': {fontSize:'clamp(0.5rem, 7vw, 0.75rem)'},
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
          maxWidth: '1350px', paddingLeft: '1.5rem', paddingRight: '1.5rem',
          '@screen md': {paddingLeft: '2rem', paddingRight: '2rem'},
          '@screen lg': {paddingLeft: '3rem', paddingRight: '3rem'},
          '@screen xl': {paddingLeft: '4rem', paddingRight: '4rem'},
          '@screen xxl': {marginLeft: 'auto', marginRight: 'auto'},
        },
        // Custom Utility Classes
        // '.vertical-rl': {writingMode: 'vertical-rl'}
      })
    })
  ],
}


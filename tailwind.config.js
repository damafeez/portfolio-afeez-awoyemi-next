/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        'foreground-secondary': 'rgb(var(--foreground-secondary) / <alpha-value>)',
      },
      fontSize: {
        xl: '1.5rem',
        '2xl': '2.5rem',
        '3xl': '4rem',
        '4xl': '7rem',
        '5xl': '8rem',
        '6xl': '9rem',
      },
      animation: {
        float: 'float 12s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'rotate(-0.001deg) translate3d(15px, 0, 0) rotate(-0.001deg)',
          },
          '100%': {
            transform: 'rotate(360.001deg) translate3d(15px, 0, 0) rotate(-360.001deg)',
          },
        },
      },
    },
    animationDuration: {
      5: '5s',
      8: '8s',
      10: '10s',
      12: '12s',
      15: '15s',
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-duration': (value) => ({
            'animation-duration': value,
          }),
        },
        { values: theme('animationDuration') }
      )
    }),
  ],
}

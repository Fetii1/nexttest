// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        lora: ['var(--font-lora)', ...config.fontFamily.sans],
        karla: ['var(--font-karla)', ...config.fontFamily.sans],
      },
      colors: {
        gray: {
          ...config.colors.gray,
          200: '#F4F4F4',
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}

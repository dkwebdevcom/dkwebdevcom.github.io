/** @type {import('tailwindcss').config} */
module.exports = {
  content: ['./hugo_stats.json', './themes/hydro/layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#ff6600',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
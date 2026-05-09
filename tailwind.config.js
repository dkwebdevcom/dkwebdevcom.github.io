/** @type {import('tailwindcss').config} */
module.exports = {
  content: ['./hugo_stats.json', './layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      colors: {
        primary: '#007bff', // blue
        secondary: '#ff6600', // orange
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
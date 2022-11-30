/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode : 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#6D28D9',
        dark : '#0F172A',
        secondary : '#64748B'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

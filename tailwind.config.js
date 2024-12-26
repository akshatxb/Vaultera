/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Neue': ['Neue-Regular', 'Sans-Serif'],
        'Jost': ['Jost', 'sans-serif']
      },
      colors: {
        primary: '#ffffff',
        secondary: '#232429',
        tertiary: '#434346',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Jost': ['Jost', 'sans-serif']
      },
      colors: {
        primary: '#ffffff',
        secondary: '#232429',
        tertiary: '#434346',
        accentColor: {
          primary: '#ED5C64',
          secondary: '#018D85',
          tertiary: '#CBBE02',
        }
      },
    },
  },
  plugins: [],
}
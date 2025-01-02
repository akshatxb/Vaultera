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
          primary: '#E75E66',
          secondary: '#018D85',
          tertiary: '#CBBE02',
        },
        ctaColor: {
          secondary: '#ACF1FF',
          tertiary: '#F0FF92',
          primary: '#5DC19D',
        }
      },
    },
  },
  plugins: [],
}
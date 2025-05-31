/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'ascension-blue': '#0A1F44',
        'biotech-green': '#4ADE80',
        'signal-violet': '#6B4EFF',
        'slate-gray': '#3C3C4E',
        'background-light': '#F5F7FA',
        'background-blue': '#EFF6FF',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom right, #F5F7FA, #EFF6FF)',
      },
    },
  },
  plugins: [],
}

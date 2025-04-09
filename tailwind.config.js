/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e5e2e0',
      },
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'],
        'inria': ['Inria Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

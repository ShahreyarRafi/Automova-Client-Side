/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        source: " 'Source Sans 3', sans-serif",
        open: "'Open Sans', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
}


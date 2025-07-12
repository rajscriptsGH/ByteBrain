/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#d188cd",
          500: "#240552",
          600: "#07038a"
        }
      }
    },
  },
  plugins: [],
}


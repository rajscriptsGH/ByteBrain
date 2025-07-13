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
          300: "#bfb9eb",
          500: "#240552",
          600: "#07038a"
        }
      }
    },
  },
  plugins: [],
}


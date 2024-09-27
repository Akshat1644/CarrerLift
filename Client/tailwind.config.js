/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "primary": "#141414",
        "primary": "#45a4b4",
        "blue": "#111b75",
        "pink": "#111b75"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#292929",
        "grey": "#E2E2E2"
      },
      fontFamily: {
        'serif': 'Bellefair, sans-serif',
    },
    },
  },
  plugins: [],
}
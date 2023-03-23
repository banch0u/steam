/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steam: {
          100: '#c7d5e0',
          300: '#66c0f4',
          500: '#2a475e',
          700: '#1b2838',
          900: '#171a21',
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#229ED9',
        secondary: '#2CABE0',
        background: '#1C1C1E',
        surface: '#2C2C2E',
        text: '#FFFFFF',
        'text-secondary': '#8E8E93',
      },
    },
  },
  plugins: [],
}

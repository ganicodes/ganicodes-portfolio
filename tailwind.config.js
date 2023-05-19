/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#002d59',
        bgVariant: '#2a4a6880',
        primary: '#00c834',
        primaryVariant: '#00c834b3',
        gray: '#ccd4d9',
        transparent: 'transparent'
      },
      fontFamily: {
        noto: "'Noto Sans', sans-serif"
      }
    },
  },
  plugins: [],
}
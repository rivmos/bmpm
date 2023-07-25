/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBrown:'#914a0e',
        lightBrown:'#b39573',
        primaryGrey:'#f5f5f5'
      }
    },
  },
  plugins: [],
}


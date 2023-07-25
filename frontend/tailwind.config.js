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
        lightGrey:'#f5f5f5',
        darkGrey:'#4f4f4f'
      }
    },
  },
  plugins: [],
}


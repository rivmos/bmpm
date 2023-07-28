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
        darkGrey:'#4f4f4f',
        inputBorder:'#ced4da'
      },
      backgroundImage:{
        'about-one':"url('/images/ab-1.jpg')",
        'about-two':"url('/images/ab-2.jpg')",
        'about-three':"url('/images/ab-3.jpg')",
        'cara':"url('/images/cara.jpg')",
      },
      fontFamily:{
        open:['Open Sans', 'sans-serif']
      },
      maxWidth: {
        '8xl': '1500px',
      }
    },
  },
  plugins: [],
}


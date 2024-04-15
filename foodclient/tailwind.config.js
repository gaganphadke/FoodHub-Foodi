/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  daisyui: {
    themes: ['light'], 
  },
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "red": "#FF6868",
        "secondary": "#555",
        "primaryBG": "#FCFCFC",
        
      },
      fontFamily:{
        "primary":['Inter','sans-serif']
      }
    },
  },
  plugins: [require('daisyui')],
};
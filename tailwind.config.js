/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {


      colors: {
        'text': '#130e01',
        'background': '#1A1A1A',
        
        'primary': '#9E28B5',
        'secondary': '#500C76',
        'accent': '#95D600',
        'background-dark': '#000000',
        'gold': '#ffd700',
        'silver': '#C0C0C0',
        'bronze': '#CD7F32',


      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'mainColor':'#4b4b4b',
        'dateColor':'#2a2a2a',
        

        
      },
      backgroundImage:{
        'gradiant-radial':'radial-gradient(#27212e, #221530)',
      },
      translate:{
        'minus2px':'-2px'
      },
      boxShadow:{
        'pink-0.2':' 0 2px 30px rgba(234, 78, 240, 0.2)',
        'pink-0.4':'rgba(234, 78, 240, 0.4)',

      }
    },
  },
  plugins: [],
}


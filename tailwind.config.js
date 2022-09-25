/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./contact.html",     
            "./gallerie.html",
            "./about.html",
                            ],
  theme: {
    extend: {
      boxShadow:{
        '3xl' : "0px 25px 20px -20px rgba(0, 0, 0, 0.45)"
      },
      fontFamily: {
        'poppins' : ['Poppins']
      },
      backgroundImage: {
        'hero': "url('../images/bg-tsi2.jpg')",
        'heroMase': "url('../images/imagemase.jpg')"
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
}
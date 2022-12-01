/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        primary:{
          500:"#FF2727",
          300:"#FFE4E4",
        },
        secondary:"#F9F9F9",
        txt:{
          primary:"#000",
          secondary:"#CBCBCB",
        }
      },
      fontWeight:{
        "bold": "700",
      }
    },
  },
  plugins: [],
}
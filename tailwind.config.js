/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red-color": "#FF554C",
        "yellow-color": "#FFAD32",
        "blue-color": "#9CD8E1",
        "pink-color": "#F9B4AF",
        "green-color": "#92DD92",
        "gray-text": "#5C5C5C",
        "gray-border": "#B4B4B4",
        "gray-bg": "#F3F3F3",
        "success": "#42CA20",
        "danger": "#FF0000",
      },
      /*fontFamily: { 
        "sans": ["Inter", "sans-serif"]
      }*/
    },
  },
  plugins: [],
}


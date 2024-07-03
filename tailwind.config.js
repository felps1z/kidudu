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
        "gray-border": "#909090",
        "gray-bg": "#F3F3F3",
        "success": "#42CA20",
        "danger": "#FF0000",
      },
      fontFamily: { 
        "sans": ["Inter", "sans-serif"]
      },
      animation: {
        'sh0': 'sh0 0.5s ease-in-out both',
      },
      keyframes: {
        sh0: {
          '0%, 100%' : { transform: 'rotate(0deg) translate3d(0, 0, 0)' },
          '25%': { transform: 'rotate(7deg) translate3d(0, 0, 0)' },
          '50%': { transform: 'rotate(-7deg) translate3d(0, 0, 0)' },
          '75%': { transform: 'rotate(1deg) translate3d(0, 0, 0)' }
        }
      }
    },
  },
  plugins: [],
}


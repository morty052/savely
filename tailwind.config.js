/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: '350px',
        xs: '480px',
        ss: "540px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1700px",
        // xxl: '1536px',
      },
      animation: {
        blob: "blob 7s infinite",
      }, 
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require('preline/plugin'),require('@tailwindcss/forms'),],
}
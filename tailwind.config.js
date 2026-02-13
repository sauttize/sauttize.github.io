/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        customBlack: '#131313',
        customWhite: '#EDEDED',
        customGrey: '#1D1D1D',
        customLightGrey: '#414141',
        customExtraLightGrey: '#777777',
        customHighlight: '#EC6B45',
      }
    },
  },
  plugins: [],
}


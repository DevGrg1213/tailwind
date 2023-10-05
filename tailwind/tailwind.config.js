/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      background_color: "#394867",
      primary_dark:"#212A3E",
      primary_medium:"#9BA4B5",
      primary_light:"#F1F6F9"

    }
  },
  plugins: [],
}
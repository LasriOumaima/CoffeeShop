/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path based on where your files are
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Poppins","sans-serif"],
        cursive:["Pacifico","Sriracha","cursive"],
        cursive2:["Sriracha","cursive"],
      }
    },
  },
  plugins: [],
}


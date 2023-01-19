/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "4rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        grey: "#424543",
        lightGrey: "#646665",
      },
      backgroundImage: {
        main: "url('/src/assets/bg-main.jpg')",
        shape: "url('/src/assets/bg-shape.jpg')",
      },
    },
  },
  plugins: [],
}

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
        tes: "#046B03",
        lightGrey: "#646665",
        secondary: "#ECF1EF",
      },
      backgroundImage: {
        main: "url('/src/assets/bg-main.jpg')",
        about: "url('/src/assets/bg-about.jpg')",
        shape: "url('/src/assets/bg-shape.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
}

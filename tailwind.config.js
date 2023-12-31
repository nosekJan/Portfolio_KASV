/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "purple": "#FF00FF",
      },
      fontFamily: {
        'font': ['Lilita One', 'sans-serif'],
      },
      boxShadow: {
        capy: "0px 20px 80px -15px #FF00FF",
      },
      screens: {
        xs: "450px",
      },
      borderRadius: {
        fancy: "29% 71% 23% 77% / 46% 44% 56% 54% ",
      },
      backgroundImage: {
        "stars" : "url('/src/components/canvas/Stars.jsx')"
      },
    },
  },
  plugins: [],
};

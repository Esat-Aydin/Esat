/* eslint-disable no-undef */
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
        purple: "#915eff",
        brightPurple: "#BF40BF",
        byzantium: "#702963",
        gold: "#e8b923",
        lightPurple: "#CBC3E3",
        lavender: "#E6DEDD",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        'yellow-gradient': 'linear-gradient(#e8b923, transparent)',
        'purple-byzantium-gradient': 'linear-gradient(to top, #BF40BF, #CBC3E3)',

      },
    },
  },
  plugins: [],
};
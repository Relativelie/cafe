/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dance: ["Dancing Script", "cursive"],
        oxygen: ["Oxygen", "sans-serif"],
      },
      backgroundImage: {
        "recipe-poster": "url('assets/webp/coooking-bg.webp')",
      },
      borderColor: {
        error: "#ed5555",
      },
      textColor: {
        error: "#ed5555",
        gray: "#808080",
      },
    },
  },
  plugins: [],
};

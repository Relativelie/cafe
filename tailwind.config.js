/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dance: ["Dancing Script", "cursive"],
        oxygen: ["Oxygen", "sans-serif"],
      },
    },
  },
  plugins: [],
};

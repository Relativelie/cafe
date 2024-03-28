/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
        oxygen: ['Oxygen', 'sans-serif'],
      },
      backgroundImage: {
        'recipe-poster': "url('assets/webp/cooking-bg.webp')",
        'analyst-poster': "url('assets/webp/heather-barnes.webp')",
        'sea-poster': "url('assets/webp/sea.webp')",
        'food-poster': "url('assets/webp/food.webp')",

        'home-poster': "url('assets/png/home-bg.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};

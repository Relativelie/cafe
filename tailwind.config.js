/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dance: ['Dancing Script', 'cursive'],
        oxygen: ['Oxygen', 'sans-serif'],
      },
      backgroundImage: {
        'recipe-poster': "url('assets/webp/coooking-bg.webp')",
        'analyst-poster': "url('assets/webp/heather-barnes.webp')",
        'sea-poster': "url('assets/webp/sea.webp')",
      },
      textShadow: {
        sm: '0 1px 2px #111111 var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px #111111 var(--tw-shadow-color)',
        lg: '0 8px 16px #111111 var(--tw-shadow-color)',
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

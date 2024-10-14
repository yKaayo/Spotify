/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'dvh-16px': '100dvh - 16px',
      },
      colors: {
        'gray': {
          '900': '#121212'
        },
      },
      right: {
        '3px': '14.6rem',
      },
    },
  },
  plugins: [],
}


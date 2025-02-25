/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        tile: '2 / 1',
      },
      spacing: {
        textContentWidth: '642px',
      },
      borderWidth: {
        0.5: '0.5px',
      },
    },
  },
  plugins: [],
}

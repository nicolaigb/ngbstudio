/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        normal: 500,
      },
      aspectRatio: {
        tile: '2 / 1',
      },
      spacing: {
        textContentWidth: '642px',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      boxShadow: {
        sm: '0px 0px 1px 0px rgba(0, 0, 0, .2), 0px 1px 4px 0px rgba(0, 0, 0, .03), 0px 1px 1px 0px rgba(0, 0, 0, .06)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          black:  '#141414',
          bronze: '#98652b',
          gold:   '#cc9933',
          cream:  '#fee2b2',
          white:  '#ffffff',
        },
      },
      maxWidth: {
        container: '81.25rem',
        hero: '71rem',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(34, 131, 112, 1)',
        secondary: 'rgba(119, 181, 169, 1)',
        black: 'rgba(0, 0, 0, 1)',
        grayish: 'rgba(62, 62, 62, 1)',
        white: 'rgba(255, 255, 255, 1)',
        red: 'rgba(215, 0, 0, 1)'
      },
      fontWeight: {
        light: '300',
        regular: '400'
      },
      fontSize: {
        big: '20px',
        medium: '18px',
        normal: '16px',
        small: '15px',
        smaller: '14px',
        tiny: '12px'
      },
      width: {
        icon: '48px'
      },
      boxShadow: {
        down: '0px 4px 4px rgba(0, 0, 0, 0.25);',
        up: '0px -4px 4px rgba(0, 0, 0, 0.25);'
      },
      margin: {
        extra: '138px',
        bigger: '48px',
        big: '40px',
        normal: '32px',
        medium: '24px',
        small: '16px'
      },
      padding: {
        layoutSides: '0 16px',
        big: '24px',
        normal: '16px'
      }
    },
  },
  plugins: [],
}

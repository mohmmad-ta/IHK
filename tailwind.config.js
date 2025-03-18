/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          950: 'rgba(37,38,42,1)',
          500: 'rgba(37,38,42,0.7)',
          300: 'rgba(37,38,42,0.4)',
          200: 'rgba(37,38,42,0.2)',
          100: 'rgba(37,38,42,0.1)',
          50: 'rgba(37,38,42,0.05)',
          10: 'rgba(37,38,42,0.01)',
        },
        secondary: {
          950: 'rgba(45,46,50, 1)',
          500: 'rgba(45,46,50, 0.7)',
          300: 'rgba(45,46,50, 0.4)',
          200: 'rgba(45,46,50, 0.2)',
          100: 'rgba(45,46,50, 0.1)',
          50: 'rgba(45,46,50, 0.05)',
        },
        main2: {
          950: 'rgb(117,117,120)',
        },
        main: {
          50: 'rgb(27,197,94)',
          10: 'rgba(27,197,94, 0.3)',
        },
        header: {
          300: 'rgba(47,61,69, 0.3)',
        }
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
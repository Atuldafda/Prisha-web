/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#fdf8f6',
          100: '#f9eee9',
          200: '#f1ddd4',
          300: '#e3c2b4',
          400: '#d09f8d',
          500: '#bf7d6a',
          600: '#b06758',
          700: '#92534a',
          800: '#774640',
          900: '#633d39',
          950: '#351e1c',
        },
        stone: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      'bg-base': '#000000',
      'text-white': '#ffffff'
    },
    boxShadow: {
      'xs': '0px 4.282px 52.456px 0px rgba(0, 7, 72, 0.12)',
    },
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'url("/assets/bannertop.svg")',
        'bgdino3': 'url("/assets/bgdino3.png")',
      },
      backgroundSize: {
        '100%': '100% 100%'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        'bg-base': '#57BB7A',
        'text-white': '#ffffff'
      },
      fontSize: {
        'big': '64px',
        'medium': '40px',
        'pre-medium': '32px',
        'small': '24px',
        'para': '16px',
      },
      fontWeight: {
        'super-bold': '900'
      },
      boxShadow: {
        'xs': '0px 4.282px 52.456px 0px rgba(0, 7, 72, 0.12)',
      },
      fontFamily: {
        yourFont: ['font1', 'font2'],
      },
      cursor: {
        'custom': 'url("/assets/dino_cursor.png), auto',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saadet: {
          red: '#E30613',
          white: '#FFFFFF',
          black: '#1A1A1A',
          gray: '#F8FAFC',
          dark: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': '18px',
      },
      spacing: {
        '12': '48px',
      },
    },
  },
  plugins: [],
}


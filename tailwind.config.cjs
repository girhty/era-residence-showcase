/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B121E',
        charcoal: '#12161F',
        brass: '#C5A880',
        champagne: '#D4AF37',
        mist: '#94A3B8'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      letterSpacing: {
        luxury: '0.24em'
      }
    }
  },
  plugins: []
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App/src/**/*.{js,jsx,ts,tsx}",
    "./App/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0a0a0a',
        'secondary-black': '#1a1a1a',
        'accent-yellow': '#ffd700',
        'accent-red': '#ff4444',
        'accent-orange': '#ff6b35',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-reverse': 'floatReverse 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 68, 68, 0.3)' }
        }
      }
    },
  },
  plugins: [],
}


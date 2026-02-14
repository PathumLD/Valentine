/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF1744',
        secondary: '#FF4081',
        accent: '#F8BBD0',
        background: '#FFF0F5',
        deep: '#2D1B30',
        gold: '#FFD700',
        rose: {
          deep: '#880E4F',
          mid: '#C2185B',
          soft: '#F48FB1',
          pale: '#FCE4EC',
        },
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        vibes: ['Great Vibes', 'cursive'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'aurora': 'aurora 12s ease-in-out infinite alternate',
        'glow-breathe': 'glowBreathe 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 23, 68, 0.3), 0 0 40px rgba(255, 23, 68, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 23, 68, 0.6), 0 0 60px rgba(255, 64, 129, 0.3), 0 0 80px rgba(255, 23, 68, 0.15)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0)' },
          '50%': { opacity: 1, transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: 0 },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glowBreathe: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 8px rgba(255,23,68,0.3))' },
          '50%': { filter: 'brightness(1.1) drop-shadow(0 0 20px rgba(255,23,68,0.6))' },
        },
      },
      backgroundImage: {
        'romantic-gradient': 'linear-gradient(135deg, #1a0a1e 0%, #2d0a2e 25%, #3d0f35 50%, #2a0a25 75%, #1a0a1e 100%)',
      },
    },
  },
  plugins: [],
}

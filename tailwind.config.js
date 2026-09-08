/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      fontWeight: {
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
      colors: {
        bg: {
          DEFAULT: '#050508',
          1: '#080B12',
          2: '#0C1020',
        },
        neon: {
          blue: '#4F8EF7',
          purple: '#8B5CF6',
          cyan: '#22D3EE',
        },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.03)',
          border: 'rgba(255,255,255,0.07)',
          hover: 'rgba(255,255,255,0.06)',
        }
      },
      backgroundImage: {
        'glow-blue': 'radial-gradient(ellipse at center, rgba(79,142,247,0.15) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'gradient-dark': 'linear-gradient(180deg, #050508 0%, #080B12 50%, #050508 100%)',
        'card-gradient': 'linear-gradient(180deg, transparent 0%, rgba(5,5,8,0.9) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(79,142,247,0.3), 0 0 60px rgba(79,142,247,0.1)',
        'neon-purple': '0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1)',
        'card': '0 4px 30px rgba(0,0,0,0.5)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(79,142,247,0.1)',
      },
    },
  },
  plugins: [],
}

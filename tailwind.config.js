/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0a0a0c',
          card: '#121216',
          surface: '#18181f',
          elevated: '#20202a',
        },
        ivory: {
          DEFAULT: '#f4f3ef',
          muted: '#9a9996',
          dim: '#686765',
        },
        olive: {
          DEFAULT: '#8a9a5b',
          muted: '#556b2f',
          light: '#b2c28a',
          dark: '#2d3520',
          subtle: 'rgba(138, 154, 91, 0.15)',
          glow: 'rgba(138, 154, 91, 0.3)',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        editorial: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        mega: '0.25em',
        tightest: '-0.06em',
      },
      animation: {
        'subtle-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

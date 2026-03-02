/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // ── Palette Eco-Tech Reliv ──────────────────
      colors: {
        green: {
          dark:   '#2A6041',
          base:   '#3A8055',
          bright: '#00A878',
          glow:   '#00C896',
        },
        night: {
          DEFAULT: '#0D1B2A',
          light:   '#162032',
          mid:     '#1B2A3E',
        },
        offwhite: {
          DEFAULT: '#F5F4EF',
          2:       '#ECEAE3',
        },
        gold: {
          DEFAULT: '#C8962A',
          light:   '#E8B840',
        },
      },

      // ── Typographies ────────────────────────────
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },

      // ── Tailles de texte personnalisées ─────────
      fontSize: {
        'hero':  ['clamp(2.2rem, 5vw, 3.8rem)', { lineHeight: '1.15' }],
        'h2':    ['clamp(1.8rem, 4vw, 2.8rem)',  { lineHeight: '1.2'  }],
        'h3':    ['clamp(1.1rem, 2vw, 1.5rem)',  { lineHeight: '1.3'  }],
      },

      // ── Animations ──────────────────────────────
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)'   },
          '50%':      { opacity: '0.4', transform: 'scale(1.6)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'fade-up':   'fade-up 0.7s ease forwards',
        'fade-in':   'fade-in 0.5s ease forwards',
      },

      // ── Ombres ──────────────────────────────────
      boxShadow: {
        'card':  '0 4px 20px rgba(13,27,42,0.10)',
        'hover': '0 12px 40px rgba(13,27,42,0.18)',
        'green': '0 4px 20px rgba(0,168,120,0.35)',
      },

      // ── Border radius ────────────────────────────
      borderRadius: {
        'xl2': '1.25rem',
        'xl3': '1.5rem',
      },
    },
  },
  plugins: [],
}

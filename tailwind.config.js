/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: '#080B12',
        deep: '#0D1117',
        surface: '#161B27',
        card: '#1C2333',
        border: '#2A3142',
        muted: '#4A5568',
        dim: '#8892A4',
        text: '#C9D1E0',
        bright: '#E8EDF5',
        accent: '#3B82F6',
        'accent-glow': '#60A5FA',
        'accent-dim': '#1D4ED8',
        emerald: '#10B981',
        amber: '#F59E0B',
        rose: '#F43F5E',
        purple: '#8B5CF6',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
        'hero-gradient': "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.15) 0%, transparent 70%)",
        'card-gradient': "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, transparent 60%)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(59,130,246,0.1), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(59,130,246,0.4), 0 8px 40px rgba(59,130,246,0.12), 0 0 60px rgba(59,130,246,0.06)',
        'glow': '0 0 20px rgba(59,130,246,0.3)',
        'glow-sm': '0 0 10px rgba(59,130,246,0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}

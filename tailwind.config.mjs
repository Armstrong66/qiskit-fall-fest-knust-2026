/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6f2ff',
          100: '#ede5ff',
          200: '#dcccff',
          300: '#be95ff',
          400: '#a56eff',
          500: '#8a3ffc', // IBM Purple
          600: '#6929c4', // IBM Quantum Primary Purple
          700: '#491d8b',
          800: '#31135e',
          900: '#1c0836',
          950: '#0c0217',
        },
        quantum: {
          cyan: '#1192e8',
          electric: '#0f62fe',
          teal: '#009d9a',
          magenta: '#ee5396',
          pink: '#ff7eb6',
          dark: '#0a0d14',
          card: 'rgba(22, 27, 34, 0.75)',
          glow: 'rgba(138, 63, 252, 0.25)',
        },
        carbon: {
          50: '#f4f4f4',
          100: '#e0e0e0',
          200: '#c6c6c6',
          300: '#a8a8a8',
          400: '#8d8d8d',
          500: '#6f6f6f',
          600: '#525252',
          700: '#393939',
          800: '#262626',
          900: '#161616',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(138, 63, 252, 0.25)',
        'glow-md': '0 0 30px rgba(138, 63, 252, 0.35)',
        'glow-lg': '0 0 50px rgba(17, 146, 232, 0.3)',
        'glow-cyan': '0 0 25px rgba(17, 146, 232, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'quantum-gradient': 'linear-gradient(135deg, #6929c4 0%, #0f62fe 50%, #1192e8 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(138, 63, 252, 0.15), transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

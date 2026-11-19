/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        keshav: {
          50: '#F5FBEA',
          100: '#EAF6D1',
          200: '#D5EDA3',
          300: '#BFE375',
          400: '#A6D247',
          500: '#8CC12C', // Core Keshav Lime Green
          600: '#75A51E',
          700: '#5E8617',
          800: '#486811',
          900: '#344C0B',
          950: '#1D2C04',
        },
        shreeji: {
          50: '#F5FBEA',
          100: '#EAF6D1',
          200: '#D5EDA3',
          300: '#BFE375',
          400: '#A6D247',
          500: '#8CC12C',
          600: '#75A51E',
          700: '#5E8617',
          800: '#486811',
          900: '#344C0B',
          950: '#1D2C04',
        },
        slate: {
          950: '#020617',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -4px rgba(16, 24, 40, 0.08)',
        'keshav-glow': '0 8px 24px -4px rgba(140, 193, 44, 0.4)',
      }
    },
  },
  plugins: [],
}

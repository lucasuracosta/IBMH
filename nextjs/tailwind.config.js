/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ibm-blue': '#2c5f7a',
        'ibm-blue2': '#20486E',
        'ibm-blue-dark': '#1a3d4f',
        'ibm-blue-light': '#5a8aa0',
        'ibm-black': '#252323',
        'ibm-gold': '#AA8C27',
        'ibm-bg-cream': '#F3f3eb',
        'ibm-bg-blue': '#A7D0D9',
        'ibm-gray': {
          50: '#f9f9f8',
          100: '#f3f3f1',
          200: '#e6e5e1',
          300: '#d9d9cf',
          400: '#b2aba0',
          500: '#8a857c',
          600: '#6b6660',
          700: '#4e4945',
          800: '#363331',
          900: '#1a1918',
        },
      },
      fontFamily: {
        'garamond': ['var(--font-garamond)', 'EB Garamond', 'serif'],
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'ibm': '8px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

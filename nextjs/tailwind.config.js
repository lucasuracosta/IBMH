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
        'ibm-blue': '#18445c',
        'ibm-gold': '#AA8C27',
        'ibm-bg-cream': '#F2EDDF',
        'ibm-bg-blue': '#A7D0D9',
      },
      fontFamily: {
        'garamond': ['EB Garamond', 'serif'],
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

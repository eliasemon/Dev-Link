/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        destructive: '#DC2626',
        primary: {
          50: ' #edecff',
          100: '#d5d2ff',
          500: '#7a3bff',
          600: '#5a2bbf',
          700: '#411f8c',
          900: '#3a1f7a',
        },
        nuetral: {
          50: '#F3F5F7',
          100: '#E8ECEF',
          500: '#6C7275',
          600: '#343839',
          700: '#232627',
          900: '#141718',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

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
          50: '#E6FEF3',
          100: '#D6F8E8',
          500: '#38CB89',
          600: '#35BD80',
          700: '#2D9F6C',
          900: '#157449',
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

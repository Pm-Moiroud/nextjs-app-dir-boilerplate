/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        header: '70px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      lightgrey: {
        50: '#F2F2F2',
        100: '#D3D3D3',
        200: '#BDBDBD',
        300: '#9F9F9F',
        400: '#8D8D8D',
        500: '#707070',
        600: '#666666',
        700: '#505050',
        750: '#303030',
        800: '#3E3E3E',
        900: '#2F2F2F',
      },
      white: '#fffff',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};

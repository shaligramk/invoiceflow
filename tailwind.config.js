/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F8F5F6',
          DEFAULT: '#30D1D5',
        },
        secondary: {
          light: '#BA9862',
          DEFAULT: '#AE7D4B',
        },
        accent: {
          DEFAULT: '#364754',
        },
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#30D1D5',
              '&:hover': {
                color: '#AE7D4B',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        inner: 'inset 0 -5px 10px 0 rgb(13 148 136)',
        outer: 'inset 0 5px 10px 0 rgb(252 255 255)'
      },
      keyframes: {
        dropDown: {
          '0%': { transform: 'translateY(-14rem)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        dropDown: 'dropDown 400ms ease-in-out'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;

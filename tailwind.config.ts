import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        inner: 'inset 0 -5px 10px 0 rgb(13 148 136)',
        outer: 'inset 0 5px 10px 0 rgb(252 255 255)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;

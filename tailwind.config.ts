import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: '#007ea7',
      highlight: '#00a8e8',
      body: '#ccc',
      black: '#000',
      white: '#fff',
    },
    fontFamily: {
      regular: ['var(--font-regular)', 'sans-serif'],
      featured: ['var(--font-featured)', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        ground: '0 0.2rem 0.5rem rgba(0,126,167,0.3)',
        elevated: '0 0.4rem 0.8rem rgba(0,126,167,0.3)',
      },
    },
  },
  plugins: [],
};

export default config;

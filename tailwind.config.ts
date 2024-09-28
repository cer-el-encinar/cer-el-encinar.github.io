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
      'amber-700': 'rgb(180,83,9)',
      'amber-200': 'rgb(253 230 138)',
      'sky-700': 'rgb(3 105 161)',
      'sky-200': 'rgb(186 230 253)',
      'rose-700': 'rgb(190 18 60)',
      'rose-200': 'rgb(254 205 211)',
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

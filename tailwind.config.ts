import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        header: '#508484',
        background: {
          'primary': '#E1E5EE',
          'secondary': '#9E9E9E',
          'alt': '#FDFDF9',
        },
        dark: '#2A324B',
      },
      fontFamily: {
        glober: ['glober', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

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
        'hero-map-bg': "url('/hero-map-bg.png')",
        'camp-1-bg': "url('/camp-1-bg.png')",
        'camp-2-bg': "url('/camp-2-bg.png')",
      },
      screens: {
        xs: '480px',
      },
      colors: {
        // stone-50
        light: '#f9fafb',
        // slate-900
        dark: '#1a202c',
        primary: {
          // green-600
          DEFAULT: '#16a34a',
          // green-700
          dark: '#15803d',
          // green-900
          'super-dark': '#14532d',
          //  green-500
          light: '#22c55e',
        },
        secondary: {
          //  amber-600
          DEFAULT: '#d97706',
          // amber-700
          dark: '#b45309',
          // amber-500
          light: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
}
export default config

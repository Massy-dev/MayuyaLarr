/** @type {import('tailwindcss').Config} */
import { Cinzel, Inter } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxeGreen: '#0e2014',
        luxeGreens:'#0e1f17',
        luxeGold:  '#D4AF37',
        deepBlack: '#0a0a0a',
        luxeWhite: '#f5f5f5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
        Cinzel: ['Cinzel', 'serif'],
        lato: ['Lato', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

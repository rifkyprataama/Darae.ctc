// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Pastikan ini ada
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darae: {
          light: '#ffffff',
          dark: '#000000',
          charcoal: '#000000',
          accent: '#3b82f6',   
          grey: '#888888',
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          // PERBAIKAN: Ubah -60% menjadi -50%
          '100%': { transform: 'translateX(-100%)' }, 
        }
      }
    },
  },
  plugins: [],
};
export default config;
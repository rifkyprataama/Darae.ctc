import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PALETTE DARAE.CTC
        darae: {
          light: '#F3F4F3',      // Background Light (Off-white)
          dark: '#1f2327',       // Background Dark (Deep Blue/Night)
          charcoal: '#1f2327',   // Teks Utama (Dark Charcoal)
          accent: '#aa0f21',     // Tombol/Highlight (Terracotta)
          grey: '#aa0f21',       // Border/Secondary Text
          softBlue: '#ADC1C8',   // Gradasi 1
          paleYellow: '#F0D9AD', // Gradasi 2
        }
      },
      backgroundImage: {
        // KITA BUAT GRADIENT MESH DISINI
        'mesh-light': "radial-gradient(at 0% 0%, #ADC1C8 0px, transparent 50%), radial-gradient(at 100% 0%, #F0D9AD 0px, transparent 50%)",
        'mesh-dark': "radial-gradient(at 0% 0%, #1a2a3a 0px, transparent 50%), radial-gradient(at 100% 0%, #2E455A 0px, transparent 50%)",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite', // Putaran sangat pelan (12 detik)
      },
    },
  },
  plugins: [],
};
export default config;
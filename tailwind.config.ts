import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Tetap pertahankan ini untuk dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. UPDATE PALETTE WARNA BARU
      colors: {
        darae: {
          // Warna Netral Utama
          charcoal: "#1f2327", // Main Dark Text / Dark BG
          light: "#f3f4f3",    // Main Light BG / Light Text
          taupe: "#8e8887",    // Netral Penyeimbang (Abu-abu hangat)
          
          // Warna Aksen
          gold: "#f0d9ad",     // Aksen Hangat/Mewah
          blue: "#adc1c8",     // Aksen Dingin/Tenang (Muted Blue)
          accent: "#aa0f21",   // Aksen Berani (Deep Red) - Pengganti biru lama
          
          // Mempertahankan grey lama untuk kompatibilitas jika masih dipakai
          grey: '#888888',     
        },
        // Variabel CSS native (opsional, untuk kompatibilitas shadcn/ui jika pakai)
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      // 2. PERTAHANKAN ANIMASI ANDA SEBELUMNYA
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, 
        }
      }
    },
  },
  plugins: [],
};
export default config;
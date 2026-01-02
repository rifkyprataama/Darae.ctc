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
        // PALETTE DARAE.CTC (UPDATED: CUBERTO STYLE)
        darae: {
          light: '#FFFFFF',    // GANTI: Pure White (Putih Bersih)
          dark: '#000000',     // GANTI: Pure Black (Hitam Pekat)
          charcoal: '#000000', // GANTI: Pure Black (Teks Utama di Light Mode)
          accent: '#aa0f21',   // TETAP: Terracotta (Sesuai branding Anda)
          grey: '#888888',     // PERBAIKAN: Sebelumnya merah (#aa0f21), saya ubah jadi Abu-abu asli
          
          // Warna gradasi (bisa dihapus jika ingin 100% clean, tapi dibiarkan dulu tidak masalah)
          // softBlue: '#ADC1C8', 
          // paleYellow: '#F0D9AD', 
        }
      },
      backgroundImage: {
        // Gradient Mesh disesuaikan agar lebih halus/subtle di background hitam/putih
        // 'mesh-light': "radial-gradient(at 0% 0%, #ADC1C8 0px, transparent 50%), radial-gradient(at 100% 0%, #F0D9AD 0px, transparent 50%)",
        // 'mesh-dark': "radial-gradient(at 0% 0%, #111111 0px, transparent 50%), radial-gradient(at 100% 0%, #222222 0px, transparent 50%)",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite', 
      },
    },
  },
  plugins: [],
};
export default config;
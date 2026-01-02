'use client'
import Magnetic from "./ui/Magnetic"; 

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-mesh-light opacity-60 dark:opacity-0 transition-opacity duration-500 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-mesh-dark opacity-0 dark:opacity-100 transition-opacity duration-500 -z-10"></div>

      {/* Badge Status */}
      <div className="mb-8 px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border border-darae-accent text-darae-accent bg-transparent">
        Open for Projects
      </div>
      
      {/* Judul Utama */}
      {/* 'We Build' kita buat sedikit lebih tipis/kecil agar 'Digital Reality' lebih menonjol (Hierarki Visual) */}
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-darae-charcoal dark:text-white leading-[0.9]">
        <span className="block text-3xl md:text-5xl font-bold mb-2 md:mb-4 opacity-100">We Build</span>
        <span className="text-darae-accent">Digital Reality</span>
      </h1>
      
      {/* Deskripsi */}
      <p className="text-darae-grey dark:text-gray-400 max-w-xl text-base md:text-lg mb-12 leading-relaxed font-medium">
        Mitra teknologi untuk Web Development, Mobile Apps, dan Desain Grafis. 
        Jadwalkan konsultasi gratis hari ini.
      </p>
      
      {/* Tombol CTA */}
      <div className="flex flex-col md:flex-row gap-5 items-center">
        
        {/* TOMBOL 1: MULAI PROYEK (FIX WARNA HIJAU) */}
        <Magnetic>
            <a href="#contact" className="
                relative overflow-hidden inline-block px-10 py-4 rounded-[2rem] font-bold 
                
                /* 1. TRANSISI: Pisahkan Transform (Halus) dan Colors (Cepat) */
                transition-transform duration-500 ease-out transition-colors duration-100
                
                /* 2. STATE AWAL: MERAH */
                bg-darae-accent text-white shadow-xl shadow-darae-accent/20 border border-transparent
                
                /* 3. STATE HOVER: HITAM PEKAT */
                /* Karena duration-100, warna langsung jadi hitam sebelum sempat jadi hijau */
                hover:bg-black hover:shadow-darae-charcoal/30 hover:scale-105
                
                /* DARK MODE HOVER */
                dark:hover:bg-white dark:hover:text-black
            ">
                Mulai Proyek
            </a>
        </Magnetic>

        {/* TOMBOL 2: LIHAT KARYA */}
        <Magnetic>
            <a href="#portfolio" className="
                inline-block px-10 py-4 rounded-[2rem] font-bold transition-all duration-300
                bg-transparent text-darae-charcoal border border-darae-grey/30
                hover:bg-white hover:border-transparent hover:shadow-lg
                dark:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black
            ">
                Lihat Karya
            </a>
        </Magnetic>
      </div>
    </section>
  );
}
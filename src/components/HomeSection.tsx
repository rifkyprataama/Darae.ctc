'use client'
import { useState } from 'react'; // 1. IMPORT STATE
import Magnetic from "./ui/Magnetic"; 
import ConsultationModal from "./ConsultationModal"; // 2. IMPORT MODAL

export default function HomeSection() {
  
  // 3. STATE UNTUK BUKA/TUTUP MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Array untuk 5 ikon avatar (tampilan klien)
  const avatars = Array(5).fill(null);

  return (
    <>
      {/* 4. PASANG MODAL DISINI */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden pt-20">
        
        {/* Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-light opacity-60 dark:opacity-0 transition-opacity duration-500 -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-dark opacity-0 dark:opacity-100 transition-opacity duration-500 -z-10"></div>

        {/* Badge Status */}
        <div className="mb-8 px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border border-darae-accent text-darae-accent bg-transparent">
          Open for Projects
        </div>
        
        {/* Judul Utama */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-darae-charcoal dark:text-white leading-[0.9]">
          <span className="block text-3xl md:text-5xl font-bold mb-2 md:mb-4 opacity-100">We Build</span>
          <span className="text-darae-accent">Digital Reality</span>
        </h1>
        
        {/* Deskripsi */}
        <p className="text-darae-grey dark:text-gray-400 max-w-xl text-base md:text-lg mb-10 leading-relaxed font-medium">
          Mitra teknologi untuk Web Development, Mobile Apps, dan Desain Grafis. 
          Jadwalkan konsultasi gratis hari ini.
        </p>
        
        {/* AREA TOMBOL */}
        <div className="flex flex-col md:flex-row gap-5 items-center mb-16">
          
          {/* TOMBOL 1: KONSULTASI GRATIS (Updated) */}
          {/* - Menggunakan 'button' (bukan 'a') 
             - Menambahkan onClick untuk buka modal
          */}
          <Magnetic>
              <button 
                  onClick={() => setIsModalOpen(true)}
                  className="
                    cursor-pointer
                    relative overflow-hidden inline-block px-10 py-4 rounded-[2rem] font-bold 
                    transition-transform duration-500 ease-out transition-colors duration-100
                    bg-darae-accent text-white shadow-xl shadow-darae-accent/20 border border-transparent
                    hover:bg-black hover:shadow-darae-charcoal/30 hover:scale-105
                    dark:hover:bg-white dark:hover:text-black
                  "
              >
                  Konsultasi Gratis
              </button>
          </Magnetic>

          {/* TOMBOL 2: LIHAT KARYA (Tetap Link Scroll) */}
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

        {/* BAGIAN AVATAR BIRU MENUMPUK */}
        <div className="flex items-center gap-4 animate-fadeIn delay-500">
          <div className="flex -space-x-3 md:-space-x-4">
              {avatars.map((_, index) => (
                  <div key={index} className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white dark:border-darae-charcoal shadow-md z-10">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                  </div>
              ))}
          </div>
          <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
              </div>
              <p className="text-xs font-bold text-darae-charcoal dark:text-white"><span className="font-black">100+</span> Klien Puas</p>
          </div>
        </div>

      </section>
    </>
  );
}
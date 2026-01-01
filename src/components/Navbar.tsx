'use client'
import { useState } from 'react'
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 1. UPDATE CONTAINER STYLE:
    // - Background: Warna Darae Light/Dark dengan opacity 90% (Solid tapi transparan dikit)
    // - Blur: Sm (Halus, tidak blur berlebihan seperti kaca)
    // - Border: Abu tipis transparan
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 transition-colors duration-300 bg-darae-light/90 dark:bg-darae-dark/90 backdrop-blur-sm border-b border-darae-grey/10">
      
      {/* 2. LOGO BARU: Gaya Minimalis & Solid */}
      {/* Light: Charcoal | Dark: White | Aksen: Terracotta (.ctc) */}
      <Link href="/" className="text-2xl font-bold tracking-tighter text-darae-charcoal dark:text-white relative z-50 transition-colors">
        Darae<span className="text-darae-accent">.ctc</span>
      </Link>

      {/* 3. MENU DESKTOP */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-darae-grey dark:text-gray-300">
        <a href="#services" className="hover:text-darae-accent transition">
          Layanan
        </a>
        <a href="#portfolio" className="hover:text-darae-accent transition">
          Portfolio
        </a>
        
        {/* Toggle Theme */}
        <div className="scale-90">
            <ThemeToggle />
        </div>

        {/* 4. TOMBOL KONTAK: Gaya 'Super Rounded' */}
        {/* Light: Hitam Arang | Dark: Putih */}
        <a href="#contact" className="bg-darae-charcoal text-white dark:bg-white dark:text-darae-charcoal px-6 py-2 rounded-[2rem] hover:opacity-80 transition font-bold shadow-lg shadow-darae-charcoal/10">
          Kontak Kami
        </a>
      </div>

      {/* 5. TOMBOL HAMBURGER (MOBILE) */}
      <div className="md:hidden z-50 flex items-center gap-4">
        
        <div className="scale-75">
             <ThemeToggle />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-darae-charcoal dark:text-white focus:outline-none transition-transform duration-300"
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 6. MENU MOBILE OVERLAY */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-darae-light dark:bg-darae-dark flex flex-col items-center justify-center space-y-8 md:hidden z-40 animate-fadeIn">
           <a
             href="#services"
             className="text-2xl font-bold text-darae-charcoal dark:text-white hover:text-darae-accent transition"
             onClick={() => setIsOpen(false)}
           >
             Layanan
           </a>
           <a
             href="#portfolio"
             className="text-2xl font-bold text-darae-charcoal dark:text-white hover:text-darae-accent transition"
             onClick={() => setIsOpen(false)}
           >
             Portfolio
           </a>
           <a
             href="#contact"
             className="text-2xl font-bold bg-darae-charcoal text-white dark:bg-white dark:text-darae-charcoal px-8 py-3 rounded-[2rem] hover:opacity-80 transition shadow-xl"
             onClick={() => setIsOpen(false)}
           >
             Kontak Kami
           </a>
        </div>
      )}
    </nav>
  );
}
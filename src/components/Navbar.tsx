'use client'
import { useState } from 'react'
import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // <--- 1. KITA IMPORT INI

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // UPDATE STYLE NAV: 
    // - bg-white/70 (Transparan Putih) saat Light Mode
    // - dark:bg-black/50 (Transparan Hitam) saat Dark Mode
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center backdrop-blur-md z-50 border-b border-gray-200 dark:border-white/10 bg-white/70 dark:bg-black/50 transition-colors duration-300">
      
      {/* 1. LOGO */}
      {/* Warnanya kita gelapkan dikit saat Light Mode (from-blue-600) biar kontras */}
      <Link href="/" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent relative z-50">
        Darae.ctc
      </Link>

      {/* 2. MENU DESKTOP */}
      {/* Teks abu gelap saat Light, abu terang saat Dark */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        <a href="#services" className="hover:text-black dark:hover:text-white transition relative group">
          Layanan
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
        </a>
        <a href="#portfolio" className="hover:text-black dark:hover:text-white transition relative group">
          Portfolio
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
        </a>
        
        {/* --- 3. PASANG TOGGLE DI SINI (DESKTOP) --- */}
        <div className="scale-90">
            <ThemeToggle />
        </div>

        {/* Tombol Kontak: Hitam saat Light, Putih saat Dark */}
        <a href="#contact" className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:opacity-80 transition">
          Kontak Kami
        </a>
      </div>

      {/* 4. TOMBOL HAMBURGER & TOGGLE MOBILE */}
      <div className="md:hidden z-50 flex items-center gap-4">
        
        {/* Pasang Toggle juga di sini biar mudah diakses di HP */}
        <div className="scale-75">
             <ThemeToggle />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black dark:text-white focus:outline-none transition-transform duration-300"
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

      {/* 5. MENU MOBILE OVERLAY */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-black flex flex-col items-center justify-center space-y-8 md:hidden z-40 animate-fadeIn">
           <a
             href="#services"
             className="text-2xl font-bold text-gray-800 dark:text-gray-300 hover:text-blue-500 transition"
             onClick={() => setIsOpen(false)}
           >
             Layanan
           </a>
           <a
             href="#portfolio"
             className="text-2xl font-bold text-gray-800 dark:text-gray-300 hover:text-blue-500 transition"
             onClick={() => setIsOpen(false)}
           >
             Portfolio
           </a>
           <a
             href="#contact"
             className="text-2xl font-bold bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-full hover:opacity-80 transition"
             onClick={() => setIsOpen(false)}
           >
             Kontak Kami
           </a>
        </div>
      )}
    </nav>
  );
}
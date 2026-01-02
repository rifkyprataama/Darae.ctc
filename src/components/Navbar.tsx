'use client'
import { useState, useEffect } from 'react' // Import useEffect
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "./ui/Magnetic";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // --- LOGIKA SCROLL (HIDE/SHOW) ---
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Jika scroll ke BAWAH lebih dari 50px, sembunyikan Navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // Jika scroll ke ATAS, munculkan Navbar
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  // ----------------------------------

  return (
    <nav 
        className={`
            fixed top-0 w-full p-6 flex justify-between items-center z-50 
            transition-all duration-500 ease-in-out border-b border-transparent
            
            /* KELAS UNTUK HILANG/MUNCUL */
            ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            
            /* EFEK BACKGROUND: Transparan di paling atas, Blur saat di-scroll */
            ${lastScrollY > 20 ? 'bg-darae-light/90 dark:bg-darae-dark/90 backdrop-blur-md border-darae-grey/10' : 'bg-transparent'}
        `}
    >
      
      {/* LOGO */}
      <Link href="/" className="text-2xl font-bold tracking-tighter text-darae-charcoal dark:text-white relative z-50 transition-colors">
        Darae<span className="text-darae-accent">.ctc</span>
      </Link>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-darae-charcoal dark:text-white">
        
        {/* Link 1: Layanan */}
        <Magnetic>
            <a href="#services" className="transition-colors block p-4"> 
            Layanan
            </a>
        </Magnetic>

        {/* Link 2: Portfolio */}
        <Magnetic>
            <a href="#portfolio" className="transition-colors block p-4">
            Portfolio
            </a>
        </Magnetic>
        
        {/* ICON TEMA (BARU) */}
        {/* Dibungkus Magnetic agar ada efek magnet saat didekati */}
        <Magnetic>
            <div className="flex items-center justify-center">
                <ThemeToggle />
            </div>
        </Magnetic>

        {/* Tombol Kontak */}
        <Magnetic>
            <a href="#contact" className="bg-darae-charcoal text-white dark:bg-white dark:text-darae-charcoal px-6 py-2 rounded-[2rem] hover:scale-105 transition-transform font-bold shadow-lg shadow-darae-charcoal/10 inline-block">
            Kontak Kami
            </a>
        </Magnetic>
      </div>

      {/* TOMBOL HAMBURGER (MOBILE) */}
      <div className="md:hidden z-50 flex items-center gap-4">
        {/* Toggle juga ada di Mobile */}
        <ThemeToggle />

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

      {/* MENU MOBILE OVERLAY */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-darae-light dark:bg-darae-dark flex flex-col items-center justify-center space-y-8 md:hidden z-40 animate-fadeIn">
           <a
             href="#services"
             className="text-2xl font-bold text-darae-charcoal dark:text-white transition-transform hover:scale-110"
             onClick={() => setIsOpen(false)}
           >
             Layanan
           </a>
           <a
             href="#portfolio"
             className="text-2xl font-bold text-darae-charcoal dark:text-white transition-transform hover:scale-110"
             onClick={() => setIsOpen(false)}
           >
             Portfolio
           </a>
           <a
             href="#contact"
             className="text-2xl font-bold bg-darae-charcoal text-white dark:bg-white dark:text-darae-charcoal px-8 py-3 rounded-[2rem] hover:scale-105 transition-transform shadow-xl"
             onClick={() => setIsOpen(false)}
           >
             Kontak Kami
           </a>
        </div>
      )}
    </nav>
  );
}
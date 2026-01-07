'use client'
import { useState, useEffect } from 'react'
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "./ui/Magnetic";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal"; // 1. IMPORT MODAL

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 2. STATE UNTUK MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", link: "#home" },     
    { name: "About", link: "#about" },    
    { name: "Pricing", link: "#pricing" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" }, 
  ];

  return (
    <>
    {/* 3. PASANG MODAL DI LUAR NAV TAPI DI DALAM FRAGMENT */}
    <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    <nav 
        className={`
            fixed top-0 w-full z-50 
            transition-all duration-500 ease-in-out border-b border-transparent
            ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            ${lastScrollY > 20 ? 'bg-darae-light/90 dark:bg-darae-dark/90 backdrop-blur-md border-darae-grey/10' : 'bg-transparent'}
        `}
    >
      
      <div className="relative w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between md:justify-start">

          {/* LOGO */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="transition-opacity hover:opacity-70 block">
                <div className="relative h-10 w-40"> 
                    <Image 
                        src="/logo-light.png"  
                        alt="Darae Logo"
                        fill
                        className="object-contain object-left block dark:hidden"
                        priority
                    />
                    <Image 
                        src="/logo-dark.png" 
                        alt="Darae Logo Dark"
                        fill
                        className="object-contain object-left hidden dark:block"
                        priority
                    />
                </div>
            </Link>
          </div>

          {/* NAVIGASI TENGAH */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-1">
            {navItems.map((item, index) => (
                <Magnetic key={index}>
                    <Link href={item.link} className="text-sm font-medium text-darae-charcoal dark:text-white transition-colors block px-4 py-2 hover:text-darae-accent"> 
                        {item.name}
                    </Link>
                </Magnetic>
            ))}
          </div>

          {/* KANAN: TOGGLE + TOMBOL KONSULTASI */}
          <div className="hidden md:flex items-center gap-4 ml-auto z-50">
            
            <Magnetic>
                <div className="flex items-center justify-center">
                    <ThemeToggle />
                </div>
            </Magnetic>

            {/* 4. TOMBOL PEMICU MODAL (UBAH LINK JADI BUTTON/DIV dengan onClick) */}
            <Magnetic>
                <button 
                    onClick={() => setIsModalOpen(true)} // BUKA MODAL
                    className="bg-darae-charcoal text-white dark:bg-white dark:text-darae-charcoal px-6 py-3 rounded-[2rem] hover:scale-105 transition-transform font-bold text-sm shadow-lg shadow-darae-charcoal/10 inline-block cursor-pointer"
                >
                    Konsultasi Gratis
                </button>
            </Magnetic>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden ml-auto z-50 flex items-center gap-4">
            <ThemeToggle />

            <button onClick={() => setIsOpen(!isOpen)} className="text-darae-charcoal dark:text-white focus:outline-none transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-darae-light dark:bg-darae-dark flex flex-col items-center justify-center space-y-6 md:hidden z-40 animate-fadeIn">
           {navItems.map((item, index) => (
               <Link
                 key={index}
                 href={item.link}
                 className="text-xl font-bold text-darae-charcoal dark:text-white transition-transform hover:scale-110"
                 onClick={() => setIsOpen(false)}
               >
                 {item.name}
               </Link>
           ))}

           {/* Tombol Mobile Juga Buka Modal */}
           <button
             onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
             }}
             className="mt-4 text-xl font-bold bg-darae-charcoal text-white dark:bg-white dark:text-darae-charcoal px-8 py-3 rounded-[2rem] hover:scale-105 transition-transform shadow-xl"
           >
             Konsultasi Gratis
           </button>
        </div>
      )}
    </nav>
    </>
  );
}
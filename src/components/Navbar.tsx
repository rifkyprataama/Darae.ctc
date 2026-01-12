'use client'
import { useState, useEffect } from 'react'
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "./ui/Magnetic";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
    <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    <nav 
        className={`
            fixed top-0 w-full z-50 
            transition-all duration-500 ease-in-out border-b border-transparent
            ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            
            ${lastScrollY > 20 
                ? 'bg-white/80 dark:bg-[#1f2327]/80 backdrop-blur-md border-gray-200/50 dark:border-white/5 shadow-sm' 
                : 'bg-transparent'
            }
        `}
    >
      
      <div className="relative w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between md:justify-start">
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

          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-1">
            {navItems.map((item, index) => (
                <Magnetic key={index}>
                    <Link href={item.link} 
                          className="text-sm font-medium text-darae-charcoal dark:text-white transition-colors block px-4 py-2 hover:text-darae-accent dark:hover:text-darae-blue"
                    > 
                        {item.name}
                    </Link>
                </Magnetic>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 ml-auto z-50">
            
            <Magnetic>
                <div className="flex items-center justify-center">
                    <ThemeToggle />
                </div>
            </Magnetic>

            <Magnetic>
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="group relative cursor-pointer overflow-hidden inline-block px-6 py-3 rounded-[2rem] font-bold text-sm
                        transition-all duration-300 ease-out 
                        
                        /* --- NORMAL STATE --- */
                        /* Light: Hitam Charcoal */
                        bg-darae-charcoal text-white 
                        /* Dark: Gold Mewah, Teks Hitam */
                        dark:bg-darae-gold dark:text-darae-charcoal
                        
                        shadow-lg shadow-darae-charcoal/10
                        hover:scale-105 hover:shadow-darae-accent/40"
                >
                    <div className={`
                        absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out
                        
                        /* Light Hover: Merah (Accent) */
                        bg-darae-accent
                        /* Dark Hover: Biru Muted (Blue) */
                        dark:bg-darae-blue
                    `}></div>
                    
                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                        Konsultasi Gratis
                    </span>
                </button>
            </Magnetic>
          </div>

          <div className="md:hidden ml-auto z-50 flex items-center gap-4">
            <ThemeToggle />

            <button onClick={() => setIsOpen(!isOpen)} className="text-darae-charcoal dark:text-white focus:outline-none transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#f3f4f3] dark:bg-[#1f2327] flex flex-col items-center justify-center space-y-6 md:hidden z-40 animate-fadeIn">
          {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-xl font-bold text-darae-charcoal dark:text-white transition-transform hover:scale-110 hover:text-darae-accent dark:hover:text-darae-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
          ))}

          <button
            onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
            }}
            className="mt-4 text-xl font-bold px-8 py-3 rounded-[2rem] hover:scale-105 transition-transform shadow-xl
                bg-darae-charcoal text-white hover:bg-darae-accent
                dark:bg-darae-gold dark:text-darae-charcoal dark:hover:bg-darae-blue dark:hover:text-black"
          >
            Konsultasi Gratis
          </button>
        </div>
      )}
    </nav>
    </>
  );
}
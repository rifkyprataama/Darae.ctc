'use client'
import React from 'react'

export default function FloatingContact() {
  return (
    <a href="#contact" className="fixed bottom-10 right-10 z-40 hidden md:block group cursor-pointer">
      <div className="relative w-32 h-32 flex items-center justify-center">
        
        {/* LINGKARAN BERPUTAR (TEKS) */}
        <div className="absolute inset-0 w-full h-full animate-spin-slow">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <defs>
                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="11.5">
                <textPath xlinkHref="#circle" className="text-darae-charcoal dark:text-white fill-current font-bold uppercase tracking-widest">
                  hubungi kami • start a project •
                </textPath>
              </text>
            </svg>
        </div>

        {/* ICON TENGAH (DIAM/STATIS) */}
        {/* Saat hover, background berubah jadi Terracotta */}
        <div className="w-12 h-12 bg-darae-charcoal dark:bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-darae-accent group-hover:scale-110">
           {/* Icon Panah/Email */}
           <svg 
             className="w-5 h-5 text-white dark:text-black group-hover:text-white transition-colors" 
             fill="none" viewBox="0 0 24 24" stroke="currentColor"
           >
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
           </svg>
        </div>

      </div>
    </a>
  )
}
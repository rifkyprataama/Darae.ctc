'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  
  useEffect(() => {
    // 1. Inisialisasi Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    // 2. Loop Animasi
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // 3. INTERCEPT CLICK (Agar link #scroll tetap mulus)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Cari elemen <a> terdekat
      const link = target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      
      // Cek apakah link internal (diawali #)
      if (href && href.startsWith('#') && href.length > 1) {
        
        try {
            const targetElement = document.querySelector(href) as HTMLElement;
            
            if (targetElement) {
                e.preventDefault(); // Matikan loncatan kasar browser
                
                lenis.scrollTo(targetElement, {
                  offset: 0, 
                  duration: 1.5, 
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            }
        } catch (err) {
            console.warn("Invalid selector:", href);
        }
      }
    }

    // Pasang event listener
    document.addEventListener('click', handleAnchorClick);

    // Cleanup saat unmount
    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    }
  }, [])

  return <>{children}</>
}
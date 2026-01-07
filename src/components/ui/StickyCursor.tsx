'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext'; // Import kembali Context

export default function StickyCursor() {
  const { isHovered } = useCursor();

  // UKURAN DINAMIS (KEMBALI KE SEBELUMNYA):
  // - Biasa: 10px (Titik kecil)
  // - Hover: 40px (Lingkaran agak besar agar teks muat di dalamnya)
  // Saya besarkan sedikit dari 30 ke 40 agar teks "Konsultasi Gratis" lebih enak dilihat
  const cursorSize = isHovered ? 40 : 10; 
  
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    }
  }, [cursorSize])

  return (
    <motion.div 
      style={{
        left: smoothMouse.x, 
        top: smoothMouse.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        fixed pointer-events-none z-[9999] rounded-full flex items-center justify-center
        transition-colors duration-200
        
        ${isHovered 
            // STATE HOVER (DI ATAS TOMBOL):
            // - Background: Hampir transparan (hitam tipis 5%)
            // - Border: Ada border tipis agar lingkaran terlihat
            // - Backdrop Filter: Blur sedikit untuk efek kaca (opsional)
            ? 'bg-black/5 dark:bg-white/10 border border-black/50 dark:border-white/50 backdrop-blur-[1px]' 
            
            // STATE NORMAL (DI LUAR TOMBOL):
            // - Solid Hitam/Putih (Titik kecil)
            // - Tanpa Border
            : 'bg-black dark:bg-white border-none'
        }
      `}
    />
  )
}
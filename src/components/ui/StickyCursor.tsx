'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

export default function StickyCursor() {
  const { isHovered } = useCursor();

  // UKURAN:
  // - Default: 10px (Kecil)
  // - Hover: 30px (Besar)
  const cursorSize = isHovered ? 30 : 10; 
  
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
        fixed pointer-events-none z-[9999] rounded-full
        
        ${isHovered 
            // STATE 1: INTERAKTIF (Tombol/Link)
            // Pakai Mix-Blend-Difference (Efek Inversi Warna Keren)
            ? 'bg-white mix-blend-difference' 
            
            // STATE 2: TEKS BIASA (Judul/Paragraf)
            // Pakai Solid Color (Hitam/Putih) agar warna teks asli TIDAK berubah (misal: Merah tetap Merah)
            : 'bg-black dark:bg-white'
        }
      `}
    />
  )
}
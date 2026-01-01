'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

export default function StickyCursor() {
  const { isHovered } = useCursor();

  // UKURAN:
  // - Default: 10px (Kecil seperti titik pulpen)
  // - Hover: 30px (Membesar sedikit)
  const cursorSize = isHovered ? 30 : 10; 
  
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  // FISIKA GERAKAN:
  // Mass 0.5 membuat gerakan agak 'telat' dan smooth seperti Cuberto
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
      className="
        fixed pointer-events-none z-[9999] rounded-full
        
        /* KUNCI PERBAIKAN: */
        /* Gunakan 'bg-white' SAJA (Jangan diubah jadi black saat light mode) */
        /* mix-blend-difference akan otomatis membuatnya jadi Hitam di background Terang */
        bg-white mix-blend-difference
      "
    />
  )
}
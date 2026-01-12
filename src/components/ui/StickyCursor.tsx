'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext'; 

export default function StickyCursor() {
  const { isHovered } = useCursor();
  const [isMobile, setIsMobile] = useState(false);

  // UKURAN DINAMIS:
  const cursorSize = isHovered ? 50 : 15; 
  
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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsMobile(!mediaQuery.matches);

    if (mediaQuery.matches) {
        window.addEventListener("mousemove", manageMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    }
  }, [cursorSize]);

  if (isMobile) return null;

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
        hidden md:flex
        fixed pointer-events-none z-[9999] rounded-full items-center justify-center
        transition-colors duration-300
        
        ${isHovered 
            ? 'bg-darae-accent/5 dark:bg-darae-gold/10 border border-darae-accent dark:border-darae-gold backdrop-blur-[1px]'
            : 'bg-darae-charcoal dark:bg-darae-gold border-none'
        }
      `}
    />
  )
}
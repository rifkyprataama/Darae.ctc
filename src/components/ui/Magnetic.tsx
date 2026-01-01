'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '@/context/CursorContext' // 1. Import Context

export default function Magnetic({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({x: 0, y: 0})
    const { setIsHovered } = useCursor() // 2. Ambil remote control

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        if (!ref.current) return;
        
        const {height, width, left, top} = ref.current.getBoundingClientRect()
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)

        setPosition({x: middleX * 0.35, y: middleY * 0.35})
    }

    const reset = () => {
        setPosition({x:0, y:0})
        setIsHovered(false) // 4. Kecilkan saat mouse pergi
    }

    const handleEnter = () => {
        setIsHovered(true) // 3. Besarkan saat mouse masuk
    }

    const { x, y } = position
    return (
        <motion.div
            style={{position: "relative"}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseEnter={handleEnter} // Trigger masuk
            onMouseLeave={reset}       // Trigger keluar
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >
            {children}
        </motion.div>
    )
}
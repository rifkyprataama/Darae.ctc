'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '@/context/CursorContext'

export default function Magnetic({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({x: 0, y: 0})
    const { setIsHovered } = useCursor()

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        if (!ref.current) return;
        
        const {height, width, left, top} = ref.current.getBoundingClientRect()
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)

        // Angka 0.35 adalah kekuatan magnet. 
        // Ubah ke 0.2 jika ingin gerakannya lebih halus/pelan.
        setPosition({x: middleX * 0.35, y: middleY * 0.35})
    }

    const reset = () => {
        setPosition({x:0, y:0})
        setIsHovered(false)
    }

    const handleEnter = () => {
        setIsHovered(true)
    }

    const { x, y } = position
    return (
        <motion.div
            // REVISI PENTING: Tambahkan display: "inline-block"
            // Ini menjaga agar elemen tidak melebar memenuhi layar (block) yang bisa merusak Navbar
            style={{ position: "relative", display: "inline-block" }} 
            ref={ref}
            onMouseMove={handleMouse}
            onMouseEnter={handleEnter}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >
            {children}
        </motion.div>
    )
}
'use client'
import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export default function Snowfall() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { resolvedTheme } = useTheme() 

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let snowflakes: any[] = []

        // --- KONFIGURASI ---
        const particleCount = 60 
        
        // PENYESUAIAN PALET WARNA:
        // Dark Mode: GOLD (Mewah/Sparks) -> rgb(212, 175, 55)
        // Light Mode: CHARCOAL (Tech Dust) -> rgb(31, 35, 39)
        const color = resolvedTheme === 'dark' 
            ? 'rgba(212, 175, 55, ' 
            : 'rgba(31, 35, 39, ' 

        // Fungsi resize canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        // Membuat partikel
        const createSnowflakes = () => {
            snowflakes = []
            for (let i = 0; i < particleCount; i++) {
                snowflakes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 0.5, // Ukuran sedikit lebih kecil agar elegan
                    speed: Math.random() * 0.5 + 0.2, // Kecepatan diperlambat (lebih calming)
                    drift: Math.random() * 1 - 0.5, 
                    opacity: Math.random() * 0.4 + 0.1 // Opacity max 0.5 agar tidak mengganggu teks
                })
            }
        }

        // Loop Animasi
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            snowflakes.forEach((flake) => {
                ctx.beginPath()
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
                ctx.fillStyle = color + flake.opacity + ')' 
                ctx.fill()

                // Update posisi
                flake.y += flake.speed
                flake.x += flake.drift

                // Reset jika keluar layar (bawah)
                if (flake.y > canvas.height) {
                    flake.y = -5
                    flake.x = Math.random() * canvas.width
                }
                
                // Reset jika keluar layar (samping)
                if (flake.x > canvas.width) flake.x = 0
                if (flake.x < 0) flake.x = canvas.width
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        // Inisialisasi
        resizeCanvas()
        createSnowflakes()
        draw()

        // Event Listener
        window.addEventListener('resize', () => {
            resizeCanvas()
            createSnowflakes()
        })

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [resolvedTheme]) // Re-run saat tema berubah

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]" 
        />
    )
}
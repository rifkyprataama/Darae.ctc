'use client'
import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // 1. Kondisi Awal (Sedikit turun ke bawah & transparan)
      initial={{ y: 20, opacity: 0 }}
      
      // 2. Kondisi Akhir (Posisi normal & terlihat jelas)
      animate={{ y: 0, opacity: 1 }}
      
      // 3. Konfigurasi Transisi (Kurva Bezier untuk efek mewah/premium)
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
      
      // 4. STYLE:
      // - bg-transparent: Agar Mesh Gradient dari layout.tsx tetap terlihat
      // - w-full: Agar konten mengisi lebar layar penuh
      className="w-full bg-transparent"
    >
      {children}
    </motion.div>
  )
}
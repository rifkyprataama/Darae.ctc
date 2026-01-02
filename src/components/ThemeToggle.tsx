'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion' // Kita pakai motion agar ada animasi putar saat ganti

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-10 h-10" /> // Placeholder agar tidak layout shift
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="
        w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300
        hover:bg-darae-grey/10 dark:hover:bg-white/10
        text-darae-charcoal dark:text-white
      "
    >
      {/* Animasi Rotasi saat ikon berubah */}
      <motion.div
        key={resolvedTheme} // Kunci ini memicu animasi ulang saat tema berubah
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        exit={{ rotate: 90, scale: 0 }}
        transition={{ duration: 0.2 }}
      >
        {resolvedTheme === 'dark' ? (
          // IKON MATAHARI (Muncul saat Dark Mode -> untuk switch ke Light)
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          // IKON BULAN (Muncul saat Light Mode -> untuk switch ke Dark)
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </motion.div>
    </button>
  )
}
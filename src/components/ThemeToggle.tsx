'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      type="button"
      className="
        relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none 
        border border-gray-200 dark:border-zinc-700
        /* WARNA WADAH (CONTAINER): */
        bg-gray-100 dark:bg-zinc-800
      "
    >
      {/* ---------------------------------------------------------------
          IKON BACKGROUND (YANG DIAM)
          Hanya muncul ketika tombol sedang menjauh
      --------------------------------------------------------------- */}
      
      {/* Ikon Matahari Abu (Kiri) - Muncul HANYA saat Dark Mode (Tombol ada di kanan) */}
      <div className="absolute left-2 top-1.5 hidden dark:block text-gray-500 text-xs">
        ☀️
      </div>

      {/* Ikon Bulan Abu (Kanan) - Muncul HANYA saat Light Mode (Tombol ada di kiri) */}
      <div className="absolute right-2 top-1.5 block dark:hidden text-gray-400 text-xs">
        🌙
      </div>


      {/* ---------------------------------------------------------------
          TOMBOL BULAT (THUMB) BERGERAK
      --------------------------------------------------------------- */}
      <div
        className="
          w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center
          /* WARNA TOMBOL: Hitam saat Light, Putih saat Dark */
          bg-black dark:bg-white 
          /* POSISI: Kiri (0) saat Light, Kanan (8) saat Dark */
          translate-x-0 dark:translate-x-8
        "
      >
        {/* IKON DI DALAM TOMBOL (YANG AKTIF) */}
        
        {/* Ikon Matahari Putih (Muncul saat Light Mode) */}
        <svg className="w-3.5 h-3.5 text-white dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>

        {/* Ikon Bulan Hitam (Muncul saat Dark Mode) */}
        <svg className="w-3.5 h-3.5 text-black hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
    </button>
  )
}
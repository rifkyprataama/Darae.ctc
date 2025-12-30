'use client'
import { useState } from 'react'
import Link from "next/link"; // Kita tetap butuh ini untuk logo (opsional) atau biarkan saja

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center backdrop-blur-md z-50 border-b border-white/10">
        
        {/* 1. LOGO (Boleh tetap pakai Link karena biasanya reload ke atas) */}
        <Link href="/" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent relative z-50">
            Darae.ctc
        </Link>

        {/* 2. MENU DESKTOP (GANTI Link JADI a) */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-white transition relative group">
            Layanan
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="hover:text-white transition relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Kontak Kami
            </a>
        </div>

        {/* 3. TOMBOL HAMBURGER */}
        <div className="md:hidden z-50">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform duration-300"
            aria-label="Toggle Menu"
            >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
            </button>
        </div>

        {/* 4. MENU MOBILE (GANTI Link JADI a) */}
        {isOpen && (
            <div className="absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center space-y-8 md:hidden z-40 animate-fadeIn">
            <a
                href="#services"
                className="text-2xl font-bold text-gray-300 hover:text-white transition"
                onClick={() => setIsOpen(false)}
            >
                Layanan
            </a>
            <a
                href="#portfolio"
                className="text-2xl font-bold text-gray-300 hover:text-white transition"
                onClick={() => setIsOpen(false)}
            >
                Portfolio
            </a>
            <a
                href="#contact"
                className="text-2xl font-bold bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
                onClick={() => setIsOpen(false)}
            >
                Kontak Kami
            </a>
            </div>
        )}
        </nav>
    );
}
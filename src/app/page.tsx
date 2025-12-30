'use client'
import { useState } from 'react'
import Link from "next/link";

export default function Home() {
  // 1. Persiapan Data (State)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('') // Bisa: 'loading', 'success', 'error'

  // 2. Fungsi saat tombol 'Kirim' diklik
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Mencegah reload halaman
    setStatus('loading')

    try {
      // Kirim data ke API yang kita buat tadi
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' }) // Kosongkan form lagi
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center backdrop-blur-md z-50 border-b border-white/10">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Darae.ctc
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
          <Link href="#services" className="hover:text-white transition">Layanan</Link>
          <Link href="#contact" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Kontak Kami
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="mb-6 px-3 py-1 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest">
          Open for Projects
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Reality</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
          Mitra teknologi untuk Web Development, Mobile Apps, dan Desain Grafis. 
          Jadwalkan konsultasi gratis hari ini.
        </p>
        <a href="#contact" className="px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
            Mulai Proyek
        </a>
      </section>

      {/* Contact Section (FORMULIR KITA) */}
      <section id="contact" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10">
            {/* Input Nama */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Nama</label>
              <input 
                type="text" 
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email / WhatsApp</label>
              <input 
                type="text" 
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Input Pesan */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Pesan Project</label>
              <textarea 
                rows={4}
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            {/* Tombol Kirim */}
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
            </button>

            {/* Pesan Status */}
            {status === 'success' && (
              <p className="text-green-400 text-center text-sm mt-4">✅ Pesan terkirim! Kami akan segera menghubungi Anda.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center text-sm mt-4">❌ Gagal mengirim. Pastikan internet lancar.</p>
            )}
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 border-t border-white/10 text-sm">
        <p>&copy; 2024 Darae Creative & Tech.</p>
      </footer>
    </main>
  );
}
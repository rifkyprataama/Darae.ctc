'use client'
import { useState } from 'react'

export default function Contact() {
  // Pindahkan State dan Logic ke sini
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
        })

        if (res.ok) {
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } else {
            setStatus('error')
        }
        } catch (error) {
        setStatus('error')
        }
    }

    return (
        <section id="contact" className="py-20 px-4 border-t border-white/10">
            <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10">
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

                <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
                >
                {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
                </button>

                {status === 'success' && (
                <p className="text-green-400 text-center text-sm mt-4">✅ Pesan terkirim! Kami akan segera menghubungi Anda.</p>
                )}
                {status === 'error' && (
                <p className="text-red-400 text-center text-sm mt-4">❌ Gagal mengirim. Pastikan internet lancar.</p>
                )}
            </form>
            </div>
        </section>
    )
}
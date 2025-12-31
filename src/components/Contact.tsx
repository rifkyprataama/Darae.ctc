'use client'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        // Simulasi sukses untuk demo
        setTimeout(() => {
             setStatus('success')
             setFormData({ name: '', email: '', message: '' })
        }, 2000)
    }

    return (
        <section id="contact" className="py-20 px-4 border-t border-gray-200 dark:border-white/10 transition-colors">
            <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white transition-colors">Hubungi Kami</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl border border-gray-200 bg-gray-50 dark:bg-white/5 dark:border-white/10 transition-colors">
                <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors">Nama</label>
                <input 
                    type="text" 
                    required
                    className="w-full rounded-lg p-3 focus:outline-none focus:border-blue-500 transition 
                               bg-white border border-gray-300 text-gray-900 
                               dark:bg-black/50 dark:border-gray-700 dark:text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                </div>
                <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors">Email / WhatsApp</label>
                <input 
                    type="text" 
                    required
                    className="w-full rounded-lg p-3 focus:outline-none focus:border-blue-500 transition 
                               bg-white border border-gray-300 text-gray-900 
                               dark:bg-black/50 dark:border-gray-700 dark:text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                </div>
                <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors">Pesan Project</label>
                <textarea 
                    rows={4}
                    required
                    className="w-full rounded-lg p-3 focus:outline-none focus:border-blue-500 transition 
                               bg-white border border-gray-300 text-gray-900 
                               dark:bg-black/50 dark:border-gray-700 dark:text-white"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                </div>

                <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
                >
                {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
                </button>

                {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center text-sm mt-4">✅ Pesan terkirim! Kami akan segera menghubungi Anda.</p>
                )}
            </form>
            </div>
        </section>
    )
}
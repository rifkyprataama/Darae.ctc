'use client'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        // Simulasi kirim data
        setTimeout(() => {
             setStatus('success')
             setFormData({ name: '', email: '', message: '' })
        }, 2000)
    }

    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-3xl mx-auto">
                {/* CONTAINER FORM: Gaya Kartu Super Rounded */}
                <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-darae-grey/10 shadow-2xl shadow-darae-grey/10 dark:bg-white/5 dark:border-white/5">
                    
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-darae-charcoal dark:text-white">
                            Mari Berkolaborasi<span className="text-darae-accent">.</span>
                        </h2>
                        <p className="text-darae-grey dark:text-gray-400">
                            Ceritakan ide Anda, kami akan mewujudkannya menjadi realitas digital.
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-darae-charcoal dark:text-gray-300 ml-4">Nama</label>
                                <input 
                                    type="text" 
                                    required
                                    placeholder="John Doe"
                                    className="w-full rounded-2xl p-4 outline-none transition-all duration-300
                                               bg-darae-light text-darae-charcoal border border-transparent
                                               focus:bg-white focus:border-darae-accent focus:ring-4 focus:ring-darae-accent/10
                                               dark:bg-black/20 dark:text-white dark:focus:bg-black/40"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-darae-charcoal dark:text-gray-300 ml-4">Email / WhatsApp</label>
                                <input 
                                    type="text" 
                                    required
                                    placeholder="email@example.com"
                                    className="w-full rounded-2xl p-4 outline-none transition-all duration-300
                                               bg-darae-light text-darae-charcoal border border-transparent
                                               focus:bg-white focus:border-darae-accent focus:ring-4 focus:ring-darae-accent/10
                                               dark:bg-black/20 dark:text-white dark:focus:bg-black/40"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-darae-charcoal dark:text-gray-300 ml-4">Pesan Project</label>
                            <textarea 
                                rows={5}
                                required
                                placeholder="Saya ingin membuat website untuk..."
                                className="w-full rounded-3xl p-5 outline-none transition-all duration-300
                                           bg-darae-light text-darae-charcoal border border-transparent
                                           focus:bg-white focus:border-darae-accent focus:ring-4 focus:ring-darae-accent/10
                                           dark:bg-black/20 dark:text-white dark:focus:bg-black/40 resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'loading'}
                            className="w-full py-4 rounded-[2rem] font-bold text-lg transition-all duration-300
                                       bg-darae-accent text-white shadow-xl shadow-darae-accent/20
                                       hover:opacity-90 hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:scale-100"
                        >
                            {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan Sekarang'}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 rounded-2xl bg-green-100 text-green-700 text-center text-sm font-medium dark:bg-green-900/30 dark:text-green-400">
                                ✅ Pesan terkirim! Tim Darae akan segera menghubungi Anda.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
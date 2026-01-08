'use client'
import { useState } from 'react'
import Magnetic from './ui/Magnetic' // 1. IMPORT MAGNETIC
import { Send, Sparkles } from 'lucide-react' // Tambahan icon agar lebih manis

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        
        // Simulasi pengiriman data (bisa diganti dengan API route Anda nanti)
        setTimeout(() => {
             setStatus('success')
             setFormData({ name: '', email: '', message: '' })
        }, 2000)
    }

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            
            {/* 2. BACKGROUND DECOR (Agar seragam dengan Pricing/About) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-darae-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="max-w-3xl mx-auto">
                {/* CONTAINER FORM */}
                <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-darae-grey/10 shadow-2xl shadow-darae-grey/10 dark:bg-white/5 dark:border-white/5 relative overflow-hidden backdrop-blur-sm transition-colors duration-500">
                    
                    <div className="text-center mb-10">
                        {/* 3. BADGE KECIL (Konsistensi dengan FAQ/Pricing) */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darae-accent/10 text-darae-accent text-[10px] font-bold uppercase tracking-wider mb-4">
                            <Sparkles className="w-3 h-3" /> Let's Talk
                        </div>

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
                                <label className="text-xs font-bold uppercase tracking-wider text-darae-charcoal/50 dark:text-gray-400 ml-4">Nama</label>
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
                                <label className="text-xs font-bold uppercase tracking-wider text-darae-charcoal/50 dark:text-gray-400 ml-4">Email / WhatsApp</label>
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
                            <label className="text-xs font-bold uppercase tracking-wider text-darae-charcoal/50 dark:text-gray-400 ml-4">Pesan Project</label>
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

                        {/* 4. TOMBOL MAGNETIC (Hitam -> Biru) */}
                        <div className="flex justify-center pt-2">
                            <Magnetic>
                                <button 
                                    type="submit" 
                                    disabled={status === 'loading'}
                                    // STYLE SERAGAM: Default Hitam, Hover Biru (sama seperti FAQ/Navbar)
                                    className="group relative inline-flex items-center justify-center gap-3 bg-darae-charcoal dark:bg-white text-white dark:text-black hover:bg-darae-accent hover:text-white dark:hover:text-white font-bold py-4 px-12 rounded-full overflow-hidden transition-all shadow-xl shadow-darae-charcoal/20 hover:shadow-darae-accent/30 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
                                    </span>
                                    {!status && (
                                        <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-white" />
                                    )}
                                </button>
                            </Magnetic>
                        </div>

                        {status === 'success' && (
                            <div className="p-4 rounded-2xl bg-green-100 text-green-700 text-center text-sm font-medium dark:bg-green-900/30 dark:text-green-400 animate-fadeIn">
                                ✅ Pesan terkirim! Tim Darae akan segera menghubungi Anda.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
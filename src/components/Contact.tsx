'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, MessageSquare, Send, ArrowRight, Loader2, CheckCircle } from 'lucide-react'
import Magnetic from './ui/Magnetic'
import ScrollReveal from "./ui/ScrollReveal";
import { supabase } from '@/lib/supabaseClient' // PENTING: Import Supabase

export default function Contact() {
    const [focusedField, setFocusedField] = useState<string | null>(null)
    
    // STATE BARU: Untuk handle data form
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // FUNGSI KIRIM PESAN
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // 1. Kirim ke Supabase
        const { error } = await supabase
            .from('messages')
            .insert([formData])

        setLoading(false)

        if (error) {
            alert('Gagal mengirim pesan. Silakan coba lagi.')
            console.error(error)
        } else {
            // 2. Jika Sukses
            setSuccess(true)
            setFormData({ name: '', email: '', message: '' }) // Reset form
            setTimeout(() => setSuccess(false), 5000) // Hilangkan notif sukses setelah 5 detik
        }
    }
    
    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden bg-transparent">
        <div className="absolute bottom-0 left-0 w-full h-[500px] 
                bg-gradient-to-t from-darae-accent/5 to-transparent 
                -z-10 pointer-events-none">
        </div>

        <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0.1} fullWidth>
                <div className="bg-white dark:bg-[#1f2327] rounded-[3rem] p-8 md:p-12 
                    shadow-2xl shadow-darae-charcoal/5 dark:shadow-none 
                    border border-gray-100 dark:border-white/5 relative overflow-hidden transition-colors duration-500">

                    {/* NOTIFIKASI SUKSES */}
                    {success && (
                        <div className="absolute inset-0 z-50 bg-white dark:bg-[#1f2327] flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-darae-charcoal dark:text-white mb-2">Pesan Terkirim!</h3>
                            <p className="text-gray-500 dark:text-gray-400">Terima kasih. Kami akan segera menghubungi Anda kembali.</p>
                            <button onClick={() => setSuccess(false)} className="mt-6 text-sm font-bold text-darae-accent underline cursor-pointer">Kirim pesan lagi</button>
                        </div>
                    )}

                    <ScrollReveal direction="up" delay={0.2} fullWidth>
                        <div className="text-center mb-12 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darae-accent/10 text-darae-accent text-xs font-bold uppercase tracking-wider mb-4">
                                <MessageSquare className="w-3 h-3" /> Let's Talk
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-darae-charcoal dark:text-white mb-4">
                                Mari <span className="text-darae-accent">Berkolaborasi</span>
                            </h2>
                            <p className="text-darae-charcoal/70 dark:text-gray-400">
                                Ceritakan ide Anda, kami akan mewujudkannya menjadi realitas digital.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.3} fullWidth>
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-darae-charcoal dark:text-white uppercase tracking-wider ml-1">
                                        Nama Lengkap
                                    </label>
                                    <div className={`
                                        group relative flex items-center bg-gray-50 dark:bg-white/5 rounded-2xl border transition-all duration-300
                                        ${focusedField === 'name' 
                                            ? 'border-darae-accent ring-4 ring-darae-accent/10 bg-white dark:bg-black dark:border-darae-gold dark:ring-darae-gold/10' 
                                            : 'border-gray-200 dark:border-white/10 hover:border-darae-accent/50 dark:hover:border-white/20'}
                                    `}>
                                        <User className={`w-5 h-5 absolute left-4 transition-colors ${focusedField === 'name' ? 'text-darae-accent dark:text-darae-gold' : 'text-gray-400'}`} />
                                        <input 
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            placeholder="John Doe"
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-transparent p-4 pl-12 outline-none text-darae-charcoal dark:text-white placeholder:text-gray-400 font-medium rounded-2xl"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-darae-charcoal dark:text-white uppercase tracking-wider ml-1">
                                        Email / WhatsApp
                                    </label>
                                    <div className={`
                                        group relative flex items-center bg-gray-50 dark:bg-white/5 rounded-2xl border transition-all duration-300
                                        ${focusedField === 'email' 
                                            ? 'border-darae-accent ring-4 ring-darae-accent/10 bg-white dark:bg-black dark:border-darae-gold dark:ring-darae-gold/10' 
                                            : 'border-gray-200 dark:border-white/10 hover:border-darae-accent/50 dark:hover:border-white/20'}
                                    `}>
                                        <Mail className={`w-5 h-5 absolute left-4 transition-colors ${focusedField === 'email' ? 'text-darae-accent dark:text-darae-gold' : 'text-gray-400'}`} />
                                        <input 
                                            type="text"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            placeholder="email@example.com / 0812..."
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-transparent p-4 pl-12 outline-none text-darae-charcoal dark:text-white placeholder:text-gray-400 font-medium rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-darae-charcoal dark:text-white uppercase tracking-wider ml-1">
                                    Ceritakan Project Anda
                                </label>
                                <div className={`
                                    group relative flex items-start bg-gray-50 dark:bg-white/5 rounded-2xl border transition-all duration-300
                                    ${focusedField === 'message' 
                                        ? 'border-darae-accent ring-4 ring-darae-accent/10 bg-white dark:bg-black dark:border-darae-gold dark:ring-darae-gold/10' 
                                        : 'border-gray-200 dark:border-white/10 hover:border-darae-accent/50 dark:hover:border-white/20'}
                                `}>
                                    <MessageSquare className={`w-5 h-5 absolute left-4 top-4 transition-colors ${focusedField === 'message' ? 'text-darae-accent dark:text-darae-gold' : 'text-gray-400'}`} />
                                    <textarea 
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        placeholder="Saya ingin membuat website untuk..."
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-transparent p-4 pl-12 outline-none text-darae-charcoal dark:text-white placeholder:text-gray-400 font-medium rounded-2xl resize-none"
                                    />
                                </div>
                            </div>

                            <ScrollReveal direction="up" delay={0.4} fullWidth>
                                <div className="pt-4 flex justify-center">
                                    <Magnetic>
                                        <button 
                                            disabled={loading}
                                            type="submit"
                                            className="group relative inline-flex items-center justify-center gap-3 
                                            bg-darae-charcoal dark:bg-darae-gold 
                                            text-white dark:text-darae-charcoal 
                                            font-bold py-4 px-10 rounded-full overflow-hidden transition-all 
                                            hover:scale-105 hover:shadow-xl hover:shadow-darae-accent/20 active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            
                                            {loading ? (
                                                <Loader2 className="w-5 h-5 animate-spin text-white dark:text-black" />
                                            ) : (
                                                <>
                                                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors">Kirim Pesan</span>
                                                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-white dark:group-hover:text-white" />
                                                </>
                                            )}
                                            
                                            <div className="absolute inset-0 bg-darae-accent dark:bg-darae-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        </button>
                                    </Magnetic>
                                </div>
                            </ScrollReveal>
                        </form>
                    </ScrollReveal>
                </div>
            </ScrollReveal>
        </div>
        </section>
    )
}
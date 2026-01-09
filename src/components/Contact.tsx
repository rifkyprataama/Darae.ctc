'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, MessageSquare, Send, ArrowRight } from 'lucide-react'
import Magnetic from './ui/Magnetic'
import ScrollReveal from "./ui/ScrollReveal";

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden bg-transparent">
      
      {/* Background Decor (Red/Taupe Blur) */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] 
            bg-gradient-to-t from-darae-accent/5 to-transparent 
            -z-10 pointer-events-none">
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* ANIMASI KOTAK FORM UTAMA */}
        <ScrollReveal direction="up" delay={0.1} fullWidth>
            <div className="bg-white dark:bg-[#1f2327] rounded-[3rem] p-8 md:p-12 
                shadow-2xl shadow-darae-charcoal/5 dark:shadow-none 
                border border-gray-100 dark:border-white/5 relative overflow-hidden">
                
                {/* Header Form */}
                <ScrollReveal direction="up" delay={0.2} fullWidth>
                    <div className="text-center mb-12 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darae-accent/10 text-darae-accent text-xs font-bold uppercase tracking-wider mb-4">
                            <MessageSquare className="w-3 h-3" /> Let's Talk
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-darae-charcoal dark:text-white mb-4">
                            Mari <span className="text-darae-accent">Berkolaborasi.</span>
                        </h2>
                        <p className="text-darae-charcoal/70 dark:text-gray-400">
                            Ceritakan ide Anda, kami akan mewujudkannya menjadi realitas digital.
                        </p>
                    </div>
                </ScrollReveal>

                {/* FORM INPUT AREA */}
                <ScrollReveal direction="up" delay={0.3} fullWidth>
                    <form className="space-y-6 relative z-10">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* INPUT NAMA */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-darae-charcoal dark:text-white uppercase tracking-wider ml-1">
                                    Nama Lengkap
                                </label>
                                <div className={`
                                    group relative flex items-center bg-gray-50 dark:bg-white/5 rounded-2xl border transition-all duration-300
                                    ${focusedField === 'name' 
                                        /* FOCUS STATE: Border Merah (Light) / Gold (Dark) */
                                        ? 'border-darae-accent ring-4 ring-darae-accent/10 bg-white dark:bg-black dark:border-darae-gold dark:ring-darae-gold/10' 
                                        /* NORMAL STATE */
                                        : 'border-gray-200 dark:border-white/10 hover:border-darae-accent/50 dark:hover:border-white/20'}
                                `}>
                                    <User className={`w-5 h-5 absolute left-4 transition-colors ${focusedField === 'name' ? 'text-darae-accent dark:text-darae-gold' : 'text-gray-400'}`} />
                                    <input 
                                        type="text"
                                        placeholder="John Doe"
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-transparent p-4 pl-12 outline-none text-darae-charcoal dark:text-white placeholder:text-gray-400 font-medium rounded-2xl"
                                    />
                                </div>
                            </div>

                            {/* INPUT EMAIL */}
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
                                        placeholder="email@example.com"
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-transparent p-4 pl-12 outline-none text-darae-charcoal dark:text-white placeholder:text-gray-400 font-medium rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* TEXTAREA PESAN */}
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
                                    placeholder="Saya ingin membuat website untuk..."
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent p-4 pl-12 outline-none text-darae-charcoal dark:text-white placeholder:text-gray-400 font-medium rounded-2xl resize-none"
                                />
                            </div>
                        </div>

                        {/* TOMBOL KIRIM */}
                        <ScrollReveal direction="up" delay={0.4} fullWidth>
                            <div className="pt-4 flex justify-center">
                                <Magnetic>
                                    <button className="group relative inline-flex items-center justify-center gap-3 
                                        bg-darae-charcoal dark:bg-darae-gold 
                                        text-white dark:text-darae-charcoal 
                                        font-bold py-4 px-10 rounded-full overflow-hidden transition-all 
                                        hover:scale-105 hover:shadow-xl hover:shadow-darae-accent/20 active:scale-95 cursor-pointer">
                                        
                                        <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors">Kirim Pesan</span>
                                        <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-white dark:group-hover:text-white" />
                                        
                                        {/* Hover Effect: Merah (Light) / Biru (Dark) */}
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
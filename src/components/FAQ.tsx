'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Zap, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react'
import Magnetic from './ui/Magnetic'
import { useCursor } from '@/context/CursorContext' 
import ConsultationModal from './ConsultationModal'
import { faqData } from '@/data/faq'
import ScrollReveal from "./ui/ScrollReveal";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null) 
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { setIsHovered } = useCursor()
    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="pt-32 pb-24 px-4 bg-transparent relative overflow-hidden transition-colors duration-500">
            
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    <div className="lg:col-span-5 relative lg:sticky lg:top-32 order-2 lg:order-1">
                        <ScrollReveal direction="up" delay={0.1} fullWidth>
                            <div className="relative p-8 md:p-10 rounded-[2.5rem] 
                                bg-white/50 dark:bg-[#1f2327]/50 backdrop-blur-md 
                                border border-gray-200 dark:border-white/5 
                                overflow-hidden transition-all duration-500 shadow-xl shadow-gray-200/20 dark:shadow-none">

                                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darae-accent/10 text-darae-accent text-[10px] font-bold uppercase tracking-wider mb-6">
                                        <Zap className="w-3 h-3" /> Siap Memulai Project Anda?
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-darae-charcoal dark:text-white">
                                        Bagaimana <span className="text-darae-accent">Sudah Yakin?</span>
                                    </h2>
                                    <p className="text-darae-charcoal/70 dark:text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                                        Kami paham setiap bisnis itu unik. Diskusikan project website, aplikasi kompleks, digital creative, atau yang lainnya.
                                    </p>

                                    <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
                                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                            <ShieldCheck className="w-4 h-4 text-green-500" /> NDA Available
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                            <Users className="w-4 h-4 text-darae-blue" /> Dedicated Team
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                            <Clock className="w-4 h-4 text-darae-gold" /> Priority Support
                                        </div>
                                    </div>

                                    <div className="w-full flex justify-center">
                                        <Magnetic>
                                            <button 
                                                onClick={() => setIsModalOpen(true)}
                                                onMouseEnter={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(false)}
                                                className="group relative w-full inline-flex items-center justify-center gap-3 
                                                            bg-darae-charcoal dark:bg-darae-gold 
                                                            text-white dark:text-darae-charcoal 
                                                            font-bold py-4 px-8 rounded-full overflow-hidden transition-all shadow-xl 
                                                            shadow-darae-charcoal/20 hover:shadow-darae-accent/30 active:scale-95 cursor-pointer"
                                            >
                                                <div className="absolute inset-0 bg-darae-accent dark:bg-darae-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                                
                                                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                                                    Konsultasi Project
                                                </span>
                                                <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                            </button>
                                        </Magnetic>
                                    </div>
                                    
                                    <p className="text-center mt-4 text-[10px] text-gray-400 font-medium">
                                        Respon cepat dalam 24 jam
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">

                        <ScrollReveal direction="up" fullWidth>
                            <div className="mb-10 text-left">
                                <span className="text-darae-accent font-bold tracking-widest text-xs uppercase mb-2 block">
                                    FAQ
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bold text-darae-charcoal dark:text-white">
                                    Pertanyaan Umum
                                </h3>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <ScrollReveal key={index} delay={0.1 + (index * 0.1)} fullWidth>
                                    <div 
                                        className={`
                                            rounded-2xl transition-all duration-300 border
                                            ${activeIndex === index 
                                                ? 'bg-white dark:bg-[#1f2327] border-darae-accent dark:border-darae-gold shadow-lg shadow-darae-accent/5' 
                                                : 'bg-transparent border-gray-200 dark:border-white/10 hover:border-darae-accent dark:hover:border-darae-gold dark:hover:bg-white/5'}
                                        `}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                        >
                                            <span className={`font-bold text-lg pr-8 transition-colors ${activeIndex === index ? 'text-darae-accent dark:text-darae-gold' : 'text-darae-charcoal dark:text-white'}`}>
                                                {faq.question}
                                            </span>
                                            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 
                                                ${activeIndex === index 
                                                    ? 'bg-darae-accent dark:bg-darae-gold text-white dark:text-black rotate-180' 
                                                    : 'bg-gray-100 dark:bg-white/10 text-gray-500'}`}>
                                                {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {activeIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-6 pt-0 text-darae-charcoal/70 dark:text-gray-400 leading-relaxed text-base border-t border-dashed border-gray-200 dark:border-white/10 mt-2">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
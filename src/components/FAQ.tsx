'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Zap, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react'
import Magnetic from './ui/Magnetic'
import { useCursor } from '@/context/CursorContext' 
import ConsultationModal from './ConsultationModal'

const faqs = [
    {
        question: "Berapa lama estimasi pengerjaan website/aplikasi?",
        answer: "Tergantung kompleksitas. Untuk Landing Page sekitar 3-7 hari kerja. Website Company Profile 7-14 hari. Sedangkan Custom Web App atau Mobile App bisa memakan waktu 1-3 bulan tergantung fitur yang diminta."
    },
    {
        question: "Apakah bisa request desain custom sesuai brand saya?",
        answer: "Tentu saja! Kami tidak menggunakan template pasaran. Tim Creative kami akan merancang UI/UX atau identitas visual (Logo/Branding) yang 100% unik mencerminkan karakter bisnis Anda."
    },
    {
        question: "Apakah ada garansi jika terjadi error/bug?",
        answer: "Ada. Kami memberikan garansi maintenance gratis selama 1-3 bulan (tergantung paket) setelah project selesai. Jika ada bug teknis dari sisi kami, perbaikan gratis."
    },
    {
        question: "Bagaimana sistem pembayarannya?",
        answer: "Sistem pembayaran kami termin. Biasanya DP 50% di awal sebagai tanda jadi, dan pelunasan 50% setelah project selesai dan siap diserahterimakan."
    },
    {
        question: "Apakah source code akan diberikan ke klien?",
        answer: "Ya, untuk paket 'Custom Web App' dan 'Mobile App', source code sepenuhnya menjadi milik Anda setelah pelunasan. Anda bebas mengembangkannya di kemudian hari."
    }
]

export default function FAQ() {
    // REVISI DISINI: Ubah dari 0 menjadi null
    const [activeIndex, setActiveIndex] = useState<number | null>(null) 
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { setIsHovered } = useCursor()

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="py-24 px-4 bg-white dark:bg-[#0f0f0f] relative overflow-hidden transition-colors duration-500">
            
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    
                    {/* BAGIAN KIRI */}
                    <div className="lg:col-span-5 sticky top-24">
                        <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-500">
                            
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                            </div>
                            
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darae-accent/10 text-darae-accent text-[10px] font-bold uppercase tracking-wider mb-6">
                                    <Zap className="w-3 h-3" /> Enterprise & Custom
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-darae-charcoal dark:text-white">
                                    Punya Kebutuhan <span className="text-darae-accent">Spesifik?</span>
                                </h2>
                                <p className="text-darae-grey dark:text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                                    Kami paham setiap bisnis itu unik. Diskusikan project aplikasi kompleks, branding korporat, atau kontrak jangka panjang dengan tim kami.
                                </p>

                                <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
                                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                        <ShieldCheck className="w-4 h-4 text-green-500" /> NDA Available
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                        <Users className="w-4 h-4 text-blue-500" /> Dedicated Team
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                        <Clock className="w-4 h-4 text-orange-500" /> Priority Support
                                    </div>
                                </div>

                                {/* TOMBOL KONSULTASI (Hitam -> Hover Biru) */}
                                <Magnetic>
                                    <button 
                                        onClick={() => setIsModalOpen(true)}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className="group relative w-full inline-flex items-center justify-center gap-3 bg-darae-charcoal dark:bg-white text-white dark:text-black hover:bg-darae-accent hover:text-white dark:hover:text-white font-bold py-4 px-6 rounded-full overflow-hidden transition-all shadow-xl shadow-darae-charcoal/20 hover:shadow-darae-accent/30 active:scale-95 cursor-pointer"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Konsultasi Project
                                        </span>
                                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" />
                                    </button>
                                </Magnetic>
                                <p className="text-center mt-3 text-[10px] text-gray-400 font-medium">
                                    Respon cepat dalam 24 jam
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* BAGIAN KANAN (FAQ LIST) */}
                    <div className="lg:col-span-7 flex flex-col justify-center pt-4">
                         <div className="mb-10">
                            <span className="text-darae-accent font-bold tracking-widest text-xs uppercase mb-2 block">FAQ</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-darae-charcoal dark:text-white">
                                Pertanyaan Umum
                            </h3>
                         </div>

                         <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div 
                                    key={index}
                                    className={`
                                        rounded-2xl transition-all duration-300 border
                                        ${activeIndex === index 
                                            ? 'bg-gray-50 dark:bg-white/5 border-darae-accent/30 dark:border-darae-accent/30 shadow-lg shadow-gray-100 dark:shadow-none' 
                                            : 'bg-transparent border-gray-200 dark:border-white/10 hover:border-darae-accent/30'}
                                    `}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    >
                                        <span className={`font-bold text-lg pr-8 transition-colors ${activeIndex === index ? 'text-darae-accent' : 'text-darae-charcoal dark:text-white'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-darae-accent text-white rotate-180' : 'bg-gray-100 dark:bg-white/10 text-gray-500'}`}>
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
                                                <div className="p-6 pt-0 text-darae-grey dark:text-gray-400 leading-relaxed text-base border-t border-dashed border-gray-200 dark:border-white/10 mt-2">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                         </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
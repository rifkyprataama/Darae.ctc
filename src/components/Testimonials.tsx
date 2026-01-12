'use client'
import { motion } from 'framer-motion'
import { Quote, User } from 'lucide-react'
import { testimonialsData } from '@/data/testimonials'
import ScrollReveal from "./ui/ScrollReveal";

export default function Testimonials() {
    return (
        <section className="py-24 overflow-hidden bg-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                bg-darae-accent/5 dark:bg-darae-gold/5 
                rounded-full blur-3xl -z-10 pointer-events-none">
            </div>

            <ScrollReveal direction="up" delay={0.1} fullWidth>
                <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-4 border border-green-200 dark:border-green-800/30">
                        <User className="w-3 h-3" /> Trusted Partner
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-darae-charcoal dark:text-white mb-4">
                        Apa Kata <span className="text-darae-accent">Klien Kami?</span>
                    </h2>
                    <p className="text-darae-charcoal/70 dark:text-gray-400 max-w-2xl mx-auto">
                        Setiap kolaborasi kami nilai dari hasilnya. Berikut bagaimana klien merasakan pengalaman bekerja sama dengan Darae.
                    </p>
                </div>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto px-6">
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                    
                    <motion.div 
                        className="flex gap-8 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ 
                            repeat: Infinity, 
                            ease: "linear", 
                            duration: 30,
                        }}
                    >
                        {[...testimonialsData, ...testimonialsData].map((item, i) => (
                            <TestimonialCard key={i} data={item} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ data }: { data: typeof testimonialsData[0] }) {
    return (
        <div className="w-[350px] md:w-[400px] p-8 rounded-[2rem] 
            bg-white dark:bg-[#1f2327] 
            border border-gray-100 dark:border-white/5 
            shadow-xl shadow-gray-200/50 dark:shadow-none 
            flex flex-col justify-between shrink-0 
            hover:border-darae-accent/30 transition-colors duration-300"
        >
            
            <div className="mb-6">
                <div className="flex gap-1 mb-4 text-darae-gold">
                    {[1,2,3,4,5].map(s => (
                        <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                </div>
                <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-darae-accent/10 transform -scale-x-100" />
                    <p className="text-darae-charcoal/80 dark:text-gray-300 relative z-10 leading-relaxed italic text-sm md:text-base">
                        "{data.content}"
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 border-t border-gray-100 dark:border-white/10 pt-6">
                
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-darae-blue flex items-center justify-center shrink-0 border-2 border-white dark:border-[#151515] shadow-md">
                    <User className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-darae-charcoal dark:text-white text-sm truncate">{data.name}</h4>
                    <p className="text-xs text-darae-charcoal/60 dark:text-gray-500 truncate">{data.role}</p>
                </div>

                <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-[10px] font-bold text-darae-charcoal/60 dark:text-gray-400 uppercase tracking-wider hidden sm:block border border-gray-200 dark:border-white/5">
                    {data.project}
                </span>
            </div>
        </div>
    )
}
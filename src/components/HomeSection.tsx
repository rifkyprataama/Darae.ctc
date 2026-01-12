'use client'
import { useState } from 'react'; 
import Magnetic from "./ui/Magnetic"; 
import ConsultationModal from "./ConsultationModal"; 
import ScrollReveal from "./ui/ScrollReveal";

export default function HomeSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const avatars = Array(5).fill(null);

    return (
        <>
        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden pt-20">
            
            <ScrollReveal direction="down" delay={0.1}>
                <div className="mb-8 px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] 
                    border border-darae-accent text-darae-accent bg-darae-accent/5 backdrop-blur-sm">
                Open for Projects
                </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2} fullWidth>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-darae-charcoal dark:text-white leading-[0.9]">
                <span className="block text-3xl md:text-5xl font-bold mb-2 md:mb-4 opacity-100">We Build</span>
                <span className="text-darae-accent">Digital Reality</span>
                </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3} fullWidth>
                <p className="text-darae-charcoal/70 dark:text-gray-400 max-w-xl text-base md:text-lg mb-10 leading-relaxed font-medium mx-auto">
                Menghadirkan layanan desain visual dan pengembangan teknologi dengan standar profesional, kami fokus pada solusi digital yang rapi, estetis, dan dirancang sesuai kebutuhan praktis bisnis Anda. 
                Jadwalkan konsultasi gratis hari ini.
                </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4} fullWidth>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center mb-16">
                
                <Magnetic>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="group relative cursor-pointer overflow-hidden inline-block px-10 py-4 rounded-[2rem] font-bold 
                            transition-all duration-300 ease-out 
                            
                            /* --- NORMAL STATE --- */
                            /* Light: Hitam (Charcoal) */
                            bg-darae-charcoal text-white 
                            /* Dark: Emas (Gold) -> Teks Hitam */
                            dark:bg-darae-gold dark:text-darae-charcoal
                            
                            shadow-xl shadow-darae-charcoal/20 border border-transparent
                            hover:scale-105 hover:shadow-darae-accent/40"
                    >
                        <div className={`
                            absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out
                            /* Light Hover: Merah Aksen */
                            bg-darae-accent 
                            /* Dark Hover: Biru Muted */
                            dark:bg-darae-blue
                        `}></div>

                        <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                            Konsultasi Gratis
                        </span>
                    </button>
                </Magnetic>

                <Magnetic>
                    <a href="#portfolio" className="group relative cursor-pointer overflow-hidden inline-block px-10 py-4 rounded-[2rem] font-bold 
                        transition-all duration-300 ease-out
                        
                        bg-transparent 
                        text-darae-charcoal border border-darae-charcoal/20
                        dark:text-white dark:border-white/20
                        
                        hover:scale-105 hover:border-transparent hover:shadow-lg"
                    >
                        <div className="absolute inset-0 bg-darae-charcoal dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        
                        <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                            Lihat Portfolio
                        </span>
                    </a>
                </Magnetic>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
                <div className="flex items-center gap-4">
                <div className="flex -space-x-3 md:-space-x-4">
                    {avatars.map((_, index) => (
                        <div key={index} className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-darae-charcoal/10 backdrop-blur-md flex items-center justify-center border-2 border-white dark:border-darae-charcoal shadow-md z-10 overflow-hidden">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-darae-charcoal dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    ))}
                </div>
                <div className="text-left">
                    <div className="flex items-center gap-1 mb-1">
                        {[1,2,3,4,5].map(star => (
                            <svg key={star} className="w-4 h-4 text-darae-gold fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                    </div>
                    <p className="text-xs font-bold text-darae-charcoal dark:text-white"><span className="font-black">10+</span> Klien Puas</p>
                </div>
                </div>
            </ScrollReveal>
        </section>
        </>
    );
}
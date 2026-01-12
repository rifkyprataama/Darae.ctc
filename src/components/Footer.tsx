'use client'
import Magnetic from "./ui/Magnetic";
import ScrollReveal from "./ui/ScrollReveal";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-32 pb-10 px-6 bg-transparent border-t border-gray-200 dark:border-white/10 overflow-hidden transition-colors duration-500">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] 
                bg-darae-accent/5 dark:bg-darae-gold/5 
                rounded-full blur-[120px] -z-10 pointer-events-none">
        </div>

        <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[50vh]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

            <ScrollReveal direction="up" delay={0.1} fullWidth>
                <div className="space-y-8">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-darae-charcoal dark:text-white">
                    Ayo kita <br/>
                    <span className="text-darae-accent italic">wujudkan.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-darae-charcoal/70 dark:text-gray-400 max-w-md font-light leading-relaxed">
                    Punya ide liar? Kami siap membantu menerjemahkannya menjadi realitas digital yang fungsional dan estetik.
                    </p>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} fullWidth>
                <div className="flex flex-col md:flex-row gap-12 lg:justify-end items-start lg:pt-4">
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-widest text-xs text-darae-charcoal/50 dark:text-gray-500 mb-6">Hubungi Kami</h4>
                        <div className="flex flex-col gap-1">
                            <Magnetic>
                                <a href="mailto:hello@darae.ctc" className="text-2xl md:text-3xl font-bold text-darae-charcoal dark:text-white hover:text-darae-accent dark:hover:text-darae-blue transition-colors inline-block">
                                    daraectc@gmail.com
                                </a>
                            </Magnetic>
                            <p className="text-lg text-darae-charcoal/70 dark:text-gray-400 mt-2">+62 821 1708 8846</p>
                            <p className="text-lg text-darae-charcoal/70 dark:text-gray-400">Bandung, Indonesia</p>
                        </div>
                    </div>

                    <div className="space-y-6 min-w-[120px]">
                        <h4 className="font-bold uppercase tracking-widest text-xs text-darae-charcoal/50 dark:text-gray-500 mb-4">Explore</h4>
                        <ul className="space-y-3 font-medium text-lg">
                            <li><Magnetic><a href="#home" className="inline-block text-darae-charcoal dark:text-white hover:text-darae-accent dark:hover:text-darae-blue transition-colors">Home</a></Magnetic></li>
                            <li><Magnetic><a href="#about" className="inline-block text-darae-charcoal dark:text-white hover:text-darae-accent dark:hover:text-darae-blue transition-colors">About</a></Magnetic></li>
                            <li><Magnetic><a href="#pricing" className="inline-block text-darae-charcoal dark:text-white hover:text-darae-accent dark:hover:text-darae-blue transition-colors">Pricing</a></Magnetic></li>
                            <li><Magnetic><a href="#portfolio" className="inline-block text-darae-charcoal dark:text-white hover:text-darae-accent dark:hover:text-darae-blue transition-colors">Portfolio</a></Magnetic></li>
                        </ul>
                    </div>

                    <div className="space-y-6 min-w-[120px]">
                        <h4 className="font-bold uppercase tracking-widest text-xs text-darae-charcoal/50 dark:text-gray-500 mb-4">Ikuti Kami</h4>
                        <ul className="space-y-3 font-medium text-lg">
                            <li><Magnetic><a href="https://www.instagram.com/daraectc" className="inline-block text-darae-charcoal dark:text-white hover:text-darae-accent dark:hover:text-darae-blue transition-colors">Instagram</a></Magnetic></li>
                            <li><Magnetic><a href="https://www.tiktok.com/@darae.ctc" className="inline-block text-darae-charcoal dark:text-white hover:text-darae-accent dark:hover:text-darae-blue transition-colors">Tiktok</a></Magnetic></li>
                        </ul>
                    </div>

                </div>
            </ScrollReveal>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-darae-charcoal/60 dark:text-gray-500 font-medium">
                
                <p>&copy; {currentYear} Darae.ctc. All rights reserved.</p>
                
                <div className="flex gap-8">
                    <Magnetic>
                        <Link href="/privacy-policy" className="hover:text-darae-charcoal dark:hover:text-white transition-colors inline-block">
                            Privacy Policy
                        </Link>
                    </Magnetic>
                    <Magnetic>
                        <Link href="/terms-of-service" className="hover:text-darae-charcoal dark:hover:text-white transition-colors inline-block">
                            Terms of Service
                        </Link>
                    </Magnetic>
                </div>

                <Magnetic>
                    <a href="#home" className="hidden md:inline-block uppercase tracking-widest text-xs font-bold hover:text-darae-accent dark:hover:text-darae-blue transition-colors">
                        Back to Top ↑
                    </a>
                </Magnetic>
            </div>
        </div>
        </footer>
    )
}
'use client'
import Image from "next/image";
import { techStackData, featuresData } from "@/data/features";
import ScrollReveal from "./ui/ScrollReveal";

export default function About() {

  return (
    <section className="py-24 bg-transparent relative overflow-hidden transition-colors duration-500">
      
      {/* Dekorasi Background Halus (Disesuaikan Palet Baru) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] 
            bg-darae-blue/20 dark:bg-darae-accent/10 
            rounded-full blur-[120px] -z-10 opacity-60">
      </div>
      
      <div className="max-w-6xl mx-auto px-6">

        {/* 1. TECH STACK - HEADER */}
        <ScrollReveal direction="up" delay={0.1} fullWidth>
            <div id="about" className="mb-20 pt-5 text-center"> 
                <p className="text-xs md:text-sm font-bold text-darae-taupe mb-6 uppercase tracking-[0.3em]">
                    Trusted Technology
                </p>
                
                {/* Slider Tech Stack */}
                <div className="relative flex flex-col justify-center overflow-hidden py-10">
                    {/* Gradient Overlay Kiri (Putih di Light, Charcoal di Dark) */}
                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#f3f4f3] dark:from-[#1f2327] to-transparent z-20 pointer-events-none"></div>
                    {/* Gradient Overlay Kanan */}
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#f3f4f3] dark:from-[#1f2327] to-transparent z-20 pointer-events-none"></div>

                    <div className="flex w-full group pointer-events-none">
                        {/* --- SET LOGO PERTAMA --- */}
                        <div className="flex shrink-0 animate-scroll items-center min-w-full justify-around group-hover:[animation-play-state:paused]">
                            {techStackData.map((tech, index) => (
                                <div key={`list-1-${index}`} className="mx-8 w-24 flex justify-center items-center cursor-pointer pointer-events-auto opacity-60 hover:opacity-100 transition-opacity duration-300">
                                    <div className="relative w-10 h-10">
                                        <Image src={tech.icon} alt={tech.name} fill className={`object-contain ${tech.invert ? 'dark:invert dark:brightness-0 dark:invert-[1]' : ''}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* --- SET LOGO KEDUA --- */}
                        <div className="flex shrink-0 animate-scroll items-center min-w-full justify-around group-hover:[animation-play-state:paused]" aria-hidden="true">
                            {techStackData.map((tech, index) => (
                                <div key={`list-2-${index}`} className="mx-8 w-24 flex justify-center items-center cursor-pointer pointer-events-auto opacity-60 hover:opacity-100 transition-opacity duration-300">
                                    <div className="relative w-10 h-10">
                                        <Image src={tech.icon} alt={tech.name} fill className={`object-contain ${tech.invert ? 'dark:invert dark:brightness-0 dark:invert-[1]' : ''}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>

        {/* 2. JUDUL CENTERED */}
        <ScrollReveal direction="up" delay={0.2} fullWidth>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-darae-charcoal dark:text-white mb-6 leading-tight tracking-tight">
                    Kenapa Memilih <span className="text-darae-accent">Kami?</span>
                </h2>
                
                <p className="text-lg text-darae-charcoal/70 dark:text-gray-400 leading-relaxed">
                    Kami menggabungkan <span className="text-darae-charcoal dark:text-white font-semibold">kreativitas desain</span> dengan <span className="text-darae-charcoal dark:text-white font-semibold">teknologi handal</span>. 
                    Hasilnya adalah produk digital yang tidak hanya estetik, tapi juga menjadi aset pertumbuhan bisnis Anda.
                </p>
            </div>
        </ScrollReveal>

        {/* 3. GRID KARTU */}
        <div className="flex flex-wrap justify-center gap-6">
            {featuresData.map((feature, index) => (
                <div 
                    key={index}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                    <ScrollReveal 
                        delay={index * 0.1} 
                        fullWidth 
                        className="h-full"
                    >
                        <div className="
                            group relative p-8 rounded-3xl 
                            bg-white dark:bg-[#1f2327] 
                            border border-gray-100 dark:border-white/5
                            h-full 
                            transition-all duration-300 
                            hover:-translate-y-2 hover:shadow-2xl hover:shadow-darae-accent/5 dark:hover:shadow-darae-accent/10 hover:border-darae-accent/20
                        ">
                            <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                {feature.icon}
                            </div>
                            
                            <h4 className="text-xl font-bold text-darae-charcoal dark:text-white mb-3 group-hover:text-darae-accent transition-colors">
                                {feature.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>

                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-darae-accent to-darae-gold transition-all duration-300 group-hover:w-full rounded-b-3xl opacity-0 group-hover:opacity-100"></div>
                        </div>
                    </ScrollReveal>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
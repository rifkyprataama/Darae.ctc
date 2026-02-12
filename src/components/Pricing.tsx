'use client'
import { useState, useEffect } from 'react';
import Magnetic from "./ui/Magnetic";
import ConsultationModal from "./ConsultationModal"; 
import { Check, Star, Code, Palette, Zap, Clock, ShieldCheck, Users, ArrowRight, Loader2 } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { supabase } from '@/lib/supabaseClient'; // PENTING: Import Supabase Client

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // STATE BARU: Menyimpan data dari database
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // FETCH DATA DARI DATABASE
  useEffect(() => {
    const fetchPricing = async () => {
      const { data, error } = await supabase
        .from('pricing')
        .select('*')
        .order('id', { ascending: true }); // Urutkan sesuai ID agar rapi
      
      if (data) setPackages(data);
      if (error) console.error("Error fetching pricing:", error);
      
      setLoading(false);
    };

    fetchPricing();
  }, []);

  const handleWhatsAppOrder = (packageName: string, price: string) => {
    const phoneNumber = "6282117088846"; 
    const message = `Halo Darae, saya tertarik dengan paket *${packageName}* dengan harga *${price}*. Boleh minta info detailnya?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden transition-colors duration-500">
      
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
            bg-darae-gold/10 dark:bg-darae-accent/5 
            rounded-full blur-3xl -z-10 pointer-events-none">
      </div>

      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" delay={0.1} fullWidth>
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-darae-charcoal dark:text-white tracking-tight">
                Solusi Digital <br /> <span className="text-darae-accent">All-in-One</span>
              </h2>
              <p className="text-darae-charcoal/70 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Dari pengembangan sistem IT hingga desain kreatif visual. Pilih layanan yang spesifik untuk pertumbuhan bisnis Anda.
              </p>
            </div>
        </ScrollReveal>

        {/* LOGIKA LOADING */}
        {loading ? (
            <div className="flex justify-center items-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-darae-accent" />
            </div>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-12 items-start">
            {/* RENDER DATA DARI DATABASE (packages) */}
            {packages.map((pkg, index) => (
                <ScrollReveal 
                    key={pkg.id} 
                    delay={index * 0.2} 
                    fullWidth 
                    className="h-full" 
                >
                    <div 
                    className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 group h-full
                        ${pkg.is_recommended // Perhatikan: di DB namanya is_recommended (snake_case)
                        ? 'bg-white dark:bg-[#1f2327] border-2 border-darae-accent shadow-2xl shadow-darae-accent/10 scale-100 lg:scale-105 z-10' 
                        : 'bg-white/60 dark:bg-[#1f2327]/60 border border-gray-100 dark:border-white/5 hover:border-darae-accent/30 hover:shadow-xl'
                        }
                    `}
                    >
                    {pkg.is_recommended && (
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-darae-accent text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-darae-accent/30 tracking-wide z-20 whitespace-nowrap">
                        <Star className="w-4 h-4 fill-current" /> RECOMMENDED
                        </div>
                    )}

                    <div className="flex items-center gap-2 mb-3">
                        {pkg.category === "IT Service" ? (
                            <span className="bg-darae-blue/20 text-darae-charcoal dark:text-darae-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                                <Code className="w-3 h-3" /> Dev
                            </span>
                        ) : (
                            <span className="bg-darae-gold/30 text-darae-charcoal dark:text-darae-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                                <Palette className="w-3 h-3" /> Creative
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-darae-charcoal dark:text-white mb-3">
                        {pkg.title}
                        </h3>
                        <p className="text-sm text-darae-charcoal/60 dark:text-gray-400 leading-relaxed min-h-[48px]">
                        {pkg.description}
                        </p>
                    </div>

                    <div className="mb-8 border-b border-gray-100 dark:border-white/10 pb-8">
                        <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-darae-charcoal/60 dark:text-gray-500">Rp</span>
                        <span className="text-4xl md:text-5xl font-extrabold text-darae-charcoal dark:text-white tracking-tighter">
                            {pkg.price}
                        </span>
                        </div>
                        <span className="text-sm text-darae-charcoal/50 dark:text-gray-500 font-medium mt-1 block">
                        {pkg.period}
                        </span>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1">
                        {/* Features di DB disimpan sebagai Array Text */}
                        {pkg.features?.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-medium text-darae-charcoal/80 dark:text-gray-300">
                            <div className={`mt-0.5 min-w-[20px] h-5 rounded-full flex items-center justify-center 
                            ${pkg.is_recommended 
                                ? 'bg-darae-accent text-white shadow-md shadow-darae-accent/20' 
                                : 'bg-darae-accent/10 text-darae-accent'
                            }
                            `}>
                            <Check className="w-3 h-3" strokeWidth={3} />
                            </div>
                            <span>{feature}</span>
                        </li>
                        ))}
                    </ul>

                    <Magnetic>
                        <button 
                        onClick={() => handleWhatsAppOrder(pkg.title, pkg.price)}
                        className={`
                            group/btn relative w-full block py-4 rounded-full font-bold text-center overflow-hidden transition-all duration-300 transform active:scale-95 cursor-pointer
                            ${pkg.is_recommended 
                            ? 'bg-darae-accent text-white shadow-lg shadow-darae-accent/30' 
                            : 'bg-transparent border border-gray-200 dark:border-white/20 text-darae-charcoal dark:text-white'
                            }
                        `}
                        >
                        <div className={`
                            absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out
                            ${pkg.is_recommended
                                ? 'bg-darae-charcoal dark:bg-white' 
                                : 'bg-darae-accent'        
                            }
                        `}></div>

                        <span className={`
                            relative z-10 transition-colors duration-300
                            ${pkg.is_recommended
                                ? 'group-hover/btn:text-white dark:group-hover/btn:text-black' 
                                : 'group-hover/btn:text-white'
                            }
                        `}>
                            Pilih Paket
                        </span>
                        </button>
                    </Magnetic>
                    </div>
                </ScrollReveal>
            ))}
            </div>
        )}

        <ScrollReveal direction="up" delay={0.4} fullWidth>
            {/* Bagian Bawah "Custom Project" tetap sama */}
            <div className="mt-24 w-full">
                <div className="relative rounded-[2.5rem] bg-darae-charcoal/5 dark:bg-white/5 border border-darae-charcoal/10 dark:border-white/10 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 transition-colors duration-500">
                    
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                      style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                    </div>
                    
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-darae-gold/30 dark:bg-darae-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="relative z-10 text-center md:text-left max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-darae-accent/10 text-darae-accent text-xs font-bold uppercase tracking-wider mb-4">
                            <Zap className="w-4 h-4" /> Siap Memulai Project Anda?
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-darae-charcoal dark:text-white mb-4">
                            Punya Kebutuhan <span className="text-darae-accent">Spesifik?</span>
                        </h3>
                        
                        <p className="text-darae-charcoal/70 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                            Kami paham setiap bisnis itu unik. Diskusikan project website, aplikasi kompleks, digital creative, atau yang lainnya dengan tim kami.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 mt-8">
                            <div className="flex items-center gap-2 text-sm font-medium text-darae-charcoal/70 dark:text-gray-300">
                                <ShieldCheck className="w-4 h-4 text-green-500" /> NDA Available
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-darae-charcoal/70 dark:text-gray-300">
                                <Users className="w-4 h-4 text-darae-blue" /> Dedicated Team
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-darae-charcoal/70 dark:text-gray-300">
                                <Clock className="w-4 h-4 text-darae-gold" /> Priority Support
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <Magnetic>
                            <button 
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="group/btn relative inline-flex items-center justify-center gap-3 bg-darae-charcoal dark:bg-darae-gold text-white dark:text-darae-charcoal font-bold py-5 px-10 rounded-full overflow-hidden transition-transform hover:shadow-2xl hover:shadow-darae-accent/20 active:scale-95 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-darae-accent dark:bg-darae-blue translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                                
                                <span className="relative z-10 group-hover/btn:text-white dark:group-hover/btn:text-white transition-colors">Konsultasi Project</span>
                                <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:text-white dark:group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                            </button>
                        </Magnetic>
                        <p className="text-center mt-4 text-xs text-darae-charcoal/50 dark:text-gray-500 font-medium">
                            Respon cepat dalam 24 jam
                        </p>
                    </div>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
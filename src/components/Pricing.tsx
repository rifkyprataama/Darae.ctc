'use client'
import { useState } from 'react';
import Magnetic from "./ui/Magnetic";
import ConsultationModal from "./ConsultationModal"; // 1. IMPORT MODAL
import { Check, Star, Code, Palette, Zap, Clock, ShieldCheck, Users, ArrowRight } from "lucide-react";

// --- DATA PAKET ---
const pricingPackages = [
  {
    category: "IT Service",
    title: "Landing Page",
    price: "1.5jt",
    period: "/project",
    description: "Website satu halaman performa tinggi untuk promosi produk atau profil.",
    features: ["Single Page Application", "Responsive Mobile/Desktop", "Free Domain .com", "Hosting 1 Tahun", "Tombol WhatsApp/Linktree"],
    recommended: false,
  },
  {
    category: "IT Service",
    title: "Custom Web App",
    price: "4.5jt",
    period: "/mulai dari",
    description: "Sistem informasi atau aplikasi web kompleks sesuai kebutuhan bisnis.",
    features: ["Database Integration", "Admin Dashboard", "User Management (Login)", "Payment Gateway", "API Integration", "Free Maintenance 3 Bulan"],
    recommended: true,
  },
  {
    category: "IT Service",
    title: "Mobile App",
    price: "8jt",
    period: "/mulai dari",
    description: "Aplikasi Android/iOS menggunakan teknologi Flutter yang efisien.",
    features: ["Android & iOS Support", "Upload ke PlayStore", "Push Notification", "Google Maps Integration", "Modern UI/UX Design"],
    recommended: false,
  },
  {
    category: "Creative",
    title: "Social Media Mgt",
    price: "750rb",
    period: "/bulan",
    description: "Pengelolaan akun Instagram/TikTok agar aktif dan estetik.",
    features: ["12 Feed Design", "Copywriting Caption", "Admin Posting", "Monthly Report", "Riset Hashtag"],
    recommended: false,
  },
  {
    category: "Creative",
    title: "Full Branding",
    price: "2.5jt",
    period: "/paket",
    description: "Identitas visual lengkap agar brand Anda terlihat profesional & kredibel.",
    features: ["Logo Utama & Turunan", "Brand Guideline (PDF)", "Kartu Nama & Kop Surat", "Template Sosmed", "Filosofi Logo"],
    recommended: true,
  },
  {
    category: "Creative",
    title: "Video Production",
    price: "500rb",
    period: "/menit",
    description: "Video iklan, profil perusahaan, atau konten Reels sinematik.",
    features: ["Scriptwriting", "Shooting / Stock Footage", "Voice Over", "Color Grading", "Background Music (Royalty Free)"],
    recommended: false,
  }
]

export default function Pricing() {
  // 2. STATE MODAL (Sama seperti Navbar & Home)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3. FUNGSI WHATSAPP TEMPLATE
  // Ganti nomor di bawah dengan nomor WhatsApp bisnis Anda (format: 628...)
  const handleWhatsAppOrder = (packageName: string, price: string) => {
    const phoneNumber = "6281234567890"; // GANTI DENGAN NOMOR ANDA
    const message = `Halo Darae, saya tertarik dengan paket *${packageName}* dengan harga *${price}*. Boleh minta info detailnya?`;
    
    // Encode pesan agar bisa dibaca URL
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Buka di tab baru
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden transition-colors duration-500">
      
      {/* 4. PASANG MODAL DISINI */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-darae-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-darae-charcoal dark:text-white tracking-tight">
            Solusi Digital <br /> <span className="text-darae-accent">All-in-One</span>
          </h2>
          <p className="text-darae-grey dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Dari pengembangan sistem IT hingga strategi kreatif visual. Pilih layanan yang spesifik untuk pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-12 items-start">
          {pricingPackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 group h-full
                ${pkg.recommended 
                  ? 'bg-white dark:bg-[#151515] border-2 border-darae-accent shadow-2xl shadow-darae-accent/20 scale-100 lg:scale-105 z-10' 
                  : 'bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-darae-accent/30 hover:shadow-xl'
                }
              `}
            >
              {pkg.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-darae-accent text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-darae-accent/30 tracking-wide z-20 whitespace-nowrap">
                  <Star className="w-4 h-4 fill-current" /> RECOMMENDED
                </div>
              )}

              <div className="flex items-center gap-2 mb-3">
                 {pkg.category === "IT Service" ? (
                    <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Code className="w-3 h-3" /> Dev
                    </span>
                 ) : (
                    <span className="bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Palette className="w-3 h-3" /> Creative
                    </span>
                 )}
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-darae-charcoal dark:text-white mb-3">
                  {pkg.title}
                </h3>
                <p className="text-sm text-darae-grey dark:text-gray-400 leading-relaxed min-h-[48px]">
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
                <span className="text-sm text-darae-grey dark:text-gray-500 font-medium mt-1 block">
                  {pkg.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-darae-charcoal/80 dark:text-gray-300">
                    <div className={`mt-0.5 min-w-[20px] h-5 rounded-full flex items-center justify-center 
                      ${pkg.recommended 
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
                {/* 5. TOMBOL PAKET -> KE WHATSAPP LANGSUNG */}
                <button 
                  onClick={() => handleWhatsAppOrder(pkg.title, pkg.price)}
                  className={`w-full block py-4 rounded-full font-bold text-center transition-all duration-300 transform active:scale-95 cursor-pointer
                    ${pkg.recommended 
                      ? 'bg-darae-accent text-white hover:bg-blue-600 shadow-lg shadow-darae-accent/30 hover:shadow-darae-accent/50' 
                      : 'bg-transparent border border-gray-200 dark:border-white/20 text-darae-charcoal dark:text-white hover:border-darae-accent hover:text-darae-accent dark:hover:bg-white/5'
                    }
                  `}
                >
                  Pilih Paket
                </button>
              </Magnetic>
            </div>
          ))}
        </div>

        {/* --- FOOTER CUSTOM ORDER SECTION --- */}
        <div className="mt-24 w-full">
            <div className="relative rounded-[2.5rem] bg-darae-charcoal/5 dark:bg-white/5 border border-darae-charcoal/10 dark:border-white/10 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 transition-colors duration-500">
                
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                </div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-darae-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10 text-center md:text-left max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-darae-accent/10 text-darae-accent text-xs font-bold uppercase tracking-wider mb-4">
                        <Zap className="w-4 h-4" /> Enterprise & Custom
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-darae-charcoal dark:text-white mb-4">
                        Punya Kebutuhan <span className="text-darae-accent">Spesifik?</span>
                    </h3>
                    
                    <p className="text-darae-grey dark:text-gray-400 text-base md:text-lg leading-relaxed">
                        Kami paham setiap bisnis itu unik. Diskusikan project aplikasi kompleks, branding korporat, atau kontrak jangka panjang dengan tim kami.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 mt-8">
                        <div className="flex items-center gap-2 text-sm font-medium text-darae-charcoal/70 dark:text-gray-300">
                            <ShieldCheck className="w-4 h-4 text-green-500" /> NDA Available
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-darae-charcoal/70 dark:text-gray-300">
                            <Users className="w-4 h-4 text-blue-500" /> Dedicated Team
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-darae-charcoal/70 dark:text-gray-300">
                            <Clock className="w-4 h-4 text-orange-500" /> Priority Support
                        </div>
                    </div>
                </div>

                <div className="relative z-10 shrink-0">
                    <Magnetic>
                        {/* 6. TOMBOL KONSULTASI -> BUKA MODAL (Sama kayak Navbar) */}
                        <button 
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="group relative inline-flex items-center justify-center gap-3 bg-darae-charcoal dark:bg-white text-white dark:text-black font-bold py-5 px-10 rounded-full overflow-hidden transition-transform hover:shadow-2xl hover:shadow-darae-accent/20 active:scale-95 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-darae-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative z-10 group-hover:text-white transition-colors">Konsultasi Project</span>
                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </button>
                    </Magnetic>
                    <p className="text-center mt-4 text-xs text-darae-grey dark:text-gray-500 font-medium">
                        Respon cepat dalam 24 jam
                    </p>
                </div>

            </div>
        </div>

      </div>
    </section>
  )
}
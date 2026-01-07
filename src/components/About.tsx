'use client'
import Image from "next/image";

export default function About() {

  // DATA TECH STACK
  // invert: true artinya logo ini hitam pekat dan perlu jadi putih di dark mode.
  // invert: false artinya logo ini berwarna (misal biru/merah) dan tidak perlu diubah warnanya.
  const techStack = [
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000/ffffff", invert: true },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", invert: false },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", invert: false },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", invert: false },
    { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B", invert: false },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20", invert: false },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E", invert: false },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", invert: false },
  ];

  const features = [
    {
      title: "Pengerjaan Cepat",
      desc: "Deadline adalah janji. Kami menggunakan agile workflow untuk memastikan proyek selesai tepat waktu.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Responsive Design",
      desc: "Tampilan website otomatis menyesuaikan layar laptop, tablet, hingga smartphone dengan sempurna.",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "High Performance",
      desc: "Optimasi kode tingkat lanjut untuk memastikan loading website super cepat (Google PageSpeed friendly).",
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Desain Premium",
      desc: "Visual yang bersih, modern, dan eksklusif. Meningkatkan kepercayaan pelanggan terhadap brand Anda.",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Best Value",
      desc: "Kualitas agency besar dengan investasi yang masuk akal, transparan, dan tanpa biaya tersembunyi.",
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-darae-dark relative overflow-hidden transition-colors duration-500">
      
      {/* Dekorasi Background Halus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-darae-accent/5 dark:bg-blue-900/10 rounded-full blur-[120px] -z-10 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-6">

        {/* 1. TECH STACK - HEADER */}
        <div id="about" className="mb-20 pt-5 text-center"> 
            <p className="text-xs md:text-sm font-bold text-gray-400 mb-6 uppercase tracking-[0.3em]">
                Trusted Technology
            </p>
            
            {/* Slider Tech Stack */}
            <div className="relative flex flex-col justify-center overflow-hidden py-10">
                
                {/* Gradient Fading */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white dark:from-darae-dark to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white dark:from-darae-dark to-transparent z-20 pointer-events-none"></div>

                {/* CONTAINER UTAMA */}
                {/* 1. Tambahkan 'pointer-events-none' agar area kosong tidak bisa di-hover */}
                <div className="flex w-full group pointer-events-none">
                    
                    {/* --- SET LOGO PERTAMA --- */}
                    <div className="flex shrink-0 animate-scroll items-center min-w-full justify-around group-hover:[animation-play-state:paused]">
                        {techStack.map((tech, index) => (
                            // 2. Tambahkan 'pointer-events-auto' DI SINI.
                            // Ini membuat HANYA area kotak logo yang bisa merespon mouse.
                            <div 
                                key={`list-1-${index}`} 
                                className="mx-8 w-24 flex justify-center items-center cursor-pointer pointer-events-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                            >
                                <div className="relative w-10 h-10">
                                    <Image 
                                        src={tech.icon} 
                                        alt={tech.name} 
                                        fill
                                        className={`object-contain ${tech.invert ? 'dark:invert dark:brightness-0 dark:invert-[1]' : ''}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- SET LOGO KEDUA (DUPLIKAT) --- */}
                    <div className="flex shrink-0 animate-scroll items-center min-w-full justify-around group-hover:[animation-play-state:paused]" aria-hidden="true">
                        {techStack.map((tech, index) => (
                            // Tambahkan 'pointer-events-auto' DI SINI JUGA
                            <div 
                                key={`list-2-${index}`} 
                                className="mx-8 w-24 flex justify-center items-center cursor-pointer pointer-events-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                            >
                                <div className="relative w-10 h-10">
                                    <Image 
                                        src={tech.icon} 
                                        alt={tech.name} 
                                        fill
                                        className={`object-contain ${tech.invert ? 'dark:invert dark:brightness-0 dark:invert-[1]' : ''}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

        {/* 2. JUDUL CENTERED (PROFESIONAL) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-darae-charcoal dark:text-white mb-6 leading-tight tracking-tight">
                Kenapa Memilih <span className="text-darae-accent">Kami?</span>
            </h2>
            
            <p className="text-lg text-darae-grey dark:text-gray-400 leading-relaxed">
                Kami menggabungkan <span className="text-darae-charcoal dark:text-white font-semibold">kreativitas desain</span> dengan <span className="text-darae-charcoal dark:text-white font-semibold">teknologi handal</span>. 
                Hasilnya adalah produk digital yang tidak hanya estetik, tapi juga menjadi aset pertumbuhan bisnis Anda.
            </p>
        </div>

        {/* 3. GRID KARTU (Layout Cantik 3-2) */}
        {/* flex-wrap + justify-center membuat baris terakhir (sisa 2 item) otomatis ke tengah */}
        <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
                <div 
                    key={index}
                    className="
                        group relative p-8 rounded-3xl 
                        bg-white dark:bg-[#111] 
                        border border-gray-100 dark:border-white/5
                        w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                        transition-all duration-300 
                        hover:-translate-y-2 hover:shadow-2xl hover:shadow-darae-accent/5 dark:hover:shadow-white/5 hover:border-darae-accent/20
                    "
                >
                    {/* Icon dengan Background Warna-warni Halus */}
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        {feature.icon}
                    </div>
                    
                    <h4 className="text-xl font-bold text-darae-charcoal dark:text-white mb-3 group-hover:text-darae-accent transition-colors">
                        {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {feature.desc}
                    </p>

                    {/* Dekorasi Garis Hover */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-darae-accent to-purple-500 transition-all duration-300 group-hover:w-full rounded-b-3xl opacity-0 group-hover:opacity-100"></div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
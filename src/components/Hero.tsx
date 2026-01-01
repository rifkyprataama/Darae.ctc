export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      
      {/* --- BACKGROUND GRADIENT MESH (The "Clouds") --- */}
      {/* Light Mode: Soft Blue & Pale Yellow */}
      <div className="absolute top-0 left-0 w-full h-full bg-mesh-light opacity-60 dark:opacity-0 transition-opacity duration-500 -z-10"></div>
      
      {/* Dark Mode: Deep Blue accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-mesh-dark opacity-0 dark:opacity-100 transition-opacity duration-500 -z-10"></div>
      {/* ----------------------------------------------- */}

      {/* Badge Status */}
      <div className="mb-8 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-darae-accent/30 bg-white/50 text-darae-accent dark:bg-black/20 dark:text-white backdrop-blur-sm">
        Open for Projects
      </div>
      
      {/* Judul Utama */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-darae-charcoal dark:text-white">
        We Build <br />
        <span className="text-darae-accent">Digital Reality</span>
      </h1>
      
      {/* Deskripsi */}
      <p className="text-darae-grey dark:text-gray-300 max-w-2xl text-lg mb-10 leading-relaxed font-medium">
        Mitra teknologi untuk Web Development, Mobile Apps, dan Desain Grafis. 
        Jadwalkan konsultasi gratis hari ini.
      </p>
      
      {/* Tombol CTA (Warna Terracotta) */}
      <div className="flex flex-col md:flex-row gap-4">
        <a href="#contact" className="px-10 py-4 bg-darae-accent text-white rounded-[2rem] font-bold hover:opacity-90 transition shadow-xl shadow-darae-accent/20">
            Mulai Proyek
        </a>
        <a href="#portfolio" className="px-10 py-4 bg-white text-darae-charcoal border border-darae-grey/30 rounded-[2rem] font-bold hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition">
            Lihat Karya
        </a>
      </div>
    </section>
  );
}
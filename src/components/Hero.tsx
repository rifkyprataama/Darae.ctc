export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      {/* Badge: Ungu gelap di Light Mode, Ungu terang di Dark Mode */}
      <div className="mb-6 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-purple-500/30 bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300 transition-colors">
        Open for Projects
      </div>
      
      {/* Judul Utama */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white transition-colors">
        We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">Digital Reality</span>
      </h1>
      
      {/* Deskripsi: Abu gelap di Light, Abu terang di Dark */}
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed transition-colors">
        Mitra teknologi untuk Web Development, Mobile Apps, dan Desain Grafis. 
        Jadwalkan konsultasi gratis hari ini.
      </p>
      
      <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
          Mulai Proyek
      </a>
    </section>
  );
}
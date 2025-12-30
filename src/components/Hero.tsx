export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="mb-6 px-3 py-1 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest">
            Open for Projects
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Reality</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Mitra teknologi untuk Web Development, Mobile Apps, dan Desain Grafis. 
            Jadwalkan konsultasi gratis hari ini.
        </p>
        <a href="#contact" className="px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
            Mulai Proyek
        </a>
        </section>
    );
}
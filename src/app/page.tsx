import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      {/* Navbar Sederhana */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center backdrop-blur-md z-50 border-b border-white/10">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Darae.ctc
        </div>
        <div className="space-x-6 text-sm font-medium text-gray-300">
          <Link href="#services" className="hover:text-white transition">Layanan</Link>
          <Link href="#portfolio" className="hover:text-white transition">Portfolio</Link>
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Kontak Kami
          </button>
        </div>
      </nav>

      {/* Hero Section (Bagian Atas) */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="mb-6 px-3 py-1 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest">
          Open for Projects
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Reality</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
          Mitra teknologi untuk Web Development, Mobile Apps, dan Desain Grafis. 
          Kami mengubah ide kompleks menjadi solusi digital yang elegan.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
            Lihat Portfolio
          </button>
          <button className="px-8 py-3 border border-gray-700 rounded-full font-bold hover:bg-gray-800 transition">
            Konsultasi Gratis
          </button>
        </div>
      </section>

      {/* Footer Sementara */}
      <footer className="py-10 text-center text-gray-600 border-t border-white/10 text-sm">
        <p>&copy; 2024 Darae Creative & Tech. All rights reserved.</p>
      </footer>
    </main>
  );
}
'use client'
import { useState } from 'react'

// 1. Data Dummy (Nanti diganti dengan project asli Anda)
// Kategori: 'web', 'mobile', 'design', 'video'
const projects = [
    {
        id: 1,
        title: "Coffeeshop Landing Page",
        category: "web",
        image: "https://images.unsplash.com/photo-1481487484168-9b995ecc1679?q=80&w=800&auto=format&fit=crop",
        desc: "Website modern untuk kedai kopi lokal dengan fitur reservasi."
    },
    {
        id: 2,
        title: "E-Commerce App UI",
        category: "mobile",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
        desc: "Desain aplikasi belanja online yang user-friendly."
    },
    {
        id: 3,
        title: "Neon Brand Identity",
        category: "design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=800&auto=format&fit=crop",
        desc: "Rebranding logo dan aset sosial media untuk startup teknologi."
    },
    {
        id: 4,
        title: "Cinematic Travel Reel",
        category: "video",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
        desc: "Video promosi pariwisata dengan editing dinamis ala TikTok."
    },
    {
        id: 5,
        title: "Company Profile Web",
        category: "web",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        desc: "Website korporat profesional untuk firma hukum."
    },
    {
        id: 6,
        title: "Fashion Photoshoot Edit",
        category: "design",
        image: "https://images.unsplash.com/photo-1542038784456-1ea63518627e?q=80&w=800&auto=format&fit=crop",
        desc: "Retouching foto produk fashion high-end."
    },
    ]

    export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('all')

    // Logika Filter
    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeCategory)

    // Daftar Tombol Tab
    const categories = [
        { id: 'all', label: 'Semua' },
        { id: 'web', label: 'Web Dev' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'design', label: 'Design' },
        { id: 'video', label: 'Video Edit' },
    ]

    return (
        <section id="portfolio" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
            {/* Judul Section */}
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Karya Terpilih <span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400">Bukti kualitas kerja kami di berbagai bidang.</p>
            </div>

            {/* Tab Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
                <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                    ${activeCategory === cat.id 
                    ? 'bg-white text-black shadow-lg shadow-white/20 scale-105' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                >
                {cat.label}
                </button>
            ))}
            </div>

            {/* Grid Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition duration-300">
                {/* Gambar Project */}
                <div className="aspect-video w-full overflow-hidden">
                    <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                
                {/* Info Project */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{project.title}</h3>
                        <span className="text-xs uppercase tracking-wider text-gray-500 border border-gray-700 px-2 py-1 rounded">{project.category}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                </div>

                {/* Hover Effect Overlay (Optional: CTA Lihat Detail) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    {/* Bisa tambah tombol detail di sini nanti */}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}
'use client'
import { useState } from 'react'

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

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'web', label: 'Web Dev' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' },
    { id: 'video', label: 'Video Edit' },
  ]

  return (
    // Hapus bg-black
    <section id="portfolio" className="py-20 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
            Karya Terpilih <span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">Bukti kualitas kerja kami di berbagai bidang.</p>
        </div>

        {/* Tab Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeCategory === cat.id 
                  // Active State: Hitam (Light) / Putih (Dark)
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg scale-105' 
                  // Inactive State: Abu muda (Light) / Transparan (Dark)
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white dark:bg-white/5 dark:border-white/10 hover:border-blue-500/50 transition duration-300 shadow-sm">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition">{project.title}</h3>
                    <span className="text-xs uppercase tracking-wider text-gray-500 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">{project.category}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'
import { useState } from 'react'

// (Data projects biarkan sama seperti sebelumnya, atau copy ulang jika mau)
const projects = [
    { id: 1, title: "Coffeeshop Landing Page", category: "web", image: "https://images.unsplash.com/photo-1481487484168-9b995ecc1679?q=80&w=800&auto=format&fit=crop", desc: "Website modern untuk kedai kopi lokal." },
    { id: 2, title: "E-Commerce App UI", category: "mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop", desc: "Desain aplikasi belanja online." },
    { id: 3, title: "Neon Brand Identity", category: "design", image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=800&auto=format&fit=crop", desc: "Rebranding logo startup teknologi." },
    { id: 4, title: "Cinematic Travel Reel", category: "video", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop", desc: "Video promosi pariwisata." },
    { id: 5, title: "Company Profile Web", category: "web", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", desc: "Website korporat firma hukum." },
    { id: 6, title: "Fashion Photoshoot", category: "design", image: "https://images.unsplash.com/photo-1542038784456-1ea63518627e?q=80&w=800&auto=format&fit=crop", desc: "Retouching foto produk fashion." },
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
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-darae-charcoal dark:text-white">
            Karya Terpilih <span className="text-darae-accent">.</span>
          </h2>
          <p className="text-darae-grey dark:text-gray-300">Bukti kualitas kerja kami di berbagai bidang.</p>
        </div>

        {/* Tab Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border 
                ${activeCategory === cat.id 
                  // Active: Terracotta (Accent)
                  ? 'bg-darae-accent text-white border-darae-accent shadow-lg shadow-darae-accent/30' 
                  // Inactive: Transparan / Abu
                  : 'bg-transparent text-darae-grey border-darae-grey/20 hover:border-darae-accent hover:text-darae-accent dark:text-gray-400'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-[2rem] bg-white border border-darae-grey/10 dark:bg-white/5 dark:border-white/5 hover:shadow-2xl transition duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-darae-charcoal dark:text-white group-hover:text-darae-accent transition">{project.title}</h3>
                </div>
                <p className="text-darae-grey dark:text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                
                {/* Tag Kategori Kecil */}
                <span className="text-[10px] uppercase tracking-widest font-bold text-darae-accent border border-darae-accent/20 px-3 py-1 rounded-full bg-darae-accent/5">
                    {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
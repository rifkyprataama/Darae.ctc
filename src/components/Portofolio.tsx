'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from './ProjectModal'

// DATA PROJECT (Diperbarui dengan Link Repo & Demo)
const projects = [
    { 
        id: 1, 
        title: "Coffeeshop Landing Page", 
        category: "web", 
        image: "https://images.unsplash.com/photo-1481487484168-9b995ecc1679?q=80&w=800&auto=format&fit=crop", 
        desc: "Website modern untuk kedai kopi lokal.",
        client: "Kopi Senja",
        year: "2023",
        role: "UI/UX & Frontend",
        technologies: ["React", "Tailwind", "Framer Motion"],
        longDesc: "Membangun identitas digital untuk kedai kopi lokal yang ingin menjangkau pasar anak muda. Fokus utama adalah kecepatan loading dan visual yang menggugah selera.",
        
        // --- DATA BARU (SMART BUTTONS) ---
        repoUrl: "https://github.com/username/project-kopi", // Ganti dengan link GitHub asli Anda
        demoUrl: "https://kopi-senja.vercel.app" // Ganti dengan link deploy asli
    },
    { 
        id: 2, 
        title: "E-Commerce App UI", 
        category: "mobile", 
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop", 
        desc: "Desain aplikasi belanja online.",
        client: "Shopify Concept",
        year: "2024",
        role: "Mobile Design",
        technologies: ["Figma", "Protopie"],
        longDesc: "Konsep aplikasi e-commerce yang memprioritaskan pengalaman pengguna yang seamless, dari pencarian produk hingga checkout dalam 3 klik.",
        
        // Contoh: Hanya desain (Link Figma), tidak ada kode
        repoUrl: "", 
        demoUrl: "https://www.figma.com/proto/..." 
    },
    { 
        id: 3, 
        title: "Neon Brand Identity", 
        category: "design", 
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=800&auto=format&fit=crop", 
        desc: "Rebranding logo startup teknologi.",
        client: "CyberTech Ltd",
        year: "2023",
        role: "Brand Designer",
        technologies: ["Illustrator", "Photoshop", "After Effects"],
        longDesc: "Menciptakan bahasa visual baru yang futuristik untuk startup AI. Menggunakan palet warna neon dan tipografi sans-serif modern.",
        
        // Contoh: Link ke Behance atau Dribbble
        repoUrl: "",
        demoUrl: "https://behance.net/..." 
    },
    { 
        id: 4, 
        title: "Cinematic Travel Reel", 
        category: "video", 
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop", 
        desc: "Video promosi pariwisata.",
        client: "Wonderful Indo",
        year: "2022",
        role: "Video Editor",
        technologies: ["Premiere Pro", "DaVinci Resolve"],
        longDesc: "Video promosi pariwisata berdurasi 60 detik yang menampilkan keindahan tersembunyi Sumba. Color grading dilakukan untuk menonjolkan nuansa hangat dan eksotis.",
        
        // Contoh: Link ke YouTube
        repoUrl: "",
        demoUrl: "https://youtube.com/..." 
    },
    { 
        id: 5, 
        title: "Company Profile Web", 
        category: "web", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", 
        desc: "Website korporat firma hukum.",
        client: "Lawyer & Co",
        year: "2023",
        role: "Fullstack Dev",
        technologies: ["Next.js", "Supabase", "TypeScript"],
        longDesc: "Website korporat yang memancarkan profesionalisme dan kepercayaan. Fitur termasuk booking konsultasi online dan blog hukum.",
        
        // Contoh: Ada kode (GitHub) DAN ada Website Live
        repoUrl: "https://github.com/username/compro",
        demoUrl: "https://lawyer-co.com" 
    },
    { 
        id: 6, 
        title: "Fashion Photoshoot", 
        category: "design", 
        image: "https://images.unsplash.com/photo-1542038784456-1ea63518627e?q=80&w=800&auto=format&fit=crop", 
        desc: "Retouching foto produk fashion.",
        client: "Zara Style",
        year: "2024",
        role: "Retoucher",
        technologies: ["Photoshop", "Lightroom"],
        longDesc: "Proyek high-end retouching untuk lookbook musim panas. Membersihkan background dan menyeimbangkan tone warna kulit model.",
        
        // Contoh: Tidak ada link sama sekali (hanya portofolio visual)
        repoUrl: "",
        demoUrl: "" 
    },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Dev' },
    { id: 'mobile', label: 'Apps' },
    { id: 'design', label: 'Branding' },
    { id: 'video', label: 'Motion' },
  ]

  const getCount = (catId: string) => {
    if (catId === 'all') return projects.length;
    return projects.filter(p => p.category === catId).length;
  }

  return (
    <section id="portfolio" className="py-24 px-4 bg-gray-50 dark:bg-darae-dark transition-colors">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-darae-charcoal dark:text-white tracking-tight">
            Selected Projects
          </h2>
        </div>

        {/* FILTER BAR */}
        <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center gap-1 bg-white dark:bg-white/10 p-2 rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
                {categories.map((cat) => (
                    <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                        relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1
                        ${activeCategory === cat.id 
                        ? 'bg-darae-charcoal text-white shadow-md dark:bg-white dark:text-black' 
                        : 'bg-transparent text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5'
                        }
                    `}
                    >
                    {cat.label}
                    <span className={`text-[10px] align-top ml-0.5 opacity-60 ${activeCategory === cat.id ? 'text-gray-300 dark:text-gray-600' : 'text-gray-400'}`}>
                        {getCount(cat.id)}
                    </span>
                    </button>
                ))}
            </div>
        </div>

        {/* GRID GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project: any) => (
                    <motion.div 
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="group relative overflow-hidden rounded-[2rem] bg-white border border-darae-grey/10 dark:bg-white/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View Project
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-darae-charcoal dark:text-white group-hover:text-darae-accent transition mb-2">{project.title}</h3>
                            <p className="text-darae-grey dark:text-gray-400 text-xs mb-4 line-clamp-2">{project.desc}</p>
                            <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-darae-grey border border-gray-200 px-3 py-1 rounded-full dark:border-white/20 dark:text-gray-300">{project.category}</span>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {/* MODAL POPUP */}
        <AnimatePresence>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </AnimatePresence>
      </div>
    </section>
  )
}
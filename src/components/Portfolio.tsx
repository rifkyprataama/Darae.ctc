'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Code, Palette, Layers, Monitor } from 'lucide-react'
import Image from 'next/image'
import ProjectModal from './ProjectModal'
import Magnetic from './ui/Magnetic' // <--- 1. IMPORT MAGNETIC

// --- DATA PROJECT (SAMA) ---
const projects = [
    { 
        id: 1, 
        title: "Sistem Informasi Posyandu (SIMADU)", 
        type: "it",
        category: "Web App", 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", 
        desc: "Digitalisasi pencatatan data kesehatan ibu dan anak real-time.",
        technologies: ["Laravel", "React", "MySQL"],
        year: "2024",
        client: "Dinas Kesehatan",
        role: "Fullstack Dev",
        longDesc: "Platform manajemen data terpadu untuk Posyandu yang memudahkan kader dalam mencatat tumbuh kembang balita.",
        repoUrl: "https://github.com/username/project-simadu",
        demoUrl: "https://simadu-demo.vercel.app" 
    },
    { 
        id: 2, 
        title: "E-Commerce Mobile App", 
        type: "it",
        category: "Mobile Dev", 
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop", 
        desc: "Aplikasi marketplace fashion dengan fitur Virtual Try-On.",
        technologies: ["Flutter", "Firebase", "AR Core"],
        year: "2023",
        client: "Zalora Concept",
        role: "Mobile Developer",
        longDesc: "Membangun pengalaman belanja mobile yang seamless dengan fitur AR.",
        repoUrl: "https://github.com/username/ecommerce-app",
        demoUrl: "" 
    },
    { 
        id: 3, 
        title: "IoT Smart Farming Dashboard", 
        type: "it",
        category: "IoT & Web", 
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop", 
        desc: "Monitoring suhu dan kelembaban tanah perkebunan otomatis.",
        technologies: ["Arduino", "React.js", "MQTT"],
        year: "2023",
        client: "AgriTech Indo",
        role: "IoT Engineer",
        longDesc: "Dashboard monitoring berbasis web yang terhubung dengan sensor di lapangan.",
        repoUrl: "",
        demoUrl: "https://smartfarm.id" 
    },
    { 
        id: 4, 
        title: "Kopi Senja Rebranding", 
        type: "creative",
        category: "Branding", 
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop", 
        desc: "Identitas visual baru untuk chain coffee shop lokal.",
        technologies: ["Illustrator", "Photoshop", "Brand Strategy"],
        year: "2023",
        client: "Kopi Senja",
        role: "Brand Designer",
        longDesc: "Merombak total logo dan visual language Kopi Senja agar lebih relevan dengan pasar Gen-Z.",
        repoUrl: "",
        demoUrl: "https://behance.net/..." 
    },
    { 
        id: 5, 
        title: "Cinematic Company Profile", 
        type: "creative",
        category: "Video", 
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop", 
        desc: "Video profil perusahaan konstruksi BUMN.",
        technologies: ["Premiere Pro", "After Effects", "Drone Shot"],
        year: "2024",
        client: "Waskita Karya",
        role: "Video Editor",
        longDesc: "Produksi video profil korporat dengan gaya sinematik.",
        repoUrl: "",
        demoUrl: "https://youtube.com/..." 
    },
    { 
        id: 6, 
        title: "Social Media Feeds Aesthetic", 
        type: "creative",
        category: "Social Media", 
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", 
        desc: "Manajemen konten Instagram untuk klinik kecantikan.",
        technologies: ["Canva Pro", "CapCut", "Copywriting"],
        year: "2023",
        client: "Glow Clinic",
        role: "Content Creator",
        longDesc: "Meningkatkan engagement rate sebesar 150% dalam 3 bulan.",
        repoUrl: "",
        demoUrl: "https://instagram.com/..." 
    },
]

const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'it', label: 'IT Services', icon: Code },
    { id: 'creative', label: 'Digital Creative', icon: Palette },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter)

  const getCount = (filterId: string) => {
    if (filterId === 'all') return projects.length;
    return projects.filter(p => p.type === filterId).length;
  }

  return (
    <section id="portfolio" className="py-24 px-4 bg-gray-50 dark:bg-[#0a0a0a] transition-colors relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-darae-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darae-accent/10 text-darae-accent text-xs font-bold uppercase tracking-wider mb-4">
             <Monitor className="w-4 h-4" /> Our Masterpiece
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-darae-charcoal dark:text-white tracking-tight">
            Selected <span className="text-darae-accent">Works</span>.
          </h2>
          <p className="text-darae-grey dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Kombinasi logika kode yang kuat dan estetika visual yang memanjakan mata. Lihat bagaimana kami membantu bisnis bertumbuh.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-white dark:bg-white/5 p-2 rounded-full border border-gray-200 dark:border-white/10 shadow-lg shadow-gray-200/50 dark:shadow-none backdrop-blur-md">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeFilter === cat.id;
                    return (
                        // 2. BUNGKUS TOMBOL FILTER DENGAN MAGNETIC
                        <Magnetic key={cat.id}>
                            <button
                                onClick={() => setActiveFilter(cat.id)}
                                className={`
                                    relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                                    ${isActive 
                                    ? 'bg-darae-charcoal text-white shadow-md transform scale-105 dark:bg-white dark:text-black' 
                                    : 'bg-transparent text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10'
                                    }
                                `}
                            >
                                <Icon className={`w-4 h-4 ${isActive ? 'text-darae-accent' : 'text-gray-400'}`} />
                                {cat.label}
                                <span className={`
                                    ml-1 text-[10px] px-1.5 py-0.5 rounded-full 
                                    ${isActive 
                                        ? 'bg-white/20 text-white dark:bg-black/10 dark:text-black' 
                                        : 'bg-gray-200 text-gray-600 dark:bg-white/10 dark:text-gray-400'}
                                `}>
                                    {getCount(cat.id)}
                                </span>
                            </button>
                        </Magnetic>
                    )
                })}
            </div>
        </div>

        {/* Grid Gallery */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                    <motion.div 
                        layout
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.4, type: "spring" }}
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="group cursor-pointer h-full"
                    >
                        <div className="relative h-full bg-white dark:bg-[#111] rounded-[2rem] border border-gray-200 dark:border-white/10 overflow-hidden hover:border-darae-accent/50 hover:shadow-2xl hover:shadow-darae-accent/10 transition-all duration-500 flex flex-col">
                            
                            {/* Image Area */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-[#1a1a1a]">
                                
                                {project.type === 'it' && (
                                    <div className="absolute top-4 left-4 z-10 flex gap-1.5 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full">
                                        <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                                    </div>
                                )}

                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay dengan MAGNETIC BUTTON */}
                                <div className="absolute inset-0 bg-darae-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    {/* 3. BUNGKUS TOMBOL OVERLAY DENGAN MAGNETIC */}
                                    <Magnetic>
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Details <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </Magnetic>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`
                                        text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border
                                        ${project.type === 'it' 
                                            ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30' 
                                            : 'bg-pink-50 text-pink-600 border-pink-100 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-900/30'}
                                    `}>
                                        {project.category}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">{project.year}</span>
                                </div>

                                <h3 className="text-xl font-bold text-darae-charcoal dark:text-white mb-2 group-hover:text-darae-accent transition-colors line-clamp-1">
                                    {project.title}
                                </h3>
                                
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.technologies?.slice(0, 3).map((tech, i) => (
                                        <div key={i} className="flex items-center gap-1 text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">
                                            <div className="w-1 h-1 rounded-full bg-darae-accent"></div>
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Modal Popup */}
        <AnimatePresence>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </AnimatePresence>

      </div>
    </section>
  )
}
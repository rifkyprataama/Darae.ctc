'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Code, Palette, Layers, Monitor, ImageOff, Loader2 } from 'lucide-react'
import Image from 'next/image'
import ProjectModal from './ProjectModal'
import Magnetic from './ui/Magnetic'
import ScrollReveal from "./ui/ScrollReveal";
import { supabase } from '@/lib/supabaseClient' // Import Supabase Client

const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'it', label: 'IT Services', icon: Code },
    { id: 'creative', label: 'Digital Creative', icon: Palette },
]

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [selectedProject, setSelectedProject] = useState<any>(null)
    
    // STATE BARU: Menyimpan data dari Database
    const [projects, setProjects] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    // FETCH DATA REALTIME DARI SUPABASE
    useEffect(() => {
        const fetchPortfolio = async () => {
            // Ambil data dari tabel 'portfolios'
            const { data, error } = await supabase
                .from('portfolios')
                .select('*')
                .order('id', { ascending: false }) // Urutkan dari yang terbaru
            
            if (error) {
                console.error("Error fetching portfolio:", error)
            }

            if (data) {
                // Mapping: Sesuaikan nama kolom Database dengan nama variable di UI
                const formattedData = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    type: item.type,      // 'it' atau 'creative'
                    category: item.category,
                    image: item.image_url, // Di DB namanya image_url, di UI kita pakai image
                    desc: item.desc_short, // Di DB namanya desc_short
                    client: item.client,
                    year: item.year,
                    role: item.role,
                    technologies: item.technologies,
                    longDesc: item.desc_long, // Deskripsi panjang untuk modal
                    repoUrl: item.repo_url,
                    demoUrl: item.demo_url
                }))
                setProjects(formattedData)
            }
            setLoading(false)
        }

        fetchPortfolio()
    }, [])

    // Filter Logic menggunakan state 'projects' (bukan portfolioData lagi)
    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.type === activeFilter)

    const getCount = (filterId: string) => {
        if (filterId === 'all') return projects.length;
        return projects.filter(p => p.type === filterId).length;
    }

    return (
        <section id="portfolio" className="py-24 px-4 bg-transparent transition-colors relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] 
                bg-darae-blue/20 dark:bg-darae-gold/5 
                rounded-full blur-3xl -z-10 pointer-events-none">
        </div>

        <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={0.1} fullWidth>
                <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darae-accent/10 text-darae-accent text-xs font-bold uppercase tracking-wider mb-4">
                    <Monitor className="w-4 h-4" /> Our Masterpiece
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 text-darae-charcoal dark:text-white tracking-tight">
                    Selected <span className="text-darae-accent">Works</span>
                </h2>
                <p className="text-darae-charcoal/70 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                    Kombinasi teknologi yang kuat dan estetika visual yang memanjakan mata. Lihat bagaimana kami membantu bisnis bertumbuh.
                </p>
                </div>
            </ScrollReveal>

            {/* KATEGORI FILTER */}
            <ScrollReveal direction="up" delay={0.2} fullWidth>
                <div className="flex justify-center mb-16">
                    <div className="inline-flex flex-wrap justify-center gap-2 bg-white/50 dark:bg-[#1f2327]/50 p-2 rounded-full border border-gray-200 dark:border-white/10 shadow-lg shadow-gray-200/50 dark:shadow-none backdrop-blur-md">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = activeFilter === cat.id;
                            return (
                                <Magnetic key={cat.id}>
                                    <button
                                        onClick={() => setActiveFilter(cat.id)}
                                        className={`
                                            relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                                            ${isActive 
                                            ? 'bg-darae-charcoal text-white shadow-md transform scale-105 dark:bg-darae-gold dark:text-darae-charcoal' 
                                            : 'bg-transparent text-gray-500 hover:bg-white dark:text-gray-400 dark:hover:bg-white/10'
                                            }
                                        `}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? 'text-darae-accent dark:text-darae-charcoal' : 'text-gray-400'}`} />
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
            </ScrollReveal>

            {/* LIST PROJECT DENGAN LOADING STATE */}
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="w-10 h-10 animate-spin text-darae-accent" />
                </div>
            ) : (
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
                                <div className="relative h-full bg-white dark:bg-[#1f2327] rounded-[2rem] border border-gray-200 dark:border-white/5 overflow-hidden hover:border-darae-accent/50 hover:shadow-2xl hover:shadow-darae-accent/10 transition-all duration-500 flex flex-col">
                                    
                                    {/* Image Area */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-[#1a1a1a]">
                                        
                                        {project.type === 'it' && (
                                            <div className="absolute top-4 left-4 z-10 flex gap-1.5 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full">
                                                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                                                <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                                                <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                                            </div>
                                        )}

                                        {project.image ? (
                                            <Image 
                                                src={project.image} 
                                                alt={project.title} 
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                                                <ImageOff className="w-12 h-12 mb-2 opacity-20" />
                                                <span className="text-xs font-mono opacity-50">No Preview</span>
                                            </div>
                                        )}
                                        
                                        {/* Overlay dengan MAGNETIC BUTTON */}
                                        <div className="absolute inset-0 bg-darae-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
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
                                                    ? 'bg-darae-blue/10 text-darae-charcoal border-darae-blue/20 dark:text-darae-blue dark:border-darae-blue/30' 
                                                    : 'bg-darae-gold/10 text-darae-charcoal border-darae-gold/20 dark:text-darae-gold dark:border-darae-gold/30'}
                                            `}>
                                                {project.category}
                                            </span>
                                            <span className="text-xs text-gray-400 font-medium">{project.year}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-darae-charcoal dark:text-white mb-2 group-hover:text-darae-accent transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-sm text-darae-charcoal/60 dark:text-gray-400 mb-6 line-clamp-2">
                                            {project.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="mt-auto flex flex-wrap gap-2">
                                            {project.technologies?.slice(0, 3).map((tech: string, i: number) => (
                                                <div key={i} className="flex items-center gap-1 text-[10px] font-bold text-darae-charcoal/60 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">
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
            )}

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
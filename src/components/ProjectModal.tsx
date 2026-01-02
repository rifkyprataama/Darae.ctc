'use client'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface ProjectData {
    id: number;
    title: string;
    category: string;
    image: string;
    desc: string;
    client?: string;
    year?: string;
    role?: string;
    technologies?: string[];
    longDesc?: string;
    // Field Link Baru
    repoUrl?: string; // Link GitHub
    demoUrl?: string; // Link Live Web / Figma
}

interface ProjectModalProps {
    project: ProjectData;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
            <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-[#121212] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative flex flex-col overflow-hidden border border-white/10"
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/10 dark:bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-darae-accent hover:text-white transition-colors text-darae-charcoal dark:text-white">✕</button>

                {/* Header Image */}
                <div className="w-full h-64 md:h-80 relative shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                        <span className="px-3 py-1 bg-darae-accent text-white text-[10px] font-bold uppercase rounded-full mb-3 inline-block tracking-widest">
                            {project.category}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Left: Meta */}
                        <div className="space-y-6">
                            <div><h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Client</h4><p className="text-base font-bold text-darae-charcoal dark:text-white">{project.client || "Personal Project"}</p></div>
                            <div><h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Year</h4><p className="text-base font-bold text-darae-charcoal dark:text-white">{project.year || "2024"}</p></div>
                            <div><h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Role</h4><p className="text-base font-bold text-darae-charcoal dark:text-white">{project.role || "Development"}</p></div>
                        </div>

                        {/* Right: Description & Actions */}
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-darae-charcoal dark:text-white mb-3">Overview</h3>
                                <p className="text-darae-grey dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                    {project.longDesc || project.desc}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-sm font-bold text-darae-charcoal dark:text-white mb-3">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-lg text-xs font-bold text-darae-grey dark:text-gray-300 border border-transparent dark:border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-white/10" />

                            {/* --- ACTION BUTTONS AREA (IDE 1, 2, 3) --- */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                
                                {/* 1. TOMBOL LIVE DEMO (Jika ada link demo) */}
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noreferrer" 
                                       className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-darae-charcoal text-white dark:bg-white dark:text-black rounded-full font-bold hover:scale-[1.02] transition-transform shadow-lg">
                                       <span>🚀</span> 
                                       {project.category === 'design' ? 'View Design' : 'Visit Site'}
                                    </a>
                                )}

                                {/* 2. TOMBOL REPOSITORY (Jika ada link repo - Kredibilitas Freelancer) */}
                                {/* Kalau tidak ada Demo, tombol ini jadi Primary (Hitam/Putih). Kalau ada Demo, jadi Secondary (Outline). */}
                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noreferrer" 
                                       className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all border
                                         ${!project.demoUrl 
                                            ? 'bg-darae-charcoal text-white dark:bg-white dark:text-black border-transparent shadow-lg' // Jadi Primary
                                            : 'bg-transparent border-gray-300 text-darae-charcoal dark:border-white/20 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5' // Jadi Secondary
                                         }
                                       `}>
                                       {/* GitHub Icon SVG */}
                                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                       <span>{project.demoUrl ? 'Source Code' : 'View Repository'}</span>
                                    </a>
                                )}

                                {/* 3. TOMBOL SALES (Conversion) - Selalu Muncul */}
                                <a href={`https://wa.me/6281234567890?text=Halo,%20saya%20suka%20project%20${project.title},%20ingin%20buat%20yang%20serupa.`} 
                                   target="_blank" rel="noreferrer" 
                                   className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold border-2 border-darae-accent text-darae-accent hover:bg-darae-accent hover:text-white transition-all">
                                    <span>✨</span> Pesan Serupa
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    )
}
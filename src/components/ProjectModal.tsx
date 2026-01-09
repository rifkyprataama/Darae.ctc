'use client'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { X, Github, ExternalLink, Calendar, User, Briefcase, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Magnetic from './ui/Magnetic'
import { useCursor } from '@/context/CursorContext'

interface ProjectData {
    id: number;
    title: string;
    type: string;
    category: string;
    image: string;
    desc: string;
    client?: string;
    year?: string;
    role?: string;
    technologies?: string[];
    longDesc?: string;
    repoUrl?: string;
    demoUrl?: string;
}

interface ProjectModalProps {
    project: ProjectData;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    
    const { setIsHovered } = useCursor();

    useEffect(() => {
        // 1. Matikan Scroll Body Browser
        document.body.style.overflow = 'hidden';
        return () => {
            // 2. Hidupkan kembali saat modal tutup
            document.body.style.overflow = 'unset';
        }
    }, [])

    const handleOrderSimilar = () => {
        const message = `Halo Darae, saya melihat portofolio "${project.title}" dan tertarik membuat project yang serupa/mirip. Bisa diskusi?`;
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 sm:p-6"
        >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
                onMouseEnter={() => setIsHovered(false)}
            ></div>

            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#121212] rounded-[2.5rem] shadow-2xl flex flex-col border border-white/20 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                
                {/* --- HERO SECTION --- */}
                <div className="relative w-full h-64 md:h-80 shrink-0 group rounded-t-[2.5rem] overflow-hidden">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    {/* TOMBOL CLOSE */}
                    <div className="absolute top-6 right-6 z-20">
                        <Magnetic>
                            <button 
                                onClick={onClose}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </Magnetic>
                    </div>

                    <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className={`
                                px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border mb-3 inline-block backdrop-blur-md
                                ${project.type === 'it' 
                                    ? 'bg-darae-blue/20 border-darae-blue/30 text-blue-100' 
                                    : 'bg-darae-gold/20 border-darae-gold/30 text-yellow-100'}
                            `}>
                                {project.category}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                {project.title}
                            </h2>
                        </motion.div>
                    </div>
                </div>

                {/* --- CONTENT BODY --- */}
                <div 
                    data-lenis-prevent
                    className="flex-1 overflow-y-auto p-8 md:p-10 custom-scrollbar overscroll-contain"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                        
                        <div className="md:col-span-4 space-y-8">
                            <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5 space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 text-gray-400 mb-1 text-xs font-bold uppercase tracking-wider">
                                        <User className="w-3 h-3" /> Client
                                    </div>
                                    <p className="text-darae-charcoal dark:text-white font-bold text-lg">
                                        {project.client || "Confidential"}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-gray-400 mb-1 text-xs font-bold uppercase tracking-wider">
                                        <Calendar className="w-3 h-3" /> Year
                                    </div>
                                    <p className="text-darae-charcoal dark:text-white font-bold text-lg">
                                        {project.year || "2024"}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-gray-400 mb-1 text-xs font-bold uppercase tracking-wider">
                                        <Briefcase className="w-3 h-3" /> Role
                                    </div>
                                    <p className="text-darae-charcoal dark:text-white font-bold text-lg">
                                        {project.role || "Creator"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-8 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-darae-charcoal dark:text-white mb-4 flex items-center gap-2">
                                    Project Overview
                                </h3>
                                <p className="text-darae-grey dark:text-gray-300 leading-relaxed text-base md:text-lg">
                                    {project.longDesc || project.desc}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                                    {project.type === 'it' ? 'Technologies Used' : 'Creative Tools'}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, i) => (
                                        <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-darae-charcoal dark:text-gray-200 flex items-center gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full ${project.type === 'it' ? 'bg-darae-blue' : 'bg-darae-gold'}`}></span>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- FOOTER ACTIONS --- */}
                <div className="p-6 md:px-10 md:py-8 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-[#121212] z-10 shrink-0 rounded-b-[2.5rem]">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        
                        {/* TOMBOL LIVE SITE */}
                        {project.demoUrl && (
                            <Magnetic>
                                <a 
                                   href={project.demoUrl} 
                                   target="_blank" 
                                   rel="noreferrer" 
                                   onMouseEnter={() => setIsHovered(true)}
                                   onMouseLeave={() => setIsHovered(false)}
                                   className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-darae-charcoal dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-[1.02] transition-transform cursor-pointer"
                                >
                                   <ExternalLink className="w-5 h-5" />
                                   Visit Live Site
                                </a>
                            </Magnetic>
                        )}

                        {/* TOMBOL REPOSITORY */}
                        {project.repoUrl && (
                             <Magnetic>
                                <a 
                                   href={project.repoUrl} 
                                   target="_blank" 
                                   rel="noreferrer" 
                                   onMouseEnter={() => setIsHovered(true)}
                                   onMouseLeave={() => setIsHovered(false)}
                                   className={`w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold transition-transform hover:scale-[1.02] cursor-pointer
                                     ${!project.demoUrl 
                                        ? 'bg-darae-charcoal dark:bg-white text-white dark:text-black' 
                                        : 'bg-gray-100 dark:bg-white/10 text-darae-charcoal dark:text-white border border-transparent' 
                                     }
                                   `}>
                                   <Github className="w-5 h-5" />
                                   View Repository
                                </a>
                             </Magnetic>
                        )}

                        {/* TOMBOL PESAN SERUPA */}
                        <Magnetic>
                            <button 
                                onClick={handleOrderSimilar}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border-2 border-darae-accent text-darae-accent rounded-full font-bold hover:bg-darae-accent hover:text-white transition-all cursor-pointer"
                            >
                                <Sparkles className="w-5 h-5" />
                                Pesan Serupa
                            </button>
                        </Magnetic>

                    </div>
                </div>

            </motion.div>
        </motion.div>
    )
}
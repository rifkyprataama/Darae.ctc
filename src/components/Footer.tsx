'use client'
import Magnetic from "./ui/Magnetic"; 

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-32 md:pb-12 px-4 bg-white dark:bg-black text-darae-charcoal dark:text-white border-t border-gray-200 dark:border-white/10 overflow-hidden transition-colors">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gray-100 dark:bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          
          {/* BAGIAN KIRI */}
          <div className="space-y-8">
             <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
               Let's make something <span className="text-darae-accent">amazing.</span>
             </h2>
             <p className="text-lg text-darae-grey dark:text-gray-400 max-w-md">
               Punya ide liar? Kami siap membantu menerjemahkannya menjadi realitas digital yang fungsional dan estetik.
             </p>
             
             <div className="flex flex-wrap gap-4">
                 <Magnetic>
                    <a 
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20diskusi%20project" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-darae-charcoal text-white dark:bg-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
                    >
                    Start a Project
                    </a>
                 </Magnetic>
                 
                 <Magnetic>
                    <a 
                    href="mailto:hello@darae.ctc" 
                    className="inline-block px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                    >
                    hello@darae.ctc
                    </a>
                 </Magnetic>
             </div>
          </div>

          {/* BAGIAN KANAN */}
          <div className="grid grid-cols-2 gap-8 md:pl-20">
            {/* Menu */}
            <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-sm text-gray-400">Menu</h4>
                {/* Hapus hover:opacity di sini */}
                <ul className="space-y-2 font-medium"> 
                    <li><Magnetic><a href="#" className="inline-block p-2 transition-colors">Home</a></Magnetic></li>
                    <li><Magnetic><a href="#services" className="inline-block p-2 transition-colors">Services</a></Magnetic></li>
                    <li><Magnetic><a href="#portfolio" className="inline-block p-2 transition-colors">Portfolio</a></Magnetic></li>
                    <li><Magnetic><a href="#contact" className="inline-block p-2 transition-colors">Contact</a></Magnetic></li>
                </ul>
            </div>

            {/* Socials */}
            <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-sm text-gray-400">Connect</h4>
                <ul className="space-y-2 font-medium">
                    <li><Magnetic><a href="#" className="inline-block p-2 transition-colors">Instagram</a></Magnetic></li>
                    <li><Magnetic><a href="#" className="inline-block p-2 transition-colors">LinkedIn</a></Magnetic></li>
                    <li><Magnetic><a href="#" className="inline-block p-2 transition-colors">Dribbble</a></Magnetic></li>
                    <li><Magnetic><a href="#" className="inline-block p-2 transition-colors">GitHub</a></Magnetic></li>
                </ul>
            </div>
          </div>
        </div>

        {/* BAGIAN BAWAH */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Darae.ctc. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-darae-charcoal dark:hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-darae-charcoal dark:hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  )
}
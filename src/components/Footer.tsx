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
             
             <div className="flex flex-col gap-2">
                <a href="mailto:hello@darae.ctc" className="text-2xl font-bold hover:text-darae-accent transition-colors">hello@darae.ctc</a>
                <p className="text-darae-grey dark:text-gray-500">+62 812 3456 7890</p>
             </div>
          </div>

          {/* BAGIAN KANAN (Links) */}
          <div className="grid grid-cols-2 gap-8 md:pl-20">
            {/* Sitemaps */}
            <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-sm text-gray-400">Sitemap</h4>
                <ul className="space-y-2 font-medium">
                    <li><Magnetic><a href="#home" className="inline-block p-2 transition-colors hover:text-darae-accent">Home</a></Magnetic></li>
                    <li><Magnetic><a href="#about" className="inline-block p-2 transition-colors hover:text-darae-accent">About</a></Magnetic></li>
                    <li><Magnetic><a href="#pricing" className="inline-block p-2 transition-colors hover:text-darae-accent">Services</a></Magnetic></li>
                    <li><Magnetic><a href="#portfolio" className="inline-block p-2 transition-colors hover:text-darae-accent">Work</a></Magnetic></li>
                </ul>
            </div>

            {/* Socials */}
            <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-sm text-gray-400">Connect</h4>
                <ul className="space-y-2 font-medium">
                    <li><Magnetic><a href="#" className="inline-block p-2 transition-colors hover:text-darae-accent">Instagram</a></Magnetic></li>
                    <li><Magnetic><a href="#" className="inline-block p-2 transition-colors hover:text-darae-accent">LinkedIn</a></Magnetic></li>
                    <li><Magnetic><a href="#" className="inline-block p-2 transition-colors hover:text-darae-accent">Dribbble</a></Magnetic></li>
                    <li><Magnetic><a href="#" className="inline-block p-2 transition-colors hover:text-darae-accent">GitHub</a></Magnetic></li>
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
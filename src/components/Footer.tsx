'use client'
import Magnetic from "./ui/Magnetic";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-10 px-6 bg-white dark:bg-black text-darae-charcoal dark:text-white border-t border-gray-200 dark:border-white/10 overflow-hidden transition-colors duration-500">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-darae-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* REVISI: Ubah max-w-7xl menjadi max-w-6xl agar sejajar dengan Navbar */}
      <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[50vh]">
        
        {/* BAGIAN ATAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* KIRI: Headline */}
          <div className="space-y-8">
             <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
               Let's make it <br/>
               <span className="text-darae-accent italic">happen.</span>
             </h2>
             <p className="text-lg md:text-xl text-darae-grey dark:text-gray-400 max-w-md font-light leading-relaxed">
               Punya ide liar? Kami siap membantu menerjemahkannya menjadi realitas digital yang fungsional dan estetik.
             </p>
          </div>

          {/* KANAN: Kontak & Link */}
          <div className="flex flex-col md:flex-row gap-12 lg:justify-end items-start lg:pt-4">
            
            {/* Contact Info */}
            <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-xs text-darae-grey dark:text-gray-500 mb-6">Drop us a line</h4>
                <div className="flex flex-col gap-1">
                    <Magnetic>
                        <a href="mailto:hello@darae.ctc" className="text-2xl md:text-3xl font-bold hover:text-darae-accent transition-colors inline-block">
                            hello@darae.ctc
                        </a>
                    </Magnetic>
                    <p className="text-lg text-darae-grey dark:text-gray-400 mt-2">+62 812 3456 7890</p>
                    <p className="text-lg text-darae-grey dark:text-gray-400">Bandung, Indonesia</p>
                </div>
            </div>

            {/* Menu Links */}
            <div className="space-y-6 min-w-[120px]">
                <h4 className="font-bold uppercase tracking-widest text-xs text-darae-grey dark:text-gray-500 mb-4">Explore</h4>
                <ul className="space-y-3 font-medium text-lg">
                    <li><Magnetic><a href="#home" className="inline-block hover:text-darae-accent transition-colors">Home</a></Magnetic></li>
                    <li><Magnetic><a href="#about" className="inline-block hover:text-darae-accent transition-colors">About</a></Magnetic></li>
                    <li><Magnetic><a href="#pricing" className="inline-block hover:text-darae-accent transition-colors">Services</a></Magnetic></li>
                    <li><Magnetic><a href="#portfolio" className="inline-block hover:text-darae-accent transition-colors">Work</a></Magnetic></li>
                </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-6 min-w-[120px]">
                <h4 className="font-bold uppercase tracking-widest text-xs text-darae-grey dark:text-gray-500 mb-4">Follow</h4>
                <ul className="space-y-3 font-medium text-lg">
                    <li><Magnetic><a href="#" className="inline-block hover:text-darae-accent transition-colors">Instagram</a></Magnetic></li>
                    <li><Magnetic><a href="#" className="inline-block hover:text-darae-accent transition-colors">LinkedIn</a></Magnetic></li>
                    <li><Magnetic><a href="#" className="inline-block hover:text-darae-accent transition-colors">Dribbble</a></Magnetic></li>
                    <li><Magnetic><a href="#" className="inline-block hover:text-darae-accent transition-colors">GitHub</a></Magnetic></li>
                </ul>
            </div>

          </div>
        </div>

        {/* BAGIAN BAWAH */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-darae-grey dark:text-gray-500 font-medium">
            
            <p>&copy; {currentYear} Darae.ctc. All rights reserved.</p>
            
            <div className="flex gap-8">
                <Magnetic>
                    <a href="#" className="hover:text-darae-charcoal dark:hover:text-white transition-colors inline-block">Privacy Policy</a>
                </Magnetic>
                <Magnetic>
                    <a href="#" className="hover:text-darae-charcoal dark:hover:text-white transition-colors inline-block">Terms of Service</a>
                </Magnetic>
            </div>

            <Magnetic>
                <a href="#home" className="hidden md:inline-block uppercase tracking-widest text-xs font-bold hover:text-darae-accent transition-colors">
                    Back to Top ↑
                </a>
            </Magnetic>
        </div>

      </div>
    </footer>
  )
}
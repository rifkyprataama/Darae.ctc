'use client'
import Link from 'next/link'
import Magnetic from '@/components/ui/Magnetic'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-transparent text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
            bg-darae-blue/20 dark:bg-darae-accent/10 
            rounded-full blur-[100px] -z-10 pointer-events-none">
      </div>

      <h1 className="text-[120px] md:text-[200px] font-black text-darae-charcoal/5 dark:text-white/5 leading-none select-none">
        404
      </h1>
      
      <div className="relative -mt-10 md:-mt-16 z-10 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-darae-charcoal dark:text-white">
          Halaman Hilang
        </h2>
        <p className="text-darae-charcoal/70 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
          Sepertinya Anda tersesat di ruang digital. Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
        </p>

        <div className="flex justify-center">
            <Magnetic>
                <Link 
                    href="/"
                    className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold overflow-hidden shadow-xl
                    /* Normal State */
                    bg-darae-charcoal text-white 
                    dark:bg-darae-gold dark:text-darae-charcoal
                    transition-transform active:scale-95"
                >
                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out
                        bg-darae-accent dark:bg-darae-blue">
                    </div>

                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        Kembali ke Home
                    </span>
                </Link>
            </Magnetic>
        </div>
      </div>
    </div>
  )
}
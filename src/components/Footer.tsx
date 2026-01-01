export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center border-t border-darae-grey/10 bg-darae-light/50 dark:bg-black/20 backdrop-blur-sm transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="text-left">
          <span className="text-xl font-bold text-darae-charcoal dark:text-white">
            Darae<span className="text-darae-accent">.ctc</span>
          </span>
          <p className="text-xs text-darae-grey mt-1">Digital Creativity & Technology.</p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-darae-grey dark:text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Social Links (Opsional) */}
        <div className="flex gap-4">
           {/* Contoh link placeholder */}
           <a href="#" className="w-8 h-8 rounded-full bg-darae-grey/10 flex items-center justify-center text-darae-grey hover:bg-darae-accent hover:text-white transition">IG</a>
           <a href="#" className="w-8 h-8 rounded-full bg-darae-grey/10 flex items-center justify-center text-darae-grey hover:bg-darae-accent hover:text-white transition">WA</a>
        </div>
      </div>
    </footer>
  );
}
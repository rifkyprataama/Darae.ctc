'use client'

export default function Dashboard() {
  return (
    <div>
        <h1 className="text-3xl font-black text-darae-charcoal dark:text-white mb-2">Welcome Back, Rifky! 👋</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Ini adalah pusat kendali website Darae Creative.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kartu Statistik Sederhana */}
            <div className="p-6 bg-white dark:bg-[#1f2327] rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm">
                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Total Projects</h3>
                <p className="text-4xl font-black text-darae-charcoal dark:text-white">8</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-[#1f2327] rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm">
                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Pesan Masuk</h3>
                <p className="text-4xl font-black text-darae-charcoal dark:text-white">0</p>
            </div>

            <div className="p-6 bg-darae-accent text-white rounded-3xl shadow-xl shadow-darae-accent/20">
                <h3 className="text-white/80 text-sm font-bold uppercase tracking-wider mb-2">Status Server</h3>
                <p className="text-4xl font-black">Online 🟢</p>
            </div>
        </div>
    </div>
  )
}
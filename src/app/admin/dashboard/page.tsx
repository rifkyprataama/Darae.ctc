'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { 
    FolderKanban, 
    MessageSquare, 
    DollarSign, 
    Users, 
    HelpCircle, 
    ArrowUpRight,
    Loader2,
    Activity, // Icon baru untuk Server Status
    Hand, // Icon baru untuk Welcome
    Server
} from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    projects: 0,
    messages: 0,
    pricing: 0,
    testimonials: 0,
    faq: 0
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [
            projectsData, 
            messagesData, 
            pricingData, 
            testiData,
            faqData
        ] = await Promise.all([
            supabase.from('portfolios').select('*', { count: 'exact', head: true }),
            supabase.from('messages').select('*', { count: 'exact', head: true }),
            supabase.from('pricing').select('*', { count: 'exact', head: true }),
            supabase.from('testimonials').select('*', { count: 'exact', head: true }),
            supabase.from('faqs').select('*', { count: 'exact', head: true })
        ])

        setStats({
            projects: projectsData.count || 0,
            messages: messagesData.count || 0,
            pricing: pricingData.count || 0,
            testimonials: testiData.count || 0,
            faq: faqData.count || 0
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  // Komponen Kartu Statistik
  const StatCard = ({ title, count, icon: Icon, href, color }: any) => (
    <Link href={href} className="group">
        <div className="h-full p-6 bg-white dark:bg-[#1f2327] rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${color}`}>
                <Icon size={100} />
            </div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl ${color} bg-opacity-10 text-opacity-100`}>
                        <Icon size={24} className={color.replace('bg-', 'text-')} />
                    </div>
                    <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-full text-gray-400 group-hover:text-darae-charcoal dark:group-hover:text-white transition-colors">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
                
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{title}</h3>
                <p className="text-4xl font-black text-darae-charcoal dark:text-white">
                    {loading ? <Loader2 className="w-8 h-8 animate-spin text-gray-300" /> : count}
                </p>
            </div>
        </div>
    </Link>
  )

  return (
    <div>
        {/* Header dengan Icon Tangan */}
        <div className="mb-8 flex items-center gap-3">
            <div className="p-3 bg-darae-accent/10 rounded-full text-darae-accent hidden md:block">
                <Hand className="w-6 h-6" />
            </div>
            <div>
                <h1 className="text-3xl font-black text-darae-charcoal dark:text-white mb-1">
                    Welcome Back, Rifky!
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Pusat kendali website Darae Creative.
                </p>
            </div>
        </div>

        {/* STATUS SERVER CARD (Tanpa Emoji) */}
        <div className="mb-8 p-8 bg-gradient-to-r from-darae-charcoal to-black dark:from-darae-gold dark:to-yellow-600 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold opacity-80 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">System Status</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-2 dark:text-black">Semua Sistem Normal</h2>
                    <p className="opacity-70 max-w-lg dark:text-black/70 text-sm md:text-base">
                        Database Supabase terhubung. Website dapat diakses publik dengan performa optimal.
                    </p>
                </div>
                
                {/* Icon Server Besar */}
                <div className="hidden md:block">
                     <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-500">
                        <Activity size={48} className="text-white dark:text-black" />
                     </div>
                </div>
            </div>
            
            {/* Hiasan Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <Server className="absolute -bottom-6 -left-6 w-48 h-48 text-white/5 rotate-12" />
        </div>

        {/* GRID STATISTIK: 5 KARTU (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <StatCard 
                title="Total Projects" 
                count={stats.projects} 
                icon={FolderKanban} 
                href="/admin/projects"
                color="text-blue-500"
            />
            
            <StatCard 
                title="Pesan Masuk" 
                count={stats.messages} 
                icon={MessageSquare} 
                href="/admin/messages"
                color="text-green-500"
            />

            <StatCard 
                title="Paket Harga" 
                count={stats.pricing} 
                icon={DollarSign} 
                href="/admin/pricing"
                color="text-yellow-500"
            />

            <StatCard 
                title="Testimoni" 
                count={stats.testimonials} 
                icon={Users} 
                href="/admin/testimonials"
                color="text-purple-500"
            />

            {/* KARTU FAQ BARU */}
            <StatCard 
                title="FAQ Items" 
                count={stats.faq} 
                icon={HelpCircle} 
                href="/admin/faq"
                color="text-orange-500"
            />
        </div>

        {/* SECTION PESAN (PREVIEW) */}
        <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-darae-charcoal dark:text-white">Aktivitas Terbaru</h3>
                <Link href="/admin/messages" className="text-sm font-bold text-darae-accent hover:underline">
                    Lihat Semua Pesan
                </Link>
            </div>
            
            <div className="bg-white dark:bg-[#1f2327] rounded-3xl border border-gray-200 dark:border-white/5 p-12 text-center text-gray-400">
                {stats.messages === 0 ? (
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center">
                            <MessageSquare className="w-8 h-8 opacity-30" />
                        </div>
                        <p>Belum ada pesan baru yang masuk.</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                         <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <p className="text-darae-charcoal dark:text-white font-medium">
                            Ada {stats.messages} pesan menunggu dibaca.
                        </p>
                        <Link href="/admin/messages" className="px-6 py-2 bg-darae-charcoal dark:bg-white text-white dark:text-black rounded-full font-bold text-sm">
                            Buka Inbox
                        </Link>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, FolderKanban, DollarSign, MessageSquare, LogOut, Menu, X, Users, HelpCircle } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Cek sesi login
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session && pathname !== '/admin/login') {
        router.push('/admin/login')
      }
      setLoading(false)
    }
    checkUser()
  }, [router, pathname])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  // Jangan render layout admin di halaman login
  if (pathname === '/admin/login') return <>{children}</>

  if (loading) return <div className="min-h-screen flex items-center justify-center dark:bg-[#121212] dark:text-white">Loading Admin...</div>

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
    { name: 'Projects', icon: FolderKanban, href: '/admin/projects' },
    { name: 'Pricing', icon: DollarSign, href: '/admin/pricing' },
    { name: 'Messages', icon: MessageSquare, href: '/admin/messages' },
    { name: 'Testimonials', icon: Users, href: '/admin/testimonials' },
    { name: 'FAQ', icon: HelpCircle, href: '/admin/faq' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] flex">
      {/* Sidebar Desktop */}
      <aside className={`fixed top-0 left-0 h-screen bg-white dark:bg-[#1f2327] border-r border-gray-200 dark:border-white/5 transition-all duration-300 z-50 
        ${isSidebarOpen ? 'w-64' : 'w-20'} hidden md:flex flex-col`}>
        
        <div className="p-6 flex items-center justify-between">
           {isSidebarOpen ? (
             <span className="font-black text-xl text-darae-charcoal dark:text-white">Darae<span className="text-darae-accent">Admin</span></span>
           ) : (
             <span className="font-black text-xl text-darae-accent mx-auto">D</span>
           )}
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg">
             {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
           </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium
                  ${isActive 
                    ? 'bg-darae-charcoal text-white dark:bg-darae-gold dark:text-black shadow-lg shadow-darae-accent/10' 
                    : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 dark:text-gray-400'}
                `}
              >
                <item.icon size={20} />
                {isSidebarOpen && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-white/5">
          <button 
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors font-medium ${!isSidebarOpen && 'justify-center'}`}
          >
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'} p-4 md:p-8 overflow-x-hidden`}>
         {children}
      </main>
    </div>
  )
}
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Plus, Pencil, Trash2, Search, Image as ImageIcon, Loader2 } from 'lucide-react'
import Image from 'next/image'
import ProjectFormModal from '@/components/admin/ProjectFormModal' // Import Modal tadi

export default function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  
  // State untuk Modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectToEdit, setProjectToEdit] = useState(null)

  // 1. Ambil data dari Supabase
  const fetchProjects = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('portfolios')
      .select('*')
      .order('id', { ascending: false })
    
    if (error) console.error('Error fetching:', error)
    else setProjects(data || [])
    
    setLoading(false)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  // 2. Handle Edit
  const handleEdit = (project: any) => {
    setProjectToEdit(project)
    setIsModalOpen(true)
  }

  // 3. Handle Tambah Baru
  const handleAdd = () => {
    setProjectToEdit(null) // Pastikan kosong
    setIsModalOpen(true)
  }

  // 4. Handle Delete
  const handleDelete = async (id: number) => {
    if(!confirm("Yakin ingin menghapus project ini? Data tidak bisa dikembalikan.")) return;

    const { error } = await supabase.from('portfolios').delete().eq('id', id)
    
    if (error) {
        alert("Gagal menghapus!")
    } else {
        fetchProjects() // Refresh data
    }
  }

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.client?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <ProjectFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchProjects} // Refresh data otomatis setelah simpan
        projectToEdit={projectToEdit}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-black text-darae-charcoal dark:text-white">Projects Manager</h1>
            <p className="text-gray-500 text-sm">Kelola portfolio website Anda di sini.</p>
        </div>
        
        <button 
            onClick={handleAdd}
            className="bg-darae-charcoal dark:bg-darae-gold text-white dark:text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg cursor-pointer"
        >
            <Plus size={20} />
            Tambah Project
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
            type="text" 
            placeholder="Cari project..." 
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-[#1f2327] border border-gray-200 dark:border-white/5 focus:ring-2 focus:ring-darae-accent outline-none text-darae-charcoal dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table Data */}
      <div className="bg-white dark:bg-[#1f2327] rounded-3xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-sm">
        {loading ? (
            <div className="p-12 flex justify-center text-gray-400">
                <Loader2 className="animate-spin w-8 h-8" />
            </div>
        ) : projects.length === 0 ? (
            <div className="p-12 text-center text-gray-400 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center">
                    <ImageIcon className="opacity-50" />
                </div>
                <p>Belum ada project.</p>
                <button onClick={handleAdd} className="text-darae-accent font-bold hover:underline">Tambah Sekarang</button>
            </div>
        ) : (
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-white/5 text-gray-500 text-xs uppercase tracking-wider">
                        <tr>
                            <th className="p-6">Image</th>
                            <th className="p-6">Title / Client</th>
                            <th className="p-6">Category</th>
                            <th className="p-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                        {filteredProjects.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="p-6">
                                    <div className="w-16 h-12 relative rounded-lg overflow-hidden bg-gray-200 dark:bg-white/10 border border-gray-200 dark:border-white/5">
                                        {item.image_url ? (
                                            <Image src={item.image_url} alt={item.title} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400"><ImageIcon size={16}/></div>
                                        )}
                                    </div>
                                </td>
                                <td className="p-6">
                                    <div className="font-bold text-darae-charcoal dark:text-white">{item.title}</div>
                                    <div className="text-xs text-gray-400">{item.client}</div>
                                </td>
                                <td className="p-6">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold 
                                        ${item.type === 'it' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300'}`}>
                                        {item.category}
                                    </span>
                                </td>
                                <td className="p-6 text-right space-x-2">
                                    <button 
                                        onClick={() => handleEdit(item)}
                                        className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <Pencil size={18} />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
      </div>
    </div>
  )
}
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Plus, Pencil, Trash2, HelpCircle, Loader2, ChevronDown, ChevronUp } from 'lucide-react'
import FaqFormModal from '@/components/admin/FaqFormModal'

export default function AdminFaq() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editData, setEditData] = useState(null)
  
  // State untuk accordion di admin (biar tidak terlalu panjang)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const fetchData = async () => {
    setLoading(true)
    const { data } = await supabase.from('faqs').select('*').order('id', { ascending: true })
    if (data) setItems(data)
    setLoading(false)
  }

  useEffect(() => { fetchData() }, [])

  const handleDelete = async (id: number) => {
    if(!confirm("Hapus pertanyaan ini?")) return;
    await supabase.from('faqs').delete().eq('id', id)
    fetchData()
  }

  return (
    <div className="space-y-6">
      <FaqFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={fetchData} dataToEdit={editData} />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-black text-darae-charcoal dark:text-white">FAQ Manager</h1>
            <p className="text-gray-500 text-sm">Kelola pertanyaan yang sering diajukan.</p>
        </div>
        <button onClick={() => { setEditData(null); setIsModalOpen(true) }} className="bg-darae-charcoal dark:bg-darae-gold text-white dark:text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
            <Plus size={20} /> Tambah FAQ
        </button>
      </div>

      {loading ? (
          <div className="p-12 flex justify-center"><Loader2 className="animate-spin" /></div>
      ) : (
          <div className="space-y-4">
              {items.map((item) => (
                  <div key={item.id} className="bg-white dark:bg-[#1f2327] rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden transition-all hover:border-darae-accent/50">
                      <div 
                        className="p-6 flex justify-between items-center cursor-pointer bg-gray-50/50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      >
                          <div className="flex items-center gap-4">
                              <HelpCircle className="text-darae-accent shrink-0" />
                              <h3 className="font-bold text-darae-charcoal dark:text-white text-lg">{item.question}</h3>
                          </div>
                          {expandedId === item.id ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                      </div>
                      
                      {/* Area Jawaban & Tombol Aksi */}
                      {expandedId === item.id && (
                          <div className="p-6 pt-0 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#1f2327]">
                              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                  {item.answer}
                              </p>
                              <div className="flex gap-3 justify-end">
                                  <button onClick={() => { setEditData(item); setIsModalOpen(true) }} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
                                      <Pencil size={16} /> Edit
                                  </button>
                                  <button onClick={() => handleDelete(item.id)} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors">
                                      <Trash2 size={16} /> Hapus
                                  </button>
                              </div>
                          </div>
                      )}
                  </div>
              ))}
          </div>
      )}
    </div>
  )
}
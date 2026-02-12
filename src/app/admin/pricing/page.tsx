'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Plus, Pencil, Trash2, Search, Star, Loader2 } from 'lucide-react'
import PricingFormModal from '@/components/admin/PricingFormModal'

export default function AdminPricing() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editData, setEditData] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('pricing')
      .select('*')
      .order('id', { ascending: true })
    
    if (data) setItems(data)
    setLoading(false)
  }

  useEffect(() => { fetchData() }, [])

  const handleDelete = async (id: number) => {
    if(!confirm("Hapus paket ini?")) return;
    await supabase.from('pricing').delete().eq('id', id)
    fetchData()
  }

  const handleEdit = (item: any) => {
    setEditData(item)
    setIsModalOpen(true)
  }

  const handleAdd = () => {
    setEditData(null)
    setIsModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <PricingFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={fetchData} dataToEdit={editData} />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-black text-darae-charcoal dark:text-white">Pricing Manager</h1>
            <p className="text-gray-500 text-sm">Atur paket harga layanan Anda.</p>
        </div>
        <button onClick={handleAdd} className="bg-darae-charcoal dark:bg-darae-gold text-white dark:text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
            <Plus size={20} /> Tambah Paket
        </button>
      </div>

      {loading ? (
          <div className="p-12 flex justify-center"><Loader2 className="animate-spin" /></div>
      ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                  <div key={item.id} className={`p-6 bg-white dark:bg-[#1f2327] rounded-3xl border transition-all ${item.is_recommended ? 'border-darae-accent shadow-lg shadow-darae-accent/10' : 'border-gray-200 dark:border-white/5'}`}>
                      <div className="flex justify-between items-start mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.category === 'IT Service' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'}`}>
                              {item.category}
                          </span>
                          <div className="flex gap-2">
                              <button onClick={() => handleEdit(item)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Pencil size={16} /></button>
                              <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                          </div>
                      </div>

                      <h3 className="text-xl font-bold text-darae-charcoal dark:text-white mb-2 flex items-center gap-2">
                          {item.title}
                          {item.is_recommended && <Star size={16} className="text-darae-accent fill-current" />}
                      </h3>
                      
                      <div className="flex items-baseline gap-1 mb-4">
                          <span className="text-3xl font-black text-darae-charcoal dark:text-white">{item.price}</span>
                          <span className="text-xs text-gray-400">{item.period}</span>
                      </div>

                      <ul className="space-y-2 mb-4 h-32 overflow-y-auto custom-scrollbar">
                          {item.features?.map((f: string, i: number) => (
                              <li key={i} className="text-xs text-gray-500 flex gap-2">
                                  <span className="text-darae-accent">•</span> {f}
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      )}
    </div>
  )
}
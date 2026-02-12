'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Plus, Pencil, Trash2, Quote, User, Loader2 } from 'lucide-react'
import TestimonialFormModal from '@/components/admin/TestimonialFormModal'
import Image from 'next/image'

export default function AdminTestimonials() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editData, setEditData] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    const { data } = await supabase.from('testimonials').select('*').order('id', { ascending: false })
    if (data) setItems(data)
    setLoading(false)
  }

  useEffect(() => { fetchData() }, [])

  const handleDelete = async (id: number) => {
    if(!confirm("Hapus testimoni ini?")) return;
    await supabase.from('testimonials').delete().eq('id', id)
    fetchData()
  }

  return (
    <div className="space-y-6">
      <TestimonialFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={fetchData} dataToEdit={editData} />

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-darae-charcoal dark:text-white">Testimonials</h1>
        <button onClick={() => { setEditData(null); setIsModalOpen(true) }} className="bg-darae-charcoal dark:bg-darae-gold text-white dark:text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            <Plus size={20} /> Tambah
        </button>
      </div>

      {loading ? (
          <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>
      ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                  <div key={item.id} className="bg-white dark:bg-[#1f2327] p-6 rounded-3xl border border-gray-200 dark:border-white/5 relative group">
                      <Quote className="absolute top-6 right-6 text-darae-accent/20 w-10 h-10" />
                      
                      <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 relative">
                              {item.image_url ? (
                                  <Image src={item.image_url} alt={item.name} fill className="object-cover" />
                              ) : (
                                  <div className="w-full h-full flex items-center justify-center text-gray-400"><User size={20}/></div>
                              )}
                          </div>
                          <div>
                              <h3 className="font-bold text-darae-charcoal dark:text-white">{item.name}</h3>
                              <p className="text-xs text-gray-500">{item.role}</p>
                          </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-4">"{item.quote}"</p>
                      
                      <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-white/5">
                          <button onClick={() => { setEditData(item); setIsModalOpen(true) }} className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100">Edit</button>
                          <button onClick={() => handleDelete(item.id)} className="flex-1 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100">Hapus</button>
                      </div>
                  </div>
              ))}
          </div>
      )}
    </div>
  )
}
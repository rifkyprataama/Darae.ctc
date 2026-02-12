'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { X, Save, Loader2, Check } from 'lucide-react'

type PricingFormProps = {
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
    dataToEdit?: any
}

export default function PricingFormModal({ isOpen, onClose, onSuccess, dataToEdit }: PricingFormProps) {
    const [loading, setLoading] = useState(false)
    
    const [formData, setFormData] = useState({
        title: '',
        category: 'IT Service',
        price: '',
        period: '/mulai dari',
        description: '',
        features: '', // Kita pakai string dulu biar mudah diedit di textarea
        is_recommended: false
    })

    useEffect(() => {
        if (dataToEdit) {
            setFormData({
                title: dataToEdit.title,
                category: dataToEdit.category,
                price: dataToEdit.price,
                period: dataToEdit.period || '/mulai dari',
                description: dataToEdit.description || '',
                features: dataToEdit.features ? dataToEdit.features.join('\n') : '', // Array -> String (per baris)
                is_recommended: dataToEdit.is_recommended || false
            })
        } else {
            setFormData({
                title: '', category: 'IT Service', price: '', period: '/mulai dari', 
                description: '', features: '', is_recommended: false
            })
        }
    }, [dataToEdit, isOpen])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Ubah string fitur menjadi array (pisahkan berdasarkan Enter)
            const featuresArray = formData.features.split('\n').filter(line => line.trim() !== '')

            const payload = {
                ...formData,
                features: featuresArray
            }

            if (dataToEdit) {
                const { error } = await supabase.from('pricing').update(payload).eq('id', dataToEdit.id)
                if (error) throw error
            } else {
                const { error } = await supabase.from('pricing').insert([payload])
                if (error) throw error
            }

            onSuccess()
            onClose()
        } catch (error: any) {
            alert('Gagal menyimpan: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#1f2327] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10">
                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-white/5">
                    <h2 className="text-xl font-bold text-darae-charcoal dark:text-white">
                        {dataToEdit ? 'Edit Paket' : 'Tambah Paket Baru'}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Nama Paket</label>
                            <input required type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-darae-accent" 
                                value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Standard Package" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Kategori</label>
                            <select className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none"
                                value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                                <option value="IT Service">IT Service</option>
                                <option value="Creative">Creative</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Harga (Rp)</label>
                            <input required type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-darae-accent" 
                                value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} placeholder="1,5jt" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Periode / Satuan</label>
                            <input type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none" 
                                value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})} placeholder="/mulai dari" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Deskripsi Singkat</label>
                        <textarea rows={2} className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none resize-none" 
                            value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Fitur (Satu baris per fitur)</label>
                        <textarea rows={5} className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none resize-none font-mono text-sm" 
                            value={formData.features} onChange={e => setFormData({...formData, features: e.target.value})} 
                            placeholder="- Gratis Domain&#10;- Hosting 1 Tahun&#10;- Desain Premium" />
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5 cursor-pointer" onClick={() => setFormData({...formData, is_recommended: !formData.is_recommended})}>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.is_recommended ? 'bg-darae-accent border-darae-accent' : 'border-gray-400'}`}>
                            {formData.is_recommended && <Check size={14} className="text-white" />}
                        </div>
                        <span className="text-sm font-bold text-darae-charcoal dark:text-white">Jadikan Paket "Recommended" (Best Value)</span>
                    </div>

                    <button disabled={loading} type="submit" className="w-full py-4 bg-darae-charcoal dark:bg-darae-gold text-white dark:text-black font-bold rounded-xl hover:scale-[1.01] transition-transform flex items-center justify-center gap-2">
                        {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> Simpan Paket</>}
                    </button>
                </form>
            </div>
        </div>
    )
}
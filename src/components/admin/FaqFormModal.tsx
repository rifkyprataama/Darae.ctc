'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { X, Save, Loader2, HelpCircle } from 'lucide-react'

type FaqFormProps = {
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
    dataToEdit?: any
}

export default function FaqFormModal({ isOpen, onClose, onSuccess, dataToEdit }: FaqFormProps) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        question: '',
        answer: ''
    })

    useEffect(() => {
        if (dataToEdit) {
            setFormData({
                question: dataToEdit.question,
                answer: dataToEdit.answer
            })
        } else {
            setFormData({ question: '', answer: '' })
        }
    }, [dataToEdit, isOpen])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (dataToEdit) {
                await supabase.from('faqs').update(formData).eq('id', dataToEdit.id)
            } else {
                await supabase.from('faqs').insert([formData])
            }
            onSuccess()
            onClose()
        } catch (error: any) {
            alert('Error: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#1f2327] w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-white/5">
                    <h2 className="text-xl font-bold text-darae-charcoal dark:text-white flex items-center gap-2">
                        <HelpCircle className="text-darae-accent" />
                        {dataToEdit ? 'Edit Pertanyaan' : 'Tambah Pertanyaan'}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Pertanyaan (Question)</label>
                        <input required type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-darae-accent" 
                            value={formData.question} onChange={e => setFormData({...formData, question: e.target.value})} placeholder="Contoh: Berapa harganya?" />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Jawaban (Answer)</label>
                        <textarea required rows={5} className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none resize-none focus:ring-2 focus:ring-darae-accent" 
                            value={formData.answer} onChange={e => setFormData({...formData, answer: e.target.value})} placeholder="Jelaskan jawabannya di sini..." />
                    </div>

                    <button disabled={loading} type="submit" className="w-full py-3 bg-darae-charcoal dark:bg-darae-gold text-white dark:text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                        {loading ? <Loader2 className="animate-spin" /> : <><Save size={18} /> Simpan FAQ</>}
                    </button>
                </form>
            </div>
        </div>
    )
}
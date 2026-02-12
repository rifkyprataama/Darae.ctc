'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { X, Upload, Loader2, Save, User } from 'lucide-react'
import Image from 'next/image'

type TestiFormProps = {
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
    dataToEdit?: any
}

export default function TestimonialFormModal({ isOpen, onClose, onSuccess, dataToEdit }: TestiFormProps) {
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string>('')
    
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        quote: ''
    })

    useEffect(() => {
        if (dataToEdit) {
            setFormData({
                name: dataToEdit.name,
                role: dataToEdit.role || '',
                quote: dataToEdit.quote
            })
            setPreviewUrl(dataToEdit.image_url || '')
        } else {
            setFormData({ name: '', role: '', quote: '' })
            setPreviewUrl('')
            setImageFile(null)
        }
    }, [dataToEdit, isOpen])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return
        const file = e.target.files[0]
        setImageFile(file)
        setPreviewUrl(URL.createObjectURL(file))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            let finalImageUrl = previewUrl

            // Upload Gambar jika ada file baru
            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop()
                const fileName = `testi-${Date.now()}.${fileExt}`
                const { error: uploadError } = await supabase.storage
                    .from('images') // Pastikan bucket images ada
                    .upload(`testimonials/${fileName}`, imageFile)

                if (uploadError) throw uploadError
                
                const { data } = supabase.storage
                    .from('images')
                    .getPublicUrl(`testimonials/${fileName}`)
                
                finalImageUrl = data.publicUrl
            }

            const payload = {
                name: formData.name,
                role: formData.role,
                quote: formData.quote,
                image_url: finalImageUrl
            }

            if (dataToEdit) {
                await supabase.from('testimonials').update(payload).eq('id', dataToEdit.id)
            } else {
                await supabase.from('testimonials').insert([payload])
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
            <div className="bg-white dark:bg-[#1f2327] w-full max-w-md rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-white/5">
                    <h2 className="text-xl font-bold text-darae-charcoal dark:text-white">
                        {dataToEdit ? 'Edit Testimoni' : 'Tambah Testimoni'}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Foto Profil */}
                    <div className="flex justify-center mb-4">
                        <label className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-dashed border-gray-300 dark:border-white/20 hover:border-darae-accent cursor-pointer group">
                            {previewUrl ? (
                                <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-white/5 text-gray-400">
                                    <User size={32} />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Upload size={20} className="text-white" />
                            </div>
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                        </label>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Nama Klien</label>
                        <input required type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none" 
                            value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Jabatan / Perusahaan</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none" 
                            value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Isi Review</label>
                        <textarea required rows={3} className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none resize-none" 
                            value={formData.quote} onChange={e => setFormData({...formData, quote: e.target.value})} />
                    </div>

                    <button disabled={loading} type="submit" className="w-full py-3 bg-darae-charcoal dark:bg-darae-gold text-white dark:text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90">
                        {loading ? <Loader2 className="animate-spin" /> : <><Save size={18} /> Simpan</>}
                    </button>
                </form>
            </div>
        </div>
    )
}
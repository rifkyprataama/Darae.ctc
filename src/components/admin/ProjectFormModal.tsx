'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { X, Upload, Loader2, Save } from 'lucide-react'
import Image from 'next/image'

type ProjectFormProps = {
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
    projectToEdit?: any // Jika ada isinya, berarti mode EDIT
}

export default function ProjectFormModal({ isOpen, onClose, onSuccess, projectToEdit }: ProjectFormProps) {
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string>('')
    
    // State Form Data
    const [formData, setFormData] = useState({
        title: '',
        client: '',
        type: 'it', // Default 'it' or 'creative'
        category: '',
        desc_short: '',
        year: new Date().getFullYear().toString(),
        technologies: '', // Input string, nanti di-split jadi array
        repo_url: '',
        demo_url: ''
    })

    // Efek saat modal dibuka (Reset atau Isi Data Edit)
    useEffect(() => {
        if (projectToEdit) {
            setFormData({
                title: projectToEdit.title,
                client: projectToEdit.client || '',
                type: projectToEdit.type,
                category: projectToEdit.category,
                desc_short: projectToEdit.desc_short || '',
                year: projectToEdit.year || '',
                technologies: projectToEdit.technologies ? projectToEdit.technologies.join(', ') : '',
                repo_url: projectToEdit.repo_url || '',
                demo_url: projectToEdit.demo_url || ''
            })
            setPreviewUrl(projectToEdit.image_url || '')
        } else {
            // Reset form untuk project baru
            setFormData({
                title: '', client: '', type: 'it', category: '', desc_short: '',
                year: new Date().getFullYear().toString(), technologies: '', repo_url: '', demo_url: ''
            })
            setPreviewUrl('')
            setImageFile(null)
        }
    }, [projectToEdit, isOpen])

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

            // 1. UPLOAD GAMBAR (Jika ada file baru dipilih)
            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop()
                const fileName = `${Date.now()}.${fileExt}`
                const { error: uploadError, data } = await supabase.storage
                    .from('images') // Pastikan bucket 'images' sudah ada
                    .upload(`portfolio/${fileName}`, imageFile)

                if (uploadError) throw uploadError
                
                // Dapatkan Public URL
                const { data: { publicUrl } } = supabase.storage
                    .from('images')
                    .getPublicUrl(`portfolio/${fileName}`)
                
                finalImageUrl = publicUrl
            }

            // 2. SIAPKAN DATA
            const dataToSave = {
                title: formData.title,
                client: formData.client,
                type: formData.type,
                category: formData.category,
                desc_short: formData.desc_short,
                year: formData.year,
                technologies: formData.technologies.split(',').map(t => t.trim()).filter(t => t !== ''),
                repo_url: formData.repo_url,
                demo_url: formData.demo_url,
                image_url: finalImageUrl
            }

            // 3. SIMPAN KE DATABASE
            if (projectToEdit) {
                // Mode UPDATE
                const { error } = await supabase
                    .from('portfolios')
                    .update(dataToSave)
                    .eq('id', projectToEdit.id)
                if (error) throw error
            } else {
                // Mode INSERT
                const { error } = await supabase
                    .from('portfolios')
                    .insert([dataToSave])
                if (error) throw error
            }

            onSuccess() // Refresh halaman parent
            onClose() // Tutup modal
            
        } catch (error: any) {
            alert('Error: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#1f2327] w-full max-w-2xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-white/10">
                
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1f2327] z-10">
                    <h2 className="text-xl font-bold text-darae-charcoal dark:text-white">
                        {projectToEdit ? 'Edit Project' : 'Tambah Project Baru'}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    
                    {/* Image Upload Area */}
                    <div className="flex flex-col items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 dark:bg-black/20 border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 relative overflow-hidden group">
                            {previewUrl ? (
                                <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                            ) : (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400">
                                    <Upload className="w-10 h-10 mb-3" />
                                    <p className="text-sm">Klik untuk upload gambar (Max 2MB)</p>
                                </div>
                            )}
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                            
                            {/* Overlay ganti gambar */}
                            {previewUrl && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white font-bold">Ganti Gambar</p>
                                </div>
                            )}
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Judul Project</label>
                            <input required type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-darae-accent outline-none" 
                                value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Nama Aplikasi/Project" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Nama Klien</label>
                            <input type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-darae-accent outline-none" 
                                value={formData.client} onChange={e => setFormData({...formData, client: e.target.value})} placeholder="Nama Klien / Instansi" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Tipe Layanan</label>
                            <select className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none"
                                value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                                <option value="it">IT Service</option>
                                <option value="creative">Creative</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Kategori</label>
                            <input required type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none" 
                                value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} placeholder="Contoh: Web App" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Tahun</label>
                            <input type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none" 
                                value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Deskripsi Singkat</label>
                        <textarea required rows={3} className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none resize-none" 
                            value={formData.desc_short} onChange={e => setFormData({...formData, desc_short: e.target.value})} placeholder="Jelaskan project ini dalam 1-2 kalimat..." />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Teknologi (Pisahkan dengan koma)</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none" 
                            value={formData.technologies} onChange={e => setFormData({...formData, technologies: e.target.value})} placeholder="React, Next.js, Tailwind, Supabase" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Repo URL (GitHub)</label>
                            <input type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none" 
                                value={formData.repo_url} onChange={e => setFormData({...formData, repo_url: e.target.value})} placeholder="https://github.com/..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Demo URL (Live Website)</label>
                            <input type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none" 
                                value={formData.demo_url} onChange={e => setFormData({...formData, demo_url: e.target.value})} placeholder="https://..." />
                        </div>
                    </div>

                    <button disabled={loading} type="submit" className="w-full py-4 bg-darae-charcoal dark:bg-darae-gold text-white dark:text-black font-bold rounded-xl hover:scale-[1.01] transition-transform flex items-center justify-center gap-2">
                        {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> Simpan Project</>}
                    </button>
                </form>
            </div>
        </div>
    )
}
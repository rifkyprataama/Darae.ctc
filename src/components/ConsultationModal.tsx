'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ModalProps) {
    // State untuk menyimpan input user
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Logika Buka WhatsApp
    const handleWhatsApp = () => {
        // Format pesan: Halo, nama saya [Nama]. Saya tertarik konsultasi. [Pesan]
        const text = `Halo Darae, nama saya ${name || 'Calon Klien'}. Saya tertarik untuk konsultasi proyek digital. ${message}`;
        const url = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`; // GANTI NO WA DISINI
        window.open(url, '_blank');
    };

    // Logika Kirim Email
    const handleEmail = () => {
        const subject = `Konsultasi Proyek - ${name}`;
        const body = `Halo Tim Darae,\n\nNama saya: ${name}\nNomor WA: ${phone}\n\nPesan:\n${message || 'Saya ingin diskusi mengenai proyek website/aplikasi.'}`;
        window.location.href = `mailto:hello@darae.ctc?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <AnimatePresence>
        {isOpen && (
            // 1. BACKDROP (Latar Gelap Blur)
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
            
            {/* 2. MODAL CONTAINER */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()} // Agar klik di dalam modal tidak menutup modal
                className="w-full max-w-md bg-white dark:bg-[#1f2327] rounded-[2rem] shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
            >
                
                {/* HEADER */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-white/5">
                    <div>
                        <h3 className="text-xl font-bold text-darae-charcoal dark:text-white">Konsultasi Gratis</h3>
                        <p className="text-xs text-darae-charcoal/60 dark:text-gray-400 mt-1">Ceritakan ide Anda, kami siap wujudkan.</p>
                    </div>
                    {/* Tombol Close (X) */}
                    <button onClick={onClose} className="p-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-full transition-colors text-darae-charcoal dark:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* BODY FORM */}
                <div className="p-6 space-y-4">
                    
                    {/* Input Nama */}
                    <div>
                        <label className="block text-sm font-bold text-darae-charcoal/80 dark:text-gray-300 mb-1.5 ml-1">Nama Lengkap</label>
                        <input 
                            type="text" 
                            placeholder="Masukkan nama Anda"
                            className="w-full px-4 py-3 rounded-xl 
                                bg-gray-50 dark:bg-white/5 
                                border border-gray-200 dark:border-white/10 
                                focus:outline-none focus:ring-2 focus:ring-darae-accent dark:focus:ring-darae-gold 
                                text-sm text-darae-charcoal dark:text-white transition-all placeholder:text-gray-400"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Input Kontak */}
                    <div>
                        <label className="block text-sm font-bold text-darae-charcoal/80 dark:text-gray-300 mb-1.5 ml-1">Nomor WhatsApp / Email</label>
                        <input 
                            type="text" 
                            placeholder="Contoh: 0812..."
                            className="w-full px-4 py-3 rounded-xl 
                                bg-gray-50 dark:bg-white/5 
                                border border-gray-200 dark:border-white/10 
                                focus:outline-none focus:ring-2 focus:ring-darae-accent dark:focus:ring-darae-gold 
                                text-sm text-darae-charcoal dark:text-white transition-all placeholder:text-gray-400"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    {/* Input Pesan (Opsional) */}
                    <div>
                        <label className="block text-sm font-bold text-darae-charcoal/80 dark:text-gray-300 mb-1.5 ml-1">Topik Diskusi (Opsional)</label>
                        <textarea 
                            rows={2}
                            placeholder="Ingin buat website toko online..."
                            className="w-full px-4 py-3 rounded-xl 
                                bg-gray-50 dark:bg-white/5 
                                border border-gray-200 dark:border-white/10 
                                focus:outline-none focus:ring-2 focus:ring-darae-accent dark:focus:ring-darae-gold 
                                text-sm text-darae-charcoal dark:text-white transition-all resize-none placeholder:text-gray-400"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                </div>

                {/* FOOTER ACTIONS */}
                <div className="p-6 pt-0 flex flex-col gap-3">
                    
                    {/* Tombol Utama: WhatsApp (Hijau tapi elegan) */}
                    <button 
                        onClick={handleWhatsApp}
                        className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-green-500/20"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.231-.298.33-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Chat via WhatsApp
                    </button>

                    {/* Tombol Sekunder: Email */}
                    <button 
                        onClick={handleEmail}
                        className="w-full py-3.5 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-darae-charcoal dark:text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        Kirim Email Saja
                    </button>

                </div>

            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    )
}
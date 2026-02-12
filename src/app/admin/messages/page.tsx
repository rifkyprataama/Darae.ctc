'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Trash2, Mail, Phone, Clock, Loader2, MessageSquare } from 'lucide-react'

export default function AdminMessages() {
  const [messages, setMessages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchMessages = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false }) // Pesan baru paling atas
    
    if (data) setMessages(data)
    setLoading(false)
  }

  useEffect(() => { fetchMessages() }, [])

  const handleDelete = async (id: number) => {
    if(!confirm("Hapus pesan ini?")) return;
    await supabase.from('messages').delete().eq('id', id)
    fetchMessages()
  }

  // Fungsi format tanggal (Contoh: 12 Feb 2026, 14:30)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(date)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-black text-darae-charcoal dark:text-white">Inbox Messages</h1>
            <p className="text-gray-500 text-sm">Pesan masuk dari form kontak website.</p>
        </div>
        <div className="bg-white dark:bg-white/10 px-4 py-2 rounded-lg font-bold text-darae-charcoal dark:text-white text-sm border border-gray-200 dark:border-white/5">
            Total: {messages.length} Pesan
        </div>
      </div>

      {loading ? (
          <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-gray-400" /></div>
      ) : messages.length === 0 ? (
          <div className="p-20 flex flex-col items-center justify-center text-gray-400 bg-white dark:bg-[#1f2327] rounded-3xl border border-gray-200 dark:border-white/5">
              <Mail className="w-16 h-16 mb-4 opacity-20" />
              <p>Kotak masuk masih kosong.</p>
          </div>
      ) : (
          <div className="grid grid-cols-1 gap-4">
              {messages.map((msg) => (
                  <div key={msg.id} className="bg-white dark:bg-[#1f2327] p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-darae-accent/50 transition-colors shadow-sm group">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                          <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-darae-accent/10 flex items-center justify-center text-darae-accent font-bold uppercase">
                                  {msg.name.charAt(0)}
                              </div>
                              <div>
                                  <h3 className="font-bold text-darae-charcoal dark:text-white text-lg">{msg.name}</h3>
                                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-1">
                                      <a href={`mailto:${msg.email}`} className="flex items-center gap-1 hover:text-darae-accent hover:underline">
                                          <Mail size={14} /> {msg.email}
                                      </a>
                                      {msg.phone && (
                                          <a href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}`} target="_blank" className="flex items-center gap-1 hover:text-green-500 hover:underline">
                                              <Phone size={14} /> {msg.phone}
                                          </a>
                                      )}
                                      <span className="flex items-center gap-1 text-xs bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded">
                                          <Clock size={12} /> {formatDate(msg.created_at)}
                                      </span>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="flex gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                              <a href={`https://wa.me/${msg.phone?.replace(/[^0-9]/g, '')}?text=Halo ${msg.name}, terimakasih telah menghubungi Darae Creative...`} target="_blank" 
                                 className="px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600 flex items-center gap-2">
                                  <MessageSquare size={14} /> Reply WA
                              </a>
                              <button onClick={() => handleDelete(msg.id)} className="p-2 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg transition-colors">
                                  <Trash2 size={18} />
                              </button>
                          </div>
                      </div>

                      <div className="p-4 bg-gray-50 dark:bg-black/20 rounded-xl text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                          {msg.message}
                      </div>
                  </div>
              ))}
          </div>
      )}
    </div>
  )
}
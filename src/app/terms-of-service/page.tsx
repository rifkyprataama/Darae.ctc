// FILE: src/app/terms-of-service/page.tsx
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-transparent text-darae-charcoal dark:text-white py-24 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto pt-10">
        
        {/* Tombol Kembali */}
        <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-darae-accent mb-12 hover:underline transition-all hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>

        {/* Judul */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-darae-charcoal dark:text-white">
            Terms of Service
        </h1>
        <p className="text-darae-charcoal/60 dark:text-gray-400 mb-16 text-lg border-b border-gray-200 dark:border-white/10 pb-8">
            Berlaku efektif mulai: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Konten Syarat & Ketentuan */}
        <div className="space-y-12 text-lg leading-relaxed text-darae-charcoal/90 dark:text-gray-300">
            
            <section>
                <h3 className="text-2xl font-bold mb-4 text-darae-charcoal dark:text-white">1. Persetujuan Layanan</h3>
                <p>
                    Dengan mengakses website Darae Creative atau menggunakan layanan kami, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. 
                    Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak diperkenankan menggunakan layanan kami.
                </p>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4 text-darae-charcoal dark:text-white">2. Lingkup Layanan</h3>
                <p>
                    Darae Creative menyediakan jasa pengembangan software, desain grafis, dan konsultasi digital. 
                    Cakupan pekerjaan detail, tenggat waktu, dan biaya akan dituangkan dalam dokumen kontrak atau penawaran (Invoice/Agreement) terpisah untuk setiap project.
                </p>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4 text-darae-charcoal dark:text-white">3. Pembayaran & Pengembalian Dana</h3>
                <ul className="list-disc pl-6 space-y-2 marker:text-darae-accent">
                    <li>Sistem pembayaran dilakukan sesuai termin yang disepakati (contoh: DP 50% di awal, pelunasan saat serah terima).</li>
                    <li>Keterlambatan pembayaran dapat menyebabkan penghentian sementara layanan atau penundaan serah terima hasil kerja.</li>
                    <li>Pengembalian dana (refund) tidak berlaku jika pengerjaan sudah dimulai, kecuali ada pembatalan sepihak dari kami karena alasan teknis.</li>
                </ul>
            </section>

             <section>
                <h3 className="text-2xl font-bold mb-4 text-darae-charcoal dark:text-white">4. Hak Kekayaan Intelektual</h3>
                <p>
                    Hasil akhir project (Source Code/Desain Final) akan menjadi hak milik klien sepenuhnya <strong>setelah pembayaran lunas</strong>. 
                    Namun, Darae berhak menampilkan karya tersebut dalam portofolio kami sebagai studi kasus, kecuali ada perjanjian kerahasiaan (NDA) yang disepakati sebelumnya.
                </p>
            </section>
        </div>

        {/* Footer Kecil */}
        <div className="mt-24 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-sm text-darae-charcoal/50 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Darae Creative. All rights reserved.
        </div>

      </div>
    </main>
  )
}
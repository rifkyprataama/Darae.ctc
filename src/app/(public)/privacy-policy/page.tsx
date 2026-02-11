import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-transparent text-darae-charcoal dark:text-white py-24 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto pt-10">
        
        {/* Tombol Kembali ke Home */}
        <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-darae-accent mb-12 hover:underline transition-all hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>

        {/* Judul Halaman */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-darae-charcoal dark:text-white">
            Privacy Policy
        </h1>
        <p className="text-darae-charcoal/60 dark:text-gray-400 mb-16 text-lg border-b border-gray-200 dark:border-white/10 pb-8">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Konten Kebijakan */}
        <div className="space-y-12 text-lg leading-relaxed text-darae-charcoal/90 dark:text-gray-300">
            
            <section>
                <h3 className="text-2xl font-bold mb-4 text-darae-charcoal dark:text-white">1. Pendahuluan</h3>
                <p>
                    Selamat datang di Darae Creative. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda bagikan kepada kami. 
                    Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda mengunjungi website atau menggunakan layanan kami.
                </p>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4 text-darae-charcoal dark:text-white">2. Informasi yang Kami Kumpulkan</h3>
                <p className="mb-4">
                    Kami dapat mengumpulkan beberapa jenis informasi untuk memberikan layanan terbaik, antara lain:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-darae-accent">
                    <li><strong>Informasi Identitas:</strong> Nama lengkap, alamat email, dan nomor WhatsApp yang Anda berikan melalui formulir kontak.</li>
                    <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, dan data analitik penggunaan website (melalui Cookies) untuk keperluan peningkatan performa situs.</li>
                    <li><strong>Detail Project:</strong> Informasi spesifik mengenai kebutuhan bisnis atau ide aplikasi yang Anda diskusikan dengan kami.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4 text-darae-charcoal dark:text-white">3. Bagaimana Kami Menggunakan Data Anda</h3>
                <p className="mb-4">Data yang kami kumpulkan digunakan semata-mata untuk:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-darae-accent">
                    <li>Menghubungi Anda kembali untuk konsultasi project atau penawaran harga.</li>
                    <li>Memproses transaksi dan administrasi layanan (Invoice/Kontrak).</li>
                    <li>Meningkatkan pengalaman pengguna di website kami.</li>
                    <li>Kami <strong>TIDAK AKAN PERNAH</strong> menjual data Anda kepada pihak ketiga manapun.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4 text-darae-charcoal dark:text-white">4. Keamanan Data</h3>
                <p>
                    Kami menerapkan langkah-langkah keamanan teknis yang sesuai untuk melindungi data Anda dari akses yang tidak sah, perubahan, atau kebocoran. 
                    Namun, harap diingat bahwa tidak ada metode transmisi melalui internet yang 100% aman.
                </p>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4 text-darae-charcoal dark:text-white">5. Kontak Kami</h3>
                <p>
                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui email di <a href="mailto:daraectc@gmail.com" className="text-darae-accent hover:underline font-bold">daraectc@gmail.com</a>.
                </p>
            </section>

        </div>

        {/* Footer Kecil Halaman */}
        <div className="mt-24 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-sm text-darae-charcoal/50 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Darae Creative. All rights reserved.
        </div>

      </div>
    </main>
  )
}
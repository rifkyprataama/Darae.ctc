'use client'

const services = [
  {
    title: "Web Development",
    price: "Mulai Rp 1.5jt",
    description: "Website landing page responsif, cepat, dan SEO friendly untuk bisnis Anda.",
    features: ["Domain & Hosting Gratis 1 Thn", "Desain Premium", "Revisi Minor 3x", "Koneksi WhatsApp"],
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Social Media Design",
    price: "Mulai Rp 500rb",
    description: "Paket konten visual untuk Instagram/TikTok agar brand terlihat profesional.",
    features: ["5-10 Feed/Story Design", "Source File (Canva/Ps)", "Riset Hashtag", "Revisi Sepuasnya"],
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Video Editing",
    price: "Mulai Rp 300rb",
    description: "Edit video pendek (Reels/TikTok) atau panjang (YouTube) dengan gaya sinematik.",
    features: ["Color Grading", "Sound Design", "Subtitle/Caption", "Transisi Smooth"],
    color: "from-pink-400 to-red-500"
  }
]

export default function Services() {
  return (
    // Hapus bg-black. Ubah border jadi abu halus.
    <section id="services" className="py-20 px-4 border-t border-gray-200 dark:border-white/5 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
            Pilihan Paket <span className="text-purple-500">.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Transparan dan fleksibel. Pilih layanan yang sesuai dengan kebutuhan bisnis Anda saat ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            // Card: Light (Putih, Border Abu, Shadow) | Dark (Transparan, Border Putih tipis)
            <div key={index} className="relative group p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition duration-300 flex flex-col">
              
              {/* Efek Glow (Hanya muncul di Dark Mode atau saat hover) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-3xl transition duration-500`}></div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">{item.title}</h3>
              <div className={`text-xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                {item.price}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed transition-colors">
                {item.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300 transition-colors">
                    <span className="mr-2 text-green-500 dark:text-green-400">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="w-full py-3 rounded-xl border border-gray-300 text-gray-900 hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black transition text-center font-medium">
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
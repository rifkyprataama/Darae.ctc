'use client'
import Magnetic from "./ui/Magnetic"; // Import Magnetic

// ... (Bagian const services biarkan sama) ...

const services = [
  // ... data services Anda ...
  {
    title: "Web Development",
    price: "Mulai Rp 1.5jt",
    description: "Website landing page responsif, cepat, dan SEO friendly.",
    features: ["Domain & Hosting Gratis", "Desain Premium", "Revisi Minor 3x", "Koneksi WhatsApp"],
    color: "bg-blue-100 text-blue-600" 
  },
  {
    title: "Social Media Design",
    price: "Mulai Rp 500rb",
    description: "Konten visual Instagram/TikTok agar brand terlihat profesional.",
    features: ["5-10 Feed/Story", "Source File", "Riset Hashtag", "Revisi Sepuasnya"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Video Editing",
    price: "Mulai Rp 300rb",
    description: "Edit video pendek (Reels) atau panjang dengan gaya sinematik.",
    features: ["Color Grading", "Sound Design", "Subtitle/Caption", "Transisi Smooth"],
    color: "bg-pink-100 text-pink-600"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-darae-charcoal dark:text-white">
            Pilihan Paket <span className="text-darae-accent">.</span>
          </h2>
          <p className="text-darae-grey dark:text-gray-300 max-w-2xl mx-auto">
            Transparan dan fleksibel. Pilih layanan yang sesuai kebutuhan bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="p-10 rounded-[2.5rem] bg-white border border-darae-grey/10 shadow-xl shadow-darae-grey/5 dark:bg-white/5 dark:border-white/10 hover:-translate-y-2 transition duration-300 flex flex-col">
              
              <h3 className="text-2xl font-bold mb-2 text-darae-charcoal dark:text-white">{item.title}</h3>
              <div className="text-xl font-bold text-darae-accent mb-6">
                {item.price}
              </div>
              <p className="text-darae-grey dark:text-gray-400 text-sm mb-8 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-darae-charcoal dark:text-gray-200">
                    <span className="w-6 h-6 rounded-full bg-darae-accent/10 text-darae-accent flex items-center justify-center mr-3 text-xs">✓</span> 
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUNGKUS TOMBOL DENGAN MAGNETIC */}
              <Magnetic>
                  <a href="#contact" className="w-full inline-block py-4 rounded-[2rem] bg-darae-light border border-darae-grey/20 text-darae-charcoal font-bold hover:bg-darae-accent hover:text-white hover:border-darae-accent transition text-center dark:bg-white/10 dark:text-white dark:hover:bg-darae-accent">
                    Pilih Paket
                  </a>
              </Magnetic>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
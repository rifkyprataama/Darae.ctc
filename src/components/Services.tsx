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
        <section id="services" className="py-20 px-4 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Pilihan Paket <span className="text-purple-500">.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Transparan dan fleksibel. Pilih layanan yang sesuai dengan kebutuhan bisnis Anda saat ini.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, index) => (
                <div key={index} className="relative group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 flex flex-col">
                {/* Efek Glow saat Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition duration-500`}></div>
                
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className={`text-xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                    {item.price}
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    {item.description}
                </p>

                {/* List Fitur */}
                <ul className="space-y-3 mb-8 flex-1">
                    {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="mr-2 text-green-400">✓</span> {feature}
                    </li>
                    ))}
                </ul>

                <a href="#contact" className="w-full py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition text-center font-medium">
                    Pilih Paket
                </a>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}
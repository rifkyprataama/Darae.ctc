import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center backdrop-blur-md z-50 border-b border-white/10">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Darae.ctc
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
            <Link href="#services" className="hover:text-white transition">Layanan</Link>
            <Link href="#portfolio" className="hover:text-white transition">Portfolio</Link>
            <Link href="#contact" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Kontak Kami
            </Link>
        </div>
        </nav>
    );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; 
import Navbar from "@/components/Navbar"; 
import StickyCursor from "@/components/ui/StickyCursor";
import FloatingContact from "@/components/FloatingContact";
import Snowfall from "@/components/ui/Snowfall";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

// --- BAGIAN INI YANG DIPERBAHARUI UNTUK SEO ---
export const metadata: Metadata = {
  // PENTING: Menggunakan domain asli agar gambar muncul saat link disebar di WA/IG
  metadataBase: new URL('https://daraectc.com'), 
  
  title: {
    default: 'Darae Creative | Jasa IT & Digital Creative',
    template: '%s | Darae Creative' // Nanti halaman lain jadi "About | Darae Creative"
  },
  
  description: 'Mitra digital terpercaya untuk transformasi bisnis Anda. Spesialis Web Development, Aplikasi Android, dan Digital Creative. Konsultasi Gratis!',
  
  // Kata kunci agar orang mudah menemukan Anda di Google
  keywords: [
    'Jasa Pembuatan Website', 
    'Web Developer Indonesia', 
    'Jasa Aplikasi Android', 
    'Jasa Design UI/UX',
    'jasa Graphic Design',
    'Jasa Digital Creative',
    'Software House',
    'IT Consultant', 
    'Rifky Pratama', 
    'Darae Creative'
  ],

  // Branding Personal
  authors: [{ name: 'Rifky Pratama', url: 'https://daraectc.com' }],
  creator: 'Rifky Pratama',

  // Tampilan saat link dibagikan (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'Darae Creative | Jasa IT & Digital Creative, Solusi Digital Bisnis Anda.',
    description: 'Kami membantu mengubah ide bisnis menjadi produk digital berkelas (Website & Mobile App) & Desain Grafis.',
    url: 'https://daraectc.com',
    siteName: 'Darae Creative',
    images: [
      {
        url: '/og-image.jpeg', // Pastikan file og-image.jpeg ada di folder public
        width: 1200,
        height: 630,
        alt: 'Darae Creative',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  // Instruksi untuk Robot Google (Agar di-indeks)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.png',
    apple: '/icon.png',
  }
};

// --- BAGIAN INI TETAP SAMA SEPERTI KODE ANDA SEBELUMNYA ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        
        <Providers>
            <div className="min-h-screen w-full bg-mesh-light dark:bg-mesh-dark text-darae-charcoal dark:text-white transition-colors duration-500 relative">
                <Snowfall />
                <StickyCursor />
                <SmoothScroll>
                    <Navbar />
                    {children}
                    <FloatingContact />
                </SmoothScroll>
            </div>
        </Providers>
      </body>
    </html>
  );
}
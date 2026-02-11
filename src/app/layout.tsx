import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // PENTING: Menggunakan domain asli
  metadataBase: new URL('https://daraectc.com'), 
  
  title: {
    default: 'Darae Creative | Jasa IT & Digital Creative',
    template: '%s | Darae Creative'
  },
  
  description: 'Mitra digital terpercaya untuk transformasi bisnis Anda. Spesialis Web Development, Aplikasi Android, dan Digital Creative.',
  
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.png',
    apple: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
            {/* Perhatikan: Di sini TIDAK ADA Navbar, Footer, atau Salju.
              Layout ini "netral". Halaman User akan dapat hiasan dari (public)/layout.tsx
              Halaman Admin akan tetap bersih.
            */}
            {children}
        </Providers>
      </body>
    </html>
  );
}
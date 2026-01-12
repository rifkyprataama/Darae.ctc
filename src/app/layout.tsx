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

export const metadata: Metadata = {
  // Saat develop, ini akan menggunakan localhost. Nanti bisa diganti domain asli.
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: "Darae | Jasa IT & Digital Creative",
  description: "Solusi digital all-in-one: Pembuatan Website, Aplikasi Mobile, Video Editing, dan Desain Grafis.",
  openGraph: {
    title: "Darae | Transformasi Digital Bisnis Anda",
    description: "Jasa pembuatan Website, Aplikasi, & Branding terpercaya.",
    url: 'https://darae.id', 
    siteName: 'Darae Creative',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Darae Creative Banner',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
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
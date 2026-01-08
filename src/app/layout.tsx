import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // <--- Panggil file yang baru kita rapikan
import Navbar from "@/components/Navbar"; 
import StickyCursor from "@/components/ui/StickyCursor";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darae | Jasa IT & Digital Creative",
  description: "Solusi digital all-in-one: Pembuatan Website, Aplikasi Mobile, Video Editing, dan Desain Grafis.",
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
      <html lang="en" suppressHydrationWarning>
        <body 
          className={`${inter.className} 
            bg-darae-light text-darae-charcoal 
            dark:bg-darae-dark dark:text-darae-light`}
        >
          {/* PANGGIL PROVIDERS DISINI (Isinya Theme + Cursor) */}
          <Providers>
              
              <StickyCursor />
              <Navbar />
              {children}
              <FloatingContact />
              
          </Providers>
        </body>
      </html>
    );
}
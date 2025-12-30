import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darae.ctc | Jasa Web & Desain Grafis Profesional",
  description: "Solusi digital all-in-one: Pembuatan Website, Aplikasi Mobile, Video Editing, dan Branding Identity. Konsultasi Gratis sekarang.",
  icons: {
    icon: '/favicon.ico', // Kita akan siapkan ini di langkah B
  }
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
}
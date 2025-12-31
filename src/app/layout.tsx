import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-white text-gray-900 dark:bg-black dark:text-white`}>
          {/* 2. BUNGKUS CHILDREN DENGAN THEME PROVIDER */}
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
        </body>
      </html>
    );
}
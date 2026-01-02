import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import StickyCursor from "@/components/ui/StickyCursor";
import FloatingContact from "@/components/FloatingContact";
import { CursorProvider } from "@/context/CursorContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darae.ctc | Jasa Web & Desain Grafis Profesional",
  description: "Solusi digital all-in-one: Pembuatan Website, Aplikasi Mobile, Video Editing, dan Branding Identity. Konsultasi Gratis sekarang.",
  icons: {
    icon: '/favicon.ico', 
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
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/* Context Provider untuk Kursor */}
              <CursorProvider>
                  
                  <StickyCursor />
                  
                  {children}
                  
                  <FloatingContact />
                  
              </CursorProvider>

          </ThemeProvider>
        </body>
      </html>
    );
}
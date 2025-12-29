import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- INI KUNCI UTAMANYA!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darae.ctc | Digital Creative Agency",
  description: "Web Development & Graphic Design Services",
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
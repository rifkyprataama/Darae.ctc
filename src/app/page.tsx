import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    // 1. bg-transparent: Agar background mesh dari layout.tsx terlihat
    // 2. selection:bg-darae-accent: Agar highlight teks berwarna Merah (Branding)
    <main className="min-h-screen bg-transparent selection:bg-darae-accent selection:text-white overflow-x-hidden">
      
      <div id="home">
        <HomeSection />
      </div>

      <About />
      
      {/* Tips UX: Biasanya Pricing ditaruh setelah Portfolio/Testimoni 
         agar user "percaya" dulu sebelum melihat harga. 
         Tapi urutan ini tetap sah.
      */}
      <Pricing />

      <div id="portfolio">
        <Portfolio />
      </div>

      <Testimonials />
      
      <FAQ />

      <div id="contact">
        <Contact />
      </div>

      <Footer />
      
      {/* Jangan lupa render Floating Contact (WA) */}
      <FloatingContact />
      
    </main>
  );
}
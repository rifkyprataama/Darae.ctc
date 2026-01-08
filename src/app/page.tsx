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
    <main className="min-h-screen selection:bg-blue-600 selection:text-white">
      <div id="home">
        <HomeSection />
      </div>

      <About />
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
    </main>
  );
}
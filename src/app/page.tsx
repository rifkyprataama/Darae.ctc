import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portofolio from "@/components/Portofolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portofolio />
      <Contact />
      <Footer />
    </main>
  );
}
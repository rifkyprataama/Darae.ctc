import Navbar from "@/components/Navbar";
import StickyCursor from "@/components/ui/StickyCursor";
import FloatingContact from "@/components/FloatingContact";
//import Snowfall from "@/components/ui/Snowfall"; 
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer"; 

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Snowfall /> */}
      <StickyCursor />
      <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <FloatingContact />
      </SmoothScroll>
    </>
  );
}
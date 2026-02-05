import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import OfficeSection from "@/components/OfficeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="px-4">
        <AboutSection />
      </div>
      <ServicesSection />
      <OfficeSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

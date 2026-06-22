import Navbar from '@/src/components/Navbar';
import { BackgroundEffect } from '@/src/components/BackgroundEffect';
import HeroSection from '@/src/sections/HeroSection';
import ServicesSection from '@/src/sections/ServicesSection';
import FeaturesSection from '@/src/sections/FeaturesSection';
import PortfolioSection from '@/src/sections/PortfolioSection';
import ProcessSection from '@/src/sections/ProcessSection';
import TestimonialsSection from '@/src/sections/TestimonialsSection';
import FAQSection from '@/src/sections/FAQSection';
import ContactSection from '@/src/sections/ContactSection';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen text-white bg-[#030303] overflow-hidden">
      {/* Immersive Dark Futuristic Background Engine */}
      <BackgroundEffect />

      {/* Structured Site Modules */}
      <Navbar />
      
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}

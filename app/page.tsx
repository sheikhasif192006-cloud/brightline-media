import Navbar from '@/src/components/Navbar';
import { BackgroundEffect } from '@/src/components/BackgroundEffect';
import { ParticleField } from '@/src/components/ParticleField';
import { ClientBar } from '@/src/components/ClientBar';
import { StatDivider } from '@/src/components/StatDivider';
import { ComparisonChart } from '@/src/components/ComparisonChart';
import { AmbientGlow } from '@/src/components/AmbientGlow';
import HeroSection from '@/src/sections/HeroSection';
import ServicesSection from '@/src/sections/ServicesSection';
import FeaturesSection from '@/src/sections/FeaturesSection';
import ResultsSection from '@/src/sections/ResultsSection';
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

      <div className="fixed inset-0 z-[1] opacity-50 pointer-events-none">
        <ParticleField />
      </div>

      <AmbientGlow />

      {/* Structured Site Modules */}
      <Navbar />
      
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <ComparisonChart />
        <ClientBar />
        <ResultsSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <StatDivider />
        <FAQSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}

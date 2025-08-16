import Header from "@/components/header";
import HeroSlider from "@/components/hero-slider";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import AdvantagesSection from "@/components/advantages-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />

      <ServicesSection />
      <AboutSection />
      <AdvantagesSection />
      <PortfolioSection />

      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

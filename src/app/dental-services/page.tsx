'use client';

import HeroSection from './sections/home/HeroSection';
import WelcomeSection from './sections/home/WelcomeSection';
import ServicesSection from './sections/home/ServicesSection';
import BenefitsSection from './sections/home/BenefitsSection';
import TestimonialsSection from './sections/home/TestimonialsSection';
import CtaSection from './sections/home/CtaSection';
import ContactSection from './sections/home/ContactSection';

export default function DentalServicesPage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
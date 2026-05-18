'use client';

import HeroSection from '../legal-services/services/home/HeroSection';
import PracticeAreasSection from '../legal-services/services/home/PracticeAreasSection';
import LitigationAdvantageSection from '../legal-services/services/home/LitigationAdvantageSection';
import ServicesAndFormSection from '../legal-services/services/home/ServicesAndFormSection';
import TestimonialsSection from '../legal-services/services/home/TestimonialsSection';

export default function LegalServicesPage() {
  return (
    <>
      <HeroSection />
      <PracticeAreasSection />
      <LitigationAdvantageSection />
      <ServicesAndFormSection />
      <TestimonialsSection />
    </>
  );
}
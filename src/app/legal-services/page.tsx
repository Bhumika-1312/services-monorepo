'use client';

import HeroSection from '../legal-services/sections/home/HeroSection';
import PracticeAreasSection from '../legal-services/sections/home/PracticeAreasSection';
import LitigationAdvantageSection from '../legal-services/sections/home/LitigationAdvantageSection';
import ServicesAndFormSection from '../legal-services/sections/home/ServicesAndFormSection';
import TestimonialsSection from '../legal-services/sections/home/TestimonialsSection';

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
'use client';

import ServicesHeroSection from '../sections/services/ServicesHeroSection';
import ServiceCategoriesSection from '../sections/services/ServiceCategoriesSection';
import ServicesFaqSection from '../sections/services/ServicesFaqSection';
import ServicesCtaSection from '../sections/services/ServicesCtaSection';

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServiceCategoriesSection />
      <ServicesFaqSection />
      <ServicesCtaSection />
    </>
  );
}
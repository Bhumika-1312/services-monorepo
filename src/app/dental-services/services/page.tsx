"use client";

import CtaSection from "../sections/home/CtaSection";
import ContactSection from "../sections/home/ContactSection";
import ServicesHeroSection from "../sections/services/ServicesHeroSection";
import ServicesListSection from '../sections/services/ServicesListSection';
import ProcessSection from '../sections/services/ProcessSection';
import QualityServicesSection from '../sections/services/QualityServicesSection';

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesListSection />
      <ProcessSection />
      <QualityServicesSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}

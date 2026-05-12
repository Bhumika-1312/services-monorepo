"use client";
import HeroSection from "./sections/home/HeroSection";
import TrustedBarSection from "./sections/home/TrustedBarSection";
import SolutionsSection from "./sections/home/SolutionsSection";
import ExpertsSection from "./sections/home/ExpertsSection";
import HowItWorksSection from "./sections/home/HowItWorksSection";
import ClientTypesSection from "./sections/home/ClientTypesSection";
import TestimonialsSection from "./sections/home/TestimonialsSection";

export default function CAServicesPage() {
  return (
    <>
      <HeroSection />
      <TrustedBarSection />
      <SolutionsSection />
      <ExpertsSection />
      <HowItWorksSection />
      <ClientTypesSection />
      <TestimonialsSection />
    </>
  );
}

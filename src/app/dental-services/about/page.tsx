'use client';

import CtaSection from '../sections/home/CtaSection';
import ContactSection from '../sections/home/ContactSection';

import AboutHeroSection from '../sections/about/AboutHeroSection';
import AboutIntroSection from '../sections/about/AboutIntroSection';
import AllAgesSection from '../sections/about/AllAgesSection';
import PhilosophySection from '../sections/about/PhilosophySection';

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutIntroSection />
      <AllAgesSection />
      <PhilosophySection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
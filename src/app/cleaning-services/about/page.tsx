"use client";

import Hero from "../sections/about-us/Hero";
import Stats from "../sections/about-us/Stats";
import Mission from "../sections/about-us/Mission";
import Values from "../sections/about-us/Values";
import Founder from "../sections/about-us/Founder";
import Trust from "../sections/about-us/Trust";
import CTA from "../sections/about-us/CTA";
import ContactSection from "../sections/about-us/ContactSection";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <Values />
      <Founder />
      <Trust />
      <CTA />
      <ContactSection/>
    </>
  );
}
"use client";

import Hero from "../sections/services/Hero";
import Specialties from "../sections/services/Specialties";
import FeaturedServices from "../sections/services/FeaturedServices";
import Results from "../sections/services/Results";
import WhyChoose from "../sections/services/WhyChoose";

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <Specialties />
      <FeaturedServices />
      <Results />
      <WhyChoose />
    </>
  );
}

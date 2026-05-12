'use client';

import AboutSection from '../sections/about/AboutSection';
import TrustSection from '../sections/about/TrustSection';
import NetworkSection from '../sections/about/NetworkSection';
import LeadershipSection from '../sections/about/LeadershipSection';
import AboutCtaSection from '../sections/about/AboutCtaSection';

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <TrustSection />
      <NetworkSection />
      <LeadershipSection />
      <AboutCtaSection />
    </>
  );
}
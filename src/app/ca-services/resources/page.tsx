'use client';

import ResourcesHeroSection from '../sections/resources/ResourcesHeroSection';
import FeaturedInsightsSection from '../sections/resources/FeaturedInsightsSection';
import TechnicalGuidesSection from '../sections/resources/TechnicalGuidesSection';
import DownloadableResourcesSection from '../sections/resources/DownloadableResourcesSection';

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHeroSection />
      <FeaturedInsightsSection />
      <TechnicalGuidesSection />
      <DownloadableResourcesSection />
    </>
  );
}
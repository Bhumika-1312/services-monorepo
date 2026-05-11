import ServicesHeroSection from '../sections/services/ServicesHeroSection';
import StorySection from '../sections/services/StorySection';
import ValuesSection from '../sections/services/ValuesSection';
import BeyondReservationSection from '../sections/services/BeyondReservationSection';
import TechnologySection from '../sections/services/TechnologySection';
import ServicesCtaSection from '../sections/services/ServicesCtaSection';

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <StorySection />
      <ValuesSection />
      <BeyondReservationSection />
      <TechnologySection />
      <ServicesCtaSection />
    </>
  );
}
import HeroSection from './sections/home/HeroSection';
import CuisineSection from './sections/home/CuisineSection';
import FeaturedRestaurantsSection from './sections/home/FeaturedRestaurantsSection';
import HowItWorksSection from './sections/home/HowItWorksSection';
import RestaurantChainsSection from './sections/home/RestaurantChainsSection';
import CtaSection from './sections/home/CtaSection';
import FaqSection from './sections/home/FaqSection';

export default function RestaurantServicesPage() {
  return (
    <>
      <HeroSection />
      <CuisineSection />
      <FeaturedRestaurantsSection />
      <HowItWorksSection />
      <RestaurantChainsSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
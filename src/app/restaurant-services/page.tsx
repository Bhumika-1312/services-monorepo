import { Box } from '@mui/material';
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
    <Box
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        width: '100%',
      }}
    ></Box>
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
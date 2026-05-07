import Navbar from "../cleaning-booking/components/Navbar";
import HeroSection from "../cleaning-booking/sections/hero/HeroSection";
import BookingSections from "../cleaning-booking/sections/hero/BookingSections";
import FeedbackSection from "../cleaning-booking/sections/hero/FeedbackSection";
import Footer from "../cleaning-booking/components/Footer";

export default function CleaningBookingPage() {
  return (
    <>
      <HeroSection />
      <BookingSections />
      <FeedbackSection />
    </>
  );
}
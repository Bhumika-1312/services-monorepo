import Hero from "./sections/home/Hero";
import Services from "./sections/home/Services";
import WhyChooseUs from "./sections/home/WhyChooseUs";
import AboutSection from "./sections/home/AboutSection";
import ProcessSection from "./sections/home/ProcessSection";
import Testimonials from "./sections/home/Testimonials";
import Tips from "./sections/home/Tips";
import CTA from "./sections/home/CTA";
import ContactSection from "./sections/home/ContactSection";
import FaqSection from "./sections/home/FaqSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <AboutSection />
      <ProcessSection />
      <Testimonials />
      <Tips />
      <CTA />
      <ContactSection />
      <FaqSection />
    </main>
  );
}

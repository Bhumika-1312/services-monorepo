'use client';


import CtaSection from '../sections/home/CtaSection';
import ContactSection from '../sections/home/ContactSection';
import DoctorsHeroSection from '../sections/doctors/DoctorsHeroSection';
import TeamGridSection from '../sections/doctors/TeamGridSection';
import WorkflowSection from '../sections/doctors/WorkflowSection';
import DoctorsFaqSection from '../sections/doctors/DoctorsFaqSection';

export default function DoctorsPage() {
  return (
    <>
      <DoctorsHeroSection />
      <TeamGridSection />
      <WorkflowSection />
      <DoctorsFaqSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
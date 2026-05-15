'use client';

import ContactSection from '../../sections/home/ContactSection';

import DoctorHeroSection from '../../sections/doctors/jonathan-jassey/DoctorHeroSection';
import DoctorProfileSection from '../../sections/doctors/jonathan-jassey/DoctorProfileSection';
import PatientVoiceSection from '../../sections/doctors/jonathan-jassey/PatientVoiceSection';
import RelatedDoctorsSection from '../../sections/doctors/jonathan-jassey/RelatedDoctorsSection';

export default function JonathanJasseyPage() {
  return (
    <>
      <DoctorHeroSection />
      <DoctorProfileSection />
      <PatientVoiceSection />
      <RelatedDoctorsSection />
      <ContactSection />
    </>
  );
}
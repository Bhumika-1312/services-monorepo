import HeroSection from "../../sections/services/HeroSection";
import AssessmentSection from "../../sections/services/AssessmentSection";
import ServicesGridSection from "../../sections/services/ServicesGridSection";
import WhyChooseSection from "../../sections/services/WhyChooseSection";
import TestimonialsSection from "../../sections/services/TestimonialsSection";
import FaqSection from "../../sections/services/FaqSection";
import CtaBannerSection from "../../sections/services/CtaBannerSection";

export default function PropertyLawyerPage() {
  const pageData = {
    hero: {
      title: "Best Property Lawyer in Mumbai, Thane & Bangalore",
      description:
        "Your reliable legal partner for property disputes, ancestral property matters, will, Society Matters and builder fraud cases. We also assist with society redevelopment projects, power of attorney, land acquisition issues, and complete property transfer and certification services.",
      buttonText: "Contact With Top Lawyers",
    },

    assessment: {
      title:
        "Best Property Lawyers in India for Disputes, Real Estate & NRI Matters",
      description1:
        "Property disputes and real estate transactions require more than paperwork they demand legal foresight, risk assessment, and strong representation. At Lex Litigation, we provide comprehensive property law solutions across India, assisting individuals, NRIs, investors, housing societies, developers, and HNIs in protecting and managing real estate assets with precision and compliance.",
      description2:
        "Our services extend from in-depth title verification and due diligence to drafting and vetting agreements, handling land acquisition matters, redevelopment projects, co-ownership disputes, partition claims, tenancy conflicts, and succession planning.",
      buttonText: "Start Free Consultation",
    },

    servicesTitle: "Our Property Law Services",

    services: [
      {
        title: "Property Dispute Resolution",
        description:
          "We resolve disputes involving possession, inheritance, co-ownership and tenancy through negotiation or litigation with strong representation.",
      },
      {
        title: "NRI Property Management & Dispute",
        description:
          "We assist NRIs with title checks, tenant disputes, illegal occupation, property sales, and asset protection through structured POA and remote coordination.",
      },
      {
        title: "Will Drafting & Estate Planning",
        description: "We draft legally enforcement wills ensuring clear asset distribution, proper attestation, and compliance under Indian law to prevent future disputes.",
      },
      {
        title: "Builder Fraud & RERA Litigation",
        description: "We represent clients in RERA complaints, criminal actions and compensation claims arising from builder fraud, delays and non-delivery.",
      },
      {
        title: "Society Renovation & Redevelopment Advisory",
        description: "We assist societies with redevelopment agreements, builder negotiations, documentation review and regulatory approvals to protect member interests.",
      },
      {
        title: "Land Acquisition & Zoning Matters",
        description: "We manage objections, compensations negotiations and regulatory representation in land acquisition and zoning matters.",
      },
    ],

    whyChoose: {
      title: "Why Choose Lex Litigation for Property Law Matters",
      description1:
        "Lex Litigation blends strong litigation expertise with precise documentation. Backed by in-house lawyers and experienced panel advocates, we handle property matters across courts and regulatory authorities in India.",
      description2:
        "Our approach is proactive and detail-focused, prioritising wealth protection, risk minimisation, and long-term legal security. Whether you’re an NRI safeguarding assets, a family resolving succession issues, or an investor conducting due diligence, we ensure clarity, compliance, and confident decisions.",
      image: "/images/legal/property-lawyer-why-choose.jpg",
    },

    faqQuestions: [
      "What are the main benefits of hiring dedicated developers?",
      "How can NRIs manage property matters in India without being physically present?",
      "What is title verification and why is it important before buying property?",
      "How long does it take to obtain a Legal Heirship Certificate?",
      "What is the difference between Will and Succession Certificate?",
      "Can I take action against a builder for project delay or fraud?",
      "Why is property mutation necessary after purchase or inheritance?",
      "Can I sell a jointly owned property without the consent of the other co-owner?",
    ],

    cta: {
      title: "Book Consultation With Our Top Property Lawyers Now!",
      description: "",
      buttonText: "Contact Now",
      backgroundImage: "/images/legal/cta-banner.jpg",
    },
  };

  return (
    <>
      <HeroSection data={pageData.hero} />
      <AssessmentSection data={pageData.assessment} />
      <ServicesGridSection
        title={pageData.servicesTitle}
        services={pageData.services}
      />
      <WhyChooseSection data={pageData.whyChoose} />
      <TestimonialsSection />
      <FaqSection questions={pageData.faqQuestions} />
      <CtaBannerSection data={pageData.cta} />
    </>
  );
}

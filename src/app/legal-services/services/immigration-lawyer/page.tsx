import HeroSection from "../../sections/services/HeroSection";
import AssessmentSection from "../../sections/services/AssessmentSection";
import ServicesGridSection from "../../sections/services/ServicesGridSection";
import WhyChooseSection from "../../sections/services/WhyChooseSection";
import TestimonialsSection from "../../sections/services/TestimonialsSection";
import FaqSection from "../../sections/services/FaqSection";
import CtaBannerSection from "../../sections/services/CtaBannerSection";

export default function ImmigrationLawyerPage() {
  const pageData = {
    hero: {
      title:
        "Top Immigration Lawyers for NRIs, Foreign Nationals & Cross Border Matters",
      description:
        "Providing strategic and confidential legal assistance in immigration, visa, OCI, citizenship, and cross-border matters for NRIs and foreign nationals across India, ensuring compliance, protection, and smooth resolution of complex legal challenges.",
      buttonText: "Contact With Top Lawyers",
    },

    assessment: {
      title: "Strategic Immigration Consultant with Global Perspective",
      description1:
        "Immigration matters demand strategic planning, documentation accuracy, and timely action. At LawCrust Legal Consulting Services, we assist clients at every stage from advisory and documentation review to representation before FRRO authorities, appellate tribunals, and High Courts. Our team carefully analyses each case, identifies legal risks, and builds a strong response to avoid delays, penalties, or rejections.",
      description2:
        "We handle matters including OCI cancellations, PIO conversions, visa overstays, denylisting issues, entry bans, nationality disputes, business and employment visas, student visas, spouse and dependent visas, and long-term residency applications. For corporates and entrepreneurs, we provide compliance support for foreign employee documentation and cross-border regulatory requirements.",
      buttonText: "Start Legal Assessment",
    },

    servicesTitle: "Our Immigration Legal Services",

    services: [
      {
        title: "Citizen & Nationality Matters",
        description:
          "We handle renunciation disputes, dual citizenship concerns, nationality claims, and complex interpretations under Indian law, ensuring proper documentation and representation before authorities.",
      },
      {
        title: "Passport Issues & Delays",
        description:
          "We assist with passport loss, theft, impoundment, suspension, revocation, and re-issuance delays, ensuring procedural compliance and representation before passport authorities.",
      },
      {
        title: "OCI Card Applications & Disputes",
        description:
          "We support OCI applications, renewals, corrections, cancellations, and compliance issues, including cases affected by regulatory or policy changes.",
      },
      {
        title: "Visa Applications & Legal Advisory",
        description: "We provide strategic guidance on visa selection, documentation review, and compliance to reduce rejection risks and ensure accurate filing.",
      },
      {
        title: "Deportation Notices & Appeals",
        description: "We provide urgent legal representation to challenge deportation orders and seek interim protection.",
      },
      {
        title: "Blacklisting & Travel Bans",
        description: "We assist in filing representations and petitions to seek removal from blocklists and lift travel bans.",
      },
    ],

    whyChoose: {
      title: "Why Choose Lex Litigation for Immigration Matters",
      description1:
        "Lex Litigation Services operates with a global legal perspective customised to NRIs, foreign nationals, business professionals, and cross-border families. Our firm combines immigration law expertise with litigation strength, ensuring representation across , and the Supreme Court of India where required.",
      description2:
        "We understand that immigration matters often involve urgency, reputation, travel freedom, and long-term legal status. Our approach is structured, discreet, and strategically aligned with your personal and professional goals.",
      image: "/images/legal/immigration-lawyer-why-choose.jpg",
    },

    faqQuestions: [
      "What should I do if my visa application is refused?",
      "What should I do if my visa application is rejected?",
      "Can OCI status be cancelled or suspended?",
      "How can I respond to a deportation notice in India?",
      "Is dual citizenship allowed in India?",
      "Can immigration issues arise due to criminal proceedings?",
      "What is the solution if my passport is impounded or revoked?",
    ],

    cta: {
      title: "Consult Our Immigration Lawyers Today",
      description:
        "Immigration matters require precision and strategic legal insight. From visa applications and OCI matters to citizenship and cross-border disputes, our team provides practical and confidential legal solutions.",
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

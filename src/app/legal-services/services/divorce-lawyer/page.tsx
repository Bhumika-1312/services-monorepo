import HeroSection from "../../sections/services/HeroSection";
import AssessmentSection from "../../sections/services/AssessmentSection";
import ServicesGridSection from "../../sections/services/ServicesGridSection";
import TestimonialsSection from "../../sections/services/TestimonialsSection";
import FaqSection from "../../sections/services/FaqSection";
import CtaBannerSection from "../../sections/services/CtaBannerSection";

export default function DivorceLawyerPage() {
  const pageData = {
    hero: {
      title: "Best Divorce Lawyer in Mumbai, Thane & Bangalore",
      description:
        "We provide clear, confidential, and reliable legal support for divorce, child custody, alimony, and property disputes in Mumbai, Thane, Delhi, Bangalore, Navi Mumbai & India, helping you protect your rights and move forward with confidence.",
      buttonText: "Contact With Top Lawyers",
    },

    assessment: {
      title: "Strategic Divorce Representation with Global Perspective",
      description1:
        "At Lex Litigation, we handle high-stakes matrimonial disputes with discretion, strategic depth, and global coordination. Since 2016, we built a formidable reputation as one of India’s most sophisticated full-service legal powerhouses, successfully managing over 10,000 cases through a network of 70+ in-house lawyers and a seasoned panel of senior advocates.",
      description2:
        "For NRIs, High Net-Worth Individuals (HNIs), and Ultra High Net-Worth Individuals (UHNIs), divorce is rarely just emotional it involves cross-border assets, international jurisdiction conflicts, business holdings, trusts, and reputation management. Our matrimonial litigation team is engineered to handle complexity at scale.",
      buttonText: "Start Legal Assessment",
    },

    servicesTitle: "Divorce & Family Law Services",

    services: [
      {
        title: "Mutual Divorce Lawyer",
        description:
          "Facilitating structured dissolutions through strategic consensus. We manage the delicate balance of legal finality and procedural efficiency for high-net-worth separations.",
      },
      {
        title: "Child Custody & Visitation Rights",
        description:
          "Prioritizing the institutional stability of the family unit. Our approach to custody is rooted in the 'Best Interests' standard, bolstered by rigorous evidentiary preparation.",
      },
      {
        title: "Matrimonial Property & Asset Rights",
        description:
          "Sophisticated forensic accounting and equitable distribution strategy. We safeguard complex portfolios, multi-jurisdictional holdings, and private equity interests.",
      },
      {
        title: "Adoption & Guardianship",
        description:
          "Navigating the complex regulatory landscape of legal kinship. We provide comprehensive guidance on domestic and international adoption filings and fiduciary responsibilities.",
      },
      {
        title: "Domestic Protection Orders",
        description:
          "Immediate legal intervention for the preservation of personal safety and dignity. We manage the urgent filing of injunctions with absolute confidentiality and speed.",
      },
      {
        title: "Pre-Marital Risk Assessment",
        description:
          "Establishing proactive legal frameworks for future certainty. Drafting pre-nuptial and post-nuptial agreements that stand as ironclad institutional documents.",
      },
    ],

    whyChoose: {
      title: "Why Choose Lex Litigation for Divorce Matters",
      description1:
        "Our lawyers combine deep family law expertise with strategic litigation skills to secure practical and effective outcomes.",
      description2:
        "We prioritize confidentiality, compassionate counsel, and strong advocacy tailored to your unique circumstances.",
      image: "/images/legal-services/services/divorce-lawyer-why-choose.jpg",
    },

    faqQuestions: [
      "What are the legal grounds for divorce in India?",
      "Do I have to prove fault to get a divorce?",
      "How long does a divorce take in India?",
      "Who gets child custody after divorce in India?",
      "What is mutual consent divorce and how does it work?",
      "Is alimony compulsory after divorce?",
      "Can an NRI file for divorce in India?",
      "What documents are required to file for divorce?",
    ],

    cta: {
      title: "Speak to a Top Divorce Lawyer Today",
      description:
        "If you are considering separation or facing matrimonial litigation, timely legal advice can protect your rights and future. Schedule a confidential consultation today and take the first step toward clarity and legal protection.",
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
      <TestimonialsSection />
      <FaqSection questions={pageData.faqQuestions} />
      <CtaBannerSection data={pageData.cta} />
    </>
  );
}

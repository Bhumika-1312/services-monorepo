'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const faqs = [
  {
    question: 'How do I transition my existing files to FinAccount?',
    answer:
      'Our digital onboarding team handles all historical data migration. Simply upload your last 3 years of filings, and we will map them into our secure cloud environment within 48 hours.',
  },
  {
    question: 'Is my data secure and compliant with local laws?',
    answer:
      'We utilize bank-grade 256-bit encryption for all documents. Our platform is strictly audited for GDPR and local data protection act compliance, ensuring zero leakages.',
  },
  {
    question: 'Can I switch between service tiers mid-year?',
    answer:
      'Yes, our flexible subscription model allows for scaling as your business grows. Upgrades are immediate, while downgrades take effect from the next billing cycle.',
  },
  {
    question: 'Do you provide offline consultation services?',
    answer:
      'While we are a digital-first platform, our Corporate tier includes physical audits and in-person boardroom advisory as per statutory requirements.',
  },
];

export default function ServicesFaqSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 8, md: 10 },
        borderTop: '1px solid #edf2f7',
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: '2rem', md: '2.6rem' },
            fontWeight: 500,
            color: '#2f3439',
            mb: 6,
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* FAQ Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {faqs.map((faq) => (
            <Grid
              key={faq.question}
              size={{ xs: 12, md: 6 }}
            >
              <Typography
                sx={{
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: '#1f2937',
                  lineHeight: 1.6,
                  mb: 1,
                }}
              >
                {faq.question}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.82rem',
                  lineHeight: 1.9,
                  color: '#6b7280',
                  maxWidth: 520,
                }}
              >
                {faq.answer}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
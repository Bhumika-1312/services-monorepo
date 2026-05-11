'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Do you accommodate dietary restrictions?',
    answer:
      'Yes, many restaurants offer vegetarian, vegan, gluten-free, and allergy-friendly options.',
  },
  {
    question: 'What is the dress code?',
    answer:
      'Dress code varies by restaurant, ranging from smart casual to formal dining.',
  },
  {
    question: 'Can I host a private event?',
    answer:
      'Yes, several restaurants offer private dining and event booking options.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellation policies vary, but most restaurants allow cancellation within a specified time window.',
  },
];

export default function FaqSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 12 },
        backgroundColor: '#f6f4f3',
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <Typography
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.4rem' },
            fontWeight: 700,
            color: '#222',
            mb: 1,
          }}
        >
          Common Questions
        </Typography>

        {/* Subtitle */}
        <Typography
          align="center"
          sx={{
            color: '#7b7b7b',
            fontSize: '0.95rem',
            mb: 6,
          }}
        >
          Everything you need to know before your visit.
        </Typography>

        {/* FAQ Items */}
        {faqs.map((faq) => (
          <Accordion
            key={faq.question}
            elevation={0}
            disableGutters
            sx={{
              mb: 2,
              borderRadius: '8px !important',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              border: '1px solid #ece7e4',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    fontSize: 20,
                    color: '#222',
                  }}
                />
              }
              sx={{
                minHeight: 56,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: '#222',
                  fontWeight: 400,
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ pt: 0, pb: 2 }}>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: '#6b7280',
                  lineHeight: 1.8,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
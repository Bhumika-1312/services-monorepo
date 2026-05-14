'use client';

import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';

const faqs = [
  {
    question: 'How can I improve my oral hygiene?',
    answer:
      'Brush twice daily, floss regularly, and schedule routine dental checkups.',
  },
  {
    question: 'How to keep my teeth healthy?',
    answer:
      'Maintain a balanced diet, reduce sugar intake, and follow proper oral care.',
  },
  {
    question: 'Are all dental procedures painful?',
    answer:
      'Modern techniques and anesthesia make most procedures comfortable.',
  },
  {
    question: 'How often should I visit the dentist?',
    answer:
      'A visit every six months is recommended for preventive care.',
  },
  {
    question: 'What to do if I need medication?',
    answer:
      'Consult your dentist before taking medication related to dental issues.',
  },
  {
    question: 'Why should I floss?',
    answer:
      'Flossing removes plaque and food particles from between teeth.',
  },
  {
    question: 'How to take care of baby teeth?',
    answer:
      'Clean gums early and brush gently once teeth begin to appear.',
  },
  {
    question: 'What is an overbite?',
    answer:
      'An overbite is when upper front teeth overlap significantly over lower teeth.',
  },
];

export default function DoctorsFaqSection() {
  const [expanded, setExpanded] = useState<string | false>('faq-0');

  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mb: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#f97316',
              mb: 1.5,
            }}
          >
            FAQ
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              fontWeight: 500,
              color: '#3b3b3b',
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 2,
          }}
        >
          {[0, 1].map((column) => (
            <Box key={column}>
              {faqs
                .filter((_, index) => index % 2 === column)
                .map((faq, index) => {
                  const id = `faq-${column}-${index}`;

                  return (
                    <Accordion
                      key={id}
                      expanded={expanded === id}
                      onChange={(_, isExpanded) =>
                        setExpanded(isExpanded ? id : false)
                      }
                      elevation={0}
                      sx={{
                        mb: 1.5,
                        borderRadius: '6px !important',
                        border: '1px solid #eef2f7',
                        backgroundColor: '#ffffff',
                        '&:before': {
                          display: 'none',
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            sx={{
                              color: '#9ca3af',
                              fontSize: 20,
                            }}
                          />
                        }
                        sx={{
                          minHeight: '56px',
                          '& .MuiAccordionSummary-content': {
                            margin: '14px 0',
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            color: '#374151',
                          }}
                        >
                          {faq.question}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails sx={{ pt: 0, pb: 2 }}>
                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            lineHeight: 1.8,
                            color: '#6b7280',
                          }}
                        >
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
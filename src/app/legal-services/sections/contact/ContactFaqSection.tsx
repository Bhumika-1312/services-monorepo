'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const faqs = [
  'What should I do if my visa application is refused?',
  'How long does a divorce take in India?',
  'Can I take action against a builder for project delay or fraud?',
];

export default function ContactFaqSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pb: { xs: 10, md: 12 },
        pt: { xs: 4, md: 2 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '0.9fr 1.1fr',
            },
            columnGap: { xs: 6, lg: 10 },
            rowGap: { xs: 6, lg: 0 },
            alignItems: 'start',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '2.8rem', md: '5rem' },
                fontWeight: 600,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                color: '#111827',
                mb: 3,
                maxWidth: 340,
              }}
            >
              Frequently Asked Questions
            </Typography>

            <Typography
              sx={{
                fontSize: '0.74rem',
                lineHeight: 1.9,
                color: '#6b7280',
                maxWidth: 300,
              }}
            >
              This is different we get that, you may have questions, here are
              some answers.
            </Typography>
          </Box>

          <Box sx={{ pt: { lg: 1 } }}>
            {faqs.map((question) => (
              <Box
                key={question}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                  py: 1.55,
                  borderBottom: '1px solid #e5e7eb',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.72rem',
                    lineHeight: 1.8,
                    color: '#111827',
                    pr: 2,
                  }}
                >
                  {question}
                </Typography>

                <AddIcon
                  sx={{
                    fontSize: 14,
                    color: '#6b7280',
                    flexShrink: 0,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
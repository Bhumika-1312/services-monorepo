'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const leftFaqs = [
  'What should I do if my visa application is refused?',
  'Can OCI status be cancelled or suspended?',
  'How can I respond to a deportation notice in India?',
  'Is dual citizenship allowed in India?',
];

const rightFaqs = [
  'Can immigration issues arise due to criminal proceedings?',
  'How do I renew my name from a Look Out Circular (LOC)?',
  'What is the solution if my passport is impounded or revoked?',
];

export default function AboutFaqSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 4, md: 6 },
        pb: { xs: 10, md: 12 },
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
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#d89b00',
              mb: 1.5,
            }}
          >
            FAQ
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#2f2f2f',
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
            columnGap: 6,
          }}
        >
          {[leftFaqs, rightFaqs].map((faqGroup, groupIndex) => (
            <Box key={groupIndex}>
              {faqGroup.map((question) => (
                <Box
                  key={question}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    py: 1.5,
                    borderBottom: '1px solid #e5e7eb',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.68rem',
                      lineHeight: 1.8,
                      color: '#111827',
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
          ))}
        </Box>
      </Container>
    </Box>
  );
}
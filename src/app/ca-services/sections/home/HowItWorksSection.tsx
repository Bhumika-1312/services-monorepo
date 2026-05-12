'use client';

import { Box, Container, Typography } from '@mui/material';

const steps = [
  {
    number: '1',
    title: 'Request',
    description: 'Tell us your requirements via a simple form.',
  },
  {
    number: '2',
    title: 'Match',
    description: 'AI matches you with 3 top experts in minutes.',
  },
  {
    number: '3',
    title: 'Consultation',
    description: 'Discuss your needs and get a fixed-fee quote.',
  },
  {
    number: '4',
    title: 'Completion',
    description: 'Receive your reports or filings digitally.',
  },
];

export default function HowItWorksSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f3f7fb',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Typography
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            color: '#183b63',
            mb: { xs: 6, md: 8 },
            lineHeight: 1.2,
          }}
        >
          How It Works
        </Typography>

        {/* Steps */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 5, md: 4 },
            alignItems: 'start',
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={step.number}
              sx={{
                position: 'relative',
                textAlign: 'center',
                px: { xs: 1, md: 2 },
              }}
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    top: 14,
                    right: '-12%',
                    width: '24%',
                    height: '1px',
                    backgroundColor: '#d7dde5',
                  }}
                />
              )}

              {/* Number Badge */}
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  mx: 'auto',
                  mb: 3,
                  borderRadius: '8px',
                  backgroundColor: '#183b63',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#374151',
                  mb: 1.2,
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  maxWidth: 190,
                  mx: 'auto',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  color: '#6b7280',
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
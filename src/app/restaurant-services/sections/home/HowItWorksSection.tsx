'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const steps = [
  {
    number: '1',
    title: 'Discover',
    description:
      'Browse our curated list of world-class restaurants near you.',
  },
  {
    number: '2',
    title: 'Pick a Time',
    description:
      'Select your preferred date, time, and guest count with real-time availability.',
  },
  {
    number: '3',
    title: 'Confirm',
    description:
      'Get instant confirmation. No phone calls, no waiting lines.',
  },
];

export default function HowItWorksSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 12 }, backgroundColor: '#f6f4f3' }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            color: '#222',
            mb: 1,
          }}
        >
          How BistroReserve Works
        </Typography>

        {/* Subtitle */}
        <Typography
          align="center"
          sx={{
            color: '#7b7b7b',
            fontSize: '0.95rem',
            mb: 8,
          }}
        >
          The simplest path to a perfect meal
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid
              key={step.number}
              size={{ xs: 12, md: 4 }}
            >
              <Box sx={{ textAlign: 'center', position: 'relative' }}>
                {/* Connecting Line */}
                {index < 2 && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: 20,
                      left: '60%',
                      width: '80%',
                      height: '1px',
                      backgroundColor: '#d9d9d9',
                      zIndex: 0,
                    }}
                  />
                )}

                {/* Number Circle */}
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    backgroundColor: '#b45a0a',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mx: 'auto',
                    mb: 2,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.number}
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#222',
                    mb: 1,
                  }}
                >
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: '#6b7280',
                    lineHeight: 1.7,
                    maxWidth: 280,
                    mx: 'auto',
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
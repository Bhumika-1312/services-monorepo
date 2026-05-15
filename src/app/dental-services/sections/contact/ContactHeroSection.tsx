'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

export default function ContactHeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        pb: { xs: 0, md: 0 },
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            minHeight: { xs: 760, md: 420 },
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '56% 44%',
            },
            backgroundColor: '#ffffff',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src="/images/dental-services/contact-hero.jpg"
            alt="Contact Us"
            sx={{
              width: '100%',
              height: '100%',
              minHeight: { xs: 320, md: 420 },
              objectFit: 'cover',
              display: 'block',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: { xs: 4, md: 7 },
              py: { xs: 5, md: 6 },
              backgroundColor: '#ffffff',
            }}
          >
            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#f97316',
                mb: 2,
              }}
            >
              Book a complimentary appointment
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '2.8rem', md: '4.2rem' },
                fontWeight: 500,
                lineHeight: 1.08,
                color: '#2440b3',
                mb: 3,
              }}
            >
              Contact Us
            </Typography>

            <Typography
              sx={{
                fontSize: '0.95rem',
                lineHeight: 2,
                color: '#4b5563',
                maxWidth: 390,
              }}
            >
              All of our patient care, education and research are driven to make
              discoveries that can help heal you.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
'use client';

import { Box, Container, Typography } from '@mui/material';

export default function ContactHeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 300, md: 450 },
        backgroundImage:
          "url('/images/restaurant/contact-hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          We&apos;re here to help
        </Typography>

        <Typography
          sx={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.92)',
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          Whether you&apos;re planning a quiet dinner for two or a grand celebration,
          our team is dedicated to ensuring your experience is seamless.
        </Typography>
      </Container>
    </Box>
  );
}
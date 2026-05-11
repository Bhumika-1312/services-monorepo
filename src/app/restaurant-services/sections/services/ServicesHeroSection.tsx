'use client';

import { Box, Container, Typography } from '@mui/material';

export default function ServicesHeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 420, md: 520 },
        backgroundImage: "url('/images/restaurant/about-hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.95))',
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#b45a0a',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          Our Story
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '2.5rem', md: '4.5rem' },
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#222',
            mb: 2,
          }}
        >
          Connecting people with great dining experiences
        </Typography>

        <Typography
          sx={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: '#555',
            maxWidth: 760,
            mx: 'auto',
          }}
        >
          We believe booking the best table at your favorite restaurant should be
          as delightful as the meal itself.
        </Typography>
      </Container>
    </Box>
  );
}
'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

export default function DoctorHeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        pt: { xs: 14, md: 16 },
        pb: { xs: 8, md: 10 },
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src="/images/dental-services/hero-bg.jpg"
        alt="Doctor Hero Background"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(18,31,75,0.82) 0%, rgba(18,31,75,0.72) 100%)',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 6, md: 8 },
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
            We are here for your care
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '2.8rem', md: '4.6rem' },
              fontWeight: 600,
              lineHeight: 1.05,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Jonathan Jassey
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

export default function AboutIntroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
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
            About our dentist clinic
          </Typography>

          <Typography
            sx={{
              maxWidth: 920,
              mx: 'auto',
              fontSize: { xs: '2.2rem', md: '3.6rem' },
              fontWeight: 500,
              lineHeight: 1.25,
              color: '#2440b3',
              mb: 4,
            }}
          >
            Our clients are our priority, we offer quality dental services with
            a team of specialists. More details about our services below.
          </Typography>

          <Link
            href="/dental-services/services"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2440b3',
                borderRadius: '999px',
                px: 4,
                py: 1.1,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.82rem',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#1d36a1',
                  boxShadow: 'none',
                },
              }}
            >
              Our Services →
            </Button>
          </Link>
        </Box>

        <Box
          component="img"
          src="/images/dental-services/about-wide.jpg"
          alt="Dental Consultation"
          sx={{
            width: '100%',
            height: { xs: 280, md: 520 },
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
      </Container>
    </Box>
  );
}
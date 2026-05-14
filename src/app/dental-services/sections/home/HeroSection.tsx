'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

const stats = [
  {
    number: '12+',
    label: 'Years of service and clinical work',
  },
  {
    number: '35',
    label: 'Certified specialists in various fields',
  },
  {
    number: '10K+',
    label: 'Happy smiling clients',
  },
];

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            height: { xs: 620, md: 780 },
            overflow: 'visible',
            backgroundImage:
              'linear-gradient(rgba(48, 58, 126, 0.72), rgba(48, 58, 126, 0.72)), url("/images/dental-services/hero-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '820px',
              pt: { xs: '180px', md: '170px' },
              px: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#ffffff',
                mb: 4,
              }}
            >
              #1 Dental Clinic in Mumbai
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: '3rem',
                  sm: '4.2rem',
                  md: '6rem',
                },
                fontWeight: 700,
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                mb: 4,
              }}
            >
              Make your smile
              <br />
              even better
            </Typography>

            <Typography
              sx={{
                fontSize: '1.12rem',
                lineHeight: 2,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.88)',
                maxWidth: '760px',
                mx: 'auto',
                mb: 5,
              }}
            >
              Protect your smile and keep it healthy, with the largest network
              of dentists nationwide, quick answers and personalized service.
            </Typography>

            <Link
              href="/dental-services/booking"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#2f3fb2',
                  borderRadius: '999px',
                  px: 4.5,
                  py: 1.35,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#f3f4f6',
                    boxShadow: 'none',
                  },
                }}
              >
                Book A Callback
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              bottom: '-36px',
              transform: 'translateX(-50%)',
              width: {
                xs: '92%',
                md: '76%',
              },
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              overflow: 'hidden',
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={stat.number}
                sx={{
                  py: { xs: 3, md: 3.5 },
                  px: 3,
                  textAlign: 'center',
                  borderRight:
                    index !== stats.length - 1
                      ? { md: '1px solid #eef2f7' }
                      : 'none',
                  borderBottom:
                    index !== stats.length - 1
                      ? { xs: '1px solid #eef2f7', md: 'none' }
                      : 'none',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '2.2rem', md: '3rem' },
                    fontWeight: 700,
                    lineHeight: 1,
                    color: '#2440b3',
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.82rem',
                    lineHeight: 1.7,
                    color: '#8b95a7',
                    maxWidth: '160px',
                    mx: 'auto',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
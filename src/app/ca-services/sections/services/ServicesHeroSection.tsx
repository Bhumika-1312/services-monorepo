'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

export default function ServicesHeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: '108px', // 72px navbar + top spacing
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        {/* Small Label */}
        <Typography
          sx={{
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#4f6fa3',
            mb: 1.5,
          }}
        >
          Institutional Grade Compliance
        </Typography>

        {/* Main Heading */}
        <Typography
          sx={{
            fontSize: {
              xs: '2.2rem',
              sm: '3rem',
              md: '4.2rem',
            },
            fontWeight: 600,
            lineHeight: 1.08,
            color: '#1f2937',
            maxWidth: 760,
            mb: 3,
          }}
        >
          Comprehensive Financial & Compliance
          <br />
          Services
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '0.95rem',
            lineHeight: 1.9,
            color: '#6b7280',
            maxWidth: 620,
            mb: 4,
          }}
        >
          Streamline your fiscal responsibilities with our automated platform
          backed by senior chartered expertise. Precise, transparent, and always
          on time.
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/ca-services/booking"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#183b63',
                color: '#ffffff',
                borderRadius: '2px',
                px: 3,
                py: 1.15,
                minWidth: 200,
                textTransform: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#0f2f5f',
                  boxShadow: 'none',
                },
              }}
            >
              Get Expert Consultation
            </Button>
          </Link>

          <Link
            href="/ca-services/about"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: '#d1d5db',
                color: '#374151',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                px: 3,
                py: 1.15,
                minWidth: 190,
                textTransform: 'none',
                fontSize: '0.82rem',
                fontWeight: 500,
                '&:hover': {
                  borderColor: '#9ca3af',
                  backgroundColor: '#f9fafb',
                },
              }}
            >
              See more about us
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
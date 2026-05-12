'use client';

import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import Link from 'next/link';

export default function AboutCtaSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 9 },
        backgroundColor: '#f3f7fb',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '6px',
            background:
              'linear-gradient(135deg, #183b63 0%, #1d4474 100%)',
            px: { xs: 4, md: 8 },
            py: { xs: 6, md: 7 },
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          {/* Decorative Lines */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(160deg, transparent 45%, rgba(255,255,255,0.05) 46%, transparent 47%)',
              pointerEvents: 'none',
            }}
          />

          <Typography
            sx={{
              position: 'relative',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Get Expert Advice Today
          </Typography>

          <Typography
            sx={{
              position: 'relative',
              fontSize: '0.95rem',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 720,
              mx: 'auto',
              mb: 4,
            }}
          >
            Don&apos;t navigate the complexities of financial regulations alone.
            Schedule a free 15-minute consultation with our experts.
          </Typography>

          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
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
                  backgroundColor: '#ffffff',
                  color: '#183b63',
                  px: 4,
                  py: 1.2,
                  borderRadius: '2px',
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#f3f4f6',
                    boxShadow: 'none',
                  },
                }}
              >
                Book Consultation
              </Button>
            </Link>

            <Link
              href="/ca-services/services"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: 'rgba(255,255,255,0.45)',
                  color: '#ffffff',
                  px: 4,
                  py: 1.2,
                  borderRadius: '2px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  },
                }}
              >
                View All Services
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
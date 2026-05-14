'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

export default function CtaSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            backgroundColor: '#2f3fb2',
            px: { xs: 4, md: 8 },
            py: { xs: 5, md: 6 },
            textAlign: 'center',
          }}
        >
          {/* Decorative Circle */}
          <Box
            sx={{
              position: 'absolute',
              width: 520,
              height: 520,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.08)',
              right: -120,
              top: -180,
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: '1.8rem', md: '3rem' },
              fontWeight: 700,
              color: '#ffffff',
              mb: 2,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Your comfort is our priority
          </Typography>

          <Typography
            sx={{
              fontSize: '0.92rem',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.82)',
              maxWidth: 760,
              mx: 'auto',
              mb: 4,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Dentures actually improve oral fitness and overall appearance, not
            only they improve a bad bite but also reduce the risk of cancer.
            Enjoy simple things in food conversation and smile. Forget about
            uncomfortable social encounters.
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
                px: 4,
                py: 1.15,
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                position: 'relative',
                zIndex: 1,
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                  boxShadow: 'none',
                },
              }}
            >
              Make Appointment
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
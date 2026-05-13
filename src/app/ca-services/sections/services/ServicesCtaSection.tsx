'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

export default function ServicesCtaSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#183b63',
        py: { xs: 8, md: 9 },
        color: '#ffffff',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: 760,
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 500,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Ready to simplify your financial compliance?
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: '0.9rem',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: 560,
              mx: 'auto',
              mb: 4,
            }}
          >
            Join over 5,000 businesses and professionals who trust FinAccount
            for their fiscal integrity.
          </Typography>

          {/* CTA Button */}
          <Link
            href="/ca-services/booking"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#d7e8fb',
                color: '#183b63',
                px: 4,
                py: 1.2,
                minWidth: 220,
                borderRadius: '4px',
                textTransform: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#c6dcf6',
                  boxShadow: 'none',
                },
              }}
            >
              Schedule Consultation
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
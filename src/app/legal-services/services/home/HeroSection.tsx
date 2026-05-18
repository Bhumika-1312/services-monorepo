'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: '64px',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 760,
            mx: 'auto',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '3rem', md: '5.5rem' },
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              mb: 4,
            }}
          >
            Resolve Your Legal Matters
            <br />
            with{' '}
            <Box
              component="span"
              sx={{
                color: '#d89b00',
              }}
            >
              Expert Lawyers
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: '1.05rem',
              lineHeight: 2,
              color: '#9ca3af',
              maxWidth: 720,
              mx: 'auto',
              mb: 6,
            }}
          >
            A strategic approach to litigation, combining academic rigor with
            trial-tested experience to secure your interests across all Indian
            judicial forums.
          </Typography>

          <Box
            sx={{
              maxWidth: 640,
              mx: 'auto',
              borderTop: '1px solid #8b6508',
              pt: 3,
              mb: 4,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 4,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  mb: 0.4,
                }}
              >
                10,000+
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.68rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#6b7280',
                }}
              >
                Cases Handled
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  mb: 0.4,
                }}
              >
                PAN-INDIA
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.68rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#6b7280',
                }}
              >
                Court Representation
              </Typography>
            </Box>
          </Box>

          <Link
            href="/legal-services/contact"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#d89b00',
                color: '#ffffff',
                borderRadius: 0,
                px: 6,
                py: 1.6,
                minWidth: 220,
                textTransform: 'uppercase',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#c48b00',
                  boxShadow: 'none',
                },
              }}
            >
              Call Now
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
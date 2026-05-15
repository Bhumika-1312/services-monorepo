'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

export default function AllAgesSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        pt: { xs: 8, md: 10 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '0.9fr 1.1fr',
            },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ maxWidth: 420 }}>
            <Typography
              sx={{
                fontSize: {
                  xs: '2.4rem',
                  md: '4.1rem',
                },
                fontWeight: 500,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                color: '#2440b3',
                mb: 3,
              }}
            >
              We offer dental
              <br />
              services for all ages
            </Typography>

            <Typography
              sx={{
                fontSize: '0.92rem',
                lineHeight: 2,
                color: '#6b7280',
                mb: 4,
                maxWidth: 360,
              }}
            >
              Our focus is on your overall well being and helping you achieve
              optimal health and esthetics. We provide state-of-the-art dental
              care in a comfortable.
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
                  px: 3.5,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#1e36a1',
                    boxShadow: 'none',
                  },
                }}
              >
                Learn More →
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              position: 'relative',
              height: { xs: 420, md: 470 },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '56%',
                width: { xs: 240, md: 340 },
                height: { xs: 240, md: 340 },
                borderRadius: '50%',
                border: '26px solid rgba(36, 64, 179, 0.12)',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
              }}
            />

            <Box
              component="img"
              src="/images/dental-services/happy-child.jpg"
              alt="Happy Child"
              sx={{
                position: 'absolute',
                top: 0,
                left: { xs: '50%', md: 90 },
                transform: { xs: 'translateX(-50%)', md: 'none' },
                width: { xs: 220, md: 300 },
                height: { xs: 220, md: 300 },
                objectFit: 'cover',
                borderRadius: '8px',
                zIndex: 3,
              }}
            />

            <Box
              component="img"
              src="/images/dental-services/happy-woman.jpg"
              alt="Happy Woman"
              sx={{
                position: 'absolute',
                right: { xs: 10, md: 0 },
                bottom: { xs: 0, md: 10 },
                width: { xs: 180, md: 240 },
                height: { xs: 180, md: 240 },
                objectFit: 'cover',
                borderRadius: '8px',
                zIndex: 4,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
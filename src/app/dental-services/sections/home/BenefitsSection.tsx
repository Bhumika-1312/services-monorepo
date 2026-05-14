'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

const benefitLines = [
  'No second injections or temporaries',
  'No unprofessional doctors',
  'No poor quality products',
];

export default function BenefitsSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        pt: { xs: 8, md: 10 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#f97316',
            mb: 2,
          }}
        >
          We eliminate the inconvenience of multiple visits
        </Typography>

        <Box sx={{ maxWidth: 920, mb: 4 }}>
          {benefitLines.map((line, index) => (
            <Box
              key={line}
              sx={{
                py: 1.5,
                borderBottom:
                  index !== benefitLines.length - 1
                    ? '1px solid #d8dde7'
                    : '1px solid #d8dde7',
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '2rem',
                    md: '3.9rem',
                  },
                  fontWeight: 500,
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  color: '#2440b3',
                }}
              >
                {line}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            mb: 3,
          }}
        >
          <Link
            href="/dental-services/booking"
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
              Make An Appointment →
            </Button>
          </Link>

          <Link
            href="/dental-services/about"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: '#d7dde7',
                color: '#2440b3',
                borderRadius: '999px',
                px: 3.5,
                py: 1,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.78rem',
                backgroundColor: '#ffffff',
                '&:hover': {
                  borderColor: '#2440b3',
                  backgroundColor: '#ffffff',
                },
              }}
            >
              More About Us →
            </Button>
          </Link>
        </Box>

        <Typography
          sx={{
            maxWidth: 760,
            fontSize: '0.86rem',
            lineHeight: 1.9,
            color: '#9ca3af',
          }}
        >
          Our focus is on your overall well being and helping you achieve
          optimal health and esthetics. We provide state-of-the-art dental care
          in a comfortable.
        </Typography>
      </Container>
    </Box>
  );
}
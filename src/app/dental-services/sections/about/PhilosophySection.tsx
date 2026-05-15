'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

export default function PhilosophySection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1.05fr 0.95fr',
            },
            gap: { xs: 6, md: 7 },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: 520,
            }}
          >
            <Box
              component="img"
              src="/images/dental-services/philosophy-clinic.jpg"
              alt="Dental Clinic"
              sx={{
                width: '100%',
                height: { xs: 280, md: 320 },
                objectFit: 'cover',
                borderRadius: '10px',
                display: 'block',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: 250 },
                bottom: -18,
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                px: 2.5,
                py: 1.8,
                boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
                minWidth: 110,
              }}
            >
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  lineHeight: 1,
                  color: '#2440b3',
                  mb: 0.5,
                }}
              >
                15+
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.55rem',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  color: '#9ca3af',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                Years of Clinical Serenity
              </Typography>
            </Box>
          </Box>

          <Box sx={{ maxWidth: 470 }}>
            <Typography
              sx={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#f97316',
                mb: 1.5,
              }}
            >
              Our Philosophy
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: '2.3rem',
                  md: '3.4rem',
                },
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#2440b3',
                mb: 2.5,
              }}
            >
              Expertise Wrapped in Hospitality
            </Typography>

            <Typography
              sx={{
                fontSize: '0.9rem',
                lineHeight: 2,
                color: '#6b7280',
                maxWidth: 430,
              }}
            >
              We believe dental visits shouldn&apos;t be stressful.
              SereneDental was founded on the principle that clinical excellence
              and patient comfort are not mutually exclusive. We use the latest
              pain-free technology to ensure every visit is as peaceful as it is
              effective.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

const points = [
  'Professional dental services 24/7',
  'Various cosmetic dentistry services',
  'Oral hygiene advisory & assessment',
];

export default function QualityServicesSection() {
  return (
    <Box sx={{ backgroundColor: '#f8fafc', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '0.9fr 1.1fr',
            },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '2.4rem', md: '4rem' },
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#2440b3',
                mb: 4,
              }}
            >
              We provide high quality & cost effective services
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {points.map((point) => (
                <Box
                  key={point}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#f97316',
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: '#2440b3',
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            component="img"
            src="/images/dental-services/quality-services.jpg"
            alt="Quality Dental Services"
            sx={{
              width: '100%',
              height: { xs: 320, md: 420 },
              objectFit: 'cover',
              borderRadius: '12px',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
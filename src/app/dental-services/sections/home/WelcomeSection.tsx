'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

const featureCards = [
  {
    title: 'Our Mission',
    description:
      'Has provided a high class facility for the treatment',
  },
  {
    title: 'Professionals in our Clinic',
    description:
      'Has provided a highly experienced professionals',
  },
];

export default function WelcomeSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1.05fr',
            },
            gap: { xs: 5, md: 7 },
            alignItems: 'center',
          }}
        >
          <Box>
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
              Highest level of service you can find
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '2.2rem', md: '3.2rem' },
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#2440b3',
                mb: 2.5,
              }}
            >
              Welcome to SereneDental
            </Typography>

            <Typography
              sx={{
                fontSize: '0.9rem',
                lineHeight: 1.9,
                color: '#6b7280',
                maxWidth: 420,
                mb: 4,
              }}
            >
              Our focus is on your overall well being and helping you achieve
              optimal health and esthetics. We provide state-of-the-art dental
              care in a comfortable.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 420,
              }}
            >
              {featureCards.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #eef2f7',
                    px: 3,
                    py: 2.25,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      color: '#2440b3',
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      lineHeight: 1.7,
                      color: '#6b7280',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            component="img"
            src="/images/dental-services/welcome-clinic.jpg"
            alt="Dental Clinic"
            sx={{
              width: '100%',
              height: { xs: 320, md: 420 },
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
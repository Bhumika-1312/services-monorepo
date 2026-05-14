'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';

const doctors = [
  {
    name: 'Mia Armstrong',
    role: 'Dental Technician',
    image: '/images/dental-services/mia-armstrong.jpg',
  },
  {
    name: 'Jonathan Jassey',
    role: 'Dental Technician',
    image: '/images/dental-services/jonathan-jassey.jpg',
  },
  {
    name: 'Jamilet Alegria',
    role: 'Dental Technician',
    image: '/images/dental-services/jamilet-alegria.jpg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Dental Technician',
    image: '/images/dental-services/leslie-alexander.jpg',
  },
  {
    name: 'Guy Hawkins',
    role: 'Dental Technician',
    image: '/images/dental-services/guy-hawkins.jpg',
  },
  {
    name: 'Jane Cooper',
    role: 'Dental Technician',
    image: '/images/dental-services/jane-cooper.jpg',
  },
];

export default function TeamGridSection() {
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
            textAlign: 'center',
            mb: 5,
          }}
        >
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
            Best specialists in one place
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '2.3rem', md: '3.4rem' },
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#2440b3',
            }}
          >
            Meet Our Team
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {doctors.map((doctor) => (
            <Card
              key={doctor.name}
              elevation={0}
              sx={{
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid #eef2f7',
              }}
            >
              <Box
                component="img"
                src={doctor.image}
                alt={doctor.name}
                sx={{
                  width: '100%',
                  height: 308,
                  objectFit: 'cover',
                }}
              />

              <Box sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#1f2937',
                    mb: 0.5,
                  }}
                >
                  {doctor.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#9ca3af',
                    mb: 1.5,
                  }}
                >
                  {doctor.role}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    color: '#2440b3',
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 16 }} />
                  <CloseIcon sx={{ fontSize: 16 }} />
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
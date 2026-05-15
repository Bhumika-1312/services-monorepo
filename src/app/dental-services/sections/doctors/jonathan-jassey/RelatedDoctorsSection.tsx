'use client';

import Link from 'next/link';
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
    name: 'Leslie Alexander',
    role: 'Dental Technician',
    image: '/images/dental-services/leslie-alexander.jpg',
    slug: 'leslie-alexander',
  },
  {
    name: 'Guy Hawkins',
    role: 'Dental Technician',
    image: '/images/dental-services/guy-hawkins.jpg',
    slug: 'guy-hawkins',
  },
  {
    name: 'Jane Cooper',
    role: 'Dental Technician',
    image: '/images/dental-services/jane-cooper.jpg',
    slug: 'jane-cooper',
  },
];

export default function RelatedDoctorsSection() {
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
            <Link
              key={doctor.name}
              href={`/dental-services/doctors/${doctor.slug}`}
              style={{
                textDecoration: 'none',
                display: 'block',
                pointerEvents: 'none',
              }}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  border: '1px solid #eef2f7',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
                    borderColor: '#dbe4f0',
                  },
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
                    display: 'block',
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
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
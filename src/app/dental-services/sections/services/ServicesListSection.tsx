'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';

const services = [
  {
    title: 'Tooth Protection',
    description:
      'There are 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics.',
    image: '/images/dental-services/tooth-protection.jpg',
  },
  {
    title: 'Dental Implants',
    description:
      'The implant fixture is first placed, so that it is likely to osseointegrate, then a dental prosthetic is added.',
    image: '/images/dental-services/dental-implants.jpg',
  },
  {
    title: 'Dental Care',
    description:
      'A wide range of oral health care services to patients, from routine checkups to fitting braces.',
    image: '/images/dental-services/dental-care.jpg',
  },
  {
    title: 'Teeth Whitening',
    description:
      'Bleaching methods use carbamide peroxide which reacts with water to form hydrogen peroxide.',
    image: '/images/dental-services/teeth-whitening.jpg',
  },
  {
    title: 'Dental Calculus',
    description:
      'Depending upon how they are fabricated and the way they anchor to the adjacent teeth.',
    image: '/images/dental-services/dental-calculus.jpg',
  },
  {
    title: 'Prevention',
    description:
      'The most important part of preventive dentistry is to brush teeth with fluoride toothpaste.',
    image: '/images/dental-services/prevention.jpg',
  },
];

export default function ServicesListSection() {
  return (
    <Box sx={{ backgroundColor: '#f8fafc', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            sx={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#f97316',
              mb: 1.5,
            }}
          >
            Service list
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '2.5rem', md: '3.8rem' },
              fontWeight: 500,
              lineHeight: 1.1,
              color: '#2440b3',
            }}
          >
            Our Clinic Services
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
            gap: 4,
          }}
        >
          {services.map((service) => (
            <Card
              key={service.title}
              elevation={0}
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: '100%',
                  height: 220,
                  objectFit: 'cover',
                  borderRadius: '12px',
                  mb: 3,
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '8px',
                    backgroundColor: '#f97316',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    mt: 0.2,
                  }}
                >
                  <MedicalServicesOutlinedIcon sx={{ fontSize: 22 }} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      color: '#2440b3',
                      mb: 1.5,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.88rem',
                      lineHeight: 1.9,
                      color: '#6b7280',
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
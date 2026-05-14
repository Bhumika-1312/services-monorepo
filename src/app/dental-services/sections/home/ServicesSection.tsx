'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const services = [
  {
    title: 'Teeth Cleaning',
    description:
      'Restore your natural sparkle with professional hygiene.',
    icon: <CleaningServicesOutlinedIcon sx={{ fontSize: 18 }} />,
  },
  {
    title: 'Teeth Whitening',
    description:
      'Brighten your smile with safe, clinical treatments.',
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 18 }} />,
  },
  {
    title: 'Aligners',
    description:
      'Invisible solutions for a perfectly aligned smile.',
    icon: <AddOutlinedIcon sx={{ fontSize: 18 }} />,
  },
  {
    title: 'Root Canal',
    description:
      'Precision care to save your natural teeth.',
    icon: <MedicalServicesOutlinedIcon sx={{ fontSize: 18 }} />,
  },
  {
    title: 'Implants',
    description:
      'High-density implants for lasting confidence.',
    icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 18 }} />,
  },
];

export default function ServicesSection() {
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
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 2,
            mb: 4,
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
              Our Expertise
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#2440b3',
              }}
            >
              Specialized Dental Care
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#2440b3',
              cursor: 'pointer',
            }}
          >
            View All Services →
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
            gap: 2,
          }}
        >
          {services.map((service) => (
            <Card
              key={service.title}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: '14px',
                backgroundColor: '#ffffff',
                border: '1px solid #eef2f7',
                minHeight: 230,
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  backgroundColor: '#f97316',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                {service.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#1f2937',
                  mb: 1.5,
                }}
              >
                {service.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.75rem',
                  lineHeight: 1.8,
                  color: '#9ca3af',
                  mb: 3,
                }}
              >
                {service.description}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#2440b3',
                }}
              >
                Learn More →
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
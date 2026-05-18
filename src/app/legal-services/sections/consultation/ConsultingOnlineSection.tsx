'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';

const services = [
  {
    title: 'Property Matter',
    price: 'Rs. 2500.00',
    image: '/images/legal/property-matter.jpg',
  },
  {
    title: 'Divorce Matter',
    price: 'Rs. 1500.00',
    image: '/images/legal/divorce-matter.jpg',
  },
  {
    title: 'Immigration Matter',
    price: 'Rs. 3000.00',
    image: '/images/legal/immigration-matter.jpg',
  },
];

export default function ConsultingOnlineSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 8, md: 9 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: '#374151',
            mb: 4,
          }}
        >
          Our Online Legal Services
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2.5,
            maxWidth: 920,
            mx: 'auto',
          }}
        >
          {services.map((service) => (
            <Card
              key={service.title}
              elevation={0}
              sx={{
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: '100%',
                  height: 120,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <Box sx={{ p: 1.8 }}>
                <Typography
                  sx={{
                    fontSize: '0.86rem',
                    fontWeight: 500,
                    color: '#111827',
                    mb: 0.4,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.66rem',
                    color: '#9ca3af',
                  }}
                >
                  {service.price}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
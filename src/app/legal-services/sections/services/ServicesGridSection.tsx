'use client';

import Link from 'next/link';
import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServicesGridSectionProps {
  title: string;
  services: ServiceItem[];
}

export default function ServicesGridSection({
  title,
  services,
}: ServicesGridSectionProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 6, md: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: {
              xs: '2rem',
              md: '2.85rem',
            },
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: '#0f172a',
            mb: 1.2,
            maxWidth: 620,
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            width: 78,
            height: '2px',
            backgroundColor: '#1f2937',
            mb: 5,
          }}
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 3.5,
            rowGap: 4,
          }}
        >
          {services.map((service) => (
            <Card
              key={service.title}
              component={Link}
              href="/legal-services/contact"
              elevation={0}
              sx={{
                textDecoration: 'none',
                p: 3,
                minHeight: 290,
                borderRadius: 0,
                border: '1px solid #8b93a1',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#111827',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  color: '#111827',
                  mb: 2.2,
                  minHeight: 58,
                }}
              >
                {service.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.88rem',
                  lineHeight: 2,
                  color: '#6b7280',
                  flexGrow: 1,
                }}
              >
                {service.description}
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  pt: 1.6,
                  borderTop: '1px solid #d1d5db',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.8,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#111827',
                  }}
                >
                  Contact us
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: '#111827',
                    transition: 'transform 0.3s ease',
                    '.MuiCard-root:hover &': {
                      transform: 'translateX(3px)',
                    },
                  }}
                >
                  →
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Radio,
  Typography,
} from '@mui/material';
import StepProgress from './StepProgress';
import BookingSummaryCard from './BookingSummaryCard';

const services = [
  {
    title: 'Audit & Assurance',
    description:
      'Statutory audits, internal audits, and financial reporting.',
    duration: '2-4 weeks',
    price: '₹12,500',
  },
  {
    title: 'Tax Advisory',
    description:
      'Income tax planning and corporate taxation support.',
    duration: '3-5 days',
    price: '₹8,500',
  },
  {
    title: 'Company Registration',
    description:
      'Private limited company and LLP incorporation.',
    duration: '7-10 days',
    price: '₹6,000',
  },
  {
    title: 'GST Services',
    description:
      'GST registration, filing, and reconciliations.',
    duration: '1-3 days',
    price: '₹3,500',
  },
];

export default function ServiceSelectionSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f3f7fb',
        minHeight: '100vh',
        pt: '110px',
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        {/* Progress Steps */}
        <StepProgress step={1} />

        <Grid container spacing={4}>
          {/* Left Content */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#183b63',
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Select Your Service
            </Typography>

            <Typography
              sx={{
                fontSize: '0.95rem',
                lineHeight: 1.9,
                color: '#5f6670',
                maxWidth: 760,
                mb: 5,
              }}
            >
              Choose the accounting or compliance service that best matches your
              requirements. You can provide additional details in the next step.
            </Typography>

            {/* Service Cards */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  elevation={0}
                  sx={{
                    border:
                      index === 0
                        ? '2px solid #183b63'
                        : '1px solid #d8dee6',
                    borderRadius: '4px',
                    backgroundColor: '#ffffff',
                    p: 3,
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Radio
                      checked={index === 0}
                      sx={{
                        mt: -0.5,
                        color: '#183b63',
                        '&.Mui-checked': {
                          color: '#183b63',
                        },
                      }}
                    />

                    <Box sx={{ flex: 1 }}>
                      {/* Title */}
                      <Typography
                        sx={{
                          fontSize: '1.35rem',
                          fontWeight: 600,
                          color: '#2f3439',
                          mb: 1,
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          fontSize: '0.92rem',
                          lineHeight: 1.8,
                          color: '#5f6670',
                          mb: 2,
                        }}
                      >
                        {service.description}
                      </Typography>

                      {/* Meta */}
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 4,
                          flexWrap: 'wrap',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: '#7b8794',
                          }}
                        >
                          Duration: {service.duration}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: '#183b63',
                          }}
                        >
                          Starting at {service.price}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>

            {/* Continue Button */}
            <Box sx={{ mt: 5 }}>
              <Link
                href="/ca-services/booking/details"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#183b63',
                    px: 5,
                    py: 1.4,
                    borderRadius: '2px',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#0f2f5f',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Continue to Details
                </Button>
              </Link>
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <BookingSummaryCard
              buttonText="Continue to Details"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
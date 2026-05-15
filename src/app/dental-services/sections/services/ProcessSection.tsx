'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

const steps = [
  {
    number: '1',
    title: 'Discussion',
    description:
      'Using the contact form on the website, you can send us a detailed enquiry.',
    icon: <DescriptionOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    number: '2',
    title: 'Electronic contract',
    description:
      'One of our dentists will examine your request and we will make a suggestion.',
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    number: '3',
    title: 'Dental surgery',
    description:
      'There are only 2 dental specialties that only focus on dental esthetics.',
    icon: <LocationOnOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    number: '4',
    title: 'Follow up check',
    description:
      'The most important part of preventive dentistry is to brush teeth.',
    icon: <SentimentSatisfiedAltOutlinedIcon sx={{ fontSize: 22 }} />,
  },
];

export default function ProcessSection() {
  return (
    <Box sx={{ backgroundColor: '#ffffff', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: '2.4rem', md: '3.8rem' },
              fontWeight: 500,
              color: '#2440b3',
              mb: 2,
            }}
          >
            The Best Process
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              mx: 'auto',
              fontSize: '0.95rem',
              lineHeight: 1.9,
              color: '#9ca3af',
            }}
          >
            Our focus is on your overall well being and helping you achieve
            optimal health and esthetics. We provide state-of-the-art dental
            care in a comfortable.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {steps.map((step) => (
            <Box key={step.number} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 72,
                  height: 72,
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '2px solid #fecaca',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f97316',
                  }}
                >
                  {step.icon}
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    top: -4,
                    right: -4,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: '#f97316',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {step.number}
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  mb: 1.5,
                }}
              >
                {step.number}. {step.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.8rem',
                  lineHeight: 1.8,
                  color: '#9ca3af',
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
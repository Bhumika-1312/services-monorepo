'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const features = [
  {
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: 18 }} />,
    title: 'Real-Time Availability',
    description:
      'Every seat shown is guaranteed to be available. Our sync with restaurant systems is instantaneous.',
  },
  {
    icon: <SmsOutlinedIcon sx={{ fontSize: 18 }} />,
    title: 'Instant Confirmation',
    description:
      'Secure your reservation instantly. Receive immediate SMS and email confirmations.',
  },
  {
    icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 18 }} />,
    title: 'Exclusive Perks',
    description:
      'BistroReserve members get access to priority seating and chef-curated tasting menus.',
  },
];

export default function TechnologySection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          sx={{
            alignItems: 'center',
          }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 460,
                mx: { xs: 'auto', md: 0 },
              }}
            >
              <Box
                component="img"
                src="/images/restaurant/technology-chef.jpg"
                alt="Chef preparing a dish"
                sx={{
                  width: '100%',
                  height: { xs: 320, md: 460 },
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '14px',
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontSize: { xs: '2rem', md: '2.6rem' },
                fontWeight: 700,
                color: '#222222',
                lineHeight: 1.2,
                mb: 4,
              }}
            >
              Technology Meets Hospitality
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              {features.map((feature) => (
                <Box
                  key={feature.title}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: '8px',
                      backgroundColor: '#f8e6db',
                      color: '#b45a0a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      mt: 0.25,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#222222',
                        mb: 0.5,
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.92rem',
                        lineHeight: 1.8,
                        color: '#6b7280',
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
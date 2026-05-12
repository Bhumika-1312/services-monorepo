'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const stats = [
  {
    value: '5,000+',
    label: 'Clients Served',
  },
  {
    value: '12K+',
    label: 'Filings Completed',
  },
  {
    value: '15+',
    label: 'Years Experience',
  },
  {
    value: '99%',
    label: 'Compliance Rate',
  },
];

export default function AboutSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f3f7fb',
        minHeight: '100vh',
        pt: '72px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundImage:
            "linear-gradient(rgba(15,47,95,0.88), rgba(15,47,95,0.88)), url('/images/ca/about-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
              mb: 2,
            }}
          >
            Established Excellence
          </Typography>

          <Typography
            sx={{
              fontSize:"40px",
              fontWeight: 700,
              lineHeight: 1.12,
              maxWidth: 720,
              mb: 3,
            }}
          >
            Simplifying Finance & Compliance for Everyone
          </Typography>

          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 720,
            }}
          >
            Professional tax advisory, audit, and compliance services tailored
            for the modern economy. We bring institutional precision to your
            financial journey.
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #dbe3eb',
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            {stats.map((stat) => (
              <Grid
                key={stat.label}
                size={{ xs: 6, md: 3 }}
                sx={{
                  py: 3.5,
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '2.2rem',
                    fontWeight: 700,
                    color: '#183b63',
                    lineHeight: 1,
                    mb: 0.6,
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#7b8794',
                  }}
                >
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={8}
            sx={{
              alignItems: 'center',
            }}
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  pl: 3,
                  borderLeft: '3px solid #183b63',
                  mb: 5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#2f3439',
                    mb: 1.5,
                  }}
                >
                  Our Mission
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    lineHeight: 1.9,
                    color: '#5f6670',
                  }}
                >
                  To empower businesses and individuals through transparent,
                  technology-driven financial guidance, ensuring compliance is
                  never a barrier to growth.
                </Typography>
              </Box>

              <Box
                sx={{
                  pl: 3,
                  borderLeft: '3px solid #183b63',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#2f3439',
                    mb: 1.5,
                  }}
                >
                  Our Vision
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    lineHeight: 1.9,
                    color: '#5f6670',
                  }}
                >
                  To become the world&apos;s most trusted digital-first chartered
                  accountancy platform, setting new benchmarks for ethical
                  financial management.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component="img"
                src="/images/ca/about-office.jpg"
                alt="Modern office meeting room"
                sx={{
                  width: '100%',
                  maxWidth: 720,
                  ml: { md: 'auto' },
                  borderRadius: '4px',
                  objectFit: 'cover',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
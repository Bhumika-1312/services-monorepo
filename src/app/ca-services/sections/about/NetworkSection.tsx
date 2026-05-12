'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const highlights = [
  {
    number: '1',
    title: 'Rigorous Screening',
    description:
      'A 5-stage vetting process evaluating technical proficiency and regulatory expertise.',
  },
  {
    number: '2',
    title: 'Onboarding & Ethics',
    description:
      'Comprehensive training on our proprietary platform and adherence to our code of ethics.',
  },
  {
    number: '3',
    title: 'Continuous Quality Audits',
    description:
      'Regular peer reviews to ensure every filing meets the highest professional standards.',
  },
];

export default function NetworkSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 9 },
        backgroundColor: '#f3f7fb',
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            border: '1px solid #d8dee6',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
          }}
        >
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                p: { xs: 4, md: 5 },
                height: '100%',
              }}
            >
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: '#2f3439',
                  mb: 2,
                }}
              >
                Our Elite Network
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.95rem',
                  lineHeight: 1.9,
                  color: '#5f6670',
                  mb: 4,
                }}
              >
                We don&apos;t just hire; we curate. Our network is built on the
                foundation of expertise, ethics, and a commitment to client
                success.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {highlights.map((item) => (
                  <Box
                    key={item.number}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        backgroundColor: '#183b63',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        flexShrink: 0,
                        mt: 0.2,
                      }}
                    >
                      {item.number}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#2f3439',
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.88rem',
                          lineHeight: 1.8,
                          color: '#5f6670',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Images */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container sx={{ height: '100%' }}>
              <Grid size={{ xs: 6 }}>
                <Box
                  component="img"
                  src="/images/ca/network-handshake.jpg"
                  alt="Business handshake"
                  sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: 390,
                    objectFit: 'cover',
                  }}
                />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Box
                  component="img"
                  src="/images/ca/network-laptop.jpg"
                  alt="Financial documents and laptop"
                  sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: 390,
                    objectFit: 'cover',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
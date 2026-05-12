'use client';

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const experts = [
  {
    name: 'CA Anirudh Sharma',
    details: '12+ Years Experience • International Tax Specialist',
    successRate: '99.2%',
    clients: '450+',
    image: '/images/ca/expert-1.jpg',
  },
  {
    name: 'CA Megha Gupta',
    details: '8+ Years Experience • Corporate Law & GST',
    successRate: '100%',
    clients: '310+',
    image: '/images/ca/expert-2.jpg',
  },
];

export default function ExpertsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#f3f7fb',
      }}
    >
      <Container maxWidth="xl">
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
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#183b63',
                lineHeight: 1.15,
                mb: 1,
              }}
            >
              Verified CA Experts
            </Typography>

            <Typography
              sx={{
                fontSize: '0.95rem',
                color: '#6b7280',
                lineHeight: 1.7,
              }}
            >
              Rigorous screening process ensuring only the top 1% profiles.
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#183b63',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            View all experts →
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
          }}
        >
          {experts.map((expert) => (
            <Card
              key={expert.name}
              elevation={0}
              sx={{
                borderRadius: '0px',
                border: '1px solid #d8dee6',
                backgroundColor: '#ffffff',
                px: { xs: 2, md: 3 },
                py: 2,
              }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  alignItems: 'center',
                }}
              >
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={expert.image}
                      alt={expert.name}
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '4px',
                        objectFit: 'cover',
                        flexShrink: 0,
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          fontSize: '18px',
                          fontWeight: 500,
                          color: '#374151',
                          lineHeight: 1.2,
                          mb: 0.4,
                        }}
                      >
                        {expert.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          color: '#6b7280',
                          lineHeight: 1.6,
                        }}
                      >
                        {expert.details}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Success Rate */}
                <Grid size={{ xs: 6, md: 2 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        color: '#8b95a1',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        mb: 0.3,
                      }}
                    >
                      Success Rate
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#183b63',
                        lineHeight: 1.2,
                      }}
                    >
                      {expert.successRate}
                    </Typography>
                  </Box>
                </Grid>

                {/* Clients */}
                <Grid size={{ xs: 6, md: 2 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        color: '#8b95a1',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        mb: 0.3,
                      }}
                    >
                      Clients
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#183b63',
                        lineHeight: 1.2,
                      }}
                    >
                      {expert.clients}
                    </Typography>
                  </Box>
                </Grid>

                {/* CTA Button */}
                <Grid size={{ xs: 12, md: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: {
                        xs: 'stretch',
                        md: 'flex-end',
                      },
                    }}
                  >
                    <Button
                      variant="contained"
                      fullWidth={false}
                      sx={{
                        minWidth: 140,
                        height: 44,
                        backgroundColor: '#183b63',
                        color: '#ffffff',
                        textTransform: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderRadius: '3px',
                        boxShadow: 'none',
                        '&:hover': {
                          backgroundColor: '#0f2f5f',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      Consult Now
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
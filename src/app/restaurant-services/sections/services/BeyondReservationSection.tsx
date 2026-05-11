'use client';

import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';

export default function BeyondReservationSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.6rem' },
            fontWeight: 700,
            color: '#222',
            mb: 6,
          }}
        >
          Beyond the reservation
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: 'relative',
                height: 400,
                borderRadius: '6px',
                overflow: 'hidden',
                backgroundImage:
                  "url('/images/restaurant/curated-collections.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                p: 4,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15))',
                }}
              />
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Curated Collections
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    maxWidth: 420,
                    lineHeight: 1.7,
                  }}
                >
                  Discover themed recommendations and handpicked dining
                  experiences.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                p: 4,
                borderRadius: '12px',
                border: '1px solid #ece7e4',
                backgroundColor: '#f8f6f5',
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: '1.4rem', mb: 2 }}>
                Real-Time Alerts
              </Typography>
              <Typography sx={{ color: '#666', lineHeight: 1.8 }}>
                Get notified instantly when sought-after reservations become
                available.
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '12px',
                border: '1px solid #ece7e4',
                backgroundColor: '#f8f6f5',
                height: '100%',
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: '1.3rem', mb: 2 }}>
                Group Planning
              </Typography>
              <Typography sx={{ color: '#666', lineHeight: 1.8 }}>
                Easily coordinate reservations and invite your guests.
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                height: '100%',
                borderRadius: '12px',
                backgroundColor: '#111111',
                color: '#ffffff',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 1 }}>
                For Restaurant Owners
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.75)',
                  maxWidth: 520,
                  mx: 'auto',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Join our platform and reach more diners while managing bookings
                effortlessly.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  alignSelf: 'center',
                  backgroundColor: '#ffffff',
                  color: '#111111',
                  textTransform: 'none',
                  borderRadius: '999px',
                  px: 4,
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    boxShadow: 'none',
                  },
                }}
              >
                Partner with us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
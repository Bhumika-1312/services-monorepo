'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', md: '3.4rem' },
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#3b3b3b',
              mb: 1,
            }}
          >
            The Serene Transformation
          </Typography>

          <Typography
            sx={{
              fontSize: '0.72rem',
              lineHeight: 1.8,
              color: '#b1b7c3',
            }}
          >
            Real results from patients who chose a calmer path to dental health.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '2.2fr 1fr',
            },
            gap: 3,
            alignItems: 'stretch',
          }}
        >
          <Card
            elevation={0}
            sx={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              minHeight: 260,
            }}
          >
            <Box
              component="img"
              src="/images/dental-services/smile-transformation.jpg"
              alt="Smile Transformation"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                left: 28,
                bottom: 24,
                color: '#ffffff',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  opacity: 0.8,
                  mb: 0.5,
                }}
              >
                Orthodontics
              </Typography>

              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  maxWidth: 420,
                }}
              >
                "I finally have the confidence to smile in photos again."
              </Typography>
            </Box>
          </Card>

          <Card
            elevation={0}
            sx={{
              borderRadius: '18px',
              backgroundColor: '#ffffff',
              border: '1px solid #eef2f7',
              p: 4,
              minHeight: 260,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '0.95rem',
                color: '#d4d8e0',
                mb: 2,
              }}
            >
              ☆☆☆☆☆
            </Typography>

            <Typography
              sx={{
                fontSize: '0.84rem',
                lineHeight: 2,
                color: '#6b7280',
                mb: 3,
              }}
            >
              “The most relaxing dental visit I’ve ever had. It felt more like a
              spa than a clinic.”
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  backgroundColor: '#e6f0ff',
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#1f2937',
                  }}
                >
                  Sarah Jenkins
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#b1b7c3',
                  }}
                >
                  Patient since 2023
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 4,
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: '2px',
              backgroundColor: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9ca3af',
              fontSize: '0.85rem',
            }}
          >
            ←
          </Box>

          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: '2px',
              backgroundColor: '#f97316',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '0.85rem',
            }}
          >
            →
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
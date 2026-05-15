'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';

const testimonials = [
  {
    quote:
      'The transparency about costs and the procedure steps made me feel in control for the first time at a dentist. The whitening results were incredible!',
    author: 'Michael Chen',
    role: 'Teeth Whitening Patient',
    avatarColor: '#d9e7f3',
  },
  {
    quote:
      'I traveled from across the state for their implant specialists. The professionalism and the warm atmosphere made it worth every mile. Highly recommended.',
    author: 'Elena Rodriguez',
    role: 'Dental Implants Patient',
    avatarColor: '#d8e6da',
  },
];

export default function PatientVoiceSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography
            sx={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#f97316',
              mb: 1.5,
            }}
          >
            Doctor&apos;s client
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '2.4rem', md: '3.8rem' },
              fontWeight: 500,
              lineHeight: 1.1,
              color: '#1f2937',
            }}
          >
            Patient Voice
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 3,
          }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              elevation={0}
              sx={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5edf6',
                borderRadius: '16px',
                p: { xs: 3.5, md: 4 },
                minHeight: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: '#5f6672',
                  maxWidth: 460,
                }}
              >
                &quot;{testimonial.quote}&quot;
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mt: 4,
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: testimonial.avatarColor,
                    flexShrink: 0,
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: '#1f2937',
                    }}
                  >
                    {testimonial.author}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.68rem',
                      lineHeight: 1.4,
                      color: '#9ca3af',
                    }}
                  >
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
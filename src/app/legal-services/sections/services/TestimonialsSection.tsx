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
      'I am running company in United State. Lex Litigation gave us the best ALSP help. It was affordable, fast, and easy. The team was nice and did a great job.',
    author: 'Sabo Masties',
  },
  {
    quote:
      'Selling my flat in India while living abroad seemed impossible, but Lex Litigation managed all legal formalities effortlessly.',
    author: 'Sameer',
  },
  {
    quote:
      'I was worried about illegal land occupation. Lex Litigation took immediate legal action and protected my property.',
    author: 'Mansur',
  },
];

export default function TestimonialsSection() {
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
              md: '3.25rem',
            },
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#2f2f2f',
            textAlign: 'center',
            mb: 5,
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          Client Testimonials
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 3.2,
          }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              elevation={0}
              sx={{
                borderRadius: 0,
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                minHeight: 180,
                px: 3,
                py: 2.8,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.92rem',
                  lineHeight: 2.1,
                  color: '#4b5563',
                  mb: 4,
                  flexGrow: 1,
                }}
              >
                {testimonial.quote}
              </Typography>

              <Typography
                sx={{
                  fontSize: '1.05rem',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: '#2f2f2f',
                }}
              >
                {testimonial.author}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
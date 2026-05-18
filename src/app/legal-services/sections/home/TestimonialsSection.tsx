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
    date: 'January 14, 2026',
  },
  {
    quote:
      'Selling my flat in India while living abroad seemed impossible, but Lex Litigation managed all legal formalities effortlessly.',
    author: 'Sameer',
    date: 'January 4, 2026',
    featured: true,
  },
  {
    quote:
      'I was worried about illegal land occupation. Lex Litigation took immediate legal action and protected my property.',
    author: 'Mansur',
    date: 'November 28, 2025',
  },
];

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 10, md: 14 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mb: 7,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#2f2f2f',
              mb: 2,
            }}
          >
            What Our Clients Say
          </Typography>

          <Typography
            sx={{
              fontSize: '0.78rem',
              fontWeight: 400,
              color: '#6b7280',
            }}
          >
            Listen how we help our clients
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
            alignItems: 'center',
          }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: 0,
                backgroundColor: '#ffffff',
                border: '1px solid #f1f1f1',
                minHeight: 245,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: testimonial.featured
                  ? '0 14px 35px rgba(15, 23, 42, 0.10)'
                  : 'none',
                transform: testimonial.featured
                  ? { md: 'translateY(-14px)' }
                  : 'none',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: '#d89b00',
                  letterSpacing: '0.08em',
                  mb: 2.5,
                }}
              >
                ★★★★☆
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.84rem',
                  lineHeight: 2,
                  color: '#4b5563',
                  flexGrow: 1,
                  mb: 3,
                }}
              >
                {testimonial.quote}
              </Typography>

              <Box>
                <Typography
                  sx={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#111827',
                    mb: 0.4,
                  }}
                >
                  {testimonial.author}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    color: '#9ca3af',
                  }}
                >
                  {testimonial.date}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 5,
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                fontSize: '1rem',
              }}
            >
              ←
            </Box>

            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: '#2f2f2f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '1rem',
              }}
            >
              →
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const testimonials = [
  {
    name: 'Siddharth Jain',
    company: 'CEO, TECHNOVA SOLUTIONS',
    review:
      '"FinTrust helped us migrate our entire accounting system to the cloud seamlessly. Their CAs are proactive and extremely knowledgeable."',
  },
  {
    name: 'Priya Kapoor',
    company: 'FOUNDER, BLOOM DESIGNS',
    review:
      '"The easiest way to handle GST compliance. I saved nearly 20% on my taxes this year thanks to their expert consultation."',
  },
  {
    name: 'Rahul Verma',
    company: 'DIRECTOR, URBANLOGISTICS',
    review:
      '"Reliable, professional, and transparent. The fixed-fee model is a game changer for growing startups like ours."',
  },
];

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f3f7fb',
        py: { xs: 8, md: 9 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid
              key={testimonial.name}
              size={{ xs: 12, md: 4 }}
            >
              <Box
                sx={{
                  backgroundColor: '#f7f7f7',
                  minHeight: 170,
                  px: 4,
                  py: 3.5,
                  borderLeft: '4px solid #3f3f3f',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Quote */}
                <Typography
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    color: '#555555',
                    mb: 3,
                  }}
                >
                  {testimonial.review}
                </Typography>

                {/* Author */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#374151',
                      lineHeight: 1.2,
                      mb: 0.4,
                    }}
                  >
                    {testimonial.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: '#7b8794',
                      textTransform: 'uppercase',
                    }}
                  >
                    {testimonial.company}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';

const values = [
  {
    title: 'Our Values',
    description:
      'Empowering litigants and creating opportunities for legal professionals. We endeavor to create sustainable eco-system.',
  },
  {
    title: 'Our Mission',
    description:
      'Reducing burden over rising burden of litigations in Justice System and helping revive efficiency in delivery of Justice by Innovative Services.',
  },
  {
    title: 'Our Impact',
    description:
      'We are committed to serve our clients. We provide exceptional services beyond law and taking subject matters into consideration.',
  },
  {
    title: 'Our People',
    description:
      'Our people have exceptional skill sets with prominent skill sets and capabilities with technologists, lawyers, legal experts, economists, data analysts.',
  },
  {
    title: 'Our Ideas',
    description:
      'Our philosophy is to dive in to the core to the depth to nucleus of the client’s aspiration and expectations, understanding DNA and gene of business, and empowering them.',
  },
  {
    title: 'Our Vision',
    description:
      'Our team consists of bunch of ingenious intellectuals from various areas of practice and business consulting with common belief "There is no right or wrong, unless you do".',
  },
];

export default function ValuesSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography
            sx={{
              fontSize: '0.55rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: '#9ca3af',
              mb: 1,
            }}
          >
            Our Values
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#111827',
              mb: 1,
            }}
          >
            The Foundation of Lex Litigation
          </Typography>

          <Typography
            sx={{
              fontSize: '0.8rem',
              color: '#6b7280',
            }}
          >
            Our values shape how we work and how we serve our clients.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 1.5,
          }}
        >
          {values.map((value) => (
            <Card
              key={value.title}
              elevation={0}
              sx={{
                p: 2.5,
                minHeight: 155,
                borderRadius: '2px',
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#111827',
                  mb: 1.5,
                }}
              >
                {value.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.68rem',
                  lineHeight: 1.9,
                  color: '#6b7280',
                }}
              >
                {value.description}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
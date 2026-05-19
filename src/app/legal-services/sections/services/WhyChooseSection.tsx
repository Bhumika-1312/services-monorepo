'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

interface WhyChooseSectionProps {
  data: {
    title: string;
    description1: string;
    description2: string;
    image: string;
  };
}

export default function WhyChooseSection({
  data,
}: WhyChooseSectionProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 6, md: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1fr 1fr',
            },
            gap: { xs: 4, lg: 5 },
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={data.image}
            alt={data.title}
            sx={{
              width: '100%',
              height: 436,
              objectFit: 'cover',
              display: 'block',
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: { xs: '1.8rem', md: '2.4rem' },
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: '#111827',
                mb: 2.5,
                maxWidth: 520,
              }}
            >
              {data.title}
            </Typography>

            <Typography
              sx={{
                fontSize: '0.75rem',
                lineHeight: 2,
                color: '#4b5563',
                mb: 2,
              }}
            >
              {data.description1}
            </Typography>

            <Typography
              sx={{
                fontSize: '0.75rem',
                lineHeight: 2,
                color: '#4b5563',
              }}
            >
              {data.description2}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
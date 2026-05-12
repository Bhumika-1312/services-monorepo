'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const leaders = [
  {
    name: 'David Henderson',
    role: 'FOUNDING PARTNER & CEO',
    description:
      'Former Lead Auditor at a Big Four firm with 20+ years expertise in corporate restructuring.',
    image: '/images/ca/leader-1.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'CHIEF TAX STRATEGIST',
    description:
      'Specializes in international tax compliance and wealth management for HNI clients.',
    image: '/images/ca/leader-2.jpg',
  },
  {
    name: 'Marcus Thorne',
    role: 'OPERATIONS DIRECTOR',
    description:
      'Leading the digital transformation of traditional auditing workflows since 2012.',
    image: '/images/ca/leader-3.jpg',
  },
];

export default function LeadershipSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 9 },
        backgroundColor: '#f3f7fb',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: '2rem', md: '2.6rem' },
              fontWeight: 700,
              color: '#183b63',
              mb: 1,
            }}
          >
            Leadership & Founders
          </Typography>

          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#5f6670',
              maxWidth: 720,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Led by industry veterans with decades of collective experience in
            international tax law and corporate auditing.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {leaders.map((leader) => (
            <Grid
              key={leader.name}
              size={{ xs: 12, md: 4 }}
            >
              <Box>
                <Box
                  component="img"
                  src={leader.image}
                  alt={leader.name}
                  sx={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    objectFit: 'cover',
                    mb: 2,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#2f3439',
                    mb: 0.5,
                  }}
                >
                  {leader.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#183b63',
                    mb: 1,
                  }}
                >
                  {leader.role}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.88rem',
                    lineHeight: 1.8,
                    color: '#5f6670',
                  }}
                >
                  {leader.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
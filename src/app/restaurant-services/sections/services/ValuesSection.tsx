'use client';

import { Box, Card, Container, Grid, Typography } from '@mui/material';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const values = [
  {
    title: 'Quality',
    text: 'We curate the finest dining experiences with care and attention.',
    icon: <StarOutlinedIcon sx={{ fontSize: 18 }} />,
  },
  {
    title: 'Convenience',
    text: 'Real-time reservations and seamless booking, fast and effortless.',
    icon: <LockOutlinedIcon sx={{ fontSize: 18 }} />,
  },
  {
    title: 'Trust',
    text: 'Personalized service and secure bookings every step of the way.',
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 18 }} />,
  },
  {
    title: 'Variety',
    text: 'From neighborhood gems to world-class destinations.',
    icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 18 }} />,
  },
];

export default function ValuesSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f6f4f3' }}>
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
          The values that guide us
        </Typography>

        <Grid container spacing={3}>
          {values.map((value) => (
            <Grid key={value.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  border: '1px solid #ece7e4',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: '8px',
                    backgroundColor: '#f8e6db',
                    color: '#b45a0a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {value.icon}
                </Box>

                <Typography sx={{ fontWeight: 700, mb: 1 }}>
                  {value.title}
                </Typography>

                <Typography
                  sx={{
                    color: '#666',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                  }}
                >
                  {value.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
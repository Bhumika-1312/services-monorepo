'use client';

import { Box, Container, Typography } from '@mui/material';
import SearchBar from './SearchBar';

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.58)',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          pt: 10,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: '2.4rem',
              sm: '3.5rem',
              md: '4.5rem',
            },
            lineHeight: 1.1,
            mb: 3,
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          Effortless Sophistication
          <br />
          in Every Seat.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '760px',
            mx: 'auto',
            lineHeight: 1.7,
            fontSize: {
              xs: '1rem',
              md: '1.15rem',
            },
          }}
        >
          Discover the finest culinary destinations and secure your table at the city's
          most exclusive bistros with just a few clicks.
        </Typography>

        <SearchBar />
      </Container>
    </Box>
  );
}
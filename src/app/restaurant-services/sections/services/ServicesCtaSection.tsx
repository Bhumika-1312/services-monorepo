'use client';

import { Box, Button, Container, Typography } from '@mui/material';

export default function ServicesCtaSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 12 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 700,
              color: '#222',
              mb: 2,
            }}
          >
            Ready for your next meal?
          </Typography>

          <Typography
            sx={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Discover and book the best tables in your city today.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#b45a0a',
                borderRadius: '999px',
                px: 4,
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#9a4b08',
                  boxShadow: 'none',
                },
              }}
            >
              Find a Restaurant
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderRadius: '999px',
                px: 4,
                py: 1.2,
                textTransform: 'none',
                fontWeight: 500,
                borderColor: '#d7c5b8',
                color: '#555',
                '&:hover': {
                  borderColor: '#b45a0a',
                  backgroundColor: '#fffaf6',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
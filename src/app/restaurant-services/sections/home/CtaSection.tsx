'use client';

import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

export default function CtaSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            borderRadius: '22px',
            background:
              'linear-gradient(90deg, #b14f06 0%, #a84705 50%, #b35b1f 100%)',
            minHeight: 280,
            px: { xs: 4, md: 8 },
            py: { xs: 6, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              color: '#ffffff',
              fontSize: { xs: '2rem', md: '3.6rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2,
              maxWidth: 900,
            }}
          >
            Ready for your next culinary adventure?
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.95)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              mb: 4,
              maxWidth: 560,
            }}
          >
            Join thousands of diners who trust BistroReserve for their most
            important moments.
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffffff',
              color: '#b45a0a',
              borderRadius: '999px',
              px: 6,
              py: 1.4,
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#fafafa',
                boxShadow: 'none',
              },
            }}
          >
            Reserve your table now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
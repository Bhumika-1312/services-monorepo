'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

export default function AboutHeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 520, md: 620 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src="/images/legal/about-hero-bg.jpg"
        alt="Courthouse"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(10, 18, 38, 0.58)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: 760,
            mx: 'auto',
            backgroundColor: 'rgba(11, 21, 52, 0.82)',
            px: { xs: 4, md: 8 },
            py: { xs: 4, md: 6 },
            borderTop: '12px solid rgba(255,255,255,0.03)',
            borderBottom: '12px solid rgba(255,255,255,0.03)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35)',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.6rem', md: '2.4rem' },
              fontWeight: 700,
              lineHeight: 1.25,
              color: '#d89b00',
              mb: 3,
            }}
          >
            Building Trust in Justice for Better Tomorrow
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.82rem', md: '0.88rem' },
              lineHeight: 2,
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            With its growing challenges in legal industry today, Lex Litigation
            is committed to offering innovative solutions to our individual and
            business clients. Built on a foundation of legal excellence and
            institutional precision, we deliver strategic counsel backed by
            decades of courtroom experience across multiple jurisdictions.
            <br />
            <br />
            Our attorneys represent clients before the Supreme Court, High
            Courts, and specialized tribunals, ensuring that every matter is
            approached with meticulous preparation, rigorous advocacy, and
            unwavering dedication to protecting our clients&apos; interests.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
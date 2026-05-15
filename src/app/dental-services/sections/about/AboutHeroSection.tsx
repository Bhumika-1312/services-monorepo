'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

const partners = [
  {
    name: 'FeatherDev',
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 18 }} />,
  },
  {
    name: 'Lightbox',
    icon: <DiamondOutlinedIcon sx={{ fontSize: 18 }} />,
  },
  {
    name: 'Boltshift',
    icon: <BoltOutlinedIcon sx={{ fontSize: 18 }} />,
  },
];

export default function AboutHeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            position: 'relative',
            height:679,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '58% 42%',
            },
            overflow: 'hidden',
            backgroundColor: '#ffffff',
          }}
        >
          <Box
            component="img"
            src="/images/dental-services/about-hero.jpg"
            alt="Who We Are"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: { xs: 4, md: 7 },
              py: { xs: 5, md: 6 },
              backgroundColor: '#ffffff',
            }}
          >
            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#f97316',
                mb: 2,
              }}
            >
              #1 Dental clinic in Mumbai
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '2.8rem', md: '4.4rem' },
                fontWeight: 500,
                lineHeight: 1.08,
                color: '#2440b3',
                mb: 3,
              }}
            >
              Who We Are
            </Typography>

            <Typography
              sx={{
                fontSize: '0.96rem',
                lineHeight: 2,
                color: '#4b5563',
                maxWidth: 420,
                mb: 4,
              }}
            >
              Protect your smile and keep it healthy, with the largest network
              of dentists nationwide, quick answers and personalized service.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 3,
                flexWrap: 'wrap',
                color: '#c4c7cf',
              }}
            >
              {partners.map((partner) => (
                <Box
                  key={partner.name}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {partner.icon}

                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#c4c7cf',
                    }}
                  >
                    {partner.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
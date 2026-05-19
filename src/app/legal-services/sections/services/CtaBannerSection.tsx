'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

interface CtaBannerSectionProps {
  data: {
    title: string;
    description?: string;
    buttonText?: string;
    backgroundImage?: string;
  };
}

export default function CtaBannerSection({
  data,
}: CtaBannerSectionProps) {
  const backgroundImage =
    data.backgroundImage || '/images/legal/cta-banner.jpg';

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 2, md: 3 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '4px',
            minHeight: { xs: 300, md: 230 },
            px: { xs: 3, sm: 4, md: 8 },
            py: { xs: 5, md: 5.5 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundImage: `
              linear-gradient(
                rgba(7, 18, 40, 0.72),
                rgba(7, 18, 40, 0.72)
              ),
              url(${backgroundImage})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '2rem',
                sm: '2.4rem',
                md: '3.25rem',
              },
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              maxWidth: 760,
              mx: 'auto',
              mb: data.description ? 2 : 4,
            }}
          >
            {data.title}
          </Typography>

          {data.description && (
            <Typography
              sx={{
                fontSize: {
                  xs: '0.82rem',
                  md: '0.98rem',
                },
                fontWeight: 400,
                lineHeight: 1.9,
                color: 'rgba(255, 255, 255, 0.92)',
                maxWidth: 720,
                mx: 'auto',
                mb: 4,
              }}
            >
              {data.description}
            </Typography>
          )}

          <Button
            component={Link}
            href="/legal-services/contact"
            variant="contained"
            sx={{
              backgroundColor: '#ffffff',
              color: '#111827',
              borderRadius: '2px',
              px: 5,
              py: 1.35,
              minWidth: 180,
              textTransform: 'none',
              fontSize: '0.82rem',
              fontWeight: 600,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#f3f4f6',
                boxShadow: 'none',
              },
            }}
          >
            {data.buttonText || 'Contact Now'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
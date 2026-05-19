'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

interface HeroSectionProps {
  data: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export default function HeroSection({
  data,
}: HeroSectionProps) {
  const highlightedTitle = data.title.replace(
    /(Divorce Lawyer|Property Lawyer|Immigration Lawyers?)/,
    '<span style="color:#d89a00;">$1</span>'
  );

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 5, md: 6 },
        pb: { xs: 4, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: '#000000',
            minHeight: { xs: 380, md: 500 },
            px: { xs: 3, sm: 5, md: 10 },
            py: { xs: 6, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            component="h1"
            dangerouslySetInnerHTML={{ __html: highlightedTitle }}
            sx={{
              fontSize: {
                xs: '2.1rem',
                sm: '2.8rem',
                md: '4.2rem',
              },
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              maxWidth: 760,
              mx: 'auto',
              mb: 3,
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: '0.82rem',
                md: '1rem',
              },
              fontWeight: 400,
              lineHeight: 2,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: 690,
              mx: 'auto',
              mb: 3.5,
            }}
          >
            {data.description}
          </Typography>

          <Box
            sx={{
              width: { xs: 220, md: 470 },
              height: '1px',
              backgroundColor: '#8f6914',
              mx: 'auto',
              mb: 3.5,
            }}
          />

          <Button
            component={Link}
            href="/legal-services/contact"
            variant="contained"
            sx={{
              backgroundColor: '#d89a00',
              color: '#ffffff',
              borderRadius: 0,
              px: 5,
              py: 1.35,
              minWidth: 265,
              textTransform: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.01em',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#c28a00',
                boxShadow: 'none',
              },
            }}
          >
            {data.buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
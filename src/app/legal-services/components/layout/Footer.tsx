'use client';

import Link from 'next/link';
import {
  Box,
  Container,
  IconButton,
  Typography,
} from '@mui/material';
import XIcon from '@mui/icons-material/X';
import PublicIcon from '@mui/icons-material/Public';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: '1.25fr 1.2fr 1fr 1fr',
            },
            gap: { xs: 5, md: 7 },
            mb: 6,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '1.9rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                color: '#ffffff',
                fontFamily: 'Georgia, "Times New Roman", serif',
                mb: 3,
              }}
            >
              LEX LITIGATION
            </Typography>

            <Typography
              sx={{
                fontSize: '0.8rem',
                lineHeight: 2,
                color: 'rgba(255,255,255,0.65)',
                maxWidth: 260,
              }}
            >
              Institutional excellence in legal representation. We provide
              strategic counsel and rigorous advocacy across multiple
              jurisdictions to ensure your rights are protected.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#ffffff',
                mb: 3,
              }}
            >
              Office Locations
            </Typography>

            <Typography
              sx={{
                fontSize: '0.78rem',
                lineHeight: 2,
                color: 'rgba(255,255,255,0.65)',
                mb: 2.5,
              }}
            >
              New Delhi: 124, Lawyers Chamber, Supreme Court Complex.
            </Typography>

            <Typography
              sx={{
                fontSize: '0.78rem',
                lineHeight: 2,
                color: 'rgba(255,255,255,0.65)',
                mb: 2.5,
              }}
            >
              Mumbai: Neriman Point, Executive Enclave, 400021.
            </Typography>

            <Typography
              sx={{
                fontSize: '0.78rem',
                lineHeight: 2,
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              Bengaluru: Lavelle Road, High Court Precincts, 560001.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#ffffff',
                mb: 3,
              }}
            >
              Services
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.8,
              }}
            >
              {[
                'Divorce Lawyer',
                'Property Lawyer',
                'Immigration Lawyer',
              ].map((item) => (
                <Link
                  key={item}
                  href="/legal-services"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '0.78rem',
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#ffffff',
                mb: 3,
              }}
            >
              Legal
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.8,
              }}
            >
              {[
                'Legal Disclaimer',
                'Privacy Policy',
                'Office Locations',
                'Practice Areas',
              ].map((item) => (
                <Link
                  key={item}
                  href="/legal-services"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '0.78rem',
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            pt: 3,
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'space-between',
            alignItems: {
              xs: 'flex-start',
              md: 'center',
            },
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: '0.62rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            © 2026 Lex Litigation LLP. All Rights Reserved. Attorney
            Advertising.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <IconButton
              size="small"
              sx={{
                color: 'rgba(255,255,255,0.55)',
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              <XIcon sx={{ fontSize: 14 }} />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                color: 'rgba(255,255,255,0.55)',
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              <PublicIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
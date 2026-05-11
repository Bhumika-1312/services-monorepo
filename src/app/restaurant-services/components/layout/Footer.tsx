'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';

const navigationLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Accessibility', href: '#' },
  { label: 'Careers', href: '#' },
];

export default function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#fff',
        borderTop: '1px solid #e7e2de',
        pt: { xs: 8, md: 10 },
        pb: 5,
      }}
    >
      <Container maxWidth="xl">
        {/* Top Footer Columns */}
        <Grid container spacing={6}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#222',
                mb: 2,
              }}
            >
              BistroReserve
            </Typography>

            <Typography
              sx={{
                color: '#7b7b7b',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                maxWidth: 220,
              }}
            >
              Making high-end dining accessible and effortless for everyone.
            </Typography>
          </Grid>

          {/* Navigation Column */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              sx={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#222',
                mb: 2,
              }}
            >
              Navigation
            </Typography>

            {navigationLinks.map((link) => (
              <Box key={link.label} sx={{ mb: 1 }}>
                <Link
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: '#7b7b7b',
                    fontSize: '0.9rem',
                  }}
                >
                  {link.label}
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Legal Column */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              sx={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#222',
                mb: 2,
              }}
            >
              Legal
            </Typography>

            {legalLinks.map((link) => (
              <Box key={link.label} sx={{ mb: 1 }}>
                <Link
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: '#7b7b7b',
                    fontSize: '0.9rem',
                  }}
                >
                  {link.label}
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Newsletter Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#222',
                mb: 2,
              }}
            >
              Newsletter
            </Typography>

            <Typography
              sx={{
                color: '#7b7b7b',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                mb: 2,
                maxWidth: 320,
              }}
            >
              Subscribe for early access to new restaurant openings.
            </Typography>

            {/* Newsletter Input */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                maxWidth: 360,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  height: 38,
                  border: '1px solid #e0dbd7',
                  borderRadius: '4px',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  px: 1.5,
                }}
              >
                <InputBase
                  placeholder="Email address"
                  sx={{
                    width: '100%',
                    fontSize: '0.9rem',
                    color: '#222',
                  }}
                />
              </Box>

              <Button
                variant="contained"
                sx={{
                  minWidth: 34,
                  width: 34,
                  height: 34,
                  borderRadius: '6px',
                  backgroundColor: '#b45a0a',
                  boxShadow: 'none',
                  p: 0,
                  '&:hover': {
                    backgroundColor: '#9a4b08',
                    boxShadow: 'none',
                  },
                }}
              >
                <SendIcon
                  sx={{
                    fontSize: 16,
                    color: '#ffffff',
                    transform: 'rotate(-45deg)',
                  }}
                />
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid #e7e2de',
          }}
        >
          <Typography
            align="center"
            sx={{
              fontSize: '0.85rem',
              color: '#8a8a8a',
            }}
          >
            © 2026 BistroReserve. Effortless Sophistication in Every Seat.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
'use client';

import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: 64,
            minHeight: '64px !important',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/legal-services"
            style={{
              textDecoration: 'none',
            }}
          >
            <Typography
              sx={{
                fontSize: '2.25rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#1d3557',
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: 1,
              }}
            >
              LEX LITIGATION
            </Typography>
          </Link>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.4,
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4b5563',
                cursor: 'pointer',
              }}
            >
              Services
              <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
            </Box>

            <Link
              href="/legal-services/about"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                sx={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#4b5563',
                }}
              >
                About
              </Typography>
            </Link>

            <Link
              href="/legal-services/contact"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                sx={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#4b5563',
                }}
              >
                Contact Us
              </Typography>
            </Link>

            <Link
              href="/legal-services/contact"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  borderRadius: '999px',
                  px: 4,
                  py: 1.15,
                  minWidth: 260,
                  textTransform: 'uppercase',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#111111',
                    boxShadow: 'none',
                  },
                }}
              >
                Schedule A Consultation
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
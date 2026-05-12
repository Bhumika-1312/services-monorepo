'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

const navItems = [
  { label: 'Services', href: '/ca-services/services' },
  { label: 'About', href: '/ca-services/about' },
  { label: 'Resources', href: '/ca-services/resources' },
  { label: 'Contact', href: '/ca-services/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        color: '#1f2937',
        borderBottom: '1px solid #eef2f7',
        boxShadow: 'none',
        zIndex: 1200,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: '72px',
            px: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/ca-services"
            style={{
              textDecoration: 'none',
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '1.5rem',
                color: '#0f2f5f',
                cursor: 'pointer',
              }}
            >
              FinTrust CA
            </Typography>
          </Link>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Box
                    sx={{
                      color: isActive ? '#0f2f5f' : '#6b7280',
                      fontSize: '0.92rem',
                      fontWeight: isActive ? 600 : 500,
                      paddingBottom: '4px',
                      borderBottom: isActive
                        ? '2px solid #0f2f5f'
                        : '2px solid transparent',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#0f2f5f',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                </Link>
              );
            })}
          </Box>

          <Link
            href="/ca-services/booking"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0f2f5f',
                borderRadius: '6px',
                px: 3,
                py: 1,
                minWidth: '180px',
                textTransform: 'uppercase',
                fontWeight: 600,
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#0b2348',
                  boxShadow: 'none',
                },
              }}
            >
              Book Consultation
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
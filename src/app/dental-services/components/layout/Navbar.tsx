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
  { label: 'Services', href: '/dental-services/services' },
  { label: 'About', href: '/dental-services/about' },
  { label: 'Find a doctor', href: '/dental-services/doctors' },
  { label: 'Contact Us', href: '/dental-services/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        top: 24,
        zIndex: 1200,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: '860px',
            mx: 'auto',
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            px: 3,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link
              href="/dental-services"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: '#1f2937',
                  cursor: 'pointer',
                }}
              >
                SereneDental
              </Typography>
            </Link>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 3,
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
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      sx={{
                        color: isActive ? '#2f3fb2' : '#6b7280',
                        fontSize: '0.68rem',
                        fontWeight: isActive ? 600 : 500,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          color: '#2f3fb2',
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
              href="/dental-services/booking"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#dbe4ff',
                  color: '#2f3fb2',
                  borderRadius: '999px',
                  px: 2,
                  py: 0.45,
                  minWidth: 'auto',
                  textTransform: 'none',
                  fontSize: '0.64rem',
                  fontWeight: 600,
                  lineHeight: 1,
                  '&:hover': {
                    borderColor: '#2f3fb2',
                    backgroundColor: '#f5f7ff',
                  },
                }}
              >
                +251 7263-282
              </Button>
            </Link>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
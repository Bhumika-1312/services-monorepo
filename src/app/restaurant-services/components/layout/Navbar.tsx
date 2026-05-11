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
  { label: 'Home', href: '/restaurant-services' },
  { label: 'About', href: '/restaurant-services/about' },
  { label: 'Services', href: '/restaurant-services/services' },
  { label: 'Contact', href: '/restaurant-services/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        color: '#222',
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
            href="/restaurant-services"
            style={{
              textDecoration: 'none',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#c45a06',
                fontSize: '1.6rem',
                lineHeight: 1,
                cursor: 'pointer',
              }}
            >
              BistroReserve
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
                (item.href !== '/restaurant-services' &&
                  pathname.startsWith(item.href));

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
                      color: isActive ? '#c45a06' : '#555',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.95rem',
                      paddingBottom: '4px',
                      borderBottom: isActive
                        ? '2px solid #c45a06'
                        : '2px solid transparent',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#c45a06',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                </Link>
              );
            })}
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#b35400',
              borderRadius: '999px',
              px: 3,
              py: 1,
              minWidth: '120px',
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#8f4300',
                boxShadow: 'none',
              },
            }}
          >
            Book Now
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
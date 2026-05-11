'use client';

import Link from 'next/link';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        color: '#222',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#c45a06',
              fontSize: '1.6rem',
            }}
          >
            BistroReserve
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  textDecoration: 'none',
                  color: index === 0 ? '#c45a06' : '#555',
                  fontWeight: index === 0 ? 600 : 500,
                  fontSize: '0.95rem',
                  borderBottom: index === 0 ? '2px solid #c45a06' : 'none',
                  paddingBottom: '4px',
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#b35400',
              borderRadius: '999px',
              px: 3,
              py: 1,
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
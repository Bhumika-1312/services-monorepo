'use client';

import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const cuisines = [
  { title: 'Japanese', icon: <LanguageOutlinedIcon sx={{ fontSize: 20 }} /> },
  { title: 'Italian', icon: <DinnerDiningOutlinedIcon sx={{ fontSize: 20 }} /> },
  { title: 'French', icon: <AccountBalanceOutlinedIcon sx={{ fontSize: 20 }} /> },
  { title: 'Modern American', icon: <LocalPizzaOutlinedIcon sx={{ fontSize: 20 }} /> },
  { title: 'Indian', icon: <HubOutlinedIcon sx={{ fontSize: 20 }} /> },
  { title: 'Explore More', icon: <MoreHorizOutlinedIcon sx={{ fontSize: 20 }} /> },
];

export default function CuisineSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f6f4f3' }}>
      <Container maxWidth="xl">
        {/* Heading */}
        <Typography
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.6rem' },
            fontWeight: 700,
            color: '#222',
            mb: 1,
          }}
        >
          Browse by Cuisine
        </Typography>

        {/* Subtitle */}
        <Typography
          align="center"
          sx={{
            color: '#7b7b7b',
            fontSize: '0.95rem',
            mb: 6,
          }}
        >
          Find the perfect flavors for your next meal
        </Typography>

        {/* Cards */}
        <Grid container spacing={3}>
          {cuisines.map((item) => (
            <Grid
              key={item.title}
              size={{ xs: 12, sm: 6, md: 2 }}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: '14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #efefef',
                  height: 112,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  },
                }}
              >
                {/* Icon Circle */}
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    backgroundColor: '#f2f0ef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#b45a0a',
                    mb: 1.5,
                  }}
                >
                  {item.icon}
                </Box>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#222',
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
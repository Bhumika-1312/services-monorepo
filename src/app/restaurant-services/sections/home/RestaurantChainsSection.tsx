'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const chains = [
  'CakeZone',
  'Taco Bell',
  'Pizza Hut',
  'Dominos',
  "La'Pinoz",
  'Mc Donalds',
  'Tim Hortons',
];

export default function RestaurantChainsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: '2rem', md: '2.4rem' },
            fontWeight: 700,
            color: '#222',
            mb: 4,
          }}
        >
          Restaurant Chains Near Me
        </Typography>

        {/* Buttons Grid */}
        <Grid container spacing={2}>
          {[...chains, 'Show more'].map((chain, index) => {
            const isShowMore = chain === 'Show more';

            return (
              <Grid
                key={`${chain}-${index}`}
                size={{ xs: 12, sm: 6, md: 3 }}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  endIcon={
                    isShowMore ? (
                      <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                    ) : undefined
                  }
                  sx={{
                    height: 48,
                    borderRadius: '4px',
                    borderColor: '#d8d3cf',
                    color: isShowMore ? '#b45a0a' : '#222',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    backgroundColor: '#ffffff',
                    '&:hover': {
                      borderColor: '#b45a0a',
                      backgroundColor: '#fffaf6',
                    },
                  }}
                >
                  {chain}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
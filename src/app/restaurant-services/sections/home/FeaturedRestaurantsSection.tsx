'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const restaurants = [
  {
    name: "L'Ambroisie",
    location: 'Texas (Austin)',
    cuisine: 'Contemporary French',
    rating: '4.9',
    image: '/images/restaurant/lambroisie.jpg',
  },
  {
    name: 'Terra & Mare',
    location: 'Indianapolis',
    cuisine: 'Sustainable Seafood',
    rating: '4.8',
    image: '/images/restaurant/terra-mare.jpg',
  },
  {
    name: 'Sora Omakase',
    location: 'California',
    cuisine: 'High-End Japanese',
    rating: '4.9',
    image: '/images/restaurant/sora-omakase.jpg',
  },
];

export default function FeaturedRestaurantsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            mb: 5,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: '#222',
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              Featured Restaurants
            </Typography>

            <Typography
              sx={{
                fontSize: '0.95rem',
                color: '#7b7b7b',
              }}
            >
              Hand-picked selections for a memorable evening
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: '#b45a0a',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#b45a0a',
              }}
            >
              View All Restaurants
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>

        <Grid container spacing={3}>
          {restaurants.map((restaurant) => (
            <Grid
              key={restaurant.name}
              size={{ xs: 12, md: 4 }}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  border: '1px solid #ece7e4',
                  boxShadow: 'none',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={restaurant.image}
                    alt={restaurant.name}
                    sx={{
                      height: 256,
                      objectFit: 'cover',
                    }}
                  />

                  <Box
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: '#ffffff',
                      borderRadius: '999px',
                      px: 1,
                      py: 0.35,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.4,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    }}
                  >
                    <StarIcon
                      sx={{
                        fontSize: 14,
                        color: '#b45a0a',
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#222',
                        lineHeight: 1,
                      }}
                    >
                      {restaurant.rating}
                    </Typography>
                  </Box>
                </Box>

                <CardContent
                  sx={{
                    p: 2.5,
                    '&:last-child': {
                      pb: 2.5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.75rem',
                      fontWeight: 500,
                      color: '#222',
                      lineHeight: 1.2,
                      mb: 1.5,
                    }}
                  >
                    {restaurant.name}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      mb: 0.5,
                    }}
                  >
                    <LocationOnOutlinedIcon
                      sx={{
                        fontSize: 15,
                        color: '#b45a0a',
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        color: '#b45a0a',
                        fontWeight: 500,
                      }}
                    >
                      {restaurant.location}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: '#8a8a8a',
                      mb: 3,
                    }}
                  >
                    {restaurant.cuisine}
                  </Typography>

                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      height: 42,
                      borderRadius: '6px',
                      borderColor: '#d7c5b8',
                      color: '#b45a0a',
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      backgroundColor: '#ffffff',
                      '&:hover': {
                        borderColor: '#b45a0a',
                        backgroundColor: '#fffaf6',
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
'use client';

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  InputBase,
  Typography,
} from '@mui/material';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const timeSlots = ['7:00', '7:30', '8:00', '8:15'];

function FilterItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 2,
        py: 1.4,
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          color: '#b45a0a',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          fontSize: '0.9rem',
          color: '#444',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function InputField({
  label,
  placeholder,
  multiline = false,
}: {
  label: string;
  placeholder: string;
  multiline?: boolean;
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '0.78rem',
          fontWeight: 500,
          color: '#444',
          mb: 0.7,
        }}
      >
        {label}
      </Typography>

      <Box
        sx={{
          backgroundColor: '#f7f5f4',
          border: '1px solid #ece7e4',
          borderRadius: '4px',
          px: 1.2,
          py: multiline ? 1 : 0.7,
        }}
      >
        <InputBase
          placeholder={placeholder}
          multiline={multiline}
          rows={multiline ? 4 : undefined}
          fullWidth
          sx={{
            fontSize: '0.82rem',
          }}
        />
      </Box>
    </Box>
  );
}

export default function BookingSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#f6f4f3',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: '#b45a0a',
            mb: 2,
            cursor: 'pointer',
          }}
        >
          <ArrowBackOutlinedIcon sx={{ fontSize: 14 }} />
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 500,
            }}
          >
            View Other Restaurants
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            color: '#222',
            lineHeight: 1.1,
            mb: 4,
          }}
        >
          Find your perfect table
        </Typography>

        <Card
          elevation={0}
          sx={{
            borderRadius: '999px',
            border: '1px solid #ece7e4',
            backgroundColor: '#ffffff',
            p: 1,
            mb: 5,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <FilterItem
              icon={<LocationOnOutlinedIcon sx={{ fontSize: 16 }} />}
              text="Texas"
            />

            <FilterItem
              icon={<CalendarTodayOutlinedIcon sx={{ fontSize: 16 }} />}
              text="Apr 30"
            />

            <FilterItem
              icon={<PeopleOutlinedIcon sx={{ fontSize: 16 }} />}
              text="2 People"
            />

            <Box sx={{ ml: 'auto', p: 0.5 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#b45a0a',
                  borderRadius: '999px',
                  px: 3,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#9a4b08',
                    boxShadow: 'none',
                  },
                }}
              >
                Find a Table
              </Button>
            </Box>
          </Box>
        </Card>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#222',
                }}
              >
                Available Restaurants
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.78rem',
                  color: '#8a8a8a',
                }}
              >
                Sort by: Filters
              </Typography>
            </Box>

            <Card
              elevation={0}
              sx={{
                borderRadius: '8px',
                border: '1px solid #ece7e4',
                backgroundColor: '#ffffff',
                p: 2,
              }}
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    component="img"
                    src="/images/restaurant/restaurant-1.jpg"
                    alt="Restaurant"
                    sx={{
                      width: '100%',
                      height: 208,
                      objectFit: 'cover',
                      borderRadius: '6px',
                      display: 'block',
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 8 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#222',
                      }}
                    >
                      L&apos;Oasis Modern Bistro
                    </Typography>

                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.3,
                        color: '#b45a0a',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                      }}
                    >
                      <StarRoundedIcon sx={{ fontSize: 14 }} />
                      4.9
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: '0.82rem',
                      color: '#666',
                      mb: 2,
                    }}
                  >
                    Contemporary French • Downtown
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.72rem',
                      color: '#8a8a8a',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      mb: 1.5,
                    }}
                  >
                    Available Slots
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {timeSlots.map((slot, index) => (
                      <Box
                        key={slot}
                        sx={{
                          px: 1.4,
                          py: 0.7,
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          backgroundColor:
                            index === 0 ? '#b45a0a' : '#f3f1f0',
                          color:
                            index === 0 ? '#ffffff' : '#444',
                        }}
                      >
                        {slot}
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Button
                      endIcon={
                        <ArrowForwardOutlinedIcon sx={{ fontSize: 14 }} />
                      }
                      sx={{
                        p: 0,
                        minWidth: 'auto',
                        textTransform: 'none',
                        color: '#b45a0a',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                      }}
                    >
                      Explore Other Restaurants
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: '8px',
                border: '1px solid #ece7e4',
                backgroundColor: '#ffffff',
                p: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: '#222',
                  mb: 3,
                }}
              >
                Complete Booking
              </Typography>

              <Box
                sx={{
                  backgroundColor: '#f7f5f4',
                  borderRadius: '6px',
                  border: '1px solid #ece7e4',
                  p: 2,
                  mb: 3,
                }}
              >
                <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
                  L&apos;Oasis Modern Bistro
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#666', mt: 0.5 }}>
                  Friday, Apr 30 • 7:00 PM • 2 People
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <InputField
                  label="Full Name *"
                  placeholder="John Doe"
                />
                <InputField
                  label="Phone Number *"
                  placeholder="+1 (555) 000-0000"
                />
                <InputField
                  label="Email Address *"
                  placeholder="john@example.com"
                />
                <InputField
                  label="Special Requests"
                  placeholder="Allergies, seating preference, etc."
                  multiline
                />
              </Box>

              <Button
                fullWidth
                variant="contained"
                endIcon={<ArrowForwardOutlinedIcon />}
                sx={{
                  mt: 3,
                  py: 1.3,
                  borderRadius: '6px',
                  backgroundColor: '#b45a0a',
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#9a4b08',
                    boxShadow: 'none',
                  },
                }}
              >
                Confirm Reservation
              </Button>

              <Typography
                align="center"
                sx={{
                  mt: 2,
                  fontSize: '0.72rem',
                  color: '#8a8a8a',
                  lineHeight: 1.6,
                }}
              >
                By booking, you agree to our Cancellation Policy.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
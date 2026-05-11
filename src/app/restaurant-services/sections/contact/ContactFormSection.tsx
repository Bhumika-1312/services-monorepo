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

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const contactInfo = [
  {
    icon: <EmailOutlinedIcon sx={{ fontSize: 18 }} />,
    title: 'Email Us',
    lines: [
      'concierge@bistroreserve.com',
      'events@bistroreserve.com',
    ],
  },
  {
    icon: <PhoneOutlinedIcon sx={{ fontSize: 18 }} />,
    title: 'Call Us',
    lines: [
      '+1 (555) 123-4567',
      'Available 10am – 11pm daily',
    ],
  },
  {
    icon: <LocationOnOutlinedIcon sx={{ fontSize: 18 }} />,
    title: 'Visit Us',
    lines: [
      '742 Gourmet Avenue',
      'Gastronomy District, NY 10012',
    ],
  },
];

function Field({
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
          fontSize: '0.85rem',
          fontWeight: 500,
          color: '#222',
          mb: 1,
        }}
      >
        {label}
      </Typography>

      <Box
        sx={{
          border: '1px solid #ece7e4',
          borderRadius: '6px',
          backgroundColor: '#f8f6f5',
          px: 1.5,
          py: multiline ? 1.5 : 1,
        }}
      >
        <InputBase
          placeholder={placeholder}
          multiline={multiline}
          rows={multiline ? 5 : undefined}
          fullWidth
          sx={{
            fontSize: '0.9rem',
            color: '#222',
          }}
        />
      </Box>
    </Box>
  );
}

export default function ContactFormSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#fff9f6',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Contact Form Card */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: '10px',
                border: '1px solid #ece7e4',
                backgroundColor: '#ffffff',
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#222',
                  mb: 4,
                }}
              >
                Send us a message
              </Typography>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Field
                    label="Full Name"
                    placeholder="Julianne Smith"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Field
                    label="Email Address"
                    placeholder="julianne@example.com"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Field
                    label="Subject"
                    placeholder="Private Event Inquiry"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Field
                    label="Message"
                    placeholder="How can we assist you today?"
                    multiline
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 1,
                      px: 3,
                      py: 1.2,
                      borderRadius: '6px',
                      backgroundColor: '#b45a0a',
                      color: '#ffffff',
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: '#9a4b08',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Contact Information Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: '10px',
                border: '1px solid #ece7e4',
                backgroundColor: '#ffffff',
                p: { xs: 3, md: 4 },
              }}
            >
              {contactInfo.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    mb: 4,
                    '&:last-child': {
                      mb: 0,
                    },
                  }}
                >
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: '#f8e6db',
                      color: '#b45a0a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Text */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#222',
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {item.lines.map((line, index) => (
                      <Typography
                        key={index}
                        sx={{
                          fontSize: '0.85rem',
                          color: index === 0 ? '#222' : '#6b7280',
                          lineHeight: 1.7,
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
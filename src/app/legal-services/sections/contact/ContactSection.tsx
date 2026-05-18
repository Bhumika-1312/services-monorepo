'use client';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

const contactInfo = [
  {
    label: 'Email',
    value: 'demo@gmail.com',
  },
  {
    label: 'Tel',
    value: '+251 253 227 928',
  },
];

export default function ContactSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: 20 ,
        pb: 10 ,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '0.9fr 1.1fr',
            },
            columnGap: { xs: 6, lg: 10 },
            rowGap: { xs: 6, lg: 0 },
            alignItems: 'start',
          }}
        >
          <Box sx={{ pt: { lg: 1 } }}>
            <Typography
              sx={{
                fontSize: '0.58rem',
                fontWeight: 500,
                color: '#7c8aa5',
                mb: 1.5,
              }}
            >
              Contact us
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '3rem', md: '4.1rem' },
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#111827',
                mb: 2.5,
              }}
            >
              Contact
            </Typography>

            <Typography
              sx={{
                fontSize: '0.74rem',
                lineHeight: 1.9,
                color: '#6b7280',
                maxWidth: 300,
                mb: { xs: 5, md: 8 },
              }}
            >
              Need it much simpler? Just fill the form besides
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 6,
                flexWrap: 'wrap',
              }}
            >
              {contactInfo.map((item) => (
                <Box key={item.label}>
                  <Typography
                    sx={{
                      fontSize: '0.58rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#6b7280',
                      mb: 0.8,
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.72rem',
                      lineHeight: 1.7,
                      color: '#111827',
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Name *"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  height: 42,
                  fontSize: '0.72rem',
                  backgroundColor: '#ffffff',
                  '& fieldset': {
                    borderColor: '#e5e7eb',
                  },
                },
              }}
            />

            <TextField
              fullWidth
              size="small"
              placeholder="Email *"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  height: 42,
                  fontSize: '0.72rem',
                  backgroundColor: '#ffffff',
                  '& fieldset': {
                    borderColor: '#e5e7eb',
                  },
                },
              }}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Message"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  fontSize: '0.72rem',
                  backgroundColor: '#ffffff',
                  '& fieldset': {
                    borderColor: '#e5e7eb',
                  },
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 0.5,
                height: 42,
                backgroundColor: '#000000',
                color: '#ffffff',
                borderRadius: '2px',
                textTransform: 'none',
                fontSize: '0.72rem',
                fontWeight: 400,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#111111',
                  boxShadow: 'none',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
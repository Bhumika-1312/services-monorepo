'use client';

import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';

export default function ContactSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '0.9fr 1.1fr',
            },
            gap: 6,
            alignItems: 'start',
          }}
        >
          {/* Left Content */}
          <Box>
            <Typography
              sx={{
                fontSize: '0.95rem',
                color: '#6b7280',
                mb: 2,
              }}
            >
              SereneDental
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '2.4rem', md: '4rem' },
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#2440b3',
              }}
            >
              Still have a
              <br />
              question?
            </Typography>
          </Box>

          {/* Form */}
          <Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: '1fr 1fr',
                },
                gap: 2,
                mb: 2,
              }}
            >
              <TextField fullWidth size="small" placeholder="Name *" />
              <TextField fullWidth size="small" placeholder="Email *" />
              <TextField fullWidth size="small" placeholder="Phone *" />
              <TextField
                select
                fullWidth
                size="small"
                defaultValue="Interested in *"
              >
                <MenuItem value="Interested in *">
                  Interested in *
                </MenuItem>
                <MenuItem value="Dental Cleaning">
                  Dental Cleaning
                </MenuItem>
                <MenuItem value="Whitening">
                  Teeth Whitening
                </MenuItem>
              </TextField>
            </Box>

            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Type your message"
              sx={{ mb: 3 }}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2440b3',
                borderRadius: '999px',
                px: 4,
                py: 1.1,
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#1d3493',
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
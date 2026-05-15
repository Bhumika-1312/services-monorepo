'use client';

import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';

export default function ContactFormSection() {
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
            gap: { xs: 6, md: 8 },
            alignItems: 'start',
          }}
        >
          {/* Left Content */}
          <Box sx={{ pt: { md: 3 } }}>
            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#f97316',
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '2.4rem', md: '3.6rem' },
                fontWeight: 500,
                lineHeight: 1.2,
                color: '#2440b3',
                mb: 4,
                maxWidth: 420,
              }}
            >
              Contact our support team to grow your business
            </Typography>

            <Typography
              sx={{
                fontSize: '1rem',
                lineHeight: 2,
                color: '#2440b3',
                maxWidth: 420,
              }}
            >
              We provide professional services to clients in a particular area
              of expertise. We have a team of experts in various fields who can
              offer advice on a project or problem.
            </Typography>
          </Box>

          {/* Right Form */}
          <Box
            component="form"
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
              },
              gap: 2,
            }}
          >
            <TextField
              placeholder="Name *"
              variant="outlined"
              fullWidth
              size="small"
            />

            <TextField
              placeholder="Email *"
              variant="outlined"
              fullWidth
              size="small"
            />

            <TextField
              placeholder="Phone"
              variant="outlined"
              fullWidth
              size="small"
            />

            <TextField
              select
              placeholder="Interested in *"
              variant="outlined"
              fullWidth
              size="small"
              defaultValue=""
            >
              <MenuItem value="">Interested in *</MenuItem>
              <MenuItem value="consultation">Consultation</MenuItem>
              <MenuItem value="teeth-whitening">Teeth Whitening</MenuItem>
              <MenuItem value="implants">Dental Implants</MenuItem>
            </TextField>

            <TextField
              placeholder="Appointment date *"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}
            />

            <TextField
              placeholder="Type your message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}
            />

            <Box
              sx={{
                gridColumn: { xs: 'span 1', sm: 'span 2' },
                mt: 1,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#173f7a',
                  borderRadius: '999px',
                  px: 5,
                  py: 1.2,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#12315f',
                    boxShadow: 'none',
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
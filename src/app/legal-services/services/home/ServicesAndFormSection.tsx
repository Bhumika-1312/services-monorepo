'use client';

import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const caseTypes = [
  'Property',
  'Divorce',
  'Immigration',
  'Corporate Litigation',
  'Civil Litigation',
];

export default function ServicesAndFormSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 8, md: 10 },
        pb: { xs: 10, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1fr 420px',
            },
            gap: { xs: 6, lg: 8 },
            alignItems: 'start',
          }}
        >
          <Box sx={{ pt: { lg: 1 } }}>
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', md: '3.2rem' },
                fontWeight: 700,
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                color: '#111827',
                maxWidth: 620,
                mb: 3,
              }}
            >
              Top Lawyer & Law Firm Services in India Providing Trusted Legal
              Services Across India
            </Typography>

            <Typography
              sx={{
                fontSize: '0.95rem',
                lineHeight: 2,
                color: '#4b5563',
                maxWidth: 500,
              }}
            >
              A strategic approach to litigation, combining academic rigor with
              trial-tested experience to secure your interests across all Indian
              judicial forums.
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 0,
              backgroundColor: '#ffffff',
              border: '1px solid #d8b26a',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.8rem',
                fontWeight: 400,
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: '#111827',
                mb: 1.2,
              }}
            >
              Initial Case Assessment
            </Typography>

            <Typography
              sx={{
                fontSize: '0.72rem',
                lineHeight: 1.8,
                color: '#6b7280',
                mb: 3,
                maxWidth: 320,
              }}
            >
              Submit your details for a confidential preliminary review by our
              senior counsel.
            </Typography>

            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.8,
              }}
            >
              {[
                { label: 'Name' },
                { label: 'Mobile' },
              ].map((field) => (
                <Box key={field.label}>
                  <Typography
                    sx={{
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#111827',
                      mb: 0.8,
                    }}
                  >
                    {field.label}
                  </Typography>

                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                        height: 34,
                        fontSize: '0.78rem',
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#6b7280',
                        },
                      },
                    }}
                  />
                </Box>
              ))}

              <Box>
                <Typography
                  sx={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#111827',
                    mb: 0.8,
                  }}
                >
                  Case Type
                </Typography>

                <TextField
                  select
                  fullWidth
                  size="small"
                  defaultValue="Property"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      height: 34,
                      fontSize: '0.78rem',
                      backgroundColor: '#ffffff',
                      '& fieldset': {
                        borderColor: '#6b7280',
                      },
                    },
                  }}
                >
                  {caseTypes.map((type) => (
                    <MenuItem
                      key={type}
                      value={type}
                    >
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#111827',
                    mb: 0.8,
                  }}
                >
                  Matter Description
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Briefly describe your legal requirement..."
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      fontSize: '0.78rem',
                      backgroundColor: '#ffffff',
                      '& fieldset': {
                        borderColor: '#d1d5db',
                      },
                    },
                  }}
                />
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  backgroundColor: '#0a1b4d',
                  color: '#ffffff',
                  borderRadius: 0,
                  py: 1.35,
                  textTransform: 'uppercase',
                  fontSize: '0.64rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#08143a',
                    boxShadow: 'none',
                  },
                }}
              >
                Start Legal Assessment
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
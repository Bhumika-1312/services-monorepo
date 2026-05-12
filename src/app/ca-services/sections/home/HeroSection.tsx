'use client';

import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

const avatars = [
  '/images/ca/avatar-1.jpg',
  '/images/ca/avatar-2.jpg',
  '/images/ca/avatar-3.jpg',
];

const labelStyle = {
  fontSize: '0.72rem',
  fontWeight: 600,
  color: '#6b7280',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  mb: 1,
};

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f3f7fb',
        pt: { xs: 8, md: 10 },
        pb: { xs: 8, md: 11 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 6, md: 10 }}
          sx={{
            alignItems: 'center',
            minHeight: { md: 560 },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 1.6,
                py: 0.45,
                borderRadius: '999px',
                backgroundColor: '#e6f0ff',
                color: '#3d6fa8',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                mb: 4,
              }}
            >
              Trusted by 5000+ Businesses
            </Typography>

            <Typography
              sx={{
                fontSize:'40px',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#2f3439',
                maxWidth: 620,
                mb: 3,
              }}
            >
              Hire Trusted Chartered
              <br />
              Accountants in Minutes
            </Typography>

            <Typography
              sx={{
                fontSize: '18px',
                lineHeight: 1.85,
                color: '#5f6670',
                maxWidth: 520,
                mb: 5,
              }}
            >
              Get expert financial guidance, tax optimization, and regulatory
              compliance from India&apos;s top-rated CAs without the traditional
              overhead.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.8,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {avatars.map((src, index) => (
                  <Avatar
                    key={index}
                    src={src}
                    sx={{
                      width: 40,
                      height: 40,
                      ml: index === 0 ? 0 : -1.1,
                      border: '2px solid #ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                    }}
                  />
                ))}
              </Box>

              <Typography
                sx={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#374151',
                }}
              >
                Join 200+ Experts
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                width: '100%',
                maxWidth: 500,
                ml: { md: 'auto' },
                p: { xs: 3.5, md: 4 },
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 14px rgba(15, 47, 95, 0.04)',
              }}
            >
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: '#2f3439',
                  mb: 3.5,
                }}
              >
                Get Free Consultation
              </Typography>

              <Typography sx={labelStyle}>Full Name</Typography>
              <Box
                sx={{
                  mb: 2.5,
                  px: 2,
                  py: 1.35,
                  border: '1px solid #d7dde5',
                  borderRadius: '3px',
                  backgroundColor: '#eef3f8',
                }}
              >
                <InputBase
                  fullWidth
                  placeholder="John Doe"
                  sx={{
                    fontSize: '0.95rem',
                    color: '#374151',
                  }}
                />
              </Box>

              <Typography sx={labelStyle}>Service Needed</Typography>
              <Select
                fullWidth
                defaultValue="Income Tax Filing"
                size="small"
                sx={{
                  mb: 2.5,
                  height: 48,
                  backgroundColor: '#eef3f8',
                  borderRadius: '3px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#d7dde5',
                  },
                  '& .MuiSelect-select': {
                    fontSize: '0.95rem',
                    color: '#374151',
                    py: 1.4,
                  },
                }}
              >
                <MenuItem value="Income Tax Filing">
                  Income Tax Filing
                </MenuItem>
                <MenuItem value="GST Compliance">
                  GST Compliance
                </MenuItem>
                <MenuItem value="Company Registration">
                  Company Registration
                </MenuItem>
                <MenuItem value="Statutory Audit">
                  Statutory Audit
                </MenuItem>
              </Select>

              <Typography sx={labelStyle}>Phone Number</Typography>
              <Box
                sx={{
                  mb: 3,
                  px: 2,
                  py: 1.35,
                  border: '1px solid #d7dde5',
                  borderRadius: '3px',
                  backgroundColor: '#eef3f8',
                }}
              >
                <InputBase
                  fullWidth
                  placeholder="+91 00000 00000"
                  sx={{
                    fontSize: '0.95rem',
                    color: '#374151',
                  }}
                />
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 1.45,
                  borderRadius: '3px',
                  backgroundColor: '#16395f',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#0f2f5f',
                    boxShadow: 'none',
                  },
                }}
              >
                Request Callback
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
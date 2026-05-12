'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PublicIcon from '@mui/icons-material/Public';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 6, md: 7 },
        pb: 5,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#183b63',
                mb: 2,
              }}
            >
              FinTrust CA
            </Typography>

            <Typography
              sx={{
                fontSize: '0.9rem',
                lineHeight: 1.9,
                color: '#133B65',
                maxWidth: 260,
              }}
            >
              Institutional trust. Precision. Clarity. Your partner in
              professional accounting excellence.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: '#183b63',
                mb: 2,
              }}
            >
              Services
            </Typography>

            {[
              'Audit & Assurance',
              'Tax Advisory',
              'Corporate Law',
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: '0.9rem',
                  color: '#133B65',
                  mb: 1,
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: '#183b63',
                mb: 2,
              }}
            >
              Legal
            </Typography>

            {[
              'Privacy Policy',
              'Terms of Service',
              'Cookie Policy',
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: '0.9rem',
                  color: '#133B65',
                  mb: 1,
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: '#183b63',
                mb: 2,
              }}
            >
              Connect
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                color: '#4b5563',
              }}
            >
              <AlternateEmailIcon fontSize="small" />
              <PublicIcon fontSize="small" />
              <PhoneOutlinedIcon fontSize="small" />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid #e5e7eb',
          }}
        >
          <Typography
            align="center"
            sx={{
              fontSize: '0.85rem',
              color: '#133B65',
            }}
          >
            © 2024 FinTrust Chartered Accountants. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
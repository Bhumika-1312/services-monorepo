'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const quickLinks = [
  'Privacy Policy',
  'Terms of Service',
  'Patient Portal',
];

const supportLinks = [
  'Emergency Care',
  'Careers',
  'Contact Support',
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #eef2f7',
        pt: { xs: 7, md: 8 },
        pb: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1.3fr 1fr 1fr 1fr',
            },
            gap: { xs: 5, md: 6 },
            pb: 6,
            borderBottom: '1px solid #eef2f7',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 600,
                lineHeight: 1.1,
                color: '#3b3b3b',
                mb: 3,
              }}
            >
              SereneDental
            </Typography>

            <Typography
              sx={{
                fontSize: '0.9rem',
                lineHeight: 1.9,
                color: '#8b8f97',
                maxWidth: 280,
                mb: 3,
              }}
            >
              Clinical Serenity in Every Smile.
              <br />
              Professional care for the modern patient.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                color: '#173f73',
              }}
            >
              <Diversity3OutlinedIcon sx={{ fontSize: 24 }} />
              <HubOutlinedIcon sx={{ fontSize: 24 }} />
              <LanguageOutlinedIcon sx={{ fontSize: 24 }} />
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#3b3b3b',
                mb: 3,
              }}
            >
              Quick Links
            </Typography>

            {quickLinks.map((link) => (
              <Typography
                key={link}
                sx={{
                  fontSize: '0.9rem',
                  color: '#8b8f97',
                  mb: 1.8,
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#2440b3',
                  },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#3b3b3b',
                mb: 3,
              }}
            >
              Support
            </Typography>

            {supportLinks.map((link) => (
              <Typography
                key={link}
                sx={{
                  fontSize: '0.9rem',
                  color: '#8b8f97',
                  mb: 1.8,
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#2440b3',
                  },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#3b3b3b',
                mb: 3,
              }}
            >
              Contact Us
            </Typography>

            <Typography
              sx={{
                fontSize: '0.9rem',
                lineHeight: 2,
                color: '#8b8f97',
                mb: 2,
              }}
            >
              123 Serenity Blvd, Suite 100
              <br />
              Ulwe, Sector 19
            </Typography>

            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#173f73',
              }}
            >
              (555) 123-4567
            </Typography>
          </Box>
        </Box>

        <Box sx={{ pt: 4 }}>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#7f7f7f',
            }}
          >
            © 2026 SereneDental Clinic. Clinical Serenity in Every Smile.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
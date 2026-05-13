// src/app/ca-services/sections/resources/FeaturedInsightsSection.tsx

'use client';

import {
  Box,
  Button,
  Card,
  Container,
  Typography,
} from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function FeaturedInsightsSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f7fafc',
        pb: { xs: 6, md: 7 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '2.15fr 1fr',
            },
            gap: 2,
            alignItems: 'stretch',
          }}
        >
          {/* Featured Article Card */}
          <Card
            elevation={0}
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '300px 1fr',
              },
              border: '1px solid #d8dee6',
              borderRadius: '4px',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              minHeight: 360,
            }}
          >
            {/* Left Image */}
            <Box
              component="img"
              src="/images/ca-services/resources/featured-analysis.jpg"
              alt="Corporate Tax Analysis"
              sx={{
                width: '100%',
                height: '100%',
                minHeight: { xs: 260, md: '100%' },
                objectFit: 'cover',
              }}
            />

            {/* Right Content */}
            <Box
              sx={{
                px: { xs: 3, md: 4 },
                py: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Label */}
              <Typography
                sx={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#4f6fa3',
                  mb: 1.5,
                }}
              >
                Featured Analysis
              </Typography>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: {
                    xs: '2rem',
                    md: '3.05rem',
                  },
                  fontWeight: 500,
                  lineHeight: 1.08,
                  color: '#1f2937',
                  mb: 2.5,
                  maxWidth: 520,
                }}
              >
                The 2024 Corporate
                <br />
                Tax Landscape: A
                <br />
                Global Perspective
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  lineHeight: 1.9,
                  color: '#6b7280',
                  maxWidth: 470,
                  mb: 3,
                }}
              >
                An in-depth review of upcoming regulatory changes and how they
                impact international trade and domestic compliance frameworks.
              </Typography>

              {/* Link */}
              <Typography
                sx={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  cursor: 'pointer',
                  width: 'fit-content',
                }}
              >
                Read Full Insight →
              </Typography>
            </Box>
          </Card>

          {/* Audit Preparedness Card */}
          <Card
            elevation={0}
            sx={{
              backgroundColor: '#183b63',
              color: '#ffffff',
              borderRadius: '4px',
              p: { xs: 4, md: 4.5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: 360,
            }}
          >
            {/* Icon */}
            <SettingsOutlinedIcon
              sx={{
                fontSize: 24,
                mb: 3,
                opacity: 0.95,
              }}
            />

            {/* Title */}
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 500,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Audit Preparedness
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: '0.88rem',
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.78)',
                mb: 4,
              }}
            >
              Download our definitive 45-point checklist to ensure your firm is
              audit-ready for the next fiscal quarter.
            </Typography>

            {/* Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#ffffff',
                color: '#183b63',
                borderRadius: '3px',
                py: 1.2,
                textTransform: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                  boxShadow: 'none',
                },
              }}
            >
              Download Checklist
            </Button>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
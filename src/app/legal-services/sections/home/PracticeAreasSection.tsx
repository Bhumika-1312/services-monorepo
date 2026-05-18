'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';

const practiceAreas = [
  {
    title: 'Divorce Law',
    description:
      'Navigating the complexities of matrimonial disputes with discretion and tactical precision. We specialize in high-asset distribution, custodial litigation, and cross-border settlement frameworks.',
    icon: <GavelIcon sx={{ fontSize: 18, color: '#111827' }} />,
  },
  {
    title: 'Property Law',
    description:
      'Comprehensive asset protection and real estate litigation. From regulatory compliance to complex title disputes, our counsel ensures the absolute integrity of your institutional and private holdings.',
    icon: <BusinessIcon sx={{ fontSize: 18, color: '#111827' }} />,
  },
  {
    title: 'Immigration Law',
    description:
      'Global mobility strategies for high-net-worth individuals and corporate entities. We manage jurisdictional complexities, visa protocols, and permanent residency filings with meticulous oversight.',
    icon: <PublicIcon sx={{ fontSize: 18, color: '#111827' }} />,
  },
];

export default function PracticeAreasSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: '0.55rem',
            fontWeight: 600,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#9ca3af',
            mb: 2,
          }}
        >
          Institutional Weight. Absolute Precision.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '2.2rem', md: '3.75rem' },
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#111827',
            mb: 2.5,
          }}
        >
          Strategic Litigation & Institutional Counsel
        </Typography>

        <Box
          sx={{
            height: '1px',
            backgroundColor: '#e5e7eb',
            mb: 6,
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: '1.75rem', md: '2rem' },
            fontWeight: 600,
            lineHeight: 1.2,
            color: '#111827',
            mb: 4,
          }}
        >
          Core Legal Specializations
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          {practiceAreas.map((area) => (
            <Card
              key={area.title}
              elevation={0}
              sx={{
                p: 3,
                minHeight: 310,
                borderRadius: 0,
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#6b7280',
                },
                '&:hover .view-line': {
                  width: 58,
                  backgroundColor: '#111827',
                },
              }}
            >
              <Box sx={{ mb: 2.5 }}>{area.icon}</Box>

              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: '#111827',
                  mb: 2,
                }}
              >
                {area.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.84rem',
                  lineHeight: 2,
                  color: '#4b5563',
                  flexGrow: 1,
                }}
              >
                {area.description}
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography
                  sx={{
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    color: '#111827',
                    mb: 0.8,
                  }}
                >
                  View
                </Typography>

                <Box
                  className="view-line"
                  sx={{
                    width: 42,
                    height: '1px',
                    backgroundColor: '#6b7280',
                    transition: 'all 0.3s ease',
                  }}
                />
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
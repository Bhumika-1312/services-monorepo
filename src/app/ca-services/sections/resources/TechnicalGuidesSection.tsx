// src/app/ca-services/sections/resources/TechnicalGuidesSection.tsx
'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const guides = [
  {
    category: 'GST Compliance',
    readTime: '5 min read',
    title: 'Understanding ITC Claims in the New Fiscal Regime',
    description:
      'Explore the nuances of Input Tax Credit and how to optimize your monthly filings.',
  },
  {
    category: 'Startups',
    readTime: '8 min read',
    title: 'Structuring Equity: From Seed to Series A',
    description:
      'Best practices for founder vesting and managing your first cap table effectively.',
  },
  {
    category: 'Personal Finance',
    readTime: '4 min read',
    title: 'Maximizing Deductions for High-Net-Worth Individuals',
    description:
      'Strategic charitable giving and investment loss optimization strategies.',
  },
];

const trending = [
  'New Amendment to Section 80C: What It Means for You',
  'Cryptocurrency Taxation 101: Navigating the Grey Area',
  'Top 5 Common Errors in GST Filing for Small Businesses',
];

export default function TechnicalGuidesSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f7fafc',
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '2fr 1fr',
            },
            gap: 3,
          }}
        >
          {/* Left Column */}
          <Box>
            {/* Heading */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 500,
                  color: '#1f2937',
                }}
              >
                Technical Guides
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#183b63',
                  cursor: 'pointer',
                }}
              >
                View All
              </Typography>
            </Box>

            {/* Guide List */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {guides.map((guide) => (
                <Card
                  key={guide.title}
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid #dbe3ec',
                    borderRadius: '4px',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <DescriptionOutlinedIcon
                      sx={{
                        color: '#4f6fa3',
                        fontSize: 26,
                        mt: 0.2,
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#94a3b8',
                          mb: 1,
                        }}
                      >
                        {guide.category} • {guide.readTime}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#1f2937',
                          lineHeight: 1.5,
                          mb: 1,
                        }}
                      >
                        {guide.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.86rem',
                          lineHeight: 1.8,
                          color: '#6b7280',
                        }}
                      >
                        {guide.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Right Sidebar */}
          <Card
            elevation={0}
            sx={{
              p: 4,
              border: '1px solid #dbe3ec',
              borderRadius: '4px',
              backgroundColor: '#ffffff',
              height: 'fit-content',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <TrendingUpOutlinedIcon
                sx={{
                  color: '#183b63',
                  fontSize: 24,
                }}
              />
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                }}
              >
                Trending Now
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
              }}
            >
              {trending.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: '0.85rem',
                    lineHeight: 1.8,
                    color: '#4b5563',
                    borderBottom: '1px solid #eef2f7',
                    pb: 2,
                    '&:last-child': {
                      borderBottom: 'none',
                      pb: 0,
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
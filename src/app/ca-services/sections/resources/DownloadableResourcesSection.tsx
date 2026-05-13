// src/app/ca-services/sections/resources/DownloadableResourcesSection.tsx
'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import ResourcesSidebar from './ResourcesSidebar';

const resources = [
  {
    type: '2.4 MB PDF',
    title: 'Tax Compliance Calendar 2024',
    description:
      'Never miss a deadline with our integrated financial year roadmap.',
    icon: (
      <PictureAsPdfOutlinedIcon
        sx={{ color: '#ef4444', fontSize: 28 }}
      />
    ),
  },
  {
    type: '1.1 MB XLSX',
    title: 'Budget Forecasting Template',
    description:
      'Excel-based model for dynamic multi-year business projections.',
    icon: (
      <TableChartOutlinedIcon
        sx={{ color: '#2563eb', fontSize: 28 }}
      />
    ),
  },
];

export default function DownloadableResourcesSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f7fafc',
        pb: { xs: 8, md: 10 },
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
            alignItems: 'start',
          }}
        >
          {/* Left Column */}
          <Box>
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 500,
                color: '#1f2937',
                mb: 3,
              }}
            >
              Downloadable Resources
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: '1fr 1fr',
                },
                gap: 3,
              }}
            >
              {resources.map((resource) => (
                <Card
                  key={resource.title}
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid #dbe3ec',
                    borderRadius: '4px',
                    backgroundColor: '#ffffff',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      alignItems: 'flex-start',
                    }}
                  >
                    {resource.icon}

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
                        {resource.type}
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
                        {resource.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.86rem',
                          lineHeight: 1.8,
                          color: '#6b7280',
                          mb: 2,
                        }}
                      >
                        {resource.description}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#2563eb',
                          cursor: 'pointer',
                        }}
                      >
                        ↓ Download Now
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Right Sidebar */}
          <ResourcesSidebar />
        </Box>
      </Container>
    </Box>
  );
}
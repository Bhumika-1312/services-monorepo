'use client';

import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

const topCards = [
  {
    title: 'Corporate Litigation',
    description:
      'High-stakes shareholder disputes, mergers & acquisition litigation, and complex insolvency proceedings across national tribunals.',
    icon: (
      <BusinessCenterOutlinedIcon
        sx={{
          fontSize: 18,
          color: '#0a1b4d',
        }}
      />
    ),
  },
  {
    title: 'Criminal Defense',
    description:
      'White-collar crime, regulatory investigations, and complex defense strategies.',
    icon: (
      <GavelOutlinedIcon
        sx={{
          fontSize: 18,
          color: '#0a1b4d',
        }}
      />
    ),
  },
  {
    title: 'Civil Law',
    description:
      'Property disputes and contractual enforcement.',
    icon: (
      <BalanceOutlinedIcon
        sx={{
          fontSize: 18,
          color: '#0a1b4d',
        }}
      />
    ),
  },
];

export default function ExpertiseDomainsSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 7, md: 8 },
        borderBottom: '1px solid #d1d5db',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: '0.55rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: '#7c8aa5',
              mb: 0.6,
            }}
          >
            Expertise Domains
          </Typography>

          <Typography
            sx={{
              fontSize: '0.62rem',
              color: '#9ca3af',
              mb: 1.8,
            }}
          >
            Core Practice Areas
          </Typography>

          <Box
            sx={{
              height: '1px',
              backgroundColor: '#e5e7eb',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
            mb: 2,
          }}
        >
          {topCards.map((card) => (
            <Card
              key={card.title}
              elevation={0}
              sx={{
                p: 2.5,
                minHeight: 110,
                borderRadius: 0,
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
              }}
            >
              <Box sx={{ mb: 1.6 }}>{card.icon}</Box>

              <Typography
                sx={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#111827',
                  mb: 1,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.6rem',
                  lineHeight: 1.9,
                  color: '#4b5563',
                }}
              >
                {card.description}
              </Typography>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '0.72fr 1.25fr 1.05fr',
            },
            gap: 0,
            border: {
              md: '1px solid #d1d5db',
            },
          }}
        >
          <Card
            elevation={0}
            sx={{
              p: 2.5,
              minHeight: 118,
              borderRadius: 0,
              border: {
                xs: '1px solid #d1d5db',
                md: 'none',
              },
              borderRight: {
                md: '1px solid #d1d5db',
              },
              backgroundColor: '#ffffff',
            }}
          >
            <Box sx={{ mb: 1.6 }}>
              <ShieldOutlinedIcon
                sx={{
                  fontSize: 18,
                  color: '#0a1b4d',
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#111827',
                mb: 1,
              }}
            >
              IP Protection
            </Typography>

            <Typography
              sx={{
                fontSize: '0.6rem',
                lineHeight: 1.9,
                color: '#4b5563',
              }}
            >
              Enforcing intellectual property rights in emerging markets.
            </Typography>
          </Card>

          <Box
            sx={{
              minHeight: 118,
              backgroundColor: '#071b4d',
              color: '#ffffff',
              px: 3,
              py: 2.5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderTop: {
                xs: '1px solid #d1d5db',
              },
              borderBottom: {
                xs: '1px solid #d1d5db',
              },
              borderRight: {
                md: '1px solid #d1d5db',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#ffffff',
                mb: 1,
              }}
            >
              Constitutional Matters
            </Typography>

            <Typography
              sx={{
                fontSize: '0.6rem',
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.82)',
                maxWidth: 260,
              }}
            >
              Navigating the complexities of the Supreme Court with seasoned
              appellate lawyers specialized in constitutional interpretation.
            </Typography>
          </Box>

          <Box
            component="img"
            src="/images/legal/legal-desk.jpg"
            alt="Legal Desk"
            sx={{
              width: '100%',
              height: {
                xs: 220,
                md: 118,
              },
              objectFit: 'cover',
              display: 'block',
              border: {
                xs: '1px solid #d1d5db',
                md: 'none',
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
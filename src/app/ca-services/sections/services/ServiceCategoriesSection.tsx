'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const serviceTabs = [
  {
    label: 'Income Tax',
    icon: <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 16 }} />,
    active: true,
  },
  {
    label: 'GST Services',
    icon: <ReceiptLongOutlinedIcon sx={{ fontSize: 16 }} />,
  },
  {
    label: 'Audit & Assurance',
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 16 }} />,
  },
  {
    label: 'Corporate Advisory',
    icon: <BusinessOutlinedIcon sx={{ fontSize: 16 }} />,
  },
  {
    label: 'Company Law',
    icon: <GavelOutlinedIcon sx={{ fontSize: 16 }} />,
  },
];

const services = [
  {
    title: 'Income Tax',
    description:
      'Strategic tax planning and return filing for individuals and corporate entities.',
    badges: ['Salaried Employees', 'HNI Individuals', 'SMEs'],
    content:
      'Our income tax division leverages advanced data mapping to ensure 100% accuracy in filings. We go beyond mere compliance by analyzing your financial footprint to identify legal tax optimization opportunities under current frameworks.',
    features: [
      'Tax Audit Representation',
      'TDS Compliance & Returns',
      'Foreign Asset Disclosure',
      'Advanced Tax Computation',
    ],
  },
  {
    title: 'GST Services',
    description:
      'End-to-end indirect tax management from registration to litigation support.',
    badges: ['E-commerce Operators', 'Exporters', 'Manufacturers'],
    content:
      'GST compliance is a continuous process. Our platform monitors your input tax credits in real-time, matching them with vendor filings to prevent credit loss. We handle everything from monthly returns to annual audits.',
    features: [
      'GSTR 1/3B Filings',
      'LUT Registration & Renewal',
      'GST Refund Processing',
      'Notice Response Management',
    ],
  },
  {
    title: 'Audit & Assurance',
    description:
      'Rigorous examination of financial statements to ensure transparency and trust.',
    badges: ['Listed Companies', 'Non-Profits', 'Banks'],
    content:
      'Our audit methodology is designed to provide high-quality assurance while identifying operational inefficiencies. We utilize automated sampling techniques to ensure a comprehensive review of transactions with statistical significance.',
    features: [
      'Statutory Audits',
      'Internal Control Review',
      'Stock & Asset Verification',
      'Forensic Auditing',
    ],
  },
];

export default function ServiceCategoriesSection() {
  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      {/* Top Navigation Tabs */}
      <Box
        sx={{
          backgroundColor: '#f7fafc',
          borderTop: '1px solid #edf2f7',
          borderBottom: '1px solid #edf2f7',
          py: 3,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 2, md: 4 },
              flexWrap: 'wrap',
            }}
          >
            {serviceTabs.map((tab) => (
              <Box
                key={tab.label}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                  color: tab.active ? '#2563eb' : '#4b5563',
                  fontSize: '0.78rem',
                  fontWeight: tab.active ? 600 : 500,
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Service Detail Sections */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        {services.map((service, index) => (
          <Box key={service.title}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  lg: '0.95fr 1.45fr',
                },
                gap: { xs: 4, md: 8 },
                py: { xs: 4, md: 6 },
              }}
            >
              {/* Left Column */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: 500,
                    color: '#1f2937',
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: '#6b7280',
                    lineHeight: 1.9,
                    maxWidth: 420,
                    mb: 3,
                  }}
                >
                  {service.description}
                </Typography>

                <Link
                  href="/ca-services/booking"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#1d4f91',
                      borderRadius: '2px',
                      px: 2.5,
                      py: 1,
                      textTransform: 'none',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: '#163f75',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    Request Service
                  </Button>
                </Link>
              </Box>

              {/* Right Column */}
              <Box>
                {/* Badges */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    mb: 2.5,
                  }}
                >
                  {service.badges.map((badge) => (
                    <Chip
                      key={badge}
                      label={badge}
                      size="small"
                      sx={{
                        height: 22,
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        backgroundColor: '#f3f4f6',
                        color: '#4b5563',
                        borderRadius: '999px',
                      }}
                    />
                  ))}
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '0.88rem',
                    color: '#4b5563',
                    lineHeight: 1.9,
                    mb: 3,
                  }}
                >
                  {service.content}
                </Typography>

                {/* Feature Grid */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: '1fr 1fr',
                    },
                    gap: 1.2,
                  }}
                >
                  {service.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <CheckCircleOutlineOutlinedIcon
                        sx={{
                          fontSize: 16,
                          color: '#4f46e5',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          color: '#4b5563',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {index < services.length - 1 && (
              <Divider sx={{ borderColor: '#edf2f7' }} />
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
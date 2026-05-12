'use client';

import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const features = [
  {
    title: 'Verified CAs',
    description:
      'Every professional in our network undergoes a rigorous background check and verification of credentials.',
    icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: 'Transparent Pricing',
    description:
      'No hidden fees or unexpected invoices. We provide clear, upfront quotes based on your requirements.',
    icon: <CreditCardOutlinedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: 'Secure Data Handling',
    description:
      'Your sensitive financial documents are protected by AES-256 encryption and strict compliance protocols.',
    icon: <LockOutlinedIcon sx={{ fontSize: 24 }} />,
  },
];

export default function TrustSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 9 }, backgroundColor: '#f3f7fb' }}>
      <Container maxWidth="xl">
        <Typography
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.6rem' },
            fontWeight: 700,
            color: '#183b63',
            mb: 1,
          }}
        >
          Why Trust FinTrust CA?
        </Typography>

        <Box
          sx={{
            width: 50,
            height: 3,
            backgroundColor: '#183b63',
            mx: 'auto',
            mb: 6,
          }}
        />

        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid
              key={feature.title}
              size={{ xs: 12, md: 4 }}
            >
              <Card
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: '0',
                  border: '1px solid #d8dee6',
                  backgroundColor: '#ffffff',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    color: '#183b63',
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#2f3439',
                    mb: 1.5,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    color: '#5f6670',
                  }}
                >
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
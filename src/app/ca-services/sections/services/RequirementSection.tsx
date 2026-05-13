'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import StepProgress from './StepProgress';
import BookingSummaryCard from './BookingSummaryCard';

const urgencyOptions = [
  'Standard (3-5 Business Days)',
  'Priority (24-48 Hours)',
  'Urgent (Same Day)',
];

export default function RequirementSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f3f7fb',
        minHeight: '100vh',
        pt: '110px',
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        {/* Progress Indicator */}
        <StepProgress step={2} />

        <Grid container spacing={4}>
          {/* Left Content */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#183b63',
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Details & Documents
            </Typography>

            <Typography
              sx={{
                fontSize: '0.95rem',
                lineHeight: 1.9,
                color: '#5f6670',
                maxWidth: 760,
                mb: 5,
              }}
            >
              Share your requirements and upload relevant information so our
              experts can prepare an accurate consultation plan.
            </Typography>

            {/* Form Card */}
            <Card
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid #d8dee6',
                borderRadius: '4px',
                backgroundColor: '#ffffff',
              }}
            >
              <Grid container spacing={3}>
                {/* Full Name */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    placeholder="Enter your full name"
                  />
                </Grid>

                {/* Email */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                  />
                </Grid>

                {/* Phone */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    placeholder="+91 98765 43210"
                  />
                </Grid>

                {/* Urgency */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Priority Level"
                    defaultValue={urgencyOptions[0]}
                  >
                    {urgencyOptions.map((option) => (
                      <MenuItem
                        key={option}
                        value={option}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Company Name */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Company Name (Optional)"
                    placeholder="Enter your company or organization name"
                  />
                </Grid>

                {/* Requirements */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Project Requirements"
                    placeholder="Describe your accounting, tax, or compliance needs in detail..."
                  />
                </Grid>
              </Grid>
            </Card>

            {/* Navigation Buttons */}
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/ca-services/booking"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#cbd5e1',
                    color: '#475569',
                    px: 4,
                    py: 1.3,
                    borderRadius: '2px',
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  Back
                </Button>
              </Link>

              <Link
                href="/ca-services/booking/schedule"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#183b63',
                    px: 5,
                    py: 1.3,
                    borderRadius: '2px',
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#0f2f5f',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Continue to Scheduling
                </Button>
              </Link>
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <BookingSummaryCard
              buttonText="Continue to Scheduling"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
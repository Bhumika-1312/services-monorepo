'use client';

import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
} from '@mui/material';

interface BookingSummaryCardProps {
  showButton?: boolean;
  buttonText?: string;
}

export default function BookingSummaryCard({
  showButton = true,
  buttonText = 'Next Details',
}: BookingSummaryCardProps) {
  return (
    <Box>
      {/* Main Summary Card */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: '4px',
          overflow: 'hidden',
          border: '1px solid #dbe3eb',
          mb: 3,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            backgroundColor: '#183b63',
            color: '#ffffff',
            px: 3,
            py: 2.5,
          }}
        >
          <Typography
            sx={{
              fontSize: '1.1rem',
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            Booking Summary
          </Typography>

          <Typography
            sx={{
              fontSize: '0.72rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              opacity: 0.75,
            }}
          >
            Step 2 of 3
          </Typography>
        </Box>

        {/* Service Details */}
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontWeight: 600,
              color: '#2f3439',
              mb: 2,
            }}
          >
            Audit & Assurance
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              rowGap: 1,
              fontSize: '0.9rem',
              color: '#5f6670',
              mb: 3,
            }}
          >
            <Typography sx={{ fontSize: '0.88rem' }}>
              Base Consultation
            </Typography>
            <Typography sx={{ fontSize: '0.88rem' }}>
              ₹12,500.00
            </Typography>

            <Typography sx={{ fontSize: '0.88rem' }}>
              Document Processing
            </Typography>
            <Typography sx={{ fontSize: '0.88rem' }}>
              Included
            </Typography>

            <Typography sx={{ fontSize: '0.88rem' }}>
              Priority Review Fee
            </Typography>
            <Typography sx={{ fontSize: '0.88rem' }}>
              ₹2,400.00
            </Typography>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Total */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#7b8794',
              }}
            >
              Estimated Total
            </Typography>

            <Typography
              sx={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#183b63',
              }}
            >
              ₹14,900.00
            </Typography>
          </Box>

          {/* CTA Button */}
          {showButton && (
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#1f6fbf',
                borderRadius: '3px',
                py: 1.3,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#185da0',
                  boxShadow: 'none',
                },
              }}
            >
              {buttonText}
            </Button>
          )}
        </Box>
      </Paper>

      {/* Security Note */}
      <Paper
        elevation={0}
        sx={{
          border: '1px solid #dbe3eb',
          borderRadius: '4px',
          p: 2.5,
          backgroundColor: '#ffffff',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.82rem',
            lineHeight: 1.7,
            color: '#5f6670',
          }}
        >
          🔒 Your information is encrypted with bank-level security and used
          only for consultation scheduling.
        </Typography>
      </Paper>
    </Box>
  );
}
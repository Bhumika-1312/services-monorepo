// src/app/ca-services/sections/resources/ResourcesSidebar.tsx
'use client';

import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
} from '@mui/material';

export default function ResourcesSidebar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {/* Expert Advice Card */}
      <Card
        elevation={0}
        sx={{
          border: '1px solid #dbe3ec',
          borderRadius: '4px',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
        }}
      >
        <Box
          component="img"
          src="/images/ca-services/resources/expert-advice.jpg"
          alt="Need Expert Advice"
          sx={{
            width: '100%',
            height: 180,
            objectFit: 'cover',
          }}
        />

        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#1f2937',
              mb: 1,
            }}
          >
            Need Expert Advice?
          </Typography>

          <Typography
            sx={{
              fontSize: '0.86rem',
              lineHeight: 1.8,
              color: '#6b7280',
              mb: 3,
            }}
          >
            Our partners specialize in complex corporate litigation and
            strategic tax consulting.
          </Typography>

          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderColor: '#183b63',
              color: '#183b63',
              borderRadius: '4px',
              py: 1,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#0f2f5f',
                backgroundColor: '#f8fbff',
              },
            }}
          >
            Talk to a Partner
          </Button>
        </Box>
      </Card>

      {/* Newsletter Card */}
      <Card
        elevation={0}
        sx={{
          backgroundColor: '#2563eb',
          color: '#ffffff',
          borderRadius: '4px',
          p: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: '1.15rem',
            fontWeight: 600,
            mb: 1.5,
          }}
        >
          Monthly Briefing
        </Typography>

        <Typography
          sx={{
            fontSize: '0.86rem',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.85)',
            mb: 3,
          }}
        >
          The most important financial updates delivered to your inbox every
          first Monday.
        </Typography>

        <TextField
          fullWidth
          placeholder="Email address"
          variant="outlined"
          size="small"
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#ffffff',
              borderRadius: '4px',
            },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#ffffff',
            color: '#2563eb',
            borderRadius: '4px',
            py: 1,
            textTransform: 'none',
            fontWeight: 600,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#f3f4f6',
              boxShadow: 'none',
            },
          }}
        >
          Subscribe
        </Button>
      </Card>
    </Box>
  );
}
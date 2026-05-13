'use client';

import { Box, Typography } from '@mui/material';

interface StepProgressProps {
  step: 1 | 2 | 3;
}

const steps = [
  'Service Selection',
  'Details & Documents',
  'Scheduling',
];

export default function StepProgress({
  step,
}: StepProgressProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 5,
      }}
    >
      {steps.map((label, index) => {
        const current = index + 1;
        const active = current === step;
        const completed = current < step;

        return (
          <Box
            key={label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  backgroundColor:
                    active || completed
                      ? '#183b63'
                      : '#ffffff',
                  border:
                    active || completed
                      ? 'none'
                      : '2px solid #cbd5e1',
                  color:
                    active || completed
                      ? '#ffffff'
                      : '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                {current}
              </Box>

              <Typography
                sx={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color:
                    active
                      ? '#183b63'
                      : '#94a3b8',
                }}
              >
                {label}
              </Typography>
            </Box>

            {current < steps.length && (
              <Box
                sx={{
                  flex: 1,
                  height: 1,
                  backgroundColor: '#dbe3eb',
                  mx: 2,
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
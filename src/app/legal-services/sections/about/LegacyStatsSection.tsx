'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

const stats = [
  {
    value: '15+',
    label: 'Years of Institutional Experience',
  },
  {
    value: '150+',
    label: 'Expert Trial Attorneys',
  },
  {
    value: '12k+',
    label: 'Litigated Case Volume',
  },
];

export default function LegacyStatsSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 7, md: 8 },
        borderBottom: '1px solid #d1d5db',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1.35fr 1fr',
            },
            gap: { xs: 5, lg: 6 },
            alignItems: 'stretch',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '0.55rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#9ca3af',
                mb: 1.5,
              }}
            >
              A Legacy of Institutional Precision
            </Typography>

            <Typography
              sx={{
                fontSize: '0.82rem',
                lineHeight: 2,
                color: '#4b5563',
                maxWidth: 460,
              }}
            >
              Lex Litigation LLP operates at the intersection of complex legal
              strategy and decisive courtroom execution. We provide specialized
              counsel to domestic and international clients navigating the
              intricate Indian legal landscape.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(3, 1fr)',
              },
              gap: 0,
              border: '1px solid #9ca3af',
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={stat.label}
                sx={{
                  px: 3,
                  py: 3,
                  minHeight: 120,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  borderRight:
                    index < stats.length - 1
                      ? {
                          xs: 'none',
                          sm: '1px solid #9ca3af',
                        }
                      : 'none',
                  borderBottom: {
                    xs:
                      index < stats.length - 1
                        ? '1px solid #9ca3af'
                        : 'none',
                    sm: 'none',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    color: '#111827',
                    mb: 1.2,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    lineHeight: 1.8,
                    color: '#6b7280',
                    maxWidth: 90,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
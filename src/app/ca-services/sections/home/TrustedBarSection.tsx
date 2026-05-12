'use client';

import { Box, Container, Grid, Typography } from '@mui/material';

const items = [
  'ICAI Certified',
  'ISO 27001',
  'TRUSTEDPARTNER',
  'FORBES 500',
  '★ 4.9/5 Rating',
];

export default function TrustedBarSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#F1F1F1',
        borderTop: '1px solid #CACACA',
        borderBottom: '1px solid #CACACA',
        py: 2.5,
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          {items.map((item) => (
            <Grid
              key={item}
              size={{ xs: 12, sm: 6, md: 2.4 as any }}
              sx={{ textAlign: 'center' }}
            >
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#9ca3af',
                  letterSpacing: '0.04em',
                }}
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
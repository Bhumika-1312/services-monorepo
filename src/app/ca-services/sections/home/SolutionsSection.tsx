'use client';

import { Box, Button, Container, Typography } from '@mui/material';

const solutions = [
  'Income Tax',
  'GST Compliance',
  'Company Registration',
  'Statutory Audit',
  'Legal Compliance',
];

export default function SolutionsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#f8fbff',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          align="center"
          sx={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#0f2f5f',
            mb: 5,
          }}
        >
          Specialized Solutions
        </Typography>

        {/* Solution Buttons */}
        {/*
          NOTE:
          Your MUI version is causing TypeScript issues with Stack props like
          justifyContent and flexWrap. Using Box with display:flex is fully
          compatible and works exactly the same.
        */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {solutions.map((solution, index) => (
            <Button
              key={solution}
              variant={index === 0 ? 'contained' : 'outlined'}
              sx={{
                textTransform: 'none',
                borderRadius: '6px',
                px: 3,
                py: 1,
                fontWeight: 500,
                backgroundColor:
                  index === 0 ? '#0f2f5f' : 'transparent',
                borderColor: '#d1d5db',
                color:
                  index === 0 ? '#ffffff' : '#6b7280',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor:
                    index === 0 ? '#0b2348' : '#f9fafb',
                  borderColor: '#0f2f5f',
                  boxShadow: 'none',
                },
              }}
            >
              {solution}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
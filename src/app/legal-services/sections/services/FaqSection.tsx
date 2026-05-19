'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface FaqSectionProps {
  questions: string[];
}

export default function FaqSection({
  questions,
}: FaqSectionProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 6, md: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.2,
            color: '#d89a00',
            textAlign: 'center',
            mb: 1.2,
          }}
        >
          FAQ
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: '2rem',
              md: '3.2rem',
            },
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#2f2f2f',
            textAlign: 'center',
            mb: 5,
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            columnGap: 2,
            rowGap: 0,
          }}
        >
          {questions.map((question) => (
            <Box
              key={question}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                py: 1.8,
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: '#111827',
                  pr: 2,
                }}
              >
                {question}
              </Typography>

              <AddIcon
                sx={{
                  fontSize: 18,
                  color: '#6b7280',
                  flexShrink: 0,
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

interface AssessmentSectionProps {
  data: {
    title: string;
    description1: string;
    description2: string;
    buttonText: string;
  };
}

export default function AssessmentSection({
  data,
}: AssessmentSectionProps) {
  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      backgroundColor: '#ffffff',
      fontSize: '0.72rem',
      color: '#111827',
      '& fieldset': {
        borderColor: '#8b93a1',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: '#6b7280',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0a1b4d',
        borderWidth: '1px',
      },
    },
    '& .MuiInputBase-input': {
      px: 1.8,
      py: 1.35,
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#9ca3af',
      opacity: 1,
      fontSize: '0.72rem',
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 6, md: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '350px 1fr',
            },
            gap: { xs: 5, lg: 7 },
            alignItems: 'start',
          }}
        >
          <Box
            sx={{
              border: '1px solid #d7b05a',
              backgroundColor: '#ffffff',
              px: 3,
              py: 2.75,
            }}
          >
            <Typography
              sx={{
                fontSize: '1.15rem',
                fontWeight: 400,
                lineHeight: 1.3,
                color: '#1f2937',
                mb: 1,
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              Initial Case Assessment
            </Typography>

            <Typography
              sx={{
                fontSize: '0.64rem',
                lineHeight: 1.8,
                color: '#6b7280',
                maxWidth: 270,
                mb: 2.4,
              }}
            >
              Submit your details for a confidential preliminary review by our
              senior counsel.
            </Typography>

            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.8,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#111827',
                    mb: 0.7,
                  }}
                >
                  Name
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  sx={textFieldStyles}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#111827',
                    mb: 0.7,
                  }}
                >
                  Mobile
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  sx={textFieldStyles}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#111827',
                    mb: 0.7,
                  }}
                >
                  Matter Description
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Briefly describe your legal requirement..."
                  variant="outlined"
                  sx={{
                    ...textFieldStyles,
                    '& .MuiInputBase-inputMultiline': {
                      px: 1.8,
                      py: 1.35,
                    },
                  }}
                />
              </Box>

              <Button
                component={Link}
                href="/legal-services/contact"
                variant="contained"
                fullWidth
                sx={{
                  mt: 0.4,
                  backgroundColor: '#0a1b4d',
                  color: '#ffffff',
                  borderRadius: 0,
                  py: 1.25,
                  textTransform: 'uppercase',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#08153a',
                    boxShadow: 'none',
                  },
                }}
              >
                {data.buttonText}
              </Button>
            </Box>
          </Box>

          <Box sx={{ pt: { xs: 0, lg: 0.5 } }}>
            <Typography
              sx={{
                fontSize: {
                  xs: '2.1rem',
                  md: '3.45rem',
                },
                fontWeight: 600,
                lineHeight: 1.12,
                letterSpacing: '-0.04em',
                color: '#0f172a',
                maxWidth: 650,
                mb: 3,
              }}
            >
              {data.title}
            </Typography>

            <Typography
              sx={{
                fontSize: '1rem',
                lineHeight: 1.95,
                color: '#6b7280',
                maxWidth: 650,
                mb: 3.2,
              }}
            >
              {data.description1}
            </Typography>

            <Typography
              sx={{
                fontSize: '1rem',
                lineHeight: 1.95,
                color: '#6b7280',
                maxWidth: 650,
              }}
            >
              {data.description2}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
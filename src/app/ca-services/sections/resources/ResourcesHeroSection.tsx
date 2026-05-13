// src/app/ca-services/sections/resources/ResourcesHeroSection.tsx

'use client';

import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

const categories = [
  'All Topics',
  'Tax Planning',
  'GST Updates',
  'Compliance',
  'Startup Funding',
  'Corporate Law',
];

export default function ResourcesHeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#f7fafc',
        pt: '118px', // fixed navbar offset
        pb: { xs: 6, md: 7 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: '920px',
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          {/* Eyebrow */}
          <Typography
            sx={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#4f6fa3',
              mb: 1.25,
            }}
          >
            Knowledge Hub
          </Typography>

          {/* Main Heading */}
          <Typography
            sx={{
              fontSize: {
                xs: '2.4rem',
                sm: '3.4rem',
                md: '4.4rem',
              },
              fontWeight: 600,
              lineHeight: 1.08,
              color: '#2f3439',
              mb: 4,
            }}
          >
            Insights for Financial Success
          </Typography>

          {/* Search Box */}
          <TextField
            fullWidth
            placeholder="Search guides, tax laws, or compliance rules..."
            variant="outlined"
            sx={{
              maxWidth: '720px',
              mx: 'auto',
              mb: 3.5,
              '& .MuiOutlinedInput-root': {
                height: '56px',
                backgroundColor: '#ffffff',
                borderRadius: '4px',
                '& fieldset': {
                  borderColor: '#d8dee6',
                },
                '&:hover fieldset': {
                  borderColor: '#c8d2de',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#183b63',
                },
              },
              '& .MuiOutlinedInput-input': {
                fontSize: '0.9rem',
                color: '#4b5563',
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{
                        fontSize: 20,
                        color: '#9ca3af',
                      }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Category Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? 'contained' : 'outlined'}
                sx={{
                  minWidth: 'auto',
                  height: '36px',
                  px: 2.5,
                  borderRadius: '6px',
                  textTransform: 'none',
                  fontSize: '0.76rem',
                  fontWeight: 500,
                  lineHeight: 1,
                  boxShadow: 'none',

                  backgroundColor:
                    index === 0 ? '#183b63' : '#ffffff',
                  color:
                    index === 0 ? '#ffffff' : '#6b7280',
                  borderColor:
                    index === 0 ? '#183b63' : '#d1d5db',

                  '&:hover': {
                    backgroundColor:
                      index === 0 ? '#0f2f5f' : '#f9fafb',
                    borderColor:
                      index === 0 ? '#0f2f5f' : '#cbd5e1',
                    boxShadow: 'none',
                  },
                }}
              >
                {category}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
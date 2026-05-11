'use client';

import React from 'react';
import {
  Box,
  Button,
  Divider,
  InputBase,
  Paper,
} from '@mui/material';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

interface SearchFieldProps {
  icon: React.ReactNode;
  placeholder: string;
}

function SearchField({ icon, placeholder }: SearchFieldProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        px: 2,
        py: 1,
        minWidth: { xs: '100%', md: 0 },
      }}
    >
      <Box
        sx={{
          color: '#b35400',
          mr: 1.5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {icon}
      </Box>

      <InputBase
        placeholder={placeholder}
        sx={{
          flex: 1,
          fontSize: '0.95rem',
          color: '#444',
        }}
      />
    </Box>
  );
}

export default function SearchBar() {
  return (
    <Paper
      elevation={8}
      sx={{
        mt: 5,
        borderRadius: '16px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '1000px',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          backgroundColor: '#fff',
        }}
      >
        <SearchField
          icon={<LocationOnOutlinedIcon fontSize="small" />}
          placeholder="Location"
        />

        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: 'none', md: 'block' } }}
        />

        <SearchField
          icon={<RestaurantMenuOutlinedIcon fontSize="small" />}
          placeholder="Cuisine or Name"
        />

        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: 'none', md: 'block' } }}
        />

        <SearchField
          icon={<CalendarTodayOutlinedIcon fontSize="small" />}
          placeholder="mm/dd/yyyy"
        />

        <Box
          sx={{
            p: 1.2,
            minWidth: { xs: '100%', md: '230px' },
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              height: '100%',
              minHeight: 56,
              backgroundColor: '#b35400',
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#8f4300',
                boxShadow: 'none',
              },
            }}
          >
            Find a Restaurant
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
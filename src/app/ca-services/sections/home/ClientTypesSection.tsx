'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';

const clientTypes = [
  {
    title: 'Startups',
    description: 'Tax holidays & funding compliance.',
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: 'SMEs',
    description: 'Working capital & GST management.',
    icon: <BusinessCenterOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: 'Freelancers',
    description: 'Income tax & professional invoices.',
    icon: <PersonSearchOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: 'Corporates',
    description: 'Internal audits & structural advisory.',
    icon: <ApartmentOutlinedIcon sx={{ fontSize: 28 }} />,
  },
];

export default function ClientTypesSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#16395f',
        py: { xs: 6, md: 7 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: 'center',
          }}
        >
          {clientTypes.map((item) => (
            <Grid
              key={item.title}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  color: '#ffffff',
                  px: 2,
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  {item.icon}
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    mb: 1,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '0.82rem',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.75)',
                    maxWidth: 220,
                    mx: 'auto',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
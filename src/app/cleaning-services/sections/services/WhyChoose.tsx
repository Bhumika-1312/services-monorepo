"use client";

import { Box, Typography, Grid } from "@mui/material";
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';

const items = [
  {
    icon: <VerifiedUserOutlinedIcon />,
    title: "Vetted Pros",
    desc: "Background checked experts",
  },
  {
    icon: <AccessTimeOutlinedIcon />,
    title: "On-time Guarantee",
    desc: "Punctual & reliable service",
  },
  {
    icon: <EnergySavingsLeafOutlinedIcon />,
    title: "Eco-Friendly",
    desc: "Safe for your home",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    title: "24/7 Support",
    desc: "Always here to help",
  },
];

export default function WhyChoose() {
  return (
    <Box
      sx={{
        py: 12,
        maxWidth: "1100px",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8,
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            mb: 2,
          }}
        >
          Why Homeowners Trust HomePro
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            color: "#6B7280",
            mb: 4,
            maxWidth: "480px",
          }}
        >
          We build our reputation on three pillars: meticulous quality,
          absolute reliability, and transparent communication.
        </Typography>

        <Grid container spacing={3}>
          {items.map((item, i) => (
            <Grid key={i} size={{ xs: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 36,
                    borderRadius: "10px",
                    background: "#EEEEF0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#003D9B",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#6B7280",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        component="img"
        src="/images/cleaning/worker.png"
        sx={{
          width: "100%",
          maxWidth: "420px",
          mx: "auto",
        }}
      />
    </Box>
  );
}
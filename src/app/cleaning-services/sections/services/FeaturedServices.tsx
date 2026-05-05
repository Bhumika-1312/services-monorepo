"use client";

import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function FeaturedServices() {
  const listStyle = {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 1,
    color: "#374151",
    fontSize: "13px",
  };

  return (
    <Box sx={{ py: 8 }}>
      
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          mb: 6,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
            01
          </Typography>

          <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 2 }}>
            Advanced Pressure Washing
          </Typography>

          <Typography sx={{ fontSize: "13px", color: "#6B7280", mb: 3 }}>
            Restore your home’s exterior to its original glory. Our industrial-grade
            equipment removes grime, mold, and algae safely.
          </Typography>

          <Box sx={listStyle}><CheckCircleIcon sx={{ fontSize: 16, color: "#22C55E" }} /> Removes deep dirt & organic growth</Box>
          <Box sx={listStyle}><CheckCircleIcon sx={{ fontSize: 16, color: "#22C55E" }} /> Improves curb appeal & property value</Box>
          <Box sx={listStyle}><CheckCircleIcon sx={{ fontSize: 16, color: "#22C55E" }} /> Prevents long-term surface decay</Box>

          <Button sx={{ mt: 3, background: "#1D4ED8", color: "#fff", textTransform: "none" }}>
            Book Service
          </Button>
        </Box>

        <Box
          component="img"
          src="/images/cleaning/pressure.jpg"
          sx={{
            width: "100%",
            borderRadius: "14px",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/images/cleaning/lawn.jpg"
          sx={{
            width: "100%",
            borderRadius: "14px",
            objectFit: "cover",
          }}
        />

        <Box>
          <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
            02
          </Typography>

          <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 2 }}>
            Precision Lawn Care
          </Typography>

          <Typography sx={{ fontSize: "13px", color: "#6B7280", mb: 3 }}>
            A lush, green lawn is the pride of any home. We provide consistent,
            detail-oriented maintenance so your lawn stays perfect.
          </Typography>

          <Box sx={listStyle}><CheckCircleIcon sx={{ fontSize: 16, color: "#22C55E" }} /> Seasonal mowing for crisp borders</Box>
          <Box sx={listStyle}><CheckCircleIcon sx={{ fontSize: 16, color: "#22C55E" }} /> Scheduled fertilization & weed control</Box>
          <Box sx={listStyle}><CheckCircleIcon sx={{ fontSize: 16, color: "#22C55E" }} /> Eco-friendly practices for a vibrant system</Box>

          <Button sx={{ mt: 3, background: "#1D4ED8", color: "#fff", textTransform: "none" }}>
            Book Service
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
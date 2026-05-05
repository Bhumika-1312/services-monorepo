"use client";

import { Box, Typography } from "@mui/material";

export default function Results() {
  const images = [
    "/images/cleaning/after_before1.png",
    "/images/cleaning/after_before2.png",
  ];

  return (
    <Box sx={{ py: 10, textAlign: "center", backgroundColor: "#F3F3F6" }}>
      <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
        Real Results, Real Homes
      </Typography>

      <Typography
        sx={{
          fontSize: "12px",
          color: "#6B7280",
          mb: 5,
        }}
      >
        See the transformation power of our professional services.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {images.map((src, i) => (
          <Box
            key={i}
            component="img"
            src={src}
            sx={{
              width: "564px", 
              height: "320px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
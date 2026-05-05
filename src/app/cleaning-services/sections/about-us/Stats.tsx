"use client";

import { Box, Container, Grid, Typography } from "@mui/material";

const stats = [
  { value: "15k+", label: "HOMES SERVED" },
  { value: "250+", label: "CERTIFIED PROFESSIONALS" },
  { value: "4.9", label: "AVERAGE RATING" },
];

export default function Stats() {
  return (
     <Box
      sx={{
        background: "#0B3B8F",
        color: "#fff",
        py: 4,
        mb: 4, 
        display: "flex",
        justifyContent: "space-around",
        
      }}
    >
       {stats.map((item) => (
        <Box key={item.label} sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "48px", fontWeight: 700 }}>
            {item.value}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}

"use client";

import { Box, Typography } from "@mui/material";

const values = [
  {
    title: "Integrity",
    desc: "Honest pricing and ethical service practices at every doorstep.",
  },
  {
    title: "Excellence",
    desc: "Exceeding expectations through continuous training and innovation.",
  },
  {
    title: "Community",
    desc: "Building lasting relationships with the homeowners we serve.",
  },
  {
    title: "Sustainability",
    desc: "Using eco-friendly practices to protect your home and the planet.",
  },
];

export default function Values() {
  return (
    <Box sx={{ py: 8, background: "#F5F7FA" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: 700,
          mb: 6,
        }}
      >
        Values That Drive Us
      </Typography>

      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 2,
        }}
      >
        {values.map((v) => (
          <Box
            key={v.title}
            sx={{
              p: 2.8,
              background: "#fff",
              borderRadius: "10px",
              borderLeft: "3px solid #2563EB",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              {v.title}
            </Typography>

            <Typography sx={{ fontSize: "12px", color: "#6B7280", mt: 1 }}>
              {v.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
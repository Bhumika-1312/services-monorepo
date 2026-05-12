"use client";

import { Box, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        About page
      </Typography>
    </Box>
  );
}
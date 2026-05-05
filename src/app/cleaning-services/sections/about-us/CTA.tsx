"use client";

import { Box, Typography, Button } from "@mui/material";

export default function CTA() {
  return (
    <Box
      sx={{
        width: "1100px",
        height: "404px",
        mx: "auto",
        mb: 10,
        borderRadius: "20px",
        background: "linear-gradient(90deg,#0A4FA3 0%, #0B3B8F 100%)",
        color: "#fff",

        // ✅ FIX: proper centering
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 4,
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: 600,
        }}
      >
        Ready to book your service?
      </Typography>

      {/* SUBTEXT */}
      <Typography
        sx={{
          mt: 2,
          fontSize: "14px",
          color: "rgba(255,255,255,0.75)",
          maxWidth: "520px",
          lineHeight: 1.6,
        }}
      >
        Experience the ServiceTrust difference today. Professional home care is
        just a few clicks away.
      </Typography>

      {/* BUTTONS */}
      <Box
        sx={{
          mt: 5,
          display: "flex",
          gap: 3,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: "180px",
            height: "46px",
            borderRadius: "10px",
            borderColor: "rgba(255,255,255,0.7)",
            color: "#fff",
            textTransform: "none",
            "&:hover": {
              borderColor: "#fff",
              background: "transparent",
            },
          }}
        >
          Book Now
        </Button>

        <Button
          variant="contained"
          sx={{
            width: "180px",
            height: "46px",
            borderRadius: "10px",
            background: "#E5E7EB",
            color: "#0B3B8F",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              background: "#E5E7EB",
              boxShadow: "none",
            },
          }}
        >
          Get Quote
        </Button>
      </Box>
    </Box>
  );
}
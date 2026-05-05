"use client";

import { Box, Typography, Avatar } from "@mui/material";

export default function Founder() {
  return (
    <Box
      sx={{
        py: 10,
        px: 6,
        display: "flex",
        justifyContent: "center",
        gap: 6,
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="/images/cleaning/story.png"
        sx={{
          width: "552px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      <Box sx={{ maxWidth: "480px" }}>
        <Typography sx={{ fontSize: "22px", fontWeight: 700 }}>
          The ABC Story
        </Typography>

        <Typography sx={{ mt: 2, fontSize: "13px", color: "#6B7280" }}>
          ABC began with a simple observation: home maintenance shouldn’t be a
          source of stress. Our founder, after years in the construction
          industry, noticed a gap in reliable, high-quality residential
          services.
        </Typography>

        <Typography sx={{ mt: 2, fontSize: "13px", color: "#6B7280" }}>
          What started as a two-person team in a small garage has blossomed into
          a regional leader, driven by the belief that every family deserves a
          safe, clean, and functional home.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column",
    alignItems: "flex-start", mt: 3}}>
          <Avatar
            src="/images/cleaning/founder.png"
            sx={{
              width: 96,
              height: 96,
            }}
          />
          <Box>
            <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
              James Anis
            </Typography>
            <Typography sx={{ fontSize: "11px", color: "#6B7280" }}>
              Founder & CEO
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

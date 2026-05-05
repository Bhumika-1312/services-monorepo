"use client";

import { Box, Typography } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import YardIcon from "@mui/icons-material/Yard";
import WindowIcon from "@mui/icons-material/Window";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const items = [
  { icon: <WaterDropIcon />, title: "Pressure Washing", desc: "Deep clean for driveways, siding, and decks." },
  { icon: <YardIcon />, title: "Lawn Care", desc: "Professional mowing, edging, and fertilization." },
  { icon: <WindowIcon />, title: "Window Cleaning", desc: "Streak-free interior and exterior windows." },
  { icon: <CleaningServicesIcon />, title: "Gutter Cleaning", desc: "Debris removal and downspout flushing." },
];

export default function Specialties() {
  return (
    <Box sx={{ py: 10, textAlign: "center", backgroundColor: "#F3F3F6" }}>
      <Typography sx={{ fontWeight: 600, mb: 4 }}>
        Explore Our Specialties
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
        {items.map((item) => (
          <Box
            key={item.title}
            sx={{
              width: 220,
              p: 3,
              borderRadius: "12px",
              background: "#fff",
              boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
              textAlign: "left",
            }}
          >
            <Box sx={{ color: "#22C55E", mb: 1 }}>{item.icon}</Box>

            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              {item.title}
            </Typography>

            <Typography sx={{ fontSize: "12px", color: "#6B7280", mt: 1 }}>
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
"use client";

import { Box, Typography } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const items = [
  {
    icon: <VerifiedUserOutlinedIcon />,
    title: "Reliability",
    desc: "We show up on time, every time. Your schedule is our priority and we respect your space.",
  },
  {
    icon: <WorkspacePremiumOutlinedIcon />,
    title: "Quality",
    desc: "Our rigorous 50-point inspection ensures that every job is completed to the highest industry standards.",
  },
  {
    icon: <GroupsOutlinedIcon />,
    title: "Community",
    desc: "We are local and proud. Supporting our neighbors through dedicated service and local hiring.",
  },
];

export default function Mission() {
  return (
    <Box sx={{ py: 10, background: "#fff", textAlign: "center" }}>
      <Typography sx={{ fontSize: "26px", fontWeight: 700 }}>
        Our Mission
      </Typography>

      <Typography
        sx={{
          mt: 2,
          color: "#6B7280",
          maxWidth: "700px",
          mx: "auto",
          fontSize: "14px",
        }}
      >
        To provide homeowners with peace of mind through professional,
        transparent, and reliable home care services that prioritize safety and
        satisfaction.
      </Typography>

      <Box
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          mb: 8,
        }}
      >
        {items.map((item) => (
          <Box
            key={item.title}
            sx={{
              width: "280px",
              p: 3,
              borderRadius: "12px",
              background: "#fff",
              boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
              textAlign: "left",
            }}
          >
            <Box sx={{ color: "#2563EB", mb: 1 }}>{item.icon}</Box>

            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              {item.title}
            </Typography>

            <Typography sx={{ fontSize: "13px", color: "#6B7280" }}>
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
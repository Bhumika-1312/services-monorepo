"use client";

import { Box, Typography } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

const items = [
  {
    icon: <VerifiedOutlinedIcon />,
    title: "Verified Professionals",
    desc: "Background checked & vetted experts.",
  },
  {
    icon: <AccessTimeOutlinedIcon />,
    title: "On-time Guarantee",
    desc: "Punctuality is our middle name.",
  },
  {
    icon: <PaymentsOutlinedIcon />,
    title: "Upfront Pricing",
    desc: "No hidden fees, no surprises.",
  },
  {
    icon: <RoomOutlinedIcon />,
    title: "Doorstep Service",
    desc: "Convenient care at your location.",
  },
];

export default function Trust() {
  return (
    <Box sx={{ py: 12, textAlign: "center" }}>
      <Typography sx={{ fontWeight: 700, fontSize: "22px", mb: 6 }}>
        Built on Trust
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => (
          <Box
            key={item.title}
            sx={{
              width: "260px",
              p: 3,
              borderRadius: "12px",
              background: "#fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",

              // 👇 IMPORTANT FOR ALIGNMENT
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* ICON CIRCLE */}
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "#DAE2FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Box sx={{ color: "#2563EB", fontSize: 22 }}>
                {item.icon}
              </Box>
            </Box>

            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
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
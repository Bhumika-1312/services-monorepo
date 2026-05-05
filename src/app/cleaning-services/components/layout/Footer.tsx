"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";

import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const base = "/cleaning-services";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#E5E7EB",
        pt: 4,
        pb: 18,
        mt: 4, 
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <Box sx={{ maxWidth: 320 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              XYZ
            </Typography>

            <Typography sx={{ fontSize: 14, color: "#6B7280", mt: 2 }}>
              Description
            </Typography>

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <IconButton sx={iconStyle}>
                <XIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <IconButton sx={iconStyle}>
                <LinkedInIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <IconButton sx={iconStyle}>
                <InstagramIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 6, md: 12 },
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography sx={heading}>Company</Typography>

              {[
                { label: "Home", href: `${base}` },
                { label: "Services", href: `${base}/services` },
                { label: "Booking", href: `${base}/booking` },
                { label: "Contact us", href: `${base}/contact` },
                { label: "About us", href: `${base}/about` },
                { label: "FAQs", href: `${base}/faq` },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ textDecoration: "none" }}
                >
                  <Typography sx={link}>{item.label}</Typography>
                </Link>
              ))}
            </Box>

            {/* LEGAL */}
            <Box>
              <Typography sx={heading}>Legal</Typography>

              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
              ].map((t) => (
                <Typography key={t} sx={link}>
                  {t}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const heading = {
  fontSize: 15,
  fontWeight: 600,
  mb: 2,
  color: "#111827",
};

const link = {
  fontSize: 14,
  color: "#6B7280",
  mb: 1.2,
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    color: "#111827",
    transform: "translateX(2px)",
  },
};

const iconStyle = {
  width: 36,
  height: 36,
  borderRadius: "8px",
  background: "#374151",
  color: "#fff",
  "&:hover": {
    background: "#111827",
  },
};
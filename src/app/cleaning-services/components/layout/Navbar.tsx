"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
import { usePathname } from "next/navigation";
const base = "/cleaning-services";

const navItems = [
  { label: "Home", href: `${base}` },
  { label: "Services", href: `${base}/services` },
  { label: "Booking", href: `${base}/booking` },
  { label: "About", href: `${base}/about` },
  { label: "Contact", href: `${base}/contact` },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>

          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#2563eb",
                cursor: "pointer",
              }}
            >
              ABC
            </Typography>
          </Link>

          <Stack direction="row" spacing={4}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                  <Box sx={{ position: "relative", cursor: "pointer" }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: isActive ? "#2563eb" : "#6b7280",
                        "&:hover": { color: "#2563eb" },
                      }}
                    >
                      {item.label}
                    </Typography>

                    {isActive && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -6,
                          left: 0,
                          width: "100%",
                          height: "2px",
                          backgroundColor: "#2563eb",
                        }}
                      />
                    )}
                  </Box>
                </Link>
              );
            })}
          </Stack>

          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                px: 2,
                py: 0.8,
                borderRadius: "14px",
                border: "1px solid #e5e7eb",
              }}
            >
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  width: 28,
                  height: 28,
                }}
              >
                <PhoneIcon sx={{ fontSize: 16 }} />
              </IconButton>

              <Typography sx={{ fontSize: 13, color: "#003D9B"}}>
                (555) 123-4567
              </Typography>
            </Stack>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                backgroundColor: "#2563eb",
                "&:hover": { backgroundColor: "#1d4ed8" },
              }}
            >
              Get Quote
            </Button>
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
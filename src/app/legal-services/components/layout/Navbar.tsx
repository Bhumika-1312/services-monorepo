"use client";

import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Navbar() {
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(
    null,
  );

  const handleServicesOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchor(null);
  };

  const services = [
    {
      label: "Divorce Lawyer",
      href: "/legal-services/services/divorce-lawyer",
    },
    {
      label: "Property Lawyer",
      href: "/legal-services/services/property-lawyer",
    },
    {
      label: "Immigration Lawyer",
      href: "/legal-services/services/immigration-lawyer",
    },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: 64,
            minHeight: "64px !important",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/legal-services"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.25rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "#1d3557",
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: 1,
              }}
            >
              LEX LITIGATION
            </Typography>
          </Link>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box>
              <Box
                onClick={handleServicesOpen}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.4,
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#4b5563",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                Services
                <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
              </Box>

              <Menu
                anchorEl={servicesAnchor}
                open={Boolean(servicesAnchor)}
                onClose={handleServicesClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                slotProps={{
                  paper: {
                    elevation: 4,
                    sx: {
                      mt: 1,
                      minWidth: 230,
                      borderRadius: "6px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 12px 32px rgba(15, 23, 42, 0.08)",
                    },
                  },
                }}
              >
                {services.map((service) => (
                  <MenuItem
                    key={service.label}
                    component={Link}
                    href={service.href}
                    onClick={handleServicesClose}
                    sx={{
                      fontSize: "0.74rem",
                      fontWeight: 500,
                      color: "#374151",
                      py: 1.4,
                      px: 2.2,
                    }}
                  >
                    {service.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Link
              href="/legal-services/about"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#4b5563",
                }}
              >
                About
              </Typography>
            </Link>

            <Link
              href="/legal-services/contact"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#4b5563",
                }}
              >
                Contact Us
              </Typography>
            </Link>

            <Link
              href="/legal-services/consultation"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "999px",
                  px: 4,
                  py: 1.15,
                  minWidth: 260,
                  textTransform: "uppercase",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#111111",
                    boxShadow: "none",
                  },
                }}
              >
                Schedule A Consultation
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

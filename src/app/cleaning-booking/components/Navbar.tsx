"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Box,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Services",
      href: "/cleaning-booking/services",
    },
    {
      label: "About us",
      href: "/cleaning-booking/about",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "74px",

        borderBottom: "1px solid #E9E9E9",

        display: "flex",
        justifyContent: "center",

        background: "#fff",

        position: "sticky",
        top: 0,

        zIndex: 100,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: 42,
            height: 26,

            background: "#E8E8E8",

            borderRadius: "3px",

            flexShrink: 0,
          }}
        />

        <Box
          sx={{
            display: "flex",

            gap: {
              xs: 3,
              md: 5,
            },

            alignItems: "center",
          }}
        >
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",

                    color: active
                      ? "#6C00AA"
                      : "#666",

                    fontWeight: active
                      ? 600
                      : 400,

                    cursor: "pointer",

                    position: "relative",

                    ...(active && {
                      "&::after": {
                        content: '""',

                        position: "absolute",

                        left: 0,
                        bottom: 0,

                        width: "100%",
                        height: "2px",

                        background: "#7209B7",

                        borderRadius: "20px",
                      },
                    }),
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            );
          })}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",

              gap: 1,

              ml: {
                md: 2,
              },
            }}
          >
            <LocationOnOutlinedIcon
              sx={{
                fontSize: 16,
                color: "#777",
              }}
            />

            <Typography
              sx={{
                fontSize: "12px",
                color: "#777",
              }}
            >
              Plot No. 5, KHARGHAR...
            </Typography>

            <KeyboardArrowDownIcon
              sx={{
                fontSize: 16,
                color: "#777",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
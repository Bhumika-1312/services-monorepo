"use client";

import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#000",

        pt: {
          xs: "60px",
          md: "80px",
        },

        pb:"110px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",

          mx: "auto",

          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 6,
          },

          display: "flex",

          flexDirection: {
            xs: "column",
            md: "row",
          },

          justifyContent: "space-between",

          gap: {
            xs: 6,
            md: 10,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "320px",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "22px",
              fontWeight: 700,
              mb: 1,
            }}
          >
            XYZ
          </Typography>

          <Typography
            sx={{
              color: "#8A8A8A",
              fontSize: "14px",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            Description
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                width: 34,
                height: 34,

                border: "1px solid #2A2A2A",

                color: "#fff",

                "&:hover": {
                  background: "#111",
                },
              }}
            >
              <XIcon sx={{ fontSize: 16 }} />
            </IconButton>

            <IconButton
              sx={{
                width: 34,
                height: 34,

                border: "1px solid #2A2A2A",

                color: "#fff",

                "&:hover": {
                  background: "#111",
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 16 }} />
            </IconButton>

            <IconButton
              sx={{
                width: 34,
                height: 34,

                border: "1px solid #2A2A2A",

                color: "#fff",

                "&:hover": {
                  background: "#111",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",

            gap: {
              xs: 8,
              md: 14,
            },

            flexWrap: "wrap",
          }}
        >

          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                mb: 2,
              }}
            >
              Company
            </Typography>

            {[
              "Home",
              "Services",
              "Booking",
              "Contact us",
              "About us",
              "FAQs",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#8A8A8A",
                  fontSize: "14px",
                  mb: 1.4,
                  cursor: "pointer",

                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                mb: 2,
              }}
            >
              Legal
            </Typography>

            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#8A8A8A",
                  fontSize: "14px",
                  mb: 1.4,
                  cursor: "pointer",

                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
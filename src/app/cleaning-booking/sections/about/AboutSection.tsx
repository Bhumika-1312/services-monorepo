"use client";

import {
  Box,
  Typography,
} from "@mui/material";

import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

export default function AboutSection() {
  const missionCards = [
    {
      title: "Unwavering Reliability",
      text: "We show up on time, every time.",
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 18 }} />,
    },
    {
      title: "Premium Quality",
      text: "Professional tools. Professional results.",
      icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 18 }} />,
    },
    {
      title: "Local & Trusted",
      text: "Serving your neighborhood with care.",
      icon: <FavoriteOutlinedIcon sx={{ fontSize: 18 }} />,
    },
  ];

  const values = [
    {
      title: "Integrity",
      text:
        "Honest pricing and transparent communication in every interaction.",
      icon: <ShieldOutlinedIcon />,
      top: "#E8F0FF",
      iconColor: "#2563EB",
    },
    {
      title: "Excellence",
      text:
        "Meticulous attention to detail that exceeds professional standards.",
      icon: <AutoAwesomeOutlinedIcon />,
      top: "#D7F5DF",
      iconColor: "#16A34A",
    },
    {
      title: "Community",
      text:
        "Supporting local initiatives and fostering neighborhood growth.",
      icon: <VerifiedOutlinedIcon />,
      top: "#EAF2FF",
      iconColor: "#2563EB",
    },
    {
      title: "Sustainability",
      text:
        "Using eco-friendly products to protect your home and our planet.",
      icon: <PublicOutlinedIcon />,
      top: "#E8F7EA",
      iconColor: "#15803D",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",

        py: "50px",

        position: "relative",
        overflow: "hidden",
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

          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: {
              xs: 5,
              md: 8,
            },

            alignItems: "center",

            mb: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "40px",
                  md: "58px",
                },

                fontWeight: 700,

                color: "#222",

                lineHeight: 1.1,

                mb: 3,

                maxWidth: "520px",
              }}
            >
              Bringing Care Back to Your Doorstep
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  md: "17px",
                },

                lineHeight: 1.9,

                color: "#555",

                maxWidth: "520px",

                mb: 5,
              }}
            >
              From pressure washing to lawn care,
              we bring professional service to every
              doorstep. Our team is dedicated to
              providing the high-quality care your
              space deserves.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,

                color: "#16A34A",
              }}
            >
              <VerifiedOutlinedIcon
                sx={{
                  fontSize: 16,
                }}
              />

              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Certified Professionals
              </Typography>
            </Box>
          </Box>

          <Box
            component="img"
            src="/images/booking/team.jpg"
            alt="Team"

            sx={{
              width: "100%",

              maxWidth: "552px",

              ml: {
                md: "auto",
              },

              height: {
                xs: "320px",
                sm: "420px",
                md: "500px",
              },

              objectFit: "cover",

              borderRadius: "10px",

              display: "block",
            }}
          />
        </Box>

        {/* MISSION */}
        <Box
          sx={{
            background: "#FAFAFA",

            borderRadius: "14px",

            px: {
              xs: 3,
              md: 7,
            },

            py: {
              xs: 5,
              md: 7,
            },

            mb: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",

              fontSize: {
                xs: "32px",
                md: "44px",
              },

              fontWeight: 700,

              color: "#111",

              mb: 3,
            }}
          >
            Our Mission
          </Typography>

          <Typography
            sx={{
              textAlign: "center",

              color: "#666",

              lineHeight: 1.9,

              maxWidth: "760px",

              mx: "auto",

              mb: 6,
            }}
          >
            We're redefining local services by
            combining professional quality with
            local trust — making every area cleaner,
            safer, and better maintained.
          </Typography>

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3,1fr)",
              },

              gap: 3,
            }}
          >
            {missionCards.map((item, index) => (
              <Box
                key={index}
                sx={{
                  background: "#fff",

                  borderRadius: "10px",

                  p: 4,

                  textAlign: "center",

                  border: "1px solid #F0F0F0",
                }}
              >
                <Box
                  sx={{
                    color: "#7209B7",

                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: "22px",

                    fontWeight: 700,

                    color: "#111",

                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",

                    lineHeight: 1.8,

                    color: "#666",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* VALUES */}
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "34px",
                md: "46px",
              },

              fontWeight: 700,

              color: "#111",

              mb: 1.5,
            }}
          >
            Our Values
          </Typography>

          <Typography
            sx={{
              color: "#666",
              mb: 6,
            }}
          >
            The pillars that uphold our commitment to you.
          </Typography>

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(4,1fr)",
              },

              gap: 3,
            }}
          >
            {values.map((item, index) => (
              <Box
                key={index}
                sx={{
                  background: "#fff",

                  borderRadius: "12px",

                  border: "1px solid #EFEFEF",

                  overflow: "hidden",

                  boxShadow:
                    "0 4px 20px rgba(0,0,0,0.03)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "4px",
                    background: item.top,
                  }}
                />

                <Box
                  sx={{
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,

                      borderRadius: "10px",

                      background: item.top,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      color: item.iconColor,

                      mb: 3,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "24px",

                      fontWeight: 700,

                      color: "#111",

                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",

                      lineHeight: 1.9,

                      color: "#666",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
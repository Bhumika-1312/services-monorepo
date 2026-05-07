"use client";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function ServicesSection() {
  const services = [
    {
      title: "Pressure Washing",
      text: "Restore your surfaces to like-new condition with professional jet washing.",
      image: "/images/booking/service-pressure.jpg",
      icon: <WaterDropOutlinedIcon sx={{ fontSize: 16 }} />,
    },

    {
      title: "Lawn Care",
      text: "Precision mowing, edging, and fertilization for a golf-course finish.",
      image: "/images/booking/service-lawn.jpg",
      icon: <GrassOutlinedIcon sx={{ fontSize: 16 }} />,
    },

    {
      title: "Window Cleaning",
      text: "Streak-free cleaning for all window types including hard-to-reach areas.",
      image: "/images/booking/service-window.jpg",
      icon: <WindowOutlinedIcon sx={{ fontSize: 16 }} />,
    },

    {
      title: "Gutter Cleaning",
      text: "Full debris removal and downspout flushing to protect your home's foundation.",
      image: "/images/booking/service-gutter.jpg",
      icon: <RoofingOutlinedIcon sx={{ fontSize: 16 }} />,
    },
  ];

  const features1 = [
    "Driveways & Sidewalks",
    "Siding & Brickwork",
    "Deck & Patio Restoration",
  ];

  const features2 = [
    "Weekly Precision Mowing",
    "Fertilization & Weed Control",
    "Edge Trimming & Cleanup",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",

        py: {
          xs: "70px",
          md: "100px",
        },

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
            textAlign: "center",

            mb: {
              xs: 6,
              md: 8,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "36px",
                md: "52px",
              },

              fontWeight: 800,

              color: "#222",

              lineHeight: 1.1,

              mb: 2,
            }}
          >
            Our Cleaning Services
          </Typography>

          <Typography
            sx={{
              color: "#666",

              fontSize: {
                xs: "14px",
                md: "15px",
              },

              maxWidth: "720px",

              mx: "auto",

              lineHeight: 1.8,
            }}
          >
            Professional exterior cleaning tailored to your home's needs.
            We use high-grade equipment for results that shine.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "repeat(4,1fr)",
            },

            gap: 3,

            mb: {
              xs: 8,
              md: 12,
            },
          }}
        >
          {services.map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",

                borderRadius: "14px",

                overflow: "hidden",

                border: "1px solid #ECECEC",

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}

                sx={{
                  width: "100%",

                  height: {
                    xs: "190px",
                    md: "170px",
                  },

                  objectFit: "cover",

                  display: "block",
                }}
              />

              <Box
                sx={{
                  p: 2.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,

                    mb: 1.5,
                  }}
                >
                  {item.icon}

                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#222",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#666",
                    lineHeight: 1.8,

                    mb: 2.5,
                  }}
                >
                  {item.text}
                </Typography>

                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    p: 0,

                    minWidth: "auto",

                    textTransform: "none",

                    color: "#7209B7",

                    fontWeight: 600,

                    fontSize: "14px",

                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "1fr 1fr",
            },

            gap: {
              xs: 5,
              md: 8,
            },

            alignItems: "center",

            mb: {
              xs: 10,
              md: 14,
            },
          }}
        >
          <Box
            sx={{
              borderRadius: "22px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/images/booking/pressure_washing.jpg"
              alt="Pressure Washing"

              sx={{
                width: "100%",
                height: {
                  xs: "280px",
                  md: "420px",
                },

                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "34px",
                  md: "44px",
                },

                fontWeight: 800,

                color: "#0047B3",

                mb: 3,
              }}
            >
              Powerful Pressure Washing
            </Typography>

            <Typography
              sx={{
                color: "#555",

                lineHeight: 1.9,

                fontSize: "15px",

                mb: 4,

                maxWidth: "560px",
              }}
            >
              Using commercial-grade equipment and eco-friendly solutions,
              we remove years of mold, mildew, and grime from your property's
              exterior surfaces.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {features1.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{
                      fontSize: 18,
                      color: "#777",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#444",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "1fr 1fr",
            },

            gap: {
              xs: 5,
              md: 8,
            },

            alignItems: "center",
          }}
        >
          <Box
            sx={{
              order: {
                xs: 2,
                lg: 1,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "34px",
                  md: "44px",
                },

                fontWeight: 800,

                color: "#0047B3",

                mb: 3,
              }}
            >
              Meticulous Lawn Care
            </Typography>

            <Typography
              sx={{
                color: "#555",

                lineHeight: 1.9,

                fontSize: "15px",

                mb: 4,

                maxWidth: "560px",
              }}
            >
              A beautiful home starts with a perfectly manicured lawn.
              Our experts handle everything from seasonal mowing to health treatments.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {features2.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{
                      fontSize: 18,
                      color: "#777",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#444",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              order: {
                xs: 1,
                lg: 2,
              },

              borderRadius: "22px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/images/booking/lawn_care.jpg"
              alt="Lawn Care"

              sx={{
                width: "100%",

                height: {
                  xs: "280px",
                  md: "420px",
                },

                objectFit: "cover",

                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
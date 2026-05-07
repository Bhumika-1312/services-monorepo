"use client";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function TransformationSection() {
  const points = [
    "98% Satisfaction Rate",
    "Eco-Friendly Cleaning Solutions",
    "Fully Insured & Bonded Team",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",

        py: {
          xs: "70px",
          md: "110px",
        },
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
        }}
      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "1fr 560px",
            },

            gap: {
              xs: 6,
              md: 10,
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
              maxWidth: "480px",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "38px",
                  md: "52px",
                },

                fontWeight: 800,

                color: "#111",

                lineHeight: 1.1,

                mb: 3,
              }}
            >
              See the Transformation
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",

                color: "#666",

                lineHeight: 1.9,

                mb: 5,

                maxWidth: "420px",
              }}
            >
              Our high-impact methods remove years of grime, moss,
              and dirt in just one visit. Real results from real homeowners.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              {points.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#138A36",
                      fontSize: 22,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "15px",

                      fontWeight: 500,

                      color: "#222",
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
              position: "relative",

              width: "100%",

              maxWidth: "560px",

              mx: "auto",
            }}
          >
            <Box
              sx={{
                width: "100%",

                height: {
                  xs: "340px",
                  md: "420px",
                },

                borderRadius: "20px",

                overflow: "hidden",

                position: "relative",

                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                component="img"
                src="/images/booking/before-after.jpg"
                alt="Before After"

                sx={{
                  width: "100%",
                  height: "100%",

                  objectFit: "cover",

                  display: "block",
                }}
              />
            </Box>

            <Typography
              sx={{
                textAlign: "center",

                mt: 2,

                fontSize: "12px",

                fontStyle: "italic",

                color: "#666",
              }}
            >
              Swipe to see the difference on a driveway restoration project.
            </Typography>
          </Box>
        </Box>

        {/* CTA SECTION */}
        <Box
          sx={{
            width: "100%",

            background: "#DDBCF6",

            borderRadius: "34px",

            position: "relative",

            overflow: "hidden",

            py: {
              xs: "60px",
              md: "90px",
            },

            px: {
              xs: 3,
              md: 6,
            },

            textAlign: "center",
          }}
        >
          {/* DIAGONAL SHAPE */}
          <Box
            sx={{
              position: "absolute",

              right: -120,
              top: -40,

              width: "420px",
              height: "420px",

              background: "rgba(255,255,255,0.15)",

              transform: "rotate(45deg)",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "38px",
                  md: "56px",
                },

                fontWeight: 800,

                color: "#111",

                lineHeight: 1.1,

                mb: 3,
              }}
            >
              Book Your Service Today
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",

                color: "#333",

                lineHeight: 1.9,

                maxWidth: "620px",

                mx: "auto",

                mb: 5,
              }}
            >
              Same-day slots available in most locations.
              Don't wait until the weekend to handle your home maintenance.
            </Typography>

            <Button
              sx={{
                background: "#000",

                color: "#fff",

                textTransform: "none",

                borderRadius: "12px",

                px: 5,
                py: 1.6,

                fontSize: "15px",

                fontWeight: 600,

                mb: 4,

                "&:hover": {
                  background: "#111",
                },
              }}
            >
              Get Started
            </Button>

            <Box
              sx={{
                display: "flex",

                justifyContent: "center",

                gap: {
                  xs: 3,
                  md: 5,
                },

                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#222",
                }}
              >
                🔒 Secure Booking
              </Typography>

              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#222",
                }}
              >
                ❄ No Deposit Needed
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
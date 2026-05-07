"use client";

import {
  Box,
  Typography,
} from "@mui/material";

export default function BookingProcessSection() {
  const steps = [
    {
      title: "Choose from the various services",
      text: "Select from our range of professional cleaning services online",
    },

    {
      title: "Add your service location",
      text: "Enter your address to check availability and pricing.",
    },

    {
      title: "Pay easily",
      text: "Add your preferred payment method, then choose among the ride options available in your location.",
    },

    {
      title: "Meet your service provider",
      text: "The service provider to come at your doorstep and will do the work on time.",
      link: true,
    },
  ];

  const images = [
    "/images/booking/step1.jpg",
    "/images/booking/step2.jpg",
    "/images/booking/step3.jpg",
    "/images/booking/step4.jpg",
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
        {/* HEADING */}
        <Typography
          sx={{
            fontSize: {
              xs: "36px",
              md: "58px",
            },

            fontWeight: 800,

            color: "#111",

            lineHeight: 1.05,

            mb: {
              xs: 6,
              md: 8,
            },
          }}
        >
          Book your service easily
        </Typography>

        {/* MAIN SECTION */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "420px 1fr",
            },

            gap: {
              xs: 6,
              md: 14,
            },

            alignItems: "start",
          }}
        >
          {/* LEFT IMAGES */}
          <Box
            sx={{
              width: "100%",

              maxWidth: "373px",

              display: "flex",

              flexDirection: "column",

              gap: "12px",
            }}
          >
            {images.map((img, index) => (
              <Box
                key={index}
                sx={{
                  width: "373px",

                  height: "255px",

                  overflow: "hidden",

                  background: "#E9D4FF",

                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`step-${index + 1}`}

                  sx={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",

                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* RIGHT CONTENT */}
          <Box
            sx={{
              position: "relative",

              minHeight: "1060px",

              display: "flex",

              flexDirection: "column",

              justifyContent: "space-between",

              pl: {
                xs: 6,
                md: 10,
              },

              pt: "8px",
            }}
          >
            {/* TIMELINE */}
            <Box
              sx={{
                position: "absolute",

                left: {
                  xs: 14,
                  md: 18,
                },

                top: 14,

                bottom: 14,

                width: "2px",

                background: "#BDBDBD",
              }}
            />

            {steps.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",

                  minHeight: "220px",

                  display: "flex",

                  flexDirection: "column",

                  justifyContent: "flex-start",
                }}
              >
                {/* DOT */}
                <Box
                  sx={{
                    position: "absolute",

                    left: {
                      xs: -34,
                      md: -42,
                    },

                    top: 12,

                    width: "10px",
                    height: "10px",

                    background: "#222",

                    borderRadius: "2px",

                    zIndex: 2,
                  }}
                />

                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "24px",
                      md: "30px",
                    },

                    fontWeight: 700,

                    color: "#111",

                    lineHeight: 1.25,

                    mb: 2,
                  }}
                >
                  {index + 1}. {item.title}
                </Typography>

                {/* TEXT */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      md: "16px",
                    },

                    color: "#555",

                    lineHeight: 1.9,

                    maxWidth: "520px",
                  }}
                >
                  {item.text}
                </Typography>

                {/* LINK */}
                {item.link && (
                  <Typography
                    sx={{
                      mt: 3,

                      fontSize: "15px",

                      fontWeight: 600,

                      color: "#111",

                      textDecoration: "underline",

                      cursor: "pointer",

                      width: "fit-content",
                    }}
                  >
                    Book now
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
"use client";

import { Box, Container, Typography } from "@mui/material";

export default function ServicesHeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#f8fafc",
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ width: "100%" }}>
        <Box
          sx={{
            position: "relative",
            height: 508,
            overflow: "hidden",
            backgroundColor: "#ffffff",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: {
                xs: "none",
                md: "grid",
              },
              gridTemplateColumns: "56% 44%",
            }}
          >
            <Box
              component="img"
              src="/images/dental-services/services-hero.jpg"
              alt="Services"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box sx={{ backgroundColor: "#ffffff" }} />
          </Box>

          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <Box
              component="img"
              src="/images/dental-services/team-hero.jpg"
              alt="Dental Team"
              sx={{
                width: "100%",
                height: 260,
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "56% 44%",
              },
            }}
          >
            <Box />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                px: { xs: 4, md: 6 },
                py: { xs: 5, md: 6 },
                backgroundColor: {
                  xs: "#ffffff",
                  md: "transparent",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "none",
                  color: "#f97316",
                  mb: 2,
                }}
              >
                Services we provide
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "2.5rem",
                    md: "3.8rem",
                  },
                  fontWeight: 500,
                  lineHeight: 1.08,
                  color: "#2440b3",
                  mb: 3,
                }}
              >
                Our Services
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 2,
                  color: "#4b5563",
                  maxWidth: 360,
                }}
              >
                We provide state-of-the-art dental care in a comfortable and
                helping you achieve optimal healthand esthetics.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

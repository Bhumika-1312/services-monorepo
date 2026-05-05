"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Hero() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>

            <Box
              sx={{
                display: "inline-block",
                px: 2,
                py: 0.8,
                mb: 2,
                borderRadius: "999px",
                background: "#DAE2FF",
                color: "#003D9B",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              Trust Professional Care
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Our Professional <br />
              <span style={{ color: "#003D9B" }}>
                Cleaning Services
              </span>
            </Typography>


            <Typography
              sx={{
                color: "#434654",
                fontSize: "15px",
                mb: 4,
                maxWidth: "480px",
              }}
            >
              Premium home maintenance delivered by certified experts.
We restore your home's brilliance with professional
equipment and eco-friendly practices.
            </Typography>


            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  px: 3,
                  py: 1.2,
                  borderRadius: "8px",
                  fontWeight: 600,
                  backgroundColor: "#003D9B",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#003D9B",
                  },
                }}
              >
                Get Instant Quote
              </Button>

              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  px: 3,
                  py: 1.2,
                  borderRadius: "8px",
                  fontWeight: 500,
                  borderColor: "#C3C6D6",
                  color: "#434654",
                  "&:hover": {
                    borderColor: "#2563eb",
                    color: "#2563eb",
                    backgroundColor: "#f9fafb",
                  },
                }}
              >
                Book Now
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src="/images/cleaning/services-hero.png"
                alt="cleaning"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}